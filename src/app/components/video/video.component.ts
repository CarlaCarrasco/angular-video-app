import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Video, VideosService } from '../../services/videos.service';


@Component({
  selector: 'app-video',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  @Input() video!: Video;

  movieIcon = 'assets/icon-category-movie.svg';
  tvIcon = 'assets/icon-category-tv.svg';

  constructor(private videoService: VideosService) { }


  public onBookmarkClick() {
    this.video.isBookmarked = !this.video.isBookmarked; 
    // make post request to bookmark video
    this.videoService.setBookmarked(this.video).subscribe((res) => {
      console.log('Bookmarked video', res);
    });

  }
}
