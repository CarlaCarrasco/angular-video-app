import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CATEGORIES, Video, VideosService } from '../../services/videos.service';
import { VideoComponent } from '../../components/video/video.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [ VideoComponent, CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  movies$: Observable<Video[]>;

  constructor(private videoService: VideosService) {
    this.movies$ = this.videoService.getAllVideosBy(CATEGORIES.Movies);
  }

  ngOnInit() {

  }

}
