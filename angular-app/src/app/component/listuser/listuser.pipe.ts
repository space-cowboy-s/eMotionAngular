import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class ListusersPipe implements PipeTransform {

  transform(users: any, searchFirstname: string, searchEmail: string, searchApikey: string): any {
    if (users && users.length) {
      return users.filter( user => {
        if (searchFirstname && user.firstname.toLowerCase().indexOf((searchFirstname.toLowerCase())) === -1 ) {
          return false;
        }
        if (searchEmail && user.email.toLowerCase().indexOf((searchEmail.toLowerCase())) === -1 ) {
          return false;
        }
        if (searchApikey && user.apiKey.toLowerCase().indexOf((searchApikey.toLowerCase())) === -1 ) {
          return false;
        }
        return true;
      });
    }
    if (!users) {
      return users;
    }
  }
}
