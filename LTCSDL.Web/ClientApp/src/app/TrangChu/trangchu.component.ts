import { Component, Inject, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css'],
  
})


export class TrangChuComponent {
  private isCheck : boolean = false;

  user : any = {
    id : 0,
    username : "",
    password : "",
    roleid : 0,
    ho : "",
    ten : "",
  }

  formlogin : any = {
    username : "",
    password : "",
  }

  constructor(
    private http: HttpClient, @Inject('BASE_URL') baseUrl: string
    ) {
      
    }
  

    login(){
      var x = this.formlogin;
      if(x.username == ""){
        alert("Bạn chưa nhập thông tin tài khoản");
      }
      else if(x.password == ""){
        alert("Bạn chưa nhập thông tin mật khẩu");
      }
      else{
        this.http.post('https://localhost:44391/' + 'api/DangNhap/get-by-userName',x).subscribe(
          result =>{
            var res:any = result;
          if(res.data != null){
            this.user = res.data;
            this.isCheck = true;
            console.log(res.data);
            
          }else{
            alert("Tài Khoản hoặc mật khẩu không đúng");
          }
        }, error =>{
          console.error(error);
          alert(error);
          }
        );   
      }
     
    }
    
  
}