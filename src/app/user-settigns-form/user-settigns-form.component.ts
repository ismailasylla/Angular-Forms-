import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settigns-form',
  templateUrl: './user-settigns-form.component.html',
  styleUrls: ['./user-settigns-form.component.css']
})
export class UserSettignsFormComponent implements OnInit {

// originalUserSettings :UserSettings = {
//   name: "ismail",
//   password : "American1",
//   emailOffers:true,
//   interfaceStyle:'dark',
//   subscriptionType:'Annualy',
//   notes: "Just some notes..."
// }
originalUserSettings :UserSettings = {
  name: null,
  password : null,
  emailOffers:null,
  interfaceStyle:null,
  subscriptionType:null,
  notes: null,
}



userSettings :UserSettings = {... this.originalUserSettings}
  constructor() { }

  ngOnInit(): void {
  }

onSubmit(form: NgForm){
  console.log("Submitted", form.valid)
}

}
