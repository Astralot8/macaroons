import { Component, Input } from '@angular/core';
import { AdvantageType } from '../../types/advantage.type';
import { TextReductionPipe } from '../../pipes/text-reduction.pipe';

@Component({
  selector: 'advantages',
  imports: [TextReductionPipe],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.css'
})
export class AdvantagesComponent {

  @Input()
  advantage!: AdvantageType;

  constructor(){

  }
}
