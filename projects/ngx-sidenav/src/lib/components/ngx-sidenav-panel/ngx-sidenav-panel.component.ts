import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { NgxSidenavLinkType } from '../../types';


@Component( {
    selector: 'ngx-sidenav-panel',
    templateUrl: './ngx-sidenav-panel.component.html',
    styleUrls: [ './ngx-sidenav-panel.component.css' ]
} )
export class NgxSidenavPanelComponent {
    @Input() drawer!: MatDrawer;
    @Input() isAdminUser: boolean = false;
    @Input() linksMenu: NgxSidenavLinkType[] = [];


    toggleDrawer () {
        this.drawer.toggle();
    }
}
