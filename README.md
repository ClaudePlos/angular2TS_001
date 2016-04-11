1. Startujemy z noda jako npm start



html tample



<div><label>id: </label>{{hero.id}}</div>
	  <div>
	  	<label>name: </label>{{hero.name}}
	  	<br>
	  	<input value="{{hero.name}}" placeholder="name"> <!-- nie odświaża dane -->
	  	<br>
	  	<input [(ngModel)]="hero.name" placeholder="name"> <!-- odświaża dane -->
	  </div>