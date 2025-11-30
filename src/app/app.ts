import { Component, OnInit, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Reto2_Angular');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/restaurantes'). subscribe({
      next: (data) => {
        console.log('Todos los restaurantes:', data);
       console.table(data);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}
