import { ModalPerguntaComponent } from './../modals/modal-pergunta/modal-pergunta.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart, ChartItem} from 'chart.js';
import { Tasks } from './models/tasks';
import { HomeService } from './services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  basicData: any;
  basicOptions: any;

  public tasks: Tasks[] = [];
<<<<<<< HEAD
    bars: any;
    colorArray: any;

  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('barChart') barChart: { nativeElement: ChartItem};
=======
  daysOfWeek: Array<string> = ['SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA'];
  @ViewChild('barChart') barChart;
    bars: any;
    colorArray: any;
    tasksByDay = [];
>>>>>>> 3c5d4a561814168df5ad909d0af7f1e081172ad2
  constructor(
      public service: HomeService,
      public modalController: ModalController
    ) {
      this.getAllTasks();
      this.getNumTasksPerDay(1);
    }

    ionViewDidEnter() {
        this.createBarChart();
    }

    async presentModal() {
      const modal = await this.modalController.create({
        component: ModalPerguntaComponent,
        cssClass: 'modal'
      });
      return await modal.present();
    }

  async getAllTasks() {
<<<<<<< HEAD
      const response = await this.service.getAllTasks();
      console.log(response);

      if(response) {
        this.tasks = response;
        console.log(this.tasks);
=======
    const response = await this.service.getAllTasks();
    if(response) {
      this.tasks = response;
>>>>>>> 3c5d4a561814168df5ad909d0af7f1e081172ad2
    }
  }

  async getNumTasksPerDay(id?: number) {
    const response = await this.service.getTasksByDay(id);
    console.log(response);
    this.tasksByDay = response;

  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['segunda', 'terca', 'quarta', 'quinta', 'sexta'],
        datasets: [{
          label: 'Afazeres da semana',
          data: [this.tasksByDay[0].count],
          backgroundColor: 'black', // array should have same number of elements as number of dataset
          borderColor: '#fff',// array should have same number of elements as number of dataset
          borderWidth: 1
        }]
      },
      options: {
        scales: {
            ticks: {
              beginAtZero: true
            }
        }
      }
    });
  }

  ngOnInit() {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#FFA726',
              tension: .4
          }
      ]
  };
  }
}
