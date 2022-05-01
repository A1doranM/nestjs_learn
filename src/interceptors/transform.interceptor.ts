import {CallHandler, ExecutionContext, Injectable, NestInterceptor} from "@nestjs/common";
import {Observable, map} from "rxjs";

export interface Response<T> {
    data: T
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<Response<T>> {
        console.log("Transform");

        const now = Date.now();
        return next
            .handle()
            .pipe(
                map(data => ({data}))
            );
    }

}