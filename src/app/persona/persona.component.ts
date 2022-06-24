import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  personasList: Persona[];

  constructor( private personaService: PersonaService) {}

  ngOnInit() {
    this.personaService.getPersonas().subscribe(
      p => this.personasList = p
    );
  }

}
