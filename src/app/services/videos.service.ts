import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private videoJson = 'assets/data.json';

  constructor(private http: HttpClient) { }

  // TODO: Create interface for video
  getAllVideos(): Observable<any> {
    return this.http.get<any>(this.videoJson);
  }
}
