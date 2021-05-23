import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-sucesso',
  templateUrl: './modal.sucesso.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponentSucesso {
  constructor(public activeModal: NgbActiveModal) { }
}

@Component({
  selector: 'app-modal-erro',
  templateUrl: './modal.erro.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponentErro {
  constructor(public activeModal: NgbActiveModal) { }
}
