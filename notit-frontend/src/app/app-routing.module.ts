import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MynotesComponent } from './components/mynotes/mynotes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectdetailsComponent } from './components/projectdetails/projectdetails.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { ChangeuserdetailComponent } from './components/userpage/changeuserdetail/changeuserdetail.component';

import { AuthGuard } from './guards/guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collaborators' , component: CollaboratorsComponent , canActivate: [AuthGuard]},
  { path: 'profile' , component: UserpageComponent , canActivate: [AuthGuard]},
  { path: 'changeprofile' , component: ChangeuserdetailComponent , canActivate: [AuthGuard]},
  { path: 'notes', component: MynotesComponent , canActivate: [AuthGuard] },
  { path: 'feedback', component: FeedbackComponent , canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  { path: 'project', component: ProjectdetailsComponent , canActivate: [AuthGuard]},
  { path: '**',      component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
