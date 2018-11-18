import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './map.component';

import { API_KEY } from '../../config/API_KEY';

import { MapService } from './map.service';

import { CamelizePipe } from 'ngx-pipes';

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
        apiKey: API_KEY.key2
    })
  ],
  exports: [
    MapComponent
  ],
  providers: [
    MapService,
    CamelizePipe
  ]
})

export class MapModule { }
