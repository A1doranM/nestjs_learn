import {MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";
import {CatsModule} from "./cats/cats.module";
import {LoggerMiddleware} from "./logger/logger.middleware";

@Module({
    imports: [CatsModule]
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes({path: "cats", method: RequestMethod.GET});
    }
}
