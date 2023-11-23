import { IUser } from "./IUser";

export interface StudentRequest {
    name: string;
    email: string;
    password: string;
}

export default interface Student extends IUser {
    
}