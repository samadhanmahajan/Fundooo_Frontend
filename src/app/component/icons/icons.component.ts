import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/core/service/note.service';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private noteservice: NoteService) { }
  labelsList: any;
  noteLabelsList: any;
  message: any;
  ngOnInit() {

  }

  colors = [
    [
      { colorName: "white", colorCode: '#FFFFFF' },
      { colorName: 'green', colorCode: '#008000' },
      { colorName: 'grey', colorCode: '#808080' }
    ],
    [
      { colorName: 'indian red', colorCode: '#CD5C5C' },
      { colorName: 'crimson', colorCode: '#DC143C' },
      { colorName: 'yellow', colorCode: '#FFFF00' }
    ],
    [
      { colorName: 'Purple', colorCode: '#800080' },
      { colorName: 'Teal', colorCode: '#008080' },
      { colorName: 'light blue', colorCode: '#ADD8E6' }
    ]
  ]

  @Input() noteInfo: any

  onTrash() {

    this.noteservice.trashUnTrashNote("Note/TrashUnTrash?noteID=" + this.noteInfo.noteId).subscribe(
      (response: any): any => {
        if (response.statusCode == 301) {

          this.snackbar.open("note is trashed", "close", { duration: 2500 })
        }
        else {
          this.snackbar.open("note is untrashed", "close", { duration: 2500 })
        }
      }
    )
  }
  
  onArchive() {
    this.noteservice.ArchievedUnarchived("Note/ArchievedUnarchived?noteID=" + this.noteInfo.noteId).subscribe(
      (response: any): any => {
        if (response.statusCode == 200) {

          this.snackbar.open(response.statusMessage, "close", { duration: 2500 })
        }
      }
    )

  }

}