import { Component } from '@angular/core';
import { Observable, tap, TimeInterval } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name:string = "David"
  // public gender:'male'|'female' = "male"
  public gender:string = "male"
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }

  public changeClient():void {
    this.name = 'Melisa'
    this.gender = 'female'
  }

  // i18nPlural
  public clients: string[] = ['elisa','fernando','david','hernando','lulu',]
  public clientsMap = {
    '=0': "no tenemos ningun cliente esperando",
    '=1': "tenemos un cliente esperando",
    '=2': "tenemos dos clientes esperando",
    'other': "tenemos # clientes esperando",
  }

  public deletClient():void {
    // this.clients.pop()
    this.clients.shift()
  }

  // Json keyValue pipe

  public person = {
    name: "David",
    age: 36,
    address: "San Andres - Colobia"
  }


  // async pip

  public myObservableTimer:Observable<number> = interval(2000).pipe(
    tap(value => {
      console.log('tap',value);
    })
  )

  public promiseValue: Promise<string> = new Promise((resolve, reject)=> {
    setTimeout(() => {
      resolve("Tenenmos data de la promesa")
      console.log("Tenenmos data de la promesa")
    }, 3000);
  })

}
