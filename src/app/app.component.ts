import { UsersService } from './services/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private usersService: UsersService ){

    this.usersService.getUser()
    .subscribe( res => {
      console.log(res);
    } )

  }


}
