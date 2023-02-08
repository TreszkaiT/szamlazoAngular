import { Component, OnDestroy, OnInit } from '@angular/core';
import { Szamla } from '../model/szamla';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { SzamlaService } from '../service/szamla.service';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-szamla',
  templateUrl: './szamla.component.html',
  styleUrls: ['./szamla.component.css']
})
export class SzamlaComponent implements OnInit, OnDestroy {
  
  szamlas: Array<Szamla> = []

  szamlaSubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private szamlaService: SzamlaService, private urlService: UrlService) { }


  ngOnInit(): void {

    this.szamlas = this.szamlaService.szamlas

    this.szamlaSubscribe = this.szamlaService.szamlaObserve
      .subscribe(
        (szamlas) => {this.szamlas = szamlas},
        (error) => {this.szamlas = []}
      )
  }

  ngOnDestroy(): void {
    this.szamlaSubscribe.unsubscribe()
    // throw new Error('Method not implemented.');
  }

  onEditSzamla(szamla: Szamla){
    this.szamlaService.lastEditedSzamla = szamla
    this.urlService.jumpTo('szamla-edit')
  }

  onDeleteSzamla(szamla: Szamla){
    this.szamlaService.deleteSzamla(szamla)
  }

}
