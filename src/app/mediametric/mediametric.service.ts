import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MediametricService {
  constructor(private http: Http) {}

  testRequest() {
    return this.makeRequest(`User/GetUser`);
  }

  private makeRequest(path: string) {
    let url = `http://localhost:61461/${ path }`;
    return this.http.post(url, {})
      .map((res) => res.json());
  }
}
