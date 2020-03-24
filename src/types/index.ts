export interface Recipient {
  readonly uuid: string;
  gid: number;
  name: string;
  budget: number;
}

export interface Gift {
  readonly uuid: string;
  recipientid: string;
  name: string;
  year: number;
  price: number;
  isPurchased: boolean;
  isDelivered: boolean;
  isWrapped: boolean;
  isMade: boolean;
}
