import { Component, OnInit, OnDestroy } from '@angular/core';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Partner } from '../model/partner';
import { PartnerService } from '../service/partner.service';
import { UrlService } from '../service/url.service';

@Component({
  selector: 'app-parner',
  templateUrl: './parner.component.html',
  styleUrls: ['./parner.component.css']
})
export class ParnerComponent implements OnInit, OnDestroy {


  partners: Array<Partner> = []

  partnerSubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private partnerService: PartnerService, private urlService: UrlService) { }

  ngOnInit(): void {

    this.partners = this.partnerService.partners

    this.partnerSubscribe = this.partnerService.partnerObserve
      .subscribe(
        (partners) => {this.partners = partners},
        (error) => { this.partners = [] }
      )
  }

  ngOnDestroy(): void {
    this.partnerSubscribe.unsubscribe()
  }

  onEditPartner(partner: Partner){
    this.partnerService.lastEditedPartner = partner
    this.urlService.jumpTo('/partner-edit')
  }

  onDeletePartner(partner: Partner){
    this.partnerService.deletePartner(partner)
  }
}
