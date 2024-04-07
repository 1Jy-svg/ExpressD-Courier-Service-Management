import { Component,OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { MapApiService } from '../map-api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private map:MapApiService) {}

  storeLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
       
        this.map.getPlaceName(latitude,longitude).subscribe((data:any) => {console.log(data)})
      }, (error) => {
        console.error('Error Code = ' + error.code + ' - ' + error.message);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }


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

