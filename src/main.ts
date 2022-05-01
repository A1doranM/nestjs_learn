import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {LoggingInterceptor} from "./interceptors/logging.interceptor";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalInterceptors(new LoggingInterceptor());
    await app.listen(8080);
}

bootstrap();
