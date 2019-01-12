import { MyOwnCustomMaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MynotesComponent } from './components/mynotes/mynotes.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { NotebookComponent } from './components/mynotes/notebook/notebook.component';
import { NoteComponent } from './components/mynotes/note/note.component';
import { SearchbarComponent } from './components/mynotes/searchbar/searchbar.component';

import { ColorPickerModule } from 'ngx-color-picker';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyselectbooksComponent } from './components/mynotes/searchbar/myselectbooks/myselectbooks.component';
import { AddcollaboratorComponent } from './components/mynotes/note/addcollaborator/addcollaborator.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavmenuComponent } from './components/dashboard/navmenu/navmenu.component';
import { ChecklistComponent } from './components/dashboard/checklist/checklist.component';
import { HellouserComponent } from './components/dashboard/hellouser/hellouser.component';
import { NotificationsComponent } from './components/dashboard/notifications/notifications.component';
import { ProjectdetailsComponent } from './components/projectdetails/projectdetails.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { AddnotebookbtnComponent } from './components/mynotes/notebook/addnotebookbtn/addnotebookbtn.component';
import { ListoftasksComponent } from './components/dashboard/checklist/listoftasks/listoftasks.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeconectedComponent } from './components/homeconected/homeconected.component';
import { HeaderconectedComponent } from './components/headerconected/headerconected.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { TaskboardComponent } from './components/taskboard/taskboard.component';
import { DragulaModule } from 'ng2-dragula';
import { ToastrModule } from 'ngx-toastr';
import { ChangecolorComponent } from './components/mynotes/note/changecolor/changecolor.component';
import { RappelComponent } from './components/mynotes/note/rappel/rappel.component';
import { AddimageComponent } from './components/mynotes/note/addimage/addimage.component';
import { ArchiveComponent } from './components/mynotes/note/archive/archive.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { ChangeuserdetailComponent } from './components/userpage/changeuserdetail/changeuserdetail.component';
import { CollaboratorsComponent } from './components/collaborators/collaborators.component';
import { ChatComponent } from './components/collaborators/chat/chat.component';
import { DatepickerComponent } from './components/mynotes/note/rappel/datepicker/datepicker.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MynotesComponent,
    NotfoundComponent,
    FeedbackComponent,
    NotebookComponent,
    NoteComponent,
    SearchbarComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MyselectbooksComponent,
    AddcollaboratorComponent,
    DashboardComponent,
    NavmenuComponent,
    ChecklistComponent,
    HellouserComponent,
    NotificationsComponent,
    ProjectdetailsComponent,
    AddnotebookbtnComponent,
    ListoftasksComponent,
    ContactsComponent,
    HomeconectedComponent,
    HeaderconectedComponent,
    TaskboardComponent,
    ChangecolorComponent,
    RappelComponent,
    AddimageComponent,
    ArchiveComponent,
    UserpageComponent,
    ChangeuserdetailComponent,
    CollaboratorsComponent,
    ChatComponent,
    DatepickerComponent

  ],
  imports: [
    ColorPickerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MyOwnCustomMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgZorroAntdModule,
    AngularDraggableModule,
    DragulaModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
   { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
