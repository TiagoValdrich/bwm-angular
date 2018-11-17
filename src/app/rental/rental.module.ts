import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgPipesModule } from 'ngx-pipes';

import { Routes, RouterModule } from '@angular/router';

import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';

import { RentalService } from './shared/rental.service';
import { UppercasePipe } from '../common/pipe/uppercase.pipe';

const routes: Routes = [
    { 
        path: 'rentals', 
        component: RentalComponent,
        children: [
            { path: '', component: RentalListComponent },
            { path: ':rentalId', component: RentalDetailComponent }
        ]
    }
]

@NgModule({
    declarations: [
        RentalComponent,
        RentalListComponent,
        RentalListItemComponent,
        RentalDetailComponent,
        UppercasePipe
    ],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        NgPipesModule,
        RouterModule.forChild(routes)
    ],
    exports: [

    ],
    providers: [
        RentalService
    ]
})

export class RentalModule {

}