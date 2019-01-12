import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule, MatFormFieldModule
    , MatSelectModule, MatInputModule, MatCardModule, MatSidenavModule, MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule, MatFormFieldModule
    , MatSelectModule, MatInputModule, MatCardModule, MatSidenavModule, MatDialogModule, DragDropModule],
})
export class MyOwnCustomMaterialModule { }
