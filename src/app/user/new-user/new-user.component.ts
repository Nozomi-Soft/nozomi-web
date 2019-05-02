import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { NgForm } from '@angular/forms';
import { Country } from 'src/app/model/country';
import { Language } from 'src/app/model/language';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  countries: Country[] = [new Country('MX', 'Mexico'),new Country('US', 'USA')];
  languages: Language[] = [new Language('en', 'English'), new Language('es', 'Spanish')];
  user: User = new User();
  countryError: boolean;
  languageError: boolean;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  validateCountry(value) : boolean {
    if(value === ''){
      return this.countryError = true;
    }
  
    return this.countryError = false;
  }

  validateLang(value) : boolean {
    if(value === ''){
      return this.languageError = true;
    }

    return this.languageError = false;
  }

  btnCancelClick(){
    this.router.navigateByUrl('/user');
  }

  submitForm(form: NgForm) {
    console.log(form);
    if(this.validateLang(this.user.location.language))
      return;

    if(this.validateCountry(this.user.location.country))
      return;

    if(form.invalid)
      return;

    if(form.controls['password'].invalid) {
      
    }

    this.user.roles = ['USER'];
    this.userService.createUser(this.user)
        .subscribe(
          data => {
            console.log(data);
            this.successMessage = 'User created!';
          },
          err => {
            console.log(err);
            this.errorMessage = err;
          }
        );
  }

}
