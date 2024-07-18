// travel  .service.ts
import { Injectable, inject } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { Firestore, setDoc, collection, addDoc, updateDoc, doc, deleteDoc } from  "@angular/fire/firestore";
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export  class  TravelService {
 

  firestore: Firestore = inject(Firestore);
  auth: Auth = inject(Auth);
  user$ = authState(this.auth).pipe(filter(user  =>  user !== null), map(user  =>  user!));
  static db: any;
  
  constructor(private  router: Router){}
async addEmptyTravel(userId: string) {
  try {
    const travelData = {
      userId: userId,
      // Outros campos da viagem...
    };

    // Adiciona um documento na coleção "travels"
    const travelRef = await addDoc(collection(this.firestore, 'travels'), travelData);

    // Define o ID do documento recém-criado como um campo no próprio documento
    await setDoc(travelRef, { ...travelData, id: travelRef.id });

    // Navega para a página de edição da viagem recém-criada
    this.router.navigate(['/admin', travelRef.id]);

    return travelRef;
  } catch (error) {
    console.error("Erro ao adicionar viagem:", error);
    throw error;
  }
}
}
