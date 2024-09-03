import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video, VideosService } from '../../services/videos.service';
import { VideoComponent } from '../../components/video/video.component';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VideoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  videos$:  Observable<Video[]>;
  videos: Video[] = [];

  constructor(private videoService: VideosService) { 
    this.videos$ = this.videoService.getAllVideos();
  }

  ngOnInit(): void {
    this.videoService.getAllVideos().subscribe((data) => {
      console.log(data);
      console.log(data.length)
      this.videos = data;
    });
  }

}
