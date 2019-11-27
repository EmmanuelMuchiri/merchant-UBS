import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ApiService } from './api.service';
import { UploadBillComponent } from './upload-bill/upload-bill.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatSelectModule} from '@angular/material';
import  {MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule, MatPaginatorModule } from "@angular/material";
import { MatNativeDateModule } from '@angular/material/core';
import { RevenueStreamsComponent } from './revenue-streams/revenue-streams.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    GenerateBillComponent,
    HomeComponent,
    UploadBillComponent,
    BillDetailsComponent,
    LoginComponent,
    MainNavComponent,
    RevenueStreamsComponent,
    RegisterComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTableModule,
    MatDatepickerModule, 
MatNativeDateModule,
MatPaginatorModule
  ],
  providers: [
    ApiService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    [MatNativeDateModule, MatDatepickerModule],
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
