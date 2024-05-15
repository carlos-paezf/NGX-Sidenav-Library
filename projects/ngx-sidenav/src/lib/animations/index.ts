import { animate, state, style, transition, trigger } from "@angular/animations";


/**
 * Defines a slide in-out animation trigger for ngx-sidenav components.
 * This animation trigger animates the height and opacity of an element to slide it in or out.
 */
export const slideInOutAnimationTrigger = trigger(
    'slideInOut',
    [
        state( 'false', style( { height: '0px', opacity: 0, display: 'none' } ) ),
        state( 'true', style( { height: '*', opacity: 1 } ) ),
        transition( 'false <=> true', animate( '300ms ease-in-out' ) )
    ]
);
