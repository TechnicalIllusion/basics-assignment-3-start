import { Component, OnInit } from '@angular/core';
import { LogEntry } from '../Common/LogEntry';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  inputUsername = '';
  user = 'testuser';
  password = 'password';
  userPassword = '';
  details = '';
  dateTime: Date;
  log: LogEntry;
  logEntries: LogEntry[] ;

  constructor() { }

  ngOnInit() {
  }

  validatePassword() {
    return (this.inputUsername === this.user && this.password === this.userPassword);
  }

  getDetails() {
    if (this.validatePassword()) {
      this.dateTime = new Date();
      this.log = new LogEntry(this.inputUsername, 'success', this.dateTime);
      this.details = 'Details about ' + this.inputUsername + ' ' + this.dateTime;
      this.logEntries.push(this.log);
    } else {
      this.dateTime = new Date();
      this.details = 'Login failure recorded';
      this.log = new LogEntry(this.inputUsername, 'failure', this.dateTime);
      this.logEntries.push(this.log);
    }
  }
}