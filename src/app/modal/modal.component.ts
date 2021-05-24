import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-sucesso',
  templateUrl: './modal.sucesso.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponentSucesso {
  constructor(public activeModal: NgbActiveModal, private router: Router) { }

  novoResgate(){
    this.activeModal.close('Close click')
    this.router.navigate([''])
  }
}

@Component({
  selector: 'app-modal-erro',
  templateUrl: './modal.erro.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponentErro {
  @Input() erro:any ;
  constructor(public activeModal: NgbActiveModal) { }
}
