export interface GeonodeUser {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    email: string;
    preferred_username: string;
    groups: [];
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
    weight: number;
    icon: string;
}

export interface GroupProfile {
    'access': string;
    'categories': [];
    'created': string;
    'description': string;
    'description_en': string;
    'detail_url': string;
    'email': string;
    'id': number;
    'last_modified': string;
    'logo': string;
    'logo_url': string;
    'manager_count': number;
    'member_count': number;
    'resource_uri': string;
    'slug': string;
    'title': string;
    'title_en': string;
}
