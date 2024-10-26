import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CATEGORIES, Video, VideosService } from '../../services/videos.service';
import { Observable } from 'rxjs';
import { VideoComponent } from '../../components/video/video.component';

@Component({
  selector: 'app-tv-series',
  standalone: true,
  imports: [ CommonModule, VideoComponent ],
  templateUrl: './tv-series.component.html',
  styleUrl: './tv-series.component.css'
})
export class TvSeriesComponent implements OnInit {
  tvSeries$: Observable<Video[]>;
  
  constructor(private videoService: VideosService) { 
    this.tvSeries$ = this.videoService.getAllVideosBy(CATEGORIES.TVShows);
  }

  ngOnInit() {

  }

}
