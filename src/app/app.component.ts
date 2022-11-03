import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private _title: Title, private config: ConfigService){
    this._title.setTitle(this.config.get('appTitle') as string)
  }
}
