// Here we define the type of data that we have
// the type of data we get from the backend

import { Orders } from "./orders";

export interface User{
    id: number;
    name: string;
    address: string;
    email: string;
    phone: string;
    password: string;
    role: string;
    // order
    order: Orders;
}

// private Long id;
// private String name;
// private String address;
// private String email;
// private String phone;
// private String password;
// private String role = "ROLE_USER";

// @OneToMany(mappedBy="user")
// private Set<Orders> order;