import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  constructor(private service:ServiceService){
    service.focuser.fill(false)
    service.focuser[3] = true
  }

  TechCount = 0;
  SoftCount = 0;

  Technical = [
    {
      id: 1,
      name: "HTML",
      skill: "Expert"
    },
    {
      id: 2,
      name: "CSS",
      skill: "Expert"
    },
    {
      id: 3,
      name: "JAVASCRIPT",
      skill: "Intermediate"
    },
    {
      id: 4,
      name: "ANGULAR",
      skill: "Intermediate"
    },
    {
      id: 5,
      name: "SQL",
      skill: "Expert"
    },
    {
      id: 6,
      name: "Jasmine Karma",
      skill: "Intermediate"
    },
    {
      id: 7,
      name: "JAVA",
      skill: "Intermediate"
    }
  ]

  soft=[
    {
      id: 1,
      name: "Problem solving"
    },
    {
      id: 2,
      name: "Communication"
    },
    {
      id: 3,
      name: "Adaptability"
    },
    {
      id: 4,
      name: "Time management"
    },
    {
      id: 5,
      name: "Creativity"
    },
    {
      id: 6,
      name: "Critical thinking"
    },
    {
      id: 7,
      name: "Leadership"
    },
    {
      id : 8,
      name: "Decision-Making"
    }
  ]

  Increment(value: String){
    if(value=='T'){
    this.TechCount = this.TechCount+1;
    }
    else{
      this.SoftCount = this.SoftCount+1;
    }
  }

  Decrement(value: String){
    if(value=='T'){
    this.TechCount = this.TechCount-1;
    }
    else{
      this.SoftCount = this.SoftCount -1;
    }
  }

}
