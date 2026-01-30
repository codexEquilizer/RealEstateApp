import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWelcomeComponent } from './chat-welcome.component';

describe('ChatWelcomeComponent', () => {
  let component: ChatWelcomeComponent;
  let fixture: ComponentFixture<ChatWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatWelcomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatWelcomeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
