import { Component, inject } from '@angular/core';
import { RestaurantesService } from '../restaurantes-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles',
  imports: [],
  templateUrl: './detalles.html',
  styleUrl: './detalles.css',
})
export class Detalles {
  // Inyectar el servicio de restaurantes
  restaurantesService: RestaurantesService = inject(RestaurantesService);
  restaurante: any | undefined;

  route: ActivatedRoute = inject(ActivatedRoute);
  constructor() {
    const restauranteID = this.route.snapshot.params['id'];
    this.restaurantesService.getRestauranteById(restauranteID.toString()).then((restaurante) => {
      this.restaurante = restaurante;
    });
  }
}
