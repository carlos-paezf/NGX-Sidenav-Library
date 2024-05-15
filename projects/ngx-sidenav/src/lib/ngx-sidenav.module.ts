import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

import { NgxSidenavMenuItemComponent } from './components/ngx-sidenav-menu-item/ngx-sidenav-menu-item.component';
import { NgxSidenavPanelComponent } from './components/ngx-sidenav-panel/ngx-sidenav-panel.component';


@NgModule( {
    declarations: [
        NgxSidenavPanelComponent,
        NgxSidenavMenuItemComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule
    ],
    exports: [
        NgxSidenavPanelComponent,
    ]
} )
export class NgxSidenavModule { }
