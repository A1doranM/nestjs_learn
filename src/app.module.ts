import {MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";
import {CatsModule} from "./cats/cats.module";
import {LoggerMiddleware} from "./logger/logger.middleware";
import {APP_GUARD} from "@nestjs/core";
import {RolesGuard} from "./cats/guards/roles.guard";

@Module({
    imports: [CatsModule],
    providers: [
        {
            provide: APP_GUARD,
            useClass: RolesGuard,
        },
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes({path: "cats", method: RequestMethod.GET});
    }
}
