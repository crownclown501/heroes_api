// heroes-app\src\app\heroes\dc\hero-list\hero-list.component.ts

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, tap, startWith } from 'rxjs/operators';
import { Hero, HeroDataService } from '../../../core/heroe-data.service';
import { HttpClient } from '@angular/common/http';
import DcNam from '../../../core/json/dc.json'

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
  DcNames: string[] = [];

  constructor(private heroService:HeroDataService, private http: HttpClient){}
  ngOnInit(): void {
    this.DcNames = DcNam.map(n => n.toLowerCase().trim());
    // this.cargarHeroesDc();
    this.busqueda();
  }

  // cargarHeroesDc(){
  //   this.heroService.searchHeroes('man').subscribe(
  //     results => {
  //       this.heroes = results.filter(hero =>
  //         this.DcNames.includes(hero.name.toLowerCase().trim()));
  //       this.filtroheroes = this.heroes;
  //     });
  // }

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
    ).subscribe( results => {
      this.heroes = results.filter(hero =>
        this.DcNames.includes(hero.name.toLowerCase().trim()));
        this.filtroheroes  = this.heroes;
        this.loading = false;
    });
  }

  displayHeroName(hero:Hero): string {
    return hero && hero.name ? hero.name : '';
  }
}
