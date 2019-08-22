import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

 const headers=  new HttpHeaders({
   'Content-Type': 'application/json',
   'x-auth-token': '72312'
  });
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  private users;
  private searchFirstname: string;
  private searchLastname: string;
  private searchEmail: string;
  private searchApikey: string;

  constructor(public httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(`http://api.atcreative.fr/api/admin/users`, {headers}).subscribe((res: Response) => console.log(this.users = res));
  }
  deleteUser(id) {
    this.httpClient.delete(`http://api.atcreative.fr/api/admin/users/profile/remove/${id}`, { headers}).subscribe((res: Response) => {
      console.log(res);
      // tslint:disable-next-line:no-shadowed-variable
      this.httpClient.get(`http://api.atcreative.fr/api/admin/users`, { headers}).subscribe((res: Response) => console.log(this.users = res));
    });
  }
}
