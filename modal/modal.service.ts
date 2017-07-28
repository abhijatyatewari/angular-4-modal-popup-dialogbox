import { Injectable } from '@angular/core';
import { ModalData } from './modal.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {
  modalData = new ModalData();
  userResponse:boolean; 
  public publishedModalOptions: Subject<ModalData> =  new BehaviorSubject<ModalData>(null);
  public publishedUserResponse: Subject<boolean> =  new BehaviorSubject<boolean>(null);

  constructor() { }

  setModalOptions(options: ModalData) : void {
    if(options && options.modalMessage !== "") {
      this.modalData = options;
      this.publishModalOptions();
    }
  }

  getModalOptions() : ModalData {
       return this.modalData;
  }
  
   publishModalOptions() : void {
       this.publishedModalOptions.next(this.modalData);
  }

  setUserResponse(option: boolean) : void {
    if (option !== undefined) {
    this.userResponse = option;
    this.publishUserResponse();
    }
  }

  getUserResponse() : boolean {
       return this.userResponse;
  }
  
   publishUserResponse() : void {
       this.publishedUserResponse.next(this.userResponse);
  }
  
  

}
