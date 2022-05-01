import {MiddlewareConsumer, Module, NestModule, RequestMethod} from "@nestjs/common";
import {CatsModule} from "./cats/cats.module";
import {LoggerMiddleware} from "./logger/logger.middleware";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {LoggingInterceptor} from "./interceptors/logging.interceptor";

@Module({
    imports: [CatsModule],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor,
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
