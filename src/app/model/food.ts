// Here we define the type of data that we have
// the type of data we get from the backend

import { Orders } from "./orders";

export interface Food{
    id: number;
    name: string;
    type: string;
    ingredients: string;
    vegan: boolean;
    alergies: string;
    price: number;
    //order
    order: Orders;
    img: string;
}