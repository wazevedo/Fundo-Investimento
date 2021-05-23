import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-resgate',
  templateUrl: './resgate.component.html',
  styleUrls: ['./resgate.component.css']
})
export class ResgateComponent implements OnInit {

  investimento: any;

  constructor(private route: Router) {
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

    console.log(this.investimento);
   }

  ngOnInit() {
    this.investimento.saldoTotalResgatar = 0;
    this.investimento.acoes.forEach((element: any) => {

      element.valor = (this.investimento.saldoTotalDisponivel * element.percentual /100);;
      // console.log("Valor " + element.valor);
      // console.log("Saldo " + this.investimento.saldoTotalResgatar);
    });
  }

  calcularResgate(valor:any){
    console.log(valor);
    this.investimento.saldoTotalResgatar += valor;
    console.log("Saldo " + this.investimento.saldoTotalResgatar);
  }


}
