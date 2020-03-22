export interface Recipient {
    type?: string,
    uuid: string,
    gid: number,
    name: string,
    budget: number,
}

export interface Gift {
    type?: string,
    uuid: string,
    recipientid: string,
    name: string,
    year: number,
    price: number,
    isPurchased: boolean,
    isDelivered: boolean,
    isWrapped: boolean,
    isMade: boolean,
}