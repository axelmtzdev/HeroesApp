import { Component } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label: 'Listado', icon: 'list', url: './list'},
    {label: 'Agregar', icon: 'add', url: './new-hero'},
    {label: 'Buscar', icon: 'search', url: './search'},
  ]
}
