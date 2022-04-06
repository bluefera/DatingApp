import { HttpClient } from '@angular/common/http';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;

constructor(private http: HttpClient){}

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    this.http.get('https://localhost:7003/api/users').subscribe
     (response =>{
      this.users = response;
    },
     error =>{
       console.log(error);
     })
  }
}
