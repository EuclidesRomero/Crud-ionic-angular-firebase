import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SongService } from '../Services/Song/song.service';


@Component({
  selector: 'app-new-song',
  templateUrl: './new-song.page.html',
  styleUrls: ['./new-song.page.scss'],
})
export class NewSongPage implements OnInit {
  formulario: FormGroup
  constructor(private songServide: SongService) { 
    this.formulario = new FormGroup ({
      title: new FormControl(),
      artist: new FormControl(),
      album: new FormControl(),
      duration: new FormControl()
    })
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void{
  }

  async onSubmit() {
   console.log(this.formulario.value)
   const response = await this.songServide.addSong(this.formulario.value);
   console.log(response)
  }
}
