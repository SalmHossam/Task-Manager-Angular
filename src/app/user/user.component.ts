import { Component,computed,EventEmitter,input,Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)
 
//both (alieas)type and inteface are correct 
type User={
  id:string;
  name:string;
  avatar:string;
}

// interface User{
//   id:string;
//   name:string;
//   avatar:string;
// }
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //using signals
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
 //using signals 
  // imagePath=computed(()=>{
  //   return'assets/users/'+ this.avatar()
  // });
  
  //using zone.js
  get imagePath(){
    return 'assets/users/'+ this.user.avatar
  }

  //@Input Decrator
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  // @Input()id !:string;

  //instead of declaring each variable separate we can declare 
  //in form of object contains all variables
  @Input({required:true})user!:User;
  //input using signals
  // avatar = input.required<string>();
  // name = input.required<string>();
  
  //@Output Decrator
  //adding <string> to ensure that the value is string 
  @Output() select = new EventEmitter<string>();

  //output function it's not a signal like input
  //select=output<string>();

  onSelectUser(){
    // const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)
    // this.selectedUser.set(DUMMY_USERS[randomIndex])
    
    //while using event emmiter we can call emit function
    this.select.emit(this.user.id);
  }

}
