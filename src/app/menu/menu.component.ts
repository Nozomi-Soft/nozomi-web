import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
import { UserService } from 'src/app/service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private email: string;
  private password: string;
  errorMessage: string = '';
  private user: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.currentUser;
  }

  login(form: NgForm) : void{
    if( form.controls["email"].invalid || form.controls["password"].invalid) {
      this.errorMessage = "valid email or password are required";
      $('#loginBtn').click();
      return;
    }
    
    this.userService.getUser(this.email, 'email').subscribe(
      data => {
        console.log(data);
        this.user = data;
        this.userService.currentUser = data;
      },
      error => {
        console.log(error);
        this.errorMessage + "error";
      }
    );

  }

}
