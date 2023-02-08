import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Szamla } from '../model/szamla';
import { ConfigService } from './config.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class SzamlaService {

  public szamlaObserve: Subject<any> = new Subject

  szamlas: Array<Szamla> = []

  szamlaUrl: string = ''

  lastEditedSzamla = <Szamla>{}

  constructor(private http: HttpClient, private httpService: HttpService, private config: ConfigService) {
    this.szamlaUrl = this.config.get('apiUrl') + "/szamla"
    this.getSzamlaWithObserver()
  }

  getLastEditedSzamla() {
    return this.lastEditedSzamla
  }

  getSzamlaWithObserver() {
    this.http.get(this.szamlaUrl + "/all")
      .subscribe(
        (response) => {
          this.szamlas = this.jsonToSzamla(response)
          this.szamlaObserve.next(this.szamlas)
        },
        (error) => {
          this.szamlaObserve.error("Error in Observe")
        }
      )
    // throw new Error('Method not implemented.');
  }

  jsonToSzamla(szamlaArray: any): Szamla[] {
    let szamla1: Array<Szamla> = []

    for (let szamla of szamlaArray) {
      let newSzamla = new Szamla()
      newSzamla.fromObject(szamla)
      szamla1.push(newSzamla)
    }
    return szamla1
  }

  addSzamla(szamla: Szamla){
    return new Promise((resolve, reject) => {
      this.httpService.create(`${this.szamlaUrl}`, szamla)
        .then(
          (response) => {
            this.getSzamlaWithObserver()
            resolve('szamla add')
          }
        )
    })
  }

  updateSzamla(szamla: Szamla){
    return new Promise((resolve, reject) => {
      this.httpService.update(`${this.szamlaUrl}/${szamla.id}`, szamla)
        .then(
          (response) => {
            this.getSzamlaWithObserver()
            resolve('szamla updated')
          }
        )
    })
  }

  deleteSzamla(szamla: Szamla){
    return new Promise((resolve, reject) => {
      this.httpService.delete(`${this.szamlaUrl}/${szamla.id}`)           // töröljük
        .then(                                                            // majd
          (response) => {
            this.getSzamlaWithObserver()                                  // újra kikérjük a szervertől a meglévő számlákat
            resolve('szamla deleted')
          }
        )
    })
  }

  readSzamlaOne(one: boolean, id?: string){
    let urls: string = ""
    if (one) urls = this.szamlaUrl + "/" +id
    else urls = this.szamlaUrl + "/all"

    return new Promise((resolve, reject) => {
      this.httpService.read(urls)
        .then(
          (response) => {
            this.getSzamlaWithObserver()
            resolve(response)
          }
        )
    })
  }

}
