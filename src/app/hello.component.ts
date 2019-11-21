import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class HelloComponent  {
  @Input() name: string;
}
