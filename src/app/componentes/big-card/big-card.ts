import { Component, Input} from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterLink],
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
  @Input()
  id:string = "0"
}
