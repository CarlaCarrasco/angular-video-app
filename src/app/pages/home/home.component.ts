import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private videoService: VideosService) { }

  ngOnInit(): void {
    this.videoService.getAllVideos().subscribe((data) => {
      console.log(data);
      console.log(data.length)
    });
  }

}
