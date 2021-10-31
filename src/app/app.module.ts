import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component/app.component';
import { HomeComponent } from './components/home.component/home.component';

import { HttpClientModule } from "@angular/common/http";

import { SpotTradeModule } from './spot-trade/spot-trade.module'
import { SharedModule } from './shared/shared.module';

import { appRoutes } from './routes/main.routes'

@NgModule({
    imports: [ BrowserModule, HttpClientModule, SpotTradeModule, SharedModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [ AppComponent]
})

export class AppModule {
    
}