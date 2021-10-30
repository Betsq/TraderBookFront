import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../components/app.component/app.component';
import { HomeComponent } from '../components/home.component/home.component';
import { HeaderComponent } from '../components/header.component/header.component';
import { SpotTradeTableComponent } from '../components/spot-trade.component/spot-trade.component'
import { SpotTradeCreateComponent } from '../components/spot-trade-create.component/spot-trade-create.component';

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { appRoutes } from '../routes/main.routes'

@NgModule({
    imports: [ BrowserModule, HttpClientModule, BrowserAnimationsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, HomeComponent, HeaderComponent, SpotTradeTableComponent, SpotTradeCreateComponent],
    bootstrap: [ AppComponent]
})

export class MainModule {
    
}