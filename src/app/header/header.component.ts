import { Component,Output, EventEmitter  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private service:ServiceService){}

  sidetab(){
    this.service.sidetab = !this.service.sidetab;
    console.log(this.service.sidetab)
  }

  focuser(){
    this.service.focuser.fill(false)
  }

}
