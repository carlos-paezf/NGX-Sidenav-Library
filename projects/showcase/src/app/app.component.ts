import { Component } from '@angular/core';

import { SIDENAV_ITEMS } from './mock';


@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {
    title = 'showcase';

    public sidenavItems = SIDENAV_ITEMS;
}
