import { Injectable } from '@angular/core';
import { InvoicesData ,Settings} from './mock-source';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  constructor() { }

  getInvoices(): Observable<any[]> {
    return of(InvoicesData);
  }

  getSetting(): Observable<any> {
    return of(Settings);
  }

}
