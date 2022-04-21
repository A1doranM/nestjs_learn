import {Controller, Get, HttpCode, Param, Post, Redirect} from "@nestjs/common";


@Controller("cats")
export class CatsController {
    @Post()
    @HttpCode(204)
    create(): string {
        return "This action adds new cat";
    };

    @Get()
    // @Redirect('https://nestjs.com', 301)
    findAll(): string {
        return "This action returns all cats.";
    };

    @Get(":id")
    findOne(@Param() params): string {
        console.log(params.id);
        return `This is specified by id cat ${params.id}`;
    };
}