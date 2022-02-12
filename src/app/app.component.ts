import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ssr';


  ngOnInit(): void {
    localStorage.setItem('test', 'test');

    console.log(localStorage.getItem('test'));

  }


}
