// heroes-app\src\app\heroes\marvel\hero-list\hero-list.component.ts

import { Component, OnInit,viewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, tap, startWith } from 'rxjs/operators';
import { Hero, HeroDataService } from '../../../core/heroe-data.service';
import { HttpClient } from '@angular/common/http';

import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import marvelNames from '../../../core/json/marvel_all.json';

import { MatCardModule } from '@angular/material/card';
import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-hero-list',
  standalone: false,
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss'
})

export class HeroListComponent implements OnInit {

  controlbusqueda = new FormControl<string | Hero>('');
  heroes: Hero[] = [];
  filtroheroes : Hero[] = [];
  loading = false;
  MarvNames: string[] = [];
  selectedHero: Hero | null = null;
  router: any;
  constructor(private heroService: HeroDataService) {}


  ngOnInit(): void {
    this.MarvNames = marvelNames.map(n => n.toLowerCase().trim());
    // this.cargarHeroesMarvel();
    this.busqueda();
  }


  // cargarHeroesMarvel(){
  //   this.heroService.searchHeroes('sp').subscribe(
  //     results => {
  //       this.heroes = results.filter(hero =>
  //         this.MarvNames.includes(hero.name.toLowerCase().trim()));
  //       this.filtroheroes  = this.heroes;
  //     });
  //   }

busqueda(){
  this.controlbusqueda.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    tap(() => this.loading = true),
    switchMap(value => {
      const heroValue = value as Hero;
      const name = typeof value === 'string' ? value : heroValue?.name || '';
      return this.heroService.searchHeroes(name.trim() === '' ? 'a' : name);

    })
  ).subscribe(results => {
    this.heroes = results.filter(hero =>
      this.MarvNames.includes(hero.name.toLowerCase().trim()));
      this.filtroheroes  = this.heroes;
      this.loading = false;
    });
  }
   onSelectHero(hero: Hero) {
    this.selectedHero = hero;
    // Aquí puedes agregar navegación si quieres:
    this.router.navigate(['/heroes', 'marvel', hero.id]);
  }

  onEnterPressed() {
  // se ocultan las preferencias de auto
  this.filtroheroes = [];
  }
  displayHeroName(hero: Hero): string {
    return hero && hero.name ? hero.name : '';
  }
}

