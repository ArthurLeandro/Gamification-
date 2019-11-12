import { MissionManager } from '../Classes/mission-manager';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionsServicesService {
  manager:MissionManager;
  constructor() { }
}
