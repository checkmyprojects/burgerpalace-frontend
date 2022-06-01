// Here we define the type of data that we have
// the type of data we get from the backend

import { Food } from "./food";
import { User } from "./user";

export interface Orders{
    id: number;
    // 
    // name: string; // tipo user
    user: User;
    // address: string; // tipo food
    food: Food;
}