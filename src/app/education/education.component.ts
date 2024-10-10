import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  constructor(private service:ServiceService){
    service.focuser.fill(false)
    service.focuser[1] = true
  }
  
  count = 0;

  eduDetails = [
    {
      id : 1,
      Degree : "10th",
      Academy : "Shakespeare Matriculation School",
      Grade : "88",
      Year : "2015 - 2016"
    },
    {
      id : 2,
      Degree : "12th",
      Academy : "ST.James Matric. Hr. Sec. School",
      Grade : "80",
      Year : "2017 - 2018"
    },
    {
      id : 3,
      Degree : "B.E Computer Science and Engineering",
      Academy : "K.Ramakrishnan College Of Engineering",
      Grade : "83",
      Year : "2018 - 2022"
    }
  ]

  getValue(event: number){
    this.count = event;
  }

}
