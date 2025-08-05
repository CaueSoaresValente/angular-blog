import { Component, Input } from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink],
  templateUrl: './small-card.html',
  styleUrl: './small-card.css'
})
export class SmallCard {
  
  @Input()
  fotosmallCard:string = "https://classiccarbr.com.br/wp-content/uploads/2024/06/IMG_1363-scaled.jpeg"
  @Input()
  titlesmallCard:string = ""
  @Input()
  descriptionsmallCard:string = ""
  @Input()
  id:string = "0"
}
