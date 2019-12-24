import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LogEntry } from './model/LogEntry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  logEntries: Array<LogEntry>;
  location: Location;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const origin = window.location.origin + '/Diagnostissimo/logentries';
    this.http.get<Array<LogEntry>>(origin).subscribe(data => {
      this.logEntries = data;
    }, error => console.error('Error while retrieving log data!', error))
  }
}
