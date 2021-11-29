import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpotTradeTableComponent } from './components/spot-trade.component/spot-trade.component'
import { SpotTradeCreateComponent } from './components/spot-trade-create.component/spot-trade-create.component';

import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SpotTradeRoutingModule } from './routes/spot-trade-routing.module'

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { NgSelectModule } from '@ng-select/ng-select';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [BrowserModule, FormsModule ,MatInputModule,MatFormFieldModule, MatDatepickerModule,
              HttpClientModule, BrowserAnimationsModule, MatNativeDateModule, SpotTradeRoutingModule,
              NgSelectModule, NgOptionHighlightModule, CommonModule, ReactiveFormsModule],
    declarations: [SpotTradeTableComponent, SpotTradeCreateComponent],
    exports: [SpotTradeTableComponent, SpotTradeCreateComponent]
})

export class SpotTradeModule{

}