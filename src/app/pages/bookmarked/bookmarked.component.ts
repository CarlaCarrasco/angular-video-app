import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Video, VideosService } from '../../services/videos.service';
import { VideoComponent } from '../../components/video/video.component';

@Component({
  selector: 'app-bookmarked',
  standalone: true,
  imports: [ VideoComponent, CommonModule ],
  templateUrl: './bookmarked.component.html',
  styleUrl: './bookmarked.component.css'
})
export class BookmarkedComponent {
  bookmarkedVideos$: Observable<Video[]>;

  constructor(private videoService: VideosService) {
    this.bookmarkedVideos$ = this.videoService.getBookmarkedVideos();
  }

}
