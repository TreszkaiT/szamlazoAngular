import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  appTitle: string = ""

  constructor(private config: ConfigService) { 
    this.appTitle = this.config.get('appTitle') as string
  }

  ngOnInit(): void {
  }

}
