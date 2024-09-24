import { Routes } from '@angular/router';
import { MainMaterialMasterComponent } from './main-material-master/main-material-master.component';
import { RcMainComponent } from './rc-main/rc-main.component';
import { LoginComponent } from './login/login.component';
import { ReceivingComponent } from './receiving/receiving.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { MastersComponent } from './masters/masters.component';
import { LocalStocksComponent } from './local-stocks/local-stocks.component';
import { MainStocksComponent } from './main-stocks/main-stocks.component';
import { ReportsComponent } from './reports/reports.component';
import { ForgodpassComponent } from './forgodpass/forgodpass.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { NewAccComponent } from './new-acc/new-acc.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [

    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'forgotpassword' , component:ForgodpassComponent},
    { path: 'changepassword' , component:ChangepassComponent},
    { path: 'newaccount' , component:NewAccComponent},
    {
        path: 'header', component: HeaderComponent,
        children: [
            
            { path: 'home', component: HomeComponent },
            { path: 'mainmaterialmaster', component: MainMaterialMasterComponent },
            { path: 'rcmain', component: RcMainComponent },
            { path: 'receiving', component: ReceivingComponent },
            { path: "settings", component: SettingsComponent },
            { path: 'master', component:MastersComponent},
            { path: 'localstack', component:LocalStocksComponent},
            { path: 'mainstack', component:MainStocksComponent},
            { path: 'reports', component:ReportsComponent},
            { path: 'about' , component:AboutComponent}
        ]
    }


]
