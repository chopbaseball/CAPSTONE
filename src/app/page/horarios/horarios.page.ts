import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.page.html',
  styleUrls: ['./horarios.page.scss'],
})
export class HorariosPage implements OnInit {
  days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  // Datos de ejemplo para los horarios
  slots = [
    {
      Day: 'Lunes',
      SessionStartTime: '08:00',
      SessionEndTime: '09:15',
      Code: 'MAT-03',
      Description: 'Matemáticas 3er grado',
    },
    {
      Day: 'Lunes',
      SessionStartTime: '09:16',
      SessionEndTime: '10:00',
      Code: 'MAT-03',
      Description: 'Matemáticas 3er grado',
    },
    {
      Day: 'Lunes',
      SessionStartTime: '10:30',
      SessionEndTime: '11:15',
      Code: 'CSS-01',
      Description: 'Ciencias Sociales',
    },
    {
      Day: 'Martes',
      SessionStartTime: '8:00',
      SessionEndTime: '9:50',
      Code: 'HIS-02',
      Description: 'Historia y Geografia',
    }
  ];

  constructor() {}

  ngOnInit() {}

  getSlotsForDay(day: string) {
    return this.slots.filter(slot => slot.Day === day);
  }


  slotSeparador(day: string, currentSlot: any, previousSlot: any): boolean {
    return previousSlot && previousSlot.Code !== currentSlot.Code;
  }


  getColorClass(code: string): string {
    switch (code) {
      case 'MAT-03':
        return 'math';
      case 'CSS-01':
        return 'science';
      case 'HIS-02':
        return 'history';
      default:
        return 'default';
    }
  }


  getIconForSubject(code: string): string {
    const icons: { [key: string]: string } = {
      'MAT-03': 'assets/icon/math.png',
      'CSS-01': 'assets/icon/social-studies.png',
    };

    return icons[code] || 'assets/icons/default.png';
  }
}
