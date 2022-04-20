import {Controller, Get, HttpCode, Post} from "@nestjs/common";


@Controller("cats")
export class CatsController {
    @Post()
    @HttpCode(204)
    create(): string {
        return "This action adds new cat";
    };

    @Get()
    findAll(): string {
        return "This action returns all cats.";
    };
}