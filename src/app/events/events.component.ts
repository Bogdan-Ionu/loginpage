import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  EventData = {name:'', description:'', date:''}
  errorMessage: any;
  events:any =[];
  constructor(private _eventService: EventService,
    private _router: Router) { }

  ngOnInit(): void {
    this._eventService.getEvents()
    .subscribe(
      res => this.events = res,
      err => console.log(err)
    )
  }


}
