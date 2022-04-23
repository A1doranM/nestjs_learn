import {Injectable} from "@nestjs/common";
import {CatInterface} from "../interfaces/cat.interface";

@Injectable()
export class CatsService {
    private readonly cats: Array<CatInterface> = [
        {
            id: 1,
            age: 1,
            breed: "Siam",
            name: "1"
        },
        {
            id: 2,
            age: 2,
            breed: "Siam",
            name: "2"
        },
        {
            id: 3,
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

    findOne(id: number): CatInterface {
        return this.cats.find(cat => cat.id === id);
    }
}