import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RestaurantesService {
  // Ruta al recurso de restaurantes
  url = 'http://localhost:3000/restaurantes';

  // Obtener todos los restaurantes
  async getAllRestaurantes(): Promise<any[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  // Obtener restaurante por localidad 
  async getRestauranteByLocality(locality: string): Promise<any | undefined> {
    const data = await fetch(`${this.url}?locality=${locality}`);
    const restauranteJson = await data.json();
    return restauranteJson[0] ?? {};
  }

  // Enviar solicitud de reserva
  submitApplication(id: string, name: string, location: string) {
    console.log(
      `Homes application received: Id: ${id}, name: ${name}, location: ${location}.`,
    );
  }
}
