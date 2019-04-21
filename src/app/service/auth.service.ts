import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class AuthService {

postSubject = new Subject<any[]>();

private posts = [


];
  constructor() { }
}




