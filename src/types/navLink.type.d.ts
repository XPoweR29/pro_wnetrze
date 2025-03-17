interface NavLink {
    href: string;
    label: string;
    onClick?: ()=>void;
    children?: childrenLink[];
}

type childrenLink = {
    label: string;
    slug: string;
    onClick?: ()=>void;
    children?: childrenLink[];
}