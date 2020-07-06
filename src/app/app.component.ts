import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <a mat-button routerLink="/home"><h1>LemonMart</h1></a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}
