import { IonicPage, NavController } from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";

@IonicPage()
@decodeURIComponent({
    selector: 'page-login',
    templateUrl: 'login.html',
})

export class LoginPage {

    private loginForm: FormGroup;

    constructor(public navCtrl: NavController, private formBuilder:FormBuilder) {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.required]
        })
    }
}
