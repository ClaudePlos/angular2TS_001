import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template:`
	  <h1>{{title}}</h1>
	  <h2>{{hero.name}} details!</h2>
	  <div><label>id: </label>{{hero.id}}</div>
	  <div>
	  	<label>name: </label>{{hero.name}}
	  	<br>
	  	<input value="{{hero.name}}" placeholder="name"> <!-- nie odświaża dane -->
	  	<br>
	  	<input [(ngModel)]="hero.name" placeholder="name"> <!-- odświaża dane -->
	  </div>

		<h2>My Heroes</h2>
		<ul class="heroes">
		  <li>
		    <!-- each hero goes here -->
		  </li>
		</ul>

	  
	  `
})
export class AppComponent { 
	title = 'Tour of Heroes';

	public heroes = HEROES;
  	
    var HEROES: Hero[] = [
	  { "id": 11, "name": "Mr. Nice" },
	  { "id": 12, "name": "Narco" },
	  { "id": 13, "name": "Bombasto" },
	  { "id": 14, "name": "Celeritas" },
	  { "id": 15, "name": "Magneta" },
	  { "id": 16, "name": "RubberMan" },
	  { "id": 17, "name": "Dynama" },
	  { "id": 18, "name": "Dr IQ" },
	  { "id": 19, "name": "Magma" },
	  { "id": 20, "name": "Tornado" }
	];



}


