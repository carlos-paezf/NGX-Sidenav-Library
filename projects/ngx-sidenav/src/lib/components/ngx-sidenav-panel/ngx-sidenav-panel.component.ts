import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

import { NgxSidenavLinkType } from '../../types';


/**
 * Represents a side panel component for navigation in ngx-sidenav library.
 * This component provides functionality for managing a side navigation panel, including links and user permissions.
 * @author carlos-paezf
 */
@Component( {
    selector: 'ngx-sidenav-panel',
    templateUrl: './ngx-sidenav-panel.component.html',
    styleUrls: [ './ngx-sidenav-panel.component.css' ]
} )
export class NgxSidenavPanelComponent {
    /**
     * Reference to the MatDrawer component controlling the side panel.
     */
    @Input() drawer!: MatDrawer;

    /**
     * Indicates whether the user is an admin. Defaults to false.
     */
    @Input() isAdminUser: boolean = false;

    /**
     * Array of objects representing the links in the side menu.
     */
    @Input() linksMenu: NgxSidenavLinkType[] = [];
}
