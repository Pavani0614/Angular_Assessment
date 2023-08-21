import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent { constructor(private fb:FormBuilder){}
public login!:FormGroup;
ngOnInit(): void {

 

throw new Error('Method not implemented.');

 

}

 

loginForm = this.fb.group({

 

username:['',[Validators.required]],

 

password:['',[Validators.minLength(6)]]

 

});

 

preview:string='';

 

save()

 

{

 

this.preview=JSON.stringify(this.login.value);

 

}

 

 

 

get username()

 

{

 

return this.loginForm.get('username');

 

}

alertbox():void

 

  {

 

    alert("Login successfully")

 

  }

}

 

 

 