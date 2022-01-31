import { Owner } from "./owner";
import { Visit } from "./visit";
import { Pettype } from "./pettype";

export class Pet {
    id: number = 0;
    name: string = "";
    birth_day: Date = new Date();
    type: Pettype = new Pettype();
    owner: Owner = new Owner();
    visits: Visit[] = [];
}
