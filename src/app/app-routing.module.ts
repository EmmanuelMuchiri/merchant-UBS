import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { UploadBillComponent } from './upload-bill/upload-bill.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { BillDetailsComponent } from './bill-details/bill-details.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers';
import { RevenueStreamsComponent } from './revenue-streams/revenue-streams.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'generate-bill', component: GenerateBillComponent, canActivate: [AuthGuard] },
  { path: 'upload-bill', component: UploadBillComponent, canActivate: [AuthGuard] },

  { path: 'create-user', component: CreateUserComponent, canActivate: [AuthGuard] },
  { path: 'bill-details', component: BillDetailsComponent, canActivate: [AuthGuard] },
  { path: 'revenue-streams', component: RevenueStreamsComponent, canActivate: [AuthGuard] },

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
