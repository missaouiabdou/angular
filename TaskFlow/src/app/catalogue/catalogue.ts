import { Component, signal, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

interface Produit {
  id: number;
  nom: string;
  prix: number;
  stock: number;
}

@Component({
  selector: 'app-catalogue',
  imports: [CurrencyPipe],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css'
})
export class Catalogue {
  produits = signal<Produit[]>([
    { id: 1, nom: 'Clavier', prix: 25, stock: 10 },
    { id: 2, nom: 'Souris', prix: 15, stock: 5 },
    { id: 3, nom: 'Écran', prix: 150, stock: 0 },
    { id: 4, nom: 'Casque', prix: 40, stock: 3 }
  ]);

  panier = signal(0);

  nombreProduits = computed(() => this.produits().length);

  ajouterAuPanier() {
    this.panier.update(n => n + 1);
  }

  viderPanier() {
    this.panier.set(0);
  }
}
