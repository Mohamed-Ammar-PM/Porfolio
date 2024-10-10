import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  sidetab = false;

  focuser = [false,false,false,false,false]
}
