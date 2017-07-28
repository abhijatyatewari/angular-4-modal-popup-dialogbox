export class ModalData {
   showCancelButton :boolean;
   showCloseButton :boolean;
   showTitle :boolean;
   showContent :boolean;
   showMessage :boolean;
   modalTitle :string;
   modalMessage :string;
   modalContent :string;
   size : string;

  constructor(){
        this.modalTitle = "";
        this.size = 'sm';
        this.modalMessage = "";
        this.modalContent = "";
        this.showCancelButton = false;
        this.showCloseButton = false;
        this.showTitle = false;
        this.showContent = false;
        this.showMessage = false;
    } 

}