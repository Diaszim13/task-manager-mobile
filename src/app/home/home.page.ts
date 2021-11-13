import { ModalPerguntaComponent } from './../modals/modal-pergunta/modal-pergunta.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';
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
  @ViewChild('barChart') barChart;
    bars: any;
    colorArray: any;

  constructor(
      public service: HomeService,
      public modalController: ModalController
    ) {
      this.getAllTasks();
     }

    ionViewDidEnter() {
        this.createBarChart();
    }

    async presentModal() {
      const modal = await this.modalController.create({
        component: ModalPerguntaComponent,
        cssClass: 'modal'
      })
      return await modal.present();
    }

  async getAllTasks() {
      const response = await this.service.getAllTasks();
      console.log(response)
      
      if(response) {
        this.tasks = response;
        console.log(this.tasks)
    }

  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
        datasets: [{
          label: 'Viewers in millions',
          data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
          backgroundColor: '#fff', // array should have same number of elements as number of dataset
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

  applyLightTheme() {
    this.basicOptions = {
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };
  }

}
