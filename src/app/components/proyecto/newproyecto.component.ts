import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { Storage, listAll, ref, uploadBytes, getDownloadURL  } from '@angular/fire/storage';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent{
  
  // nombreP: string = '';
  // descripcionP: string = '';
  // imgP: string = '';

  // constructor(private sProyect: ProyectoService, private router: Router, private storage: Storage, private activatedRouter: ActivatedRoute){}

  // ngOnInit(): void {
    
  // }
  

  // onCreate(): void{
  //   const proyect = new Proyecto(this.nombreP, this.descripcionP, this.imgP);
  //   this.sProyect.save(proyect).subscribe(data=>{
  //     alert("Experiencia añadida");
  //     this.router.navigate(['']);
  //   }, err =>{
  //     alert("Falló");
  //     this.router.navigate(['']);
  //   }
  //   )
  // }

  // // uploadImage($event: any){
  // //   const file = $event.target.files[0];
  // //   console.log(file);

  // //   const imgRef = ref(this.storage, `images/${file.name}` );

  // //   uploadBytes(imgRef, file)
  // //   .then(response => console.log(response))
  // //   .catch(error => console.log(error));
  // // }

  // // getImages(){
  // //   const imagesRef = ref(this.storage, 'images');

  // //   listAll(imagesRef)
  // //   .then(async response => {
  // //     console.log(response);

  // //     for(let item of response.items){
  // //       this.imgP = await getDownloadURL(item)
  // //     }
  // //   })
  // //   .catch(error => console.log(error));
  // // }

  // async newImageUpload(event: any){


  //   const path = 'Images';
  //   const name = 'Proyect1';
  //   const file = event.target.files[0];
  //   const res = await this.sProyect.upLoadImage(file, path, name);
  //   console.log('recibi res de la promesa', res);

  //   console.log('fin de la funcion => newImageUpload');
    
  // }

}
