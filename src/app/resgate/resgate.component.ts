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

  constructor( private route: Router, private modal: NgbModal ) {
    this.investimento = this.route.getCurrentNavigation()?.extras.state;
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
    let erro:any;
    let acao:any;

    this.investimento.acoes.forEach((element: any) => {
      if(element.resgate > element.valor ){
        if(acao){
          acao += ", " + element.nome
        }else{
          acao = element.nome
          erro = "Foi digitado valor invalido na ação " +
            element.nome + " valor maximo disponivel e R$" + element.valor;
        }
      }
    });
    if(investimento.saldoTotalResgatar > 0 && !erro && !acao){
      this.modal.open(ModalComponentSucesso);
    }else{
      if(acao && acao.indexOf(",") != -1){
        erro = "Foram digitado valores invalido nas ações " + acao;
      }else if(!erro){
        erro = "preencher pelo menos um dos campos a resgatar.";
      }
      this.modal.open(ModalComponentErro).componentInstance.erro = erro;
    }

  }
}
