import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngAcademia2023';

  constructor(private router: Router, private authService: AuthService) {}

  goToForms() {
    this.router.navigate(['/forms/nicolas/Nicolas', {}])
  }

  login() {
    this.authService.login()
  }
}
