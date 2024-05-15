import { Component, Input } from '@angular/core';

import { NgxSidenavLinkType } from '../../types';


@Component( {
    selector: 'ngx-sidenav-menu-item',
    templateUrl: './ngx-sidenav-menu-item.component.html',
    styleUrls: [ './ngx-sidenav-menu-item.component.css' ]
} )
export class NgxSidenavMenuItemComponent {
    @Input() link!: NgxSidenavLinkType;
    @Input() isAdminUser!: boolean;
}
