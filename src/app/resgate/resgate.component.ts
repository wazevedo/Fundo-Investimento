import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponentErro, ModalComponentSucesso } from '../modal/modal.component';


@Component({
  selector: 'app-resgate',
  templateUrl: './resgate.component.html',
  styleUrls: ['./resgate.component.css']
})
export class ResgateComponent implements OnInit {

  investimento: any;

  constructor(
    private route: Router,
    private modal: NgbModal
    ) {
    this.investimento = this.route.getCurrentNavigation()?.extras.state;

    if(this.investimento === undefined){

      this.investimento = {
        "nome": "INVESTIMENTO I",
        "objetivo": "Minha aposentadoria",
        "saldoTotalDisponivel": 39321.29,
        "indicadorCarencia": "N",
        "acoes": [
          {
            "id": "1",
            "nome": "BBAS3",
            "percentual": 28.1
          },
          {
            "id": "2",
            "nome": "VALE3",
            "percentual": 20.71
          },
          {
            "id": "3",
            "nome": "PETR4",
            "percentual": 21.63
          },
          {
            "id": "4",
            "nome": "CMIG3",
            "percentual": 12.41
          },
          {
            "id": "5",
            "nome": "OIBR3",
            "percentual": 17.15
          }
        ]
      }
    }
   }

  ngOnInit() {
    this.investimento.saldoTotalResgatar = 0;
    this.investimento.acoes.forEach((element: any) => {

      element.valor = (this.investimento.saldoTotalDisponivel * element.percentual /100);
    });
  }

  calcularResgate(){

    let total = 0;
    let valor = 0;

    this.investimento.acoes.forEach((element: any) => {
      if(element.resgate != undefined || element.resgate != null){
        valor = element.resgate;
        if(valor <= element.valor){
          total += valor;
        }
      }

      this.investimento.saldoTotalResgatar = total;

    });
  }

  confirmarResgate(investimento : any){
    if(investimento.saldoTotalResgatar > 0){
      this.modal.open(ModalComponentSucesso).componentInstance.name = 'Sucesso';
    }else{
      this.modal.open(ModalComponentErro).componentInstance.name = 'Erro';
    }
  }
}
