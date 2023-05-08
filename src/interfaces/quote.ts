import { IUser } from ".";

export interface IQuote {
    id          : number;
    name        : string;
    description : string;
    date        : string;
    user        : IUser;
}

