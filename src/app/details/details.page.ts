import { Component, OnInit } from '@angular/core';
import { SongService } from '../Services/Song/song.service';
import { Router } from '@angular/router';
import Song from 'src/interfaces/song.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private songService: SongService, private router: Router) { }
  songList: any = [];
  
  ngOnInit() {
    this.songService.getSonList().subscribe((songs) => {
      this.songList = songs;
    });
  }

  onClickUpdate(id: string){
    this.router.navigate(['/update', id]);
  }
   async onclickDelete(song: Song) {
   const response = await this.songService.deleteSong(song);
   console.log(response)
  }
  

}
