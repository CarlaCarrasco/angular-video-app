import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  boxes = [
    {title: 'Box 1', status: 'active'},
    {title: 'Box 2', status: 'active'},
    {title: 'Box 3', status: 'active'},
    {title: 'Box 4', status: 'active'},
  ]

  constructor() { }
}
