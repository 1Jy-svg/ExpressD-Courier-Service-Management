import { Component,OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
    // Add JavaScript code here
    const btns=document.querySelectorAll(".nav-btn");
    const slides=document.querySelectorAll(".video-slide");
   
  var sliderNav=function(manual: number){
    btns.forEach((btn)=>{
      btn.classList.remove("active");
    });
    slides.forEach((slide)=>{
      slide.classList.remove("active");
    });
    
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
   
  }
  btns.forEach((btn,i ) => {
    btn.addEventListener("click",() => {
        sliderNav(i);
    });
  });
    console.log('Component initialized');
  }
}

