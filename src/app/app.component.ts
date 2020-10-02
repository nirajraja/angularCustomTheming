import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customTheme';
  themes: string[] = ['theme1', 'theme2', 'theme3', 'theme4','default'];
  theme: String= "default";
  themeSelect:String = "theme2";




}
