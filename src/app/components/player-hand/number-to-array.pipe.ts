import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'array'
})
export class ArrayPipe implements PipeTransform {
    transform(length: number, ...args: any[]): string[] {
        return Array(length);
    }
}