import { MissionsServicesService } from './missions-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  service:MissionsServicesService;
  constructor() { }

  ngOnInit() {
  }

}
