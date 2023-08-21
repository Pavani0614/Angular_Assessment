// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-registration',
//   templateUrl: './registration.component.html',
//   styleUrls: ['./registration.component.css']
// })
// export class RegistrationComponent {

// }

import { Component } from '@angular/core';

import { NgForm, Validators } from '@angular/forms';

 

@Component({

  selector: 'app-registration',

  templateUrl: './registration.component.html',

  styleUrls: ['./registration.component.css']

})

export class RegistrationComponent {

  [x: string]: any;

 

  registration={

 

    firstname: ['',[Validators.required]],

 

    lastname:['',[Validators.required]],

 

    email: ['',[Validators.required]],

 

    password: ['',[Validators.required]]

 

    };

 

 

    onSubmit():void{

 

    console.log(JSON.stringify(this.registration,null,2));

 

    }

 

 

    onReset(form:NgForm):void{

 

    form.reset();

 

    }

 

    alertbox():void

 

  {

 

    alert("registered successfully")

 

  }


}

 

 

 

