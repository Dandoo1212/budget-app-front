import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Receipt} from './receipt';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


enum ENDPOINTS {
  RECEIPT = 'receipts',
  RECEIPT_SLASH = 'receipt/'
}

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private http: HttpClient) {
  }

  public postReceipt(receipt: Receipt): Observable<Receipt> {
    return this.http.post<Receipt>(environment.api.url + ENDPOINTS.RECEIPT, receipt);
  }

  public getAllReceipts(): Observable<Receipt[]> {
    return this.http.get<Receipt[]>(environment.api.url + ENDPOINTS.RECEIPT);
  }

}
