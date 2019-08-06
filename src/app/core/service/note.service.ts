import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  baseUrl=environment.baseUrl;
  constructor(private httpclient : HttpClient) { }

public createNote(url , data){
  
  return this.httpclient.post(this.baseUrl+url,data,{headers:new HttpHeaders().set("emailID",localStorage.getItem("emailID"))});
}

getAllNotes(url){
return this.httpclient.get(this.baseUrl+url,{headers:new HttpHeaders().set("emailID",localStorage.getItem("emailID"))})
}

updateNote(url,data){
  return this.httpclient.put(this.baseUrl+url,data,{headers:new HttpHeaders().set("emailID",localStorage.getItem("emailID"))})
}

trashUnTrashNote(url){
  return this.httpclient.get(this.baseUrl+url,{headers:new HttpHeaders().set("emailID",localStorage.getItem("emailID"))})
}

archiveNotes(url){
  return this.httpclient.get(this.baseUrl+url,{headers:new HttpHeaders().set("emailID",localStorage.getItem("emailID"))})
}

getTrashNotes(url){
  return this.httpclient.get(this.baseUrl+url,{headers:new HttpHeaders().set("emailID",localStorage.getItem("emailID"))})
}
deleteNote(url){
  return this.httpclient.get(this.baseUrl+url,{headers:new HttpHeaders().set("emailID",localStorage.getItem("emailID"))})
}

ArchievedUnarchived(url){
 
  return this.httpclient.get(this.baseUrl+url,{headers:new HttpHeaders().set("emailID",localStorage.getItem("emailID"))})
}
}

  