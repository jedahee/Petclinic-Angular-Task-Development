import { Pet } from "./pet";

export class Owner {
    id: number = 0;
    firstName: string = "";
    lastName: string = "";
    address: string = "";
    city: string = "";
    telephone: string = "";
    pets: Pet[] = [];
}