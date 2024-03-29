import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Partner } from '../model/partner';
import { ConfigService } from './config.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  public partnerObserve: Subject<any> = new Subject()

  partners: Array<Partner> = []

  partnerUrl: string = ''

  lastEditedPartner = <Partner>{}

  constructor(private http: HttpClient, private httpService: HttpService, private config: ConfigService) {
    this.partnerUrl = this.config.get('apiUrl') + "/partner"                            // ez itt a server mappán belül lévő /partner.json fájl neve/helye !!!!!!!!!!
    this.getPartnerWithObserver()                                                        // már betöltéskor értesüljenek más Components-ek a változásról
  }

  getLastEditedPartner() {
    return this.lastEditedPartner
  }

  getPartnerWithObserver() {
    this.http.get(this.partnerUrl + "/all")
      .subscribe(
        (response) => {
          this.partners = this.jsonToPartner(response)
          this.partnerObserve.next(this.partners)                                      // Component értesítése/frissítése itt történik
        },
        (error) => {
          this.partnerObserve.error("Error in Observe")
        }
      )
  }

  jsonToPartner(partnerArray: any): Partner[] {
    let partners1: Array<Partner> = []

    for (let partner of partnerArray) {
      let newPartner = new Partner()
      newPartner.fromObject(partner)
      partners1.push(newPartner)
    }
    return partners1
  }

  addPartner(partner: Partner) {
    return new Promise((resolve, reject) => {
      this.httpService.create(`${this.partnerUrl}`, partner)
        .then(
          (response) => {
            this.getPartnerWithObserver()
            resolve('partner add')
          }
        )
    })
  }

  updatePartner(partner: Partner) {
    return new Promise((resolve, reject) => {
      this.httpService.update(`${this.partnerUrl}/${partner.id}`, partner)
        .then(
          (response) => {
            this.getPartnerWithObserver()
            resolve('partner updated')
          }
        )
    })
  }

  deletePartner(partner: Partner) {
    return new Promise((resolve, reject) => {
      this.httpService.delete(`${this.partnerUrl}/${partner.id}`)
        .then(
          (response) => {
            this.getPartnerWithObserver()
            resolve('partner deleted')
          }
        )
    })
  }

  readPartnerOne(one: boolean, id?: string) {
    let urls: string = ""
    if (one) urls = this.partnerUrl + "/" + id
    else urls = this.partnerUrl + "/all"

    return new Promise((resolve, reject) => {
      this.httpService.read(urls)
        .then(
          (response) => {
            this.getPartnerWithObserver()
            resolve(response)
          }
        )
    })
  }


}
