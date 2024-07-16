import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``,
})
export class OrderComponent {
  public isUpperCase:boolean = false
  public orderBy?: keyof Hero | '' = ''
  public heroes:Hero[] = [
    {
      name: 'ueprman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'deardevli',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'robin',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'green lamter',
      canFly: true,
      color: Color.green,
    },
  ]

  public switchToggleUpper():void {
    this.isUpperCase = !this.isUpperCase
  }

  public changeOrder(value: keyof Hero):void {
    this.orderBy = value
  }
}
