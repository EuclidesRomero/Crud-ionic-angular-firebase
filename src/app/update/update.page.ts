import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SongService } from '../Services/Song/song.service';
import Song from 'src/interfaces/song.interface';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  songData: any;
  songForm: FormGroup; 
  songId: any;
  Onesong: any;
  
  song: Song = {
    title: '',
    artist: '',
    album: '',
    duration: ''
  };

  constructor(
    private songServ: SongService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastCrtl: ToastController,
    private modalCtrl: ModalController
    ) {
      this.songForm = this.formBuilder.group({
        title: [''],
        artist: [''],
        duration: ['']
      });
    }

  ngOnInit() {
  let id = this.route.snapshot.paramMap.get('id');
  this.songServ.getSongById(id);
  if (id) {
    this.songServ.getSonDetail(id).then(doc => {
      if (doc) {
        this.Onesong = doc.data();
      } else {
        console.log("No se encontró");
      }
    }).catch(error => {
      console.log("Error obteniendo el archivo", error);
    });
  }
}

 async updateSong(){
    this.songServ.updateSong(this.Onesong);
    const toast = await this.toastCrtl.create({
      message: "Canción actualizada",
      duration: 2000
    })
    toast.present();
    this.modalCtrl.dismiss();
  }
  }


