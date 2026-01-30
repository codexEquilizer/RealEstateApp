import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-welcome',
  imports: [],
  templateUrl: './chat-welcome.component.html',
  styleUrl: './chat-welcome.component.css',
})
export class ChatWelcomeComponent {
  defaultMessages: string= 'I am KP, the Facility Virtual Assistant! I answer questions about facility inventory and operations.';
  
  helperText: string = 'What can I help you with today?';
}
