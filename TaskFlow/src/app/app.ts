import { Component, signal, computed } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Task } from './task.model';
import { Catalogue } from './catalogue/catalogue';

@Component({
  selector: 'app-root',
  imports: [DatePipe, UpperCasePipe, Catalogue],
  templateUrl: './app.html'
})
export class App {
  title = 'TaskFlow';

  // signal : la liste des tâches
  tasks = signal<Task[]>([
    { id: 1, title: 'Lire le cours Angular', completed: false, priority: 'high', dueDate: '2026-11-15' },
    { id: 2, title: 'Installer le CLI', completed: true, priority: 'medium', dueDate: '2026-11-20' },
    { id: 3, title: 'Créer TaskFlow', completed: false, priority: 'low' }
  ]);

  // computed : le nombre de tâches
  count = computed(() => this.tasks().length);

  changeTitre(nouveauTitre: string) {
    this.title = nouveauTitre;
  }

  supprimerTitre() {
    this.title = '';
  }

  // update : ajouter une tâche
  ajouterTache(titre: string) {
    const nouvelleTache: Task = {
      id: Date.now(),
      title: titre,
      completed: false,
      priority: 'low'
    };
    this.tasks.update(items => [...items, nouvelleTache]);
  }

  // set : vider la liste
  viderTaches() {
    this.tasks.set([]);
  }

  // set : remettre les 3 tâches
  reinitialiserTaches() {
    this.tasks.set([
      { id: 1, title: 'Lire le cours Angular', completed: false, priority: 'high', dueDate: '2026-11-15' },
      { id: 2, title: 'Installer le CLI', completed: true, priority: 'medium', dueDate: '2026-11-20' },
      { id: 3, title: 'Créer TaskFlow', completed: false, priority: 'low' }
    ]);
  }
}
