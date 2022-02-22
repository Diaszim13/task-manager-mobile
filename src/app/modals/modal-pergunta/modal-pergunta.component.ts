import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomeService } from 'src/app/home/services/home.service';
import { Tasks } from 'src/app/home/models/tasks';

@Component({
  selector: 'app-modal-pergunta',
  templateUrl: './modal-pergunta.component.html',
  styleUrls: ['./modal-pergunta.component.scss'],
})
export class ModalPerguntaComponent implements OnInit {

  form: FormGroup;

  task: Tasks[] = [];

  constructor(public formBuilder: FormBuilder,
              public service: HomeService,
              public modalController: ModalController
    ) {
      this.form = new FormGroup({
        titulo: new FormControl('', [Validators.required, Validators.min(3)]),
        descricao: new FormControl('', [Validators.required, Validators.min(10)]),
        tipo: new FormControl(''),
        categoria: new FormControl('')
      });
    }

  ngOnInit() {

  }

  dismiss() {
    this.modalController.dismiss();
  }

  async createTask() {
      const data = this.form.getRawValue();
      const response = await this.service.createTask(data);
      if(response) {
        console.log(response);
        this.modalController.dismiss();
      }
  }

}
