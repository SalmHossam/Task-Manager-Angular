import { Component,computed,EventEmitter,input,Input, Output } from '@angular/core';
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
 //using signals 
  // imagePath=computed(()=>{
  //   return'assets/users/'+ this.avatar()
  // });
  
  //using zone.js
  get imagePath(){
    return 'assets/users/'+ this.avatar
  }

  //@Input Decrator
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
  @Input()id !:string;
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

    this.select.emit(this.id);
  }

}
