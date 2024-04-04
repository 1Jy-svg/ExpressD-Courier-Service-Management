import { CommonModule } from '@angular/common';
import { Component,ViewChild,inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc,collection } from 'firebase/firestore';
import { FormBuilder, FormControl, FormGroup,FormsModule,NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-sidepane',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './sidepane.component.html',
  styleUrl: './sidepane.component.css'
})
export class SidepaneComponent {

  @ViewChild("detailform") userdetailform:any;
  firestore:Firestore = inject(Firestore);
  detailsform!:FormGroup;
  constructor(private fb:FormBuilder){
    this.detailsform = this.fb.group({
      pincode1: new FormControl('',[Validators.required]),
      pincode2: new FormControl('',[Validators.required]),
    });
  }
   addData():void{
    const acollection = collection(this.firestore,'angular17users');
    addDoc(acollection ,{
      'Sender_name':this.userdetailform.value.sender_name,
      'Sender_address':this.userdetailform.value.sender_address,
      'Sender_email':this.userdetailform.value.sender_email,
      'Receiver_name':this.userdetailform.value.receiver_name,
      'Receiver_address':this.userdetailform.value.receiver_address,
         'Receiver_email':this.userdetailform.value.receiver_email
         
         
    });
    }
  
onSubmit(){
  if(this.detailsform.valid){
     console.log(this.detailsform.value);
     alert(this.userdetailform.sender_address);
  }
  else{
    this.detailsform.markAllAsTouched();
  }
  this.addData();
}

isAdmin(){
  let status = localStorage.getItem('adminStatus')
  return true
}
}