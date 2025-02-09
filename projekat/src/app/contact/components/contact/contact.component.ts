import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SendMessageService } from '../../services/sendMessage/send-message.service';
import { MessageDTO } from '../../../interface/messageDTO/message-dto';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private sendMsg:SendMessageService) {}

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
    });

  showResponse:boolean = false;
  isSent:boolean = false;

  onSubmit() {
    if(!this.contactForm.invalid) {
      //reset poruke
      this.showResponse = false;

      //DTO
      let messageDTO : MessageDTO = {
        name: String(this.contactForm.value.name),
        email: String(this.contactForm.value.email),
        message: String(this.contactForm.value.message)
      }

      this.sendMsg.send(messageDTO).then((data) => {
        this.showResponse = true;
        this.isSent = true;
        this.contactForm.reset();
      }).catch((error) => {
        this.showResponse = true;
        this.isSent = false;
      });
    }
  }
}
