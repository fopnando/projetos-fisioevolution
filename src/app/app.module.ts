import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { MenuComponent } from '../app/components/menu/index';
import { CadcliComponent } from '../app/components/cad-cli/index';
import { ProductService } from './service/product.service';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        FormsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
            ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        MenuComponent,
        CadcliComponent
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        UserService,
        HttpModule,
        ProductService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent, MenuComponent]
})

export class AppModule { }
