import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //using signals
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath=computed(()=>'assets/users/'+this.selectedUser().avatar)
  
  //using zone.js
  // get impagePath(){
  //   return 'assets/users/'+ this.selectedUser.avatar
  // }

  onSelectUser(){
    // const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIndex])
  }

}
