import {Module} from "@nestjs/common";
import CatsController from "./cats/cats.controller";
import {CatsService} from "./cats/cats.service";

@Module({
    providers: [CatsService],
    controllers: [CatsController],
})
export class AppModule {
}
