import { Injectable } from '@angular/core';
import { User } from './user'
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userURL = 'api/users'
  private httpOptions: Object = {
    headers: new HttpHeaders({"Content-type":"application/json"})
  }
  constructor(private http: HttpClient,private messageService: MessageService) { }
  
  getUsers(): Observable<User[]>{
    // this.messageService.add("UserService: 已经获取到用户列表")
    // return of(USERS)
    this.log("已经获取到用户列表")
    // return this.http.get<User[]>(this.userURL)
    return this.http.get<User[]>(this.userURL)
      .pipe(
        tap(Users => this.log("fetched Users")),
        catchError(this.handleError("getUsers",[])))
  }

  getUser(id: number|null): Observable<User|undefined>{
    // this.messageService.add(`UserService: 已经获取到用户 id=${id}`)
    // return of(USERS.find(user => user.id == id))
    this.log(`UserService: 已经获取到用户 id=${id}`)

    const url = `${this.userURL}/${id}`
    return this.http.get<User>(url)
      .pipe(
        tap(_=> this.log(`fetched user id=${id}`)),
        catchError(this.handleError<User>(`getUser id=${id}`))
      )
  }

  updateUser(user: User|undefined): Observable<any>{
    return this.http.put(this.userURL, user, this.httpOptions).pipe(
      tap(_=>this.log(`updated user id=${user?.id}`)),
      catchError(this.handleError<any>('updateUser'))
    )
  }
  private handleError<T>(operation = "operation", result?:T){
    return (error:any): Observable<T> => {
      console.error(error)
      this.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }
  private log(message: string){
    this.messageService.add(`UserService: ${message}`)
  }

  addUser(user: User):Observable<User>{
    return this.http.post<User>(this.userURL, user, this.httpOptions).pipe(
      tap((user: User) => this.log(`added user id=${user.id}`)),
      catchError(this.handleError<User>('addUser'))
    )
  }

  deleteUser(user: User | number): Observable<User>{
    const id = typeof user === 'number' ? user : user.id
    const url = `${this.userURL}/${id}`
    return this.http.delete<User>(url, this.httpOptions).pipe(
      tap(_=>this.log(`deleted user id=${id}`)),
      catchError(this.handleError<User>('deleteUser'))
    )
  }

  searchUsers(term: string):Observable<User[]>{
    if(!term.trim()){
      return of([])
    }

    return this.http.get<User[]>(`${this.userURL}/?name=${term}`).pipe(
      tap(_=>this.log(`found Users matching "${term}"`)),
      catchError(this.handleError<User[]>('searchUsers', []))
    )
  }
}
