import { Component, Input} from '@angular/core';
import { RouterLink} from '@angular/router';
@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {
  @Input()
  fotocontent:string = "https://ssl.gstatic.com/onebox/media/sports/logos/4w2Z97Hf9CSOqICK3a8AxQ_64x64.png"
  @Input()
  tituloContentontent:string = "São Paulo Futebol Clube"
  @Input()
  paragrafoContent:string = "São Paulo Futebol Clube"

}
