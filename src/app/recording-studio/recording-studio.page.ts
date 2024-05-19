import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Recording from 'src/interfaces/recording.interface';
import { RecordingStudioService } from './../Services/recording-studio/recording-studio.service';
import { ModalController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-recording-studio',
  templateUrl: './recording-studio.page.html',
  styleUrls: ['./recording-studio.page.scss'],
})
export class RecordingStudioPage implements OnInit {

  constructor(private recordingService:RecordingStudioService, private route: Router, private toastCrtl:ToastController, private modalCtrl: ModalController ) { }
  recordList: any = [];

  ngOnInit() {
    this.recordingService.getRecordingList().subscribe((record) => {
      this.recordList = record;
    })
  }

  async onclickDelete(recording: Recording){
    const response = await this.recordingService.deleteRecording(recording);
    const toast = await this.toastCrtl.create({
      message: "Grabacion eliminada",
      duration: 2000
    })
    toast.present();
    this.modalCtrl.dismiss();
   }

   onClickUpdate(id: any){

   }

  }
