import { Component, Input } from '@angular/core';

import { NgxSidenavLinkType } from '../../types';
import { slideInOutAnimationTrigger } from '../../animations';


/**
 * Component representing a single item in the side menu.
 * This component is responsible for rendering a menu item based on the provided link data.
 * It supports animations for sliding in and out.
 * @author carlos-paezf
 */
@Component( {
    selector: 'ngx-sidenav-menu-item',
    templateUrl: './ngx-sidenav-menu-item.component.html',
    styleUrls: [ './ngx-sidenav-menu-item.component.css' ],
    animations: [ slideInOutAnimationTrigger ]
} )
export class NgxSidenavMenuItemComponent {
    /**
     * The link object containing information about the menu item.
     */
    @Input() link!: NgxSidenavLinkType;

    /**
     * Indicates whether the user is an admin.
     * This determines the visibility or behavior of certain menu items based on user privileges.
     */
    @Input() isAdminUser!: boolean;
}
