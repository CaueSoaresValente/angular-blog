import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BigCard} from './componentes/big-card/big-card.js';
import {MenuBar} from './componentes/menu-bar/menu-bar.js';
import {MenuTitle} from './componentes/menu-title/menu-title.js';
import {SmallCard} from './componentes/small-card/small-card.js';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BigCard, MenuBar, MenuTitle, SmallCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-blog';
}
