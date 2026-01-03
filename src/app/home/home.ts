import { Component, inject } from '@angular/core';
import { RestaurantesService } from '../restaurantes-service';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-home',
  imports: [RouterModule, NgxPaginationModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  // Variables para paginación
  p: number = 1; // Página actual para paginación
  itemsPerPage: number = 10; // Elementos por página

  // Inyectar el servicio de restaurantes
  restaurantesService: RestaurantesService = inject(RestaurantesService);

  // Listas de restaurantes
  restaurantesList: any[] = [];
  filteredRestaurantesList: any[] = [];

  // Cargar todos los restaurantes al inicializar el componente 
  constructor() {
    this.restaurantesService
      .getAllRestaurantes()
      .then((restaurantesList: any[]) => {
        this.restaurantesList = restaurantesList;
        this.filteredRestaurantesList = restaurantesList;
      });
  }

  // Filtrar resultados por localidad
  filterResults(text: string) {
    // Si no hay texto, mostrar todos los restaurantes
    if (!text) {
      this.filteredRestaurantesList = this.restaurantesList;
      return;
    }
    this.filteredRestaurantesList = this.restaurantesList.filter((restaurante) =>
      restaurante.locality.toLowerCase().includes(text.toLowerCase()),
    );
  }

  // Contar el número de restaurantes filtrados
  countRestaurantes(): number {
    return this.filteredRestaurantesList.length;
  }
}
