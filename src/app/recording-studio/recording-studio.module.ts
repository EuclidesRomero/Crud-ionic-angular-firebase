import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecordingStudioPageRoutingModule } from './recording-studio-routing.module';

import { RecordingStudioPage } from './recording-studio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordingStudioPageRoutingModule
  ],
  declarations: [RecordingStudioPage]
})
export class RecordingStudioPageModule {}
