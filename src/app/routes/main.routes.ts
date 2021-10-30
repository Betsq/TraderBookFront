import {Routes} from '@angular/router';

import { HomeComponent } from '../components/home.component/home.component';
import { SpotTradeCreateComponent } from '../components/spot-trade-create.component/spot-trade-create.component';

export const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "SpotTradeCreate", component: SpotTradeCreateComponent}
];