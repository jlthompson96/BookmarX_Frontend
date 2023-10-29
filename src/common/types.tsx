export interface BaseObject extends Object {
}

export interface UserTSO extends BaseObject {
    id: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    age: number;
    birthday: Date;
    favoriteBooks: string[];
    fovoriteGeneres: string[];
}

export interface BookTSO extends BaseObject {
    id: string;
    title: string;
}