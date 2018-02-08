import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @HostListener('window:scroll', [])
onWindowScroll() {
  return document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ? true : false;
}

}
