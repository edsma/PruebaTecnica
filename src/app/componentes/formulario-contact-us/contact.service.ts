import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { environment } from "src/environments/environment";
import { User } from "src/app/Modelos/UserInformation";
@Injectable({
  providedIn: 'root'
})

export class ContactService {
  constructor(private http: HttpClient) { }
  private apiUrl = environment.apiUrl + 'ContactUs';

  public sendEmail(actor: User){
    var algo =  this.http.post(this.apiUrl,actor );
    algo.subscribe(x => {
      console.log(x);
    })
  }
}



