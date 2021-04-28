import { Component, OnInit } from '@angular/core';
import { BugService } from '../services/bug.service';
import { Bug } from './bug.interface';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss'],
})
export class BugsComponent implements OnInit {
  public bugs: Bug[] = [];

  constructor(private bugService: BugService) {}

  ngOnInit() {
    this.getAllBugs();
  }

  private getAllBugs(): void {
    this.bugService.getBugs().subscribe((bugs) => {
      this.bugs = bugs;
    });
  }

  public add({ name, description }): void {
    if (!name) {
      return;
    }
    name = name.trim();
    this.bugService
      .addBug({ title: name, description } as Bug)
      .subscribe((bug) => {
        this.bugs.push(bug);
      });
  }

  public delete(bug: Bug): void {
    this.bugs = this.bugs.filter((b: Bug) => b !== bug);
    this.bugService.deleteBug(bug.id).subscribe();
  }
}
