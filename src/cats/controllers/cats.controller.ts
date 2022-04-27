import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put, SetMetadata,
    UseFilters, UseGuards, UsePipes
} from "@nestjs/common";
import {CatsService} from "../services/cats.service";
import {CreateCatDto} from "../dto/cats/CreateCatDto";
import {UpdateCatDto} from "../dto/cats/UpdateCatDto";
import {HttpExceptionFilter} from "../../filters/http-exception.filter";
import {ValidationPipe} from "../../pipes/validation.pipe";
import {AuthGuard} from "../guards/auth.guard";
import {Roles} from "../../utils/roles.decorator";


@Controller("cats")
@UseFilters(HttpExceptionFilter)
export class CatsController {
    constructor(private catsService: CatsService) {
    }

    @Post()
    @UseFilters(new HttpExceptionFilter())
    @UsePipes(ValidationPipe)
    @Roles("admin")
    @UseGuards(new AuthGuard())
    create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    @Get()
    findAll() {
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: "This is custom message"
        }, HttpStatus.FORBIDDEN);
    }

    @Get(":id")
    @UseGuards(new AuthGuard())
    async findOne(
        @Param("id", new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE})) id: number
    ) {
        return this.catsService.findOne(id);
    }

    @Put(":id")
    @UseGuards(new AuthGuard())
    update(@Param("id") id: string, @Body() updateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(":id")
    @UseGuards(new AuthGuard())
    remove(@Param("id") id: string) {
        return `This action removes a #${id} cat`;
    }
}

export default CatsController;