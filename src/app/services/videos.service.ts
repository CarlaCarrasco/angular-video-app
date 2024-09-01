import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VideosService {
  private videoJson = 'assets/data.json';

  constructor(private http: HttpClient) { }

  // TODO: Create interface for video
  getAllVideos(): Observable<Video[]> {
    return this.http.get<any>(this.videoJson);
  }

// Get all by filtering
getAllVideosBy(option: CATEGORIES): Observable<Video[]> {
  return this.getAllVideos().pipe(map((videos) => videos.filter(video => video.category === option)));
}

// Get bookmarked

// Set bookmarked video
}

export interface Video { 
  title: string;
  thumbnail: {};
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export enum CATEGORIES {
  Movies = 'Movies',
  TVShows = 'TVShows'
}