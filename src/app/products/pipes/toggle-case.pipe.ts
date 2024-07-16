import { Pipe, PipeTransform } from "@angular/core";

// DAVID | toggleCase = david
// david | toggleCase = DAVID

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper:boolean = false ):string {
    return (toUpper)
      ? value.toUpperCase()
      : value.toLowerCase()
  }

}

