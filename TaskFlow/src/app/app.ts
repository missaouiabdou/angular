import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './app.html'
})
export class App {
  title = 'TaskFlow';

  tasks: Task[] = [
    { id: 1, title: 'Lire le cours Angular', completed: false, priority: 'high', dueDate: '2026-11-15' },
    { id: 2, title: 'Installer le CLI', completed: true, priority: 'medium', dueDate: '2026-11-20' },
    { id: 3, title: 'Créer TaskFlow', completed: false, priority: 'low' }
  ];

  changeTitre(nouveauTitre: string) {
    this.title = nouveauTitre;
  }

  viderTaches() {
    this.tasks = [];
  }

  reinitialiserTaches() {
    this.tasks = [
      { id: 1, title: 'Lire le cours Angular', completed: false, priority: 'high', dueDate: '2026-11-15' },
      { id: 2, title: 'Installer le CLI', completed: true, priority: 'medium', dueDate: '2026-11-20' },
      { id: 3, title: 'Créer TaskFlow', completed: false, priority: 'low' }
    ];
  }
}
