import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VideosService {
  allVideos?: Video[];

  constructor(private http: HttpClient) { }

  getAllVideos(): Observable<Video[]> {
    if (this.allVideos) {
      return of(this.allVideos);
    }

    return this.http.get<Video[]>(`/api/videos`);
  }

// Get all by filtering
getAllVideosBy(option: CATEGORIES): Observable<Video[]> {
  return this.getAllVideos().pipe(map((videos) => videos.filter(video => video.category === option)));
}

getAllVideosByTrending(): Observable<Video[]> {
  return this.getAllVideos().pipe(map((videos) => videos.filter(video => video.isTrending)));
}

// Get bookmarked
getBookmarkedVideos(): Observable<Video[]> {
  return this.getAllVideos().pipe(map((videos) => videos.filter(video => video.isBookmarked)));
}

// Set bookmarked videos
setBookmarked(video: Video): Observable<Video[]> {
  return this.http.put<Video[]>(`/api/videos/${video.id}`, { 
    ...video,
   },
    { headers: { 'Content-Type': 'application/json' } }
    ).pipe(
      tap((videos) => {
        this.allVideos = videos;
        console.log(videos);
      }),
      catchError((err) => {
        console.error('Error setting bookmarked video', err);
        return of([]);
      })
    );
  }

}

export interface thumbnail {
  trending: any;
  regular: any;
}

export interface Video { 
  title: string;
  id: number;
  thumbnail: thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export enum CATEGORIES {
  Movies = 'Movie',
  TVShows = 'TV Series'
}