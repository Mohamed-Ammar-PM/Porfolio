import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  constructor(private service:ServiceService){
    service.focuser.fill(false)
    service.focuser[0] = true
  }
  
}
