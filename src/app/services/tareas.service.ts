import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private isLocalStorageAvailable = typeof localStorage !== 'undefined';
  private localStorageKey = 'listaTareas';

  getTareas():string[] {
    if (this.isLocalStorageAvailable) {
      return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
    }
    return []
  };

  agregarTarea(tarea: string) {
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  };

  eliminarTarea(index: number) {
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(tareas));
  }
}
