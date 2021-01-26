import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settigns-form',
  templateUrl: './user-settigns-form.component.html',
  styleUrls: ['./user-settigns-form.component.css']
})
export class UserSettignsFormComponent implements OnInit {

originalUserSettings :UserSettings = {
  name: "ismail",
  password : "American1",
  emailOffers:true,
  interfaceStyle:'dark',
  subscriptionType:'Annualy',
  notes: "Just some notes..."
}

userSettings :UserSettings = {... this.originalUserSettings}
  constructor() { }

  ngOnInit(): void {
  }

}
