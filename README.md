# NgxSidenavLibrary

## Creación de la librería

Para iniciar la configuración de la librería, es necesario contar con una aplicación base. En este caso, dado que solo quiero crear el proyecto para diseñar el componente que voy a publicar, puedo utilizar el siguiente comando:

```txt
$: ng new ngx-sidenav-library --style=scss --no-create-application
```

> Como comentan los desarrolladores en la documentación, el prefijo `ngx-` es preferido como una convención usada para denotar que la librería esta adaptada para usarse en Angular, además de que sirve como una excelente indicación a los usuarios del package para diferenciarlo de diferentes frameworks de JavaScript.

El siguiente paso implica generar la librería con el prefijo que utilizarán los selectores en sus nuevos componentes, para lo cual empleamos el siguiente comando:

```txt
$: ng g lib ngx-sidenav --prefix=ngx-sidenav
```

Si más adelante queremos cambiar el prefijo de los selectores, podemos hacer el cambio en el archivo `angular.json` en la siguiente sección:

```json
{
    ...,
    "projects": {
        "ngx-sidenav": {
            "projectType": "library",
            "root": "projects/ngx-sidenav",
            "sourceRoot": "projects/ngx-sidenav/src",
            "prefix": "ngx-sidenav",
            ...
        }
    }
}
```

Nuestro siguiente paso es crear los componentes que conformarán la parte visual de la librería, para lo cual puedo usar el módulo por defecto que se registró con la creación de la librería (el nuevo módulo se va a encontrar en la carpeta `projects/ngx-sidenav/src/lib/`).

Antes de empezar a modelar los componentes, necesito instalar Angular Material para usar sus componentes de botones e iconos, para lo cual hacemos la instalación con:

```txt
$: ng add @angular/material
```

Ya que requiero dicho paquete, lo marco como necesario dentro del archivo `projects/ngx-sidenav/package.json`:

```json
{
    ...,
    "peerDependencies": {
        ...,
        "@angular/cdk": "^16.2.14",
        "@angular/material": "^16.2.14"
    },
    ...
}
```

Otro cambio que vamos a hacer es dentro del archivo `tsconfig.json`, con al intención de cambiar el punto de entrada para re-mapear las importaciones al momento de hacer la prueba en una aplicación local (lo veremos más adelante):

```json
{
    ...,
    "paths": {
        "ngx-sidenav": [
            "projects/ngx-sidenav/src/public-api.ts"
        ]
    },
    ...
}
```

Empezamos con los componentes. Primero creamos el sidenav panel, y luego los items que pertenecen a cada menú, para ello usamos los siguientes comandos:

```txt
$: ng g c components/ngx-sidenav-panel

$: ng g c components/ngx-sidenav-menu-item
```

Cómo se mencionó anteriormente, los selectores de los nuevos componentes se verán de la siguiente manera: `'ngx-sidenav-panel'` y `'ngx-sidenav-menu-item'`. En caso de que deseemos verlos diferente, podemos hacer el cambio dentro del decorador del componente:

```ts
@Component( {
    selector: 'ngx-sidenav-menu-item',
    ...
} )
export class NgxSidenavMenuItemComponent { ... }
```

Por defecto en las versiones anteriores a Angular 17 (en este caso estoy usando la 16), los módulos se encargan de declarar por defecto los componentes que pertenecen a un módulo y que no son standalone, por lo tanto tendremos el decorador del módulo cómo se ve a continuación:

```ts
@NgModule( {
    declarations: [
        NgxSidenavPanelComponent,
        NgxSidenavMenuItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [ ]
} )
export class NgxSidenavModule { }
```

Cómo quiero que el usuario final de la librería solo pueda usar el componente de panel, entonces puedo realizar la exportación dentro del módulo como se muestra a continuación:

```ts
@NgModule( {
    ...,
    exports: [
        NgxSidenavPanelComponent,
    ]
} )
export class NgxSidenavModule { }
```

Antes de seguir con la lógica de los componentes, quiero crear primero el tipado de lo que quiero recibir, en este caso, quiero definir como se verá la estructura de los items del menú, para lo cual tengo el archivo `types/index.ts`:

```ts
export type NgxSidenavLinkType = {
    label: string;
    icon?: string;
    routeLink?: string;
    openTab?: boolean;
    children?: NgxSidenavLinkType[];
    requiresAdmin: boolean;
};
```

Mi librería debe ser capaz de exportar el módulo, componente y tipo que quiero que el usuario pueda implementar en su código, para lo cual modifico el archivo `public-api.ts` y exporto lo necesario:

```ts
export * from './lib/types/index';
export * from './lib/ngx-sidenav.module';
export * from './lib/components/ngx-sidenav-panel/ngx-sidenav-panel.component';
```

También, puedo definir los estilos globales que quiero usar en mi librería y que se deberán llamar en `angular.json` más adelante cuando tenga la librería formalizada. En este caso, puedo usar SCSS para crear los estilos a modo de Assets. En mi caso, cree el archivo `projects/ngx-sidenav/src/assets/scss/ngx-sidenav.scss` donde guarde variables del root y clases que usan mis componentes. Pero no nos detenemos aquí, ya que debemos informarle a nuestra librería que queremos reconocer cualquier elemento dentro de la carpeta `assets` cómo un recurso para nuestro package, para lo cual modificamos el archivo `projects\ngx-sidenav\ng-package.json`:

```json
{
    ...,
    "assets": [
        "src/assets/**"
    ],
    ...
}
```

