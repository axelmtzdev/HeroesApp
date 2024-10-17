import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroe.interface';

@Component({
  selector: 'heroes-heroe-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit {
  ngOnInit(): void {
    if(!this.hero) throw new Error('Method not implemented.');
  }

  @Input()
  public hero!:Hero;
}
