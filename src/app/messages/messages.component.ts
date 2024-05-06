import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

  /*Borrar seguro?*/
  confirmDelete() {
    if (confirm('¿Está seguro de que desea borrar el historial?')) {
      this.messageService.clear();
    }
  }
}                                                                     


