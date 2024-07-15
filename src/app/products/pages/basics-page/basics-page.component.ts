import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameUpper: string = "DAVID"
  public nameLower: string = "david"
  public fullname: string = "dAViD diAz"

  public customDate:Date = new Date()

}
