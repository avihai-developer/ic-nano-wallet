import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TermsOfUseComponent} from './terms-of-use/terms-of-use.component';
import {AboutComponent} from './about/about.component';
import {LoginOrRegisterComponent} from './login-or-register/login-or-register.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {SetPinCodeComponent} from './set-pin-code/set-pin-code.component';
import {EnterPinCodeComponent} from './enter-pin-code/enter-pin-code.component';
import {LayoutComponent} from './layout/layout.component';
import {HistoryComponent} from './history/history.component';
import {SendComponent} from './send/send.component';
import {ReciveComponent} from './recive/recive.component';
import {SettingsComponent} from './settings/settings.component';
import {ShowPrivateKeyComponent} from './show-private-key/show-private-key.component';

const routes: Routes = [
    { path: '', redirectTo: '/terms-of-use', pathMatch: 'full' },
    { path: 'terms-of-use', component: TermsOfUseComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login-or-register', component: LoginOrRegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'set-pin-code', component: SetPinCodeComponent },
    { path: 'enter-pin-code', component: EnterPinCodeComponent },
    {
        path: 'layout',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: '/history', pathMatch: 'full'},
            { path: 'history', component: HistoryComponent },
            { path: 'send', component: SendComponent },
            { path: 'receive', component: ReciveComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'show-private-key', component: ShowPrivateKeyComponent},
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
