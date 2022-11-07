import { Component, OnInit } from '@angular/core';
import { Partner } from 'src/app/model/partner';
import { PartnerService } from '../../service/partner.service';

@Component({
  selector: 'app-partner-edit',
  templateUrl: './partner-edit.component.html',
  styleUrls: ['./partner-edit.component.css']
})
export class PartnerEditComponent implements OnInit {

  lastEditedPartner = <Partner>{}

  editedPartner = <Partner>{}

  constructor(private partnerService: PartnerService) { 
    this.lastEditedPartner = this.partnerService.getLastEditedPartner()
    if(this.lastEditedPartner !== null || Object.keys(this.lastEditedPartner).length !== 0){
      this.partnerService.lastEditedPartner = <Partner>{}
    }
  }

  ngOnInit(): void {

    if(this.lastEditedPartner !== null || Object.keys(this.lastEditedPartner).length !== 0){
      this.partnerService.readPartnerOne(true, ""+this.lastEditedPartner.id)
        .then(
          (partnerResp) => {
            let partner1: Partner = new Partner()
            partner1.fromObject(partnerResp)
            this.editedPartner = partner1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let partner1: Partner = new Partner()
    partner1.fromObject(form.value)
    this.editedPartner = partner1
    this.partnerService.updatePartner(this.editedPartner)
  }

}
