import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VideosService {

  constructor(private http: HttpClient) { }

  // TODO: Create interface for video
  getAllVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`/api/videos`);
  }

// Get all by filtering
getAllVideosBy(option: CATEGORIES): Observable<Video[]> {
  return this.getAllVideos().pipe(map((videos) => videos.filter(video => video.category === option)));
}

// Get bookmarked

// Set bookmarked video
}

export interface thumbnail {
  trending: any;
  regular: any;
}

export interface Video { 
  title: string;
  thumbnail: thumbnail;
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