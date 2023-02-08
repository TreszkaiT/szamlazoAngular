import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../../service/partner.service';

@Component({
  selector: 'app-partner-new',
  templateUrl: './partner-new.component.html',
  styleUrls: ['./partner-new.component.css']
})
export class PartnerNewComponent implements OnInit {

  constructor(private partnerService: PartnerService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.partnerService.addPartner(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }
}
