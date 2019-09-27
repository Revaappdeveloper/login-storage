import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-storage',
  templateUrl: './login-storage.component.html',
  styleUrls: ['./login-storage.component.css']
})
export class LoginStorageComponent implements OnInit {
  loginCredentials = {
    username:"RevathyAshok",
    password: "abcd1234"
  }

  constructor() { }

  ngOnInit() {
  }
  check(){
    var checkBox= document.getElementById("remember-box");
    // if(checkBox.checked==true){

    // }
  }
  saveData(){
    console.log(this.loginCredentials);
  }
}
