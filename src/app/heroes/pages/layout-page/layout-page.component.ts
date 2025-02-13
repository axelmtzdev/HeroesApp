import { Component } from '@angular/core';
import { last } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../auth/interfaces/user.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public sidebarItems = [
    {label: 'Listado', icon: 'list', url: './list'},
    {label: 'Agregar', icon: 'add', url: './new-hero'},
    {label: 'Buscar', icon: 'search', url: './search'},
  ];

  get user():User | undefined {
    return this.authService.currentUser;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login'])
  }
}
