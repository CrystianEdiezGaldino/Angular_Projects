import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = "joaquim";
  title = 'Apreendendo Angular';
  
  userData = {
email: "email.test.com",
role: "ADM",


  };
}
