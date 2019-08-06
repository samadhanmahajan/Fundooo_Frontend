import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/core/service/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  constructor(private noteservice:NoteService,private snackBar:MatSnackBar) { }
  notesList:any
 
  @Input() noteInfo:any
  ngOnInit() {
   this.getArchive();
  }
  getArchive()
  {
    this.noteservice.archiveNotes("Note/GetAllArchievedNotes").subscribe(
      data =>{
        this.notesList=data;
        console.log(data);
      }
    )
  }

}