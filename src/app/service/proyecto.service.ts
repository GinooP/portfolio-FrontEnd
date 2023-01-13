import { ChangeDetectorRef, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';
import { Observable, finalize, takeLast } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage, getDownloadURL, ref, uploadBytes, UploadTaskSnapshot, fromTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = environment.URL + 'proyecto/';
  constructor(private httpClient: HttpClient, private storage: Storage) { }

  public lista(): Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL + `detail/${id}`);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyecto);
  }
  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyecto);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

//   upLoadImage(file: any, path: string, name: string): Promise<string> {
//     return new Promise( resolve => {
//       const filePath = path + '/' + name;
//       const Ref = ref(this.storage, filePath);
//       const task = uploadBytes(Ref, file);
      
//       finalize(() => {
//           getDownloadURL(Ref).then( res =>{
//             const downloadURL = res;
//             resolve(downloadURL);
//             return;
//           })
//           .catch(error => console.log(error)
//           )
//         }
//       )
//     });
//   }
}
