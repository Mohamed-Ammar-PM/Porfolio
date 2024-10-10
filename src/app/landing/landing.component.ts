import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  copy(event: string){
    if(event == 'mail'){
      navigator.clipboard.writeText("ammarpm007@gmail.com")
    }
    else{
      navigator.clipboard.writeText("+91 8870326209")
    }

    alert('copied!!!')
    
  }
}
