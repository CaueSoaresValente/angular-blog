import { Component, Input} from '@angular/core';
import { ActivatedRoute, RouterLink} from '@angular/router';
import { dadosFake } from '../../dados/dadosFake';

@Component({
  selector: 'app-content',
  imports: [RouterLink,],
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
  private id:string | null = "0"

  constructor(
   private route:ActivatedRoute
  ){}
    
   ngOnInit(): void{
    
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setDadosPeloId(this.id)
   }
  
  setDadosPeloId(id:string | null ){
    const resul = dadosFake.filter(article => article.id.toString() == id)[0]
 
    this.tituloContentontent = resul.title
    this.paragrafoContent = resul.description
    this.fotocontent = resul.photo
  }

  

}
