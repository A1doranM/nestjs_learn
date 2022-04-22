import {Injectable} from "@nestjs/common";
import {CatInterface} from "./interfaces/cat.interface";

@Injectable()
export class CatsService {
    private readonly cats: Array<CatInterface> = [
        {
            age: 1,
            breed: "Siam",
            name: "1"
        },
        {
            age: 2,
            breed: "Siam",
            name: "2"
        },
        {
            age: 3,
            breed: "Siam",
            name: "3"
        }
    ];

    create(cat: CatInterface) {
        this.cats.push(cat);
    }

    findAll(): CatInterface[] {
        return this.cats;
    }
}