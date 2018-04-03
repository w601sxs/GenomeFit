import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Genometabs } from './genometabs';

@NgModule({
  declarations: [
    Genometabs,
  ],
  imports: [
    IonicPageModule.forChild(Genometabs),
  ],
  exports: [
    Genometabs
  ]
})
export class GenometabsModule {}
