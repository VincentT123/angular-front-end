import { Injectable } from '@angular/core';
import { Personne } from '../interfaces/personne';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PersonneService {
  // L'URL qui sera utilisee par le client pour realiser des requetes HTTP
  url: string = 'http://localhost:5555/personnes/'
  personnes: Array<Personne> = new Array<Personne>();
  // Injecter le service HttpClient
  constructor(private http: HttpClient) { }
  // Recupère la liste de personnes
  getAllPersons() {
    console.log("this.url : " + this.url);
    return this.http.get<Array<Personne>>(this.url);
  }
  // Ajoute une personne
  // addP(p: Personne) {
  //   return this.http.post(this.url, p);
  // }
  // fonction pipe () dans RxJS: Vous pouvez utiliser des tubes pour relier 
  // les opérateurs entre eux. Les tuyaux vous permettent de combiner 
  // plusieurs fonctions en une seule fonction.
  // La fonction pipe () prend comme arguments les fonctions que vous souhaitez 
  // combiner et renvoie une nouvelle fonction qui, lorsqu'elle est exécutée, 
  // exécute les fonctions composées dans l'ordre.
  // catchError () - L'opérateur catchError examinera la valeur Observable et fera 
  // quelque chose avec cette valeur. Si vous voulez lancer une erreur ou appeler 
  // une fonction si vous obtenez une erreur, vous pouvez le faire ici. 
  // Dans l'exemple, il appellera errorMgmt et à l'intérieur de cela, 
  // il enregistrera simplement cette chaîne.
  addP(data: Personne): Observable<any> {
    let API_URL = `${this.url}`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  // Supprime une personne selon son identifiant
  // deleteP(id: number) {
  //   return this.http.delete(this.url + id)
  // }
  deleteP(id: number): Observable<any> {
    var API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  // Recupère une personne selon son identifiant
  // getP(id: number){
  //   return this.http.get(this.url + id)
  // }
  getP(id: number): Observable<any> {
    let API_URL = `${this.url}/${id}`;
    return this.http.get(API_URL)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }
  // Met à jour une personne selon son identifiant   // updateP(id: number, p: Personne){
  //   return this.http.put(this.url + id, p)
  // }
  updateP(id: number, data: Personne): Observable<any> {
    let API_URL = `${this.url}/${id}`;
    return this.http.put(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


  getAll() {
    return this.personnes;
  }
  addPerson(p: Personne) {
    this.personnes.push(p);
  }


}