import { Component, OnInit, Input } from '@angular/core';
import { UserLogin } from '../user-login';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  @Input() userLogin = new UserLogin;

  constructor(
    private userService: UserLoginService
  ) { }

  ngOnInit() {
  }

  login() {
    console.log(this.userLogin.name);
    console.log(this.userLogin.password);
    this.userService.checkLogin(this.userLogin).subscribe(bla => console.log(bla));
  }
}
