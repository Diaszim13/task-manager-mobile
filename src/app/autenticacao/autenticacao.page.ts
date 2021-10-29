import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.page.html',
  styleUrls: ['./autenticacao.page.scss'],
})
export class AutenticacaoPage implements OnInit {
  public type: string;
  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.type = 'login';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
