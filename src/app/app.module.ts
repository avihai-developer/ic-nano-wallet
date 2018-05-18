import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {EnterPinCodeComponent} from './enter-pin-code/enter-pin-code.component';
import {SendComponent} from './send/send.component';
import {ReciveComponent} from './recive/recive.component';
import {HistoryComponent} from './history/history.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {LoginOrRegisterComponent} from './login-or-register/login-or-register.component';
import {TermsOfUseComponent} from './terms-of-use/terms-of-use.component';
import {SetPinCodeComponent} from './set-pin-code/set-pin-code.component';
import {LayoutComponent} from './layout/layout.component';
import {SettingsComponent} from './settings/settings.component';
import {ShowPrivateKeyComponent} from './show-private-key/show-private-key.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
    declarations: [
        // App omponents
        AppComponent,
        AboutComponent,
        EnterPinCodeComponent,
        SendComponent,
        ReciveComponent,
        HistoryComponent,
        LoginComponent,
        RegisterComponent,
        LoginOrRegisterComponent,
        TermsOfUseComponent,
        SetPinCodeComponent,
        LayoutComponent,
        SettingsComponent,
        ShowPrivateKeyComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        // Material
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
