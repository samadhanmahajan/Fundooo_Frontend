import { Component, OnInit, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Note } from 'src/app/core/model/note';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NoteService } from 'src/app/core/service/note.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'  // <- ADD THIS
})

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private noteservice: NoteService, private router: Router) { }
  showAddNote: boolean
  note: Note = new Note();
  createForm: FormGroup;

  ngOnInit() {
    this.showAddNote = false;
    this.createForm = new FormBuilder().group(
      {
        "title": new FormControl(this.note.title, Validators.required),
        "description": new FormControl(this.note.description, Validators.required)
      }
    )
  }

  showBar() {
    this.showAddNote = true
  }

  close() {
    if (this.createForm.value != null) {
      this.noteservice.createNote("Note/Create", this.createForm.value).subscribe(
        (response: any): any => {
          if (response.statusCode == 201) {
            console.log(response)
            this.snackbar.open("note created", "close", { duration: 2500 })
          }
          else {
            console.log(response)
            this.snackbar.open("note not created ", "close", { duration: 2500 })
          }
        }
      )
      this.showAddNote = false;
    } else {
      this.snackbar.open("please enter titlel and description", "open", { duration: 25000 })
    }
  }

}