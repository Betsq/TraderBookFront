import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpotTradeCreateComponent } from '../components/spot-trade-create.component/spot-trade-create.component';

const routes: Routes = [
        {path: "SpotTradeCreate", component: SpotTradeCreateComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SpotTradeRoutingModule { }