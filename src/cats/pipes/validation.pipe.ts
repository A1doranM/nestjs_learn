import {ArgumentMetadata, BadRequestException, Injectable, PipeTransform} from "@nestjs/common";

@Injectable()
export class ValidationPipe implements PipeTransform {
    constructor(private schema: Object) {}

    transform(value: any, metadata: ArgumentMetadata): any {
        if((typeof value) !== (typeof this.schema)) {
            throw new BadRequestException("Validation failed.");
        }
        return value;
    }
}