import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';


@Component({
  selector: 'app-user-settigns-form',
  templateUrl: './user-settigns-form.component.html',
  styleUrls: ['./user-settigns-form.component.css']
})
export class UserSettignsFormComponent implements OnInit {

originalUserSettings :UserSettings = {
  name: "",
  password : "",
  emailOffers:true,
  interfaceStyle:'dark',
  subscriptionType:'Annualy',
  notes: "Just some notes..."
}

// originalUserSettings :UserSettings = {
//   name: "",
//   password : "",
//   emailOffers: null,
//   interfaceStyle: "",
//   subscriptionType: "",
//   notes:"",
// }

singleModel = "On";
startDate: Date;
mytime: Date ;

// Rating
  // max: number = 10;
  // rate: number = 7;
  // isReadonly: boolean = true;
  userRating=""

userSettings :UserSettings = {... this.originalUserSettings}
postError= false;
postErrorMessage = ''
subscriptionType = new Observable<string[]>();





  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscriptionType = this.dataService.getSubscriptionTypes()
    this.startDate = new Date();
    this.mytime = new Date();
    this.userRating
  }

onSubmit(form: NgForm){
  console.log('Submited', form.value)
  // if (form.valid){
  //   console.log("Submitted", form.valid)
  // this.dataService.postUserSettingsForm(this.userSettings).subscribe(
  //   result => console.log('Success', result),
  //   error => console.log('error', error)
  // )
  // }else{
  //   this.postError = true;
  //   this.postErrorMessage = "Please fix the above errors!"
  // }


}

onHttpError (errorResponse:any){
  console.log('error:', this.postErrorMessage);
  this.postError = true;
  this.postErrorMessage = errorResponse.error.errorMessage;
}



}
