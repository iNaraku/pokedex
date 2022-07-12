import { Component, OnInit } from '@angular/core';
import { RootObject } from './models/pokedex.model';
import { PokeapiService } from './services/pokeapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private pokeapiService: PokeapiService) {}
  
  ngOnInit(): void {
    this.pokeapiService.get().subscribe((result) => {
      console.log(result);
    });
  }
}
