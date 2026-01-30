import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class CopilotService {

  private endpoint =
    `https://api.copilot.microsoft.com/agents/${environment.copilot.agentId}/messages`;

  constructor(private http: HttpClient) {}

  sendMessage(
    message: string,
    userId: string,
    userName: string
  ) {

    const headers = new HttpHeaders({
      Authorization: `Bearer ${environment.copilot.accessToken}`,
      'Content-Type': 'application/json'
    });

    const body = {
      type: 'message',
      text: message,
      from: {
        id: userId,
        name: userName
      }
    };

    return this.http.post(this.endpoint, body, { headers });
  }
}