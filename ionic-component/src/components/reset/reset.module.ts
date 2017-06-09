import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetComponent } from './reset';

@NgModule({
  declarations: [
    ResetComponent,
  ],
  imports: [
    IonicPageModule.forChild(ResetComponent),
  ],
  exports: [
    ResetComponent
  ]
})
export class ResetComponentModule {}
