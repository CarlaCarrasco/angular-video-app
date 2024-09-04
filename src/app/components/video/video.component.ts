import { Component, Input } from '@angular/core';
import { Video } from '../../services/videos.service';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  @Input() video!: Video;

  movieIcon = 'assets/icon-category-movie.svg';
  tvIcon = 'assets/icon-category-tv.svg';



}
