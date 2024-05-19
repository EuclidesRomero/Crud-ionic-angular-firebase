import { RecordingStudioService } from './../Services/recording-studio/recording-studio.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage implements OnInit {
  frm: FormGroup
  constructor(private recordingStudioService: RecordingStudioService, private toastCrtl:ToastController, private modalCtrl: ModalController) {
    this.frm = new FormGroup ({
      Owner: new FormControl(),
      nameOfRecording: new FormControl(),
      numberOfCabins: new FormControl(),
      typeOfMelody: new FormControl()

    })
  }

  
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void{
  }

  async onSubmit() {
    console.log(this.frm.value)
    const response = await this.recordingStudioService.addRecording(this.frm.value);
    const toast = await this.toastCrtl.create({
      message: "Grabacion registrada",
      duration: 2000
    })
    toast.present();
    this.modalCtrl.dismiss();
   }

}
