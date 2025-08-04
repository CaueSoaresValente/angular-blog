import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css'
})
export class BigCard {
  @Input()
  fotoBigCard:string = ""
  @Input()
  titleBigCard:string = ""
  @Input()
  descriptionBigCard:string = ""
}
