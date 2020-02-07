import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Questionnaire } from './model/questionnaire';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class logEntryComponent implements OnInit {
  //logEntries: Array<LogEntry>;
  questionnaires: Array<Questionnaire>;
  location: Location;
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    const urlQuestionnaires = window.location.origin + '/Diagnostissimo/questionnaires';
    this.http.get<Array<Questionnaire>>(urlQuestionnaires).subscribe(data => {
      this.questionnaires = data;
    }, error => console.error('Error while retrieving Questionnaires!', error));
  }
}
