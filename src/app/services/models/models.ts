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

export interface Collection {
    'end_date': string;
    'id': number;
    'name': string;
    'resource_uri': string;
    'start_date': string;
}

export interface GeonodeDoc {
    'created': string;
    'doc_url': string;
    'id': number;
    'title': string;
    'owner': any;
}

export interface SignalDoc {
    'category': Category;
    'chart_html': string;
    'collection': number;
    'doc': GeonodeDoc;
    'doc_type': string;
    'id': number;
    'resource_uri': string;
    'title': string;
}
