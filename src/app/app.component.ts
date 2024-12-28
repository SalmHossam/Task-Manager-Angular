import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstProject';
  users=DUMMY_USERS;

  //the value of selected user can be empty 
  selectedUserId?:string;
track: any;
  
 /**
 * Getter: selectedUser
 * 
 * This getter dynamically retrieves the currently selected user object
 * from the `users` array based on the `selectedUserId`.
 * 
 * - It uses the `Array.prototype.find()` method to search for the first user 
 *   object in the `users` array whose `id` matches the `selectedUserId`.
 * - The non-null assertion operator (`!`) is used to assure the TypeScript 
 *   compiler that the returned value will not be `null` or `undefined`. 
 *   Note: This can cause runtime errors if no matching user is found, so 
 *   proper error handling should be considered.
 * 
 * @returns {Object} The user object with the matching `id`.
 * 
 * Example:
 * If `users` = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }] and 
 * `selectedUserId` = 2, this getter will return { id: 2, name: 'Bob' }.
 * 
 */
get selectedUser() {
  return this.users.find(user => user.id === this.selectedUserId)!;
}


//dynamically change user id on select the user
  onSelectUser(id:string){
    this.selectedUserId=id;
  
  }
}
