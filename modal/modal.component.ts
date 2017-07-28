import { Component, OnInit, Input, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

import { ModalService } from 'app/modal/modal.service';

@Component({
  selector: 'ab-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild("content") private content: TemplateRef<any>;
  @Input() modalData;
  modalTitle:string;
  modalOptions:NgbModalOptions;
  modalRef:NgbModalRef;
  constructor(
    private modal: NgbModal,
    private modalService: ModalService

  ) {}

  ngOnInit() {
    
  }

  open() {
    let modalSize = this.modalData.size? this.modalData.size : 'sm' ;
    this.modalOptions =  { size: modalSize/* , backdrop: "static", keyboard: false */};
    this.modalRef = this.modal.open(this.content,this.modalOptions);
  }

  accept(message) {
    this.modalRef.close();
    this.modalService.setUserResponse(true);
  }

  dismiss(message) {
    this.modalRef.close();
    this.modalService.setUserResponse(false);
  }

   close(message) {
     this.modalRef.close();
     this.modalService.setUserResponse(false);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }



}
