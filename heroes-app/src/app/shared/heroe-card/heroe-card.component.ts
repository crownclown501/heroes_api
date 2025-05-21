// heroes-app\src\app\shared\heroe-card\heroe-card.component.ts
import { Component, Input } from '@angular/core';
import {Hero} from '../../core/heroe-data.service'
@Component({
  selector: 'app-heroe-card',
  standalone: false,
  templateUrl: './heroe-card.component.html',
  styleUrl: './heroe-card.component.scss'
})
export class HeroeCardComponent {
  @Input() hero!: Hero;
  @Input() universe!: string;
}
