export interface GeonodeUser {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    email: string;
    preferred_username: string;
    groups: any;
    id: number;
}

export interface Category {
    name: string;
    description: string;
    parent: string;
    resource_uri: string;
    children: Category[];
    id: number;
    parent_id: number;
}
