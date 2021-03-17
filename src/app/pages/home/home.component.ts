import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  closePopup()
  {
    document.getElementById('popup1').style.display="none";
  }
  openPopup()
  {
    document.getElementById('popup1').style.display="block";
  }

  
  ngOnInit(): void {

  }
}
  


