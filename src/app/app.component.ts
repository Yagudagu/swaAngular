import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<a href="/login">Login, does it work?</a
    ><a href="/logout">Logout, let's try it</a>`,
})
export class AppComponent {
  value = 'World';
}
