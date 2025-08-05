import { Component } from '@angular/core';
import {BigCard} from '../../componentes/big-card/big-card';
import {MenuBar} from '../../componentes/menu-bar/menu-bar';
import {MenuTitle} from '../../componentes/menu-title/menu-title';
import {SmallCard} from '../../componentes/small-card/small-card';

@Component({
  selector: 'app-home',
  imports: [BigCard, MenuBar, MenuTitle, SmallCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
