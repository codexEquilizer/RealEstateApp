import { Component } from '@angular/core';
import { CopilotService } from '../copilot.service';
import { ChatWelcomeComponent } from "../chatbot/chat-welcome/chat-welcome.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ChatMessage {
  from: 'user' | 'agent';
  text: string;
  time: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ChatWelcomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  constructor(private copilot: CopilotService) {}


  userId = 'demo-user-001';
  userName = 'Demo User';

  message = '';

  helperText: string = 'What can I help you with today?';


  // ✅ THIS WAS MISSING
  /* messages: ChatMessage[] = [
    {
      from: 'agent',
      text: 'Welcome to Facility Services. How can I help you today?',
      time: 'Just now'
    }
  ]; */
  messages: ChatMessage[] = [];


  send() {
    if (!this.message.trim()) return;

    // User message
    this.messages.push({
      from: 'user',
      text: this.message,
      time: 'Just now'
    });

    const userText = this.message;
    this.message = '';

    // Copilot call
    this.copilot.sendMessage(userText, this.userId, this.userName)
      .subscribe({
        next: (res: any) => {
          const reply =
            res?.activities?.[0]?.text ||
            'Sorry, I could not process that request.';

          this.messages.push({
            from: 'agent',
            text: reply,
            time: 'Just now'
          });
        },
        error: () => {
          this.messages.push({
            from: 'agent',
            text: 'There was an error contacting Facility Services.',
            time: 'Just now'
          });
        }
      });
  }
}
