import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

  constructor(private service:ServiceService){
    service.focuser.fill(false)
    service.focuser[2] = true
  }
  
}
