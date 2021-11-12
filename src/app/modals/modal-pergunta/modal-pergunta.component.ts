import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomeService } from 'src/app/home/services/home.service';

@Component({
  selector: 'app-modal-pergunta',
  templateUrl: './modal-pergunta.component.html',
  styleUrls: ['./modal-pergunta.component.scss'],
})
export class ModalPerguntaComponent implements OnInit {

  form:FormGroup;
  constructor(public FormBuilder: FormBuilder,
              public service: HomeService
    ) { }

  ngOnInit() {
    this.form = this.FormBuilder.group({
      titulo: new FormControl('', [Validators.required, Validators.min(3)]),
      descricao: new FormControl('', [Validators.required, Validators.min(10)]),
      tipo: new FormControl(''),
      categoria: new FormControl('')      
    })
  }


  async createTask() {
      const data = this.form.getRawValue();
      const response = await this.service.createTask(data);
      if(response) {
        console.log(response);
      }
  }

}
