import { Component } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-character-component',
  standalone: false,
  templateUrl: './character-component.component.html',
  styleUrl: './character-component.component.css'
})
export class CharacterComponentComponent {
  characters: any[] = [];
    errorMessage: string= '';
    
  
    constructor(private apiService: ApiService) {}
  
    ngOnInit(): void {
      this.apiService.getCharacters().subscribe({
        next:(data) => {
          this.characters=data.results;
        }, 
        error: (error: any) =>{
          console.error('error cargando users: ',error)
        }
      });
    }

}
