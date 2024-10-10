import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  constructor(private service:ServiceService){
    service.focuser.fill(false)
    service.focuser[4] = true
  }
  
}
