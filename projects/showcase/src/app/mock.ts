import { NgxSidenavLinkType } from "ngx-sidenav";


export const SIDENAV_ITEMS: NgxSidenavLinkType[] = [
    {
        label: 'Inicio',
        icon: 'home',
        routeLink: 'dashboard',
        requiresAdmin: false
    },
    {
        label: 'Cargar archivo con reporte',
        icon: 'upload_file',
        routeLink: 'file-upload',
        requiresAdmin: false
    },
    {
        label: 'Perfiles JPM',
        icon: 'people',
        openTab: false,
        children: [
            {
                label: 'Lista de perfiles',
                routeLink: 'profiles/list-profiles',
                requiresAdmin: false
            },
            {
                label: 'Usuarios por perfil',
                routeLink: 'profiles/users-by-profiles',
                requiresAdmin: false
            },
            {
                label: 'Funciones',
                routeLink: 'profiles/functions',
                requiresAdmin: true
            }
        ],
        requiresAdmin: false
    },
    {
        label: 'Usuarios de la compañía',
        icon: 'contacts',
        routeLink: 'company-users',
        requiresAdmin: false
    },
    {
        label: 'Cuentas',
        icon: 'account_balance_wallet',
        routeLink: 'accounts',
        requiresAdmin: false
    },
    {
        label: 'Productos JPM',
        icon: 'category',
        routeLink: 'products',
        requiresAdmin: false
    },
    {
        label: 'Productos - Cuentas',
        icon: 'account_balance_wallet',
        routeLink: 'products-accounts',
        requiresAdmin: false
    },
    {
        label: 'Títulos de Usuarios',
        icon: 'list',
        routeLink: 'users-entitlements',
        requiresAdmin: false
    },
    {
        label: 'Circularización de Usuarios',
        icon: 'group',
        routeLink: 'circularization',
        requiresAdmin: false
    },
    {
        label: 'Administración de la aplicación',
        icon: 'desktop_windows',
        openTab: false,
        children: [
            {
                label: 'Historial de reportes',
                routeLink: 'admin-app/reports-history',
                requiresAdmin: false,
            },
            {
                label: 'Usuarios de la APP',
                routeLink: 'admin-app/app-users-list',
                requiresAdmin: false
            },
            {
                label: 'Crear Usuario APP',
                routeLink: 'admin-app/create-app-user',
                requiresAdmin: true
            }
        ],
        requiresAdmin: false
    }
];