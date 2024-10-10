import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  constructor(private service: ServiceService){}

  get check():boolean{
    return this.service.sidetab
  }

  get focuser():any{
    return this.service.focuser
  }
  
  focus(event: number){
    this.service.focuser.fill(false)
    this.service.focuser[event] = true
  }
}
