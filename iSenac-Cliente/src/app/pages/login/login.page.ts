import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/interface/login'; 
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { ToastService } from './../../services/toast.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  username!: string;
  password!: string;

  constructor(
    private http: HttpClient,
    public navCtrl: NavController,
    ) { }


  
  ngOnInit(): void {
  }



  onSubmit() {
    this.logar(this.username, this.password);
  }

  logar(usuario: string, senha: string) {
    const url = 'http://localhost:3000/usuario/login';
    const body = JSON.stringify({ usuario, senha });
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');      
    this.http.post(url, body, {headers: headers}).subscribe(
      (response) => {
        // handle successful response
        console.log('Usuário autenticado.', response)
        console.log("Dados Enviados", body);
        console.log("Url Enviados", url);
        console.log("Headers Enviados", headers);    
      },
      () => {
        // handle error
        this.navCtrl.navigateForward('/inicio');
      }
    );
  }

}

/* 26/01/2023 
constructor(
    private formBuilder:  FormBuilder,
    private usersService: UsuarioService,
    private router: Router,
    private toastService: ToastService,
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    //this.validaForm();
        this.formulariologin = this.formBuilder.group({
          usuario: ['', Validators.required],
          senha: ['', Validators.required]
      });

  }
  formulariologin!: FormGroup;

  login: Login = {
    usuario: "",
    senha: ""
  }

  logar() {
    const url = 'http://localhost:3000/usuario/login';
    const body = JSON.stringify({usuario: this.formulariologin.value.usuario,
                                  senha: this.formulariologin.value.senha});
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');     
    this.http.post(url, body, {headers: headers}).subscribe(
            () =>
                console.log('Usuário autenticado.'),
            err => {
                console.log("Erro", err)                    
                this.formulariologin.reset();
            }
        );
*/
 /* logar() {
    if (this.validateInputs()){
    const url = 'http://localhost:3000/usuario/login';
    const body = JSON.stringify({usuario: this.login.usuario,
                                 senha: this.login.senha});
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    this.http.post(url, body, {headers: headers}).subscribe(
        (data) => {
            console.log(data);
        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            } else {
                console.log('Server-side error occured.');
            }
        }
    );
  }
}*/
 /*validaForm(){
    this.formulariologin = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }*/
  /*validateInputs() {
    console.log(this.login);
    let usuario = this.login.usuario.trim();
    let senha = this.login.senha.trim();
    return (
      this.login.usuario &&
      this.login.senha &&
      usuario.length > 0 &&
      senha.length > 0
    );
  }*/
  /*

  let header = new HttpHeaders({ "Authorization": "Bearer "+token});

   const requestOptions = {  headers: header};                                                                                                                                                                            

    return this.http.get<any>(url, requestOptions)
        .toPromise()
        .then(data=> {
            //...
            return data;
    });


   logar(){
    const data = {
    usuario: this.login.usuario,
    senha: this.login.senha
    };
    this.usersService.login(data)
    .subscribe({
    next: (res) => {
    console.log(res);
    },
    error: (e) => console.error(e)
    });
  }
  
  validateInputs() {
    console.log(this.login);
    let usuario = this.login.usuario.trim();
    let senha = this.login.senha.trim();
    return (
      this.login.usuario &&
      this.login.senha &&
      usuario.length > 0 &&
      senha.length > 0
    );
  }

  logar(){
    if (this.validateInputs()) {
      this.usersService.login(this.login).subscribe(
        (res: any) => {
          if (res.userData) {
            this.router.navigate(['inicio']);
          } else {
            this.toastService.presentToast('Usuário ou senha incorretos.');
          }
        },
        (error: any) => {
          this.toastService.presentToast('Problema de conexão.');
        }
      );
    } else {
      this.toastService.presentToast(
        'Coloque o usuário ou senha.'
      );
    }
  }

  cadastro(): void{
    const data = {
    usuario: this.usuario.usuario,
    nome: this.usuario.nome,
    telefone: this.usuario.telefone,
    email: this.usuario.email,
    senha: this.usuario.senha
    };
    this.usersService.create(data)
    .subscribe({
    next: (res) => {
    console.log(res);
    },
    error: (e) => console.error(e)
    });
  }
  */
