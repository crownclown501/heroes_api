// heroes-app\src\app\heroes\marvel\detalles\detalles.component.ts

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero, HeroDataService } from '../../../core/heroe-data.service';
import { forkJoin } from 'rxjs';

import marvelRivals from '../../../core/json/marvel_rivals.json';
import marvel from '../../../core/json/marvel.json'
@Component({
  selector: 'app-detalles',
  standalone: false,
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.scss'
})
export class DetallesComponent {
  hero!: Hero;
  mostrarRivales = false;
  rivals: Hero[] = [];

  // Asignamos el JSON
  private rivalsMap: { [heroName: string]: string[] } = marvelRivals;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroDataService
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name')!;
    this.heroService.getHeroById(name).subscribe(h => this.hero = h);
  }

  toggleRivals() {
    this.mostrarRivales = !this.mostrarRivales;
    if (this.mostrarRivales) {
      this.loadRivals();
    }
  }

  loadRivals() {
    if (!this.hero) return;

    const rivalNames = this.rivalsMap[this.hero.name] || [];
    if (rivalNames.length === 0) {
      this.rivals = [];
      return;
    }

    const rivalObservables = rivalNames.map(name => this.heroService.searchHeroes(name));

    forkJoin(rivalObservables).subscribe(resultsArrays => {
      const rivalsFound: Hero[] = [];

        //en caso de que solo querramos agregar uno
        resultsArrays.forEach((heroesArray, index) => {
        const rivalName = rivalNames[index].toLowerCase();
        const rival = heroesArray.find(h => h.name.toLowerCase() === rivalName);
        if (rival) rivalsFound.push(rival);
      });

      this.rivals = rivalsFound;
    }, error => {
      console.error('Error cargando rivales:', error);
      this.rivals = [];
    });
  }

  compareStats(hero1: Hero, hero2: Hero): string {
    const stats = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'] as const;
    const strength1 = stats.reduce((sum, stat) => sum + (parseInt(hero1.powerstats[stat]) || 0), 0);
    const strength2 = stats.reduce((sum, stat) => sum + (parseInt(hero2.powerstats[stat]) || 0), 0);

    if (strength1 > strength2) {
      return `${hero1.name} gana`;
    }
    if (strength1 < strength2) {
      return `${hero2.name} gana`;
    }
    return 'Empate';
  }

}
