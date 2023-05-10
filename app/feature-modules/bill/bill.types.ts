export interface IBill{
    clientId: string,
    issuedBy?: string,
    units: number,
    meter?: string,
    amount: number,
    updated?: Date,
    isPaid?: boolean,
    photo: string,
    _id: string
}