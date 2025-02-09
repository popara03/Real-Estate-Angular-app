import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageDTO } from '../../../interface/messageDTO/message-dto';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  constructor(private http:HttpClient) { }

  send(FormData:MessageDTO): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost/ngproj/backend/message/sendMessage.php', FormData).subscribe((data) => {
        resolve({
          message: data
        });
      }, (data) => {
        reject({
            message: data
        });
      });
    });
  }
}
