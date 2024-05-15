export type NgxSidenavLinkType = {
    label: string;
    icon?: string;
    routeLink?: string;
    openTab?: boolean;
    children?: NgxSidenavLinkType[];
    requiresAdmin: boolean;
};