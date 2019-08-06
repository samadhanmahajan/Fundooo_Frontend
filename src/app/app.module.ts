import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './component/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDialogModule } from '@angular/material';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from '@angular/forms';
import { CreatenoteComponent } from './component/createnote/createnote.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { UpdateNoteComponent } from './component/update-note/update-note.component';
import { IconsComponent } from './component/icons/icons.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { TrashComponent } from './component/trash/trash.component';
import { RestoreComponent } from './component/restore/restore.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
   CreatenoteComponent,
    GetAllNotesComponent,
    UpdateNoteComponent,
    IconsComponent,
    ArchiveComponent,
    TrashComponent,
    RestoreComponent
  ],
  imports: [
    BrowserModule,MatDialogModule,
    MatCardModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],entryComponents:[
    UpdateNoteComponent
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
