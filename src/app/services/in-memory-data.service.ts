import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Bug } from '../bugs/bug.interface';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bugs: Bug[] = [
      {
        id: 1,
        title: 'window does not open',
        description: 'when user clicks new button, it wont open',
        state: 'opened',
      },
      {
        id: 2,
        title: 'app does not work',
        description: 'app does not work in firefox',
        state: 'opened',
      },
      {
        id: 3,
        title: 'there is no header in application',
        description: 'header is not displayed',
        state: 'opened',
      },
      {
        id: 4,
        title: 'wrong translation',
        description: 'the word window is not translated when using polish',
        state: 'opened',
      },
    ];
    return { bugs };
  }
}
