import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] | undefined;

  constructor( private router: Router ) {}

  ngOnInit(): void {
    // console.log("router ",this.router);

    // this.menuItems = [
    //   { label: 'New', icon: 'pi pi-plus' },
    //   { label: 'Search', icon: 'pi pi-search' }
    // ];
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: "Textos y fechas",
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: "Numeros",
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: "No comunes",
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom pipes',
            icon: 'pi pi-cog',
            routerLink: 'custom'
          }
        ]
      }
    ];
  }

}
