export interface IUser {
    name: string,
    email: string,
    password: string,
    role: string,
    _id?: string,
    clients?: string[];
}



export class Client{
    constructor(
        public name: string,
        public meterType: string,
        
    ){}
}