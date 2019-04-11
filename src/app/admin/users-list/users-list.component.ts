import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  errorMessage: string;
  
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
        
      },
      error => this.errorMessage = <any>error,
    );
  }

}
