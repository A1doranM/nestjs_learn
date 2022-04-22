import {Body, Controller, Delete, Get, Param, Post, Put, Query, Redirect} from "@nestjs/common";
import {CreateCatDto} from "./dto/cats/CreateCatDto";
import {UpdateCatDto} from "./dto/cats/UpdateCatDto";
import {CatsService} from "./cats.service";

@Controller("cats")
export class CatsController {
    constructor(private catsService: CatsService) {
    }

    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    findAll() {
        return this.catsService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return `This action returns a #${id} cat`;
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return `This action removes a #${id} cat`;
    }
}

export default CatsController;