Cómo vamos a usar algunos componentes de Angular Material, puedo crear un módulo dedicado para su exportación, o directamente importarlos en el módulo del sidenav, además de importar el módulo `RouterModule` para llamar las rutas:

```ts
@NgModule( {
    ...,
    imports: [
        CommonModule,
        RouterModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule
    ],
    ...
} )
export class NgxSidenavModule { }
```

Cada componente espera recibir un dato, para lo cual usamos el decorador `@Input()` cómo se muestra a continuación:

```ts
@Component( {
    selector: 'ngx-sidenav-panel',
    templateUrl: './ngx-sidenav-panel.component.html',
    styleUrls: [ './ngx-sidenav-panel.component.css' ]
} )
export class NgxSidenavPanelComponent {
    @Input() drawer!: MatDrawer;
    @Input() isAdminUser: boolean = false;
    @Input() linksMenu: NgxSidenavLinkType[] = [];
}
```

Podemos permitir que el usuario determiné que tipo de elemento puedo enviar en el logo del sidenav, para lo cual hacemos una proyección desde el template:

```html
<ng-content select="[ngx-sidenav-logo]"></ng-content>
```

Cuando hayamos trabajado con la lógica de los componentes y demás, podemos crear una aplicación dentro del proyecto para realizar una prueba, en este caso la aplicación se llamara `showcase`

```txt
$: ng g app showcase
```

Para aplicar los estilos CSS de la librería dentro de la aplicación, vamos a `angular.json` y añadimos la siguiente línea:

```json
{
    ...,
    "projects": {
        "showcase": {
            ...,
            "architect": {
                "build": {
                    ...,
                    "options": {
                        ...,
                        "styles": [
                            ...,
                            "projects/ngx-sidenav/src/assets/scss/ngx-sidenav.scss"
                        ],
                    }
                }
            }
        }
    }
}
```

Dentro del módulo donde vayamos a usar la librería, hacemos el siguiente llamado:

```ts
import { NgxSidenavModule } from 'ngx-sidenav';

@NgModule( {
    ...,
    imports: [
        ...,
        NgxSidenavModule
    ],
    ... 
} )
export class AppModule { }
```

Luego, podemos crear los items que servirán de menu para el componente, usando el tipado que exportamos de la librería:

```ts
import { NgxSidenavLinkType } from "ngx-sidenav";

export const SIDENAV_ITEMS: NgxSidenavLinkType[] = [
    {
        label: 'Inicio',
        icon: 'home',
        routeLink: 'dashboard',
        requiresAdmin: false
    },
    ...
]
```

En el template del componente podemos llamar el selector del panel, enviarle sus respectivos inputs, y terminar de proyectar el componente del logo, para el cual es importante pasarle la referencia de `ngx-sidenav-logo`:

```html
<mat-drawer-container hasBackdrop="false">
  <mat-drawer #drawer mode="over">
    <ngx-sidenav-panel [drawer]="drawer" [isAdminUser]="true" [linksMenu]="sidenavItems">
      <picture ngx-sidenav-logo>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png"
          alt="Logo de la NASA">
      </picture>
    </ngx-sidenav-panel>
  </mat-drawer>


  <mat-drawer-content>
    <header>
      <button mat-icon-button color="primary" aria-label="Sidenav toggle" (click)="drawer.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
    </header>

    <div class="protected" (click)="drawer.close()">
      <main>
        <h1>Content</h1>
      </main>
    </div>
  </mat-drawer-content>
</mat-drawer-container>
```

Cuando finalmente comprobamos que todo funciona correctamente, podemos pasar a construir el build de producción para la librería con el siguiente comando:

```txt
$: ng build ngx-sidenav
```

Es importante en este punto movernos a la carpeta donde se guarda el build, con la intención de realizar el empaquetado del mismo:

```txt
$: cd dist/ngx-sidenav

$: npm pack
```

Usando el nuevo archivo `.tgz`, podemos realizar la instalación local en otro proyecto que tengamos en nuestro equipo, en este caso, se usa la ruta de acceso al archivo y se ejecuta el siguiente comando (reemplazar por la ubicación del comprimido):

```txt
$: npm i D:\ngx-sidenav-library\dist\ngx-sidenav\ngx-sidenav-0.0.1.tgz
```

Lo que podemos observar en el `package.json` del proyecto en donde instalamos la librería, será lo siguiente:

```json
{
    ...,
    "dependencies": {
        "ngx-sidenav": "file:../ngx-sidenav-library/dist/ngx-sidenav/ngx-sidenav-0.0.1.tgz",
        ...
    }
    ...
}
```

Aquí, debemos volver a inscribir los estilos de la librería dentro del archivo `angular.json` del proyecto, pero llamando desde los `node_modules`:

```json
{
    ...,
    "projects": {
        "project": {
            ...,
            "architect": {
                "build": {
                    ...,
                    "options": {
                        ...,
                        "styles": [
                            ...,
                            "node_modules/ngx-sidenav/src/assets/scss/ngx-sidenav.scss"
                        ],
                    }
                }
            }
        }
    }
}
```

Finalmente, si queremos publicar el paquete en el repositorio de NPM, debemos tener una cuenta y seguir los siguientes comandos (requiere ingresar usuario, contraseña y email):

```txt
$: npm login

$: npm publish
```

Si todo sale bien, recibiremos un correo informado que el paquete fue publicado y está listo para su uso, en cuyo caso solo queda usar el típico comando de instalación:

```txt
$: npm i ngx-sidenav
```
