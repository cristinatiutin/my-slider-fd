import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled';
  photos = ['../../assets/vienna.png', '../../assets/vienna2.png', '../../assets/vienna3.png', '../../assets/vienna4.png',
    '../../assets/budapest.png', '../../assets/budapest2.png', '../../assets/prague.png', '../../assets/prague2.png',
    '../../assets/bratislava.png', '../../assets/bratislava2.png'];
  alternatives = ['Vienna, Austria', 'Vienna, Austria', 'Vienna, Austria', 'Vienna, Austria', 'Budapest, Hungary', 'Budapest, Hungary',
    'Prague, Czech Republic', 'Prague, Czech Republic', 'Bratislava, Slovakia', 'Bratislava, Slovakia'];
}
