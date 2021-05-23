import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Service } from '../service/service';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-investimentos',
  templateUrl: './investimentos.component.html',
  styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent implements OnInit {

  lista: Array<any> = new Array();

  constructor(private service: Service, private router: Router) {}

  ngOnInit() {
    this.listarInvestimentos();
  }

  resgatarInvestimento(investimento:any){

    this.router.navigate(['resgate'],
      {state:investimento})
  }

  listarInvestimentos() {
    this.service.listarFundoInvestimento().subscribe(data => {
      this.lista = data.response.data.listaInvestimentos;
      console.log(this.lista);
    });
  }
}
