import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bug } from '../bugs/bug.interface';
import { BugService } from '../services/bug.service';

@Component({
  selector: 'app-bug-detail',
  templateUrl: './bug-detail.component.html',
  styleUrls: ['./bug-detail.component.scss'],
})
export class BugDetailComponent implements OnInit {
  public bug: Bug;

  constructor(
    private route: ActivatedRoute,
    private bugService: BugService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBug();
  }

  public getBug(): void {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.bugService.getBug(id).subscribe((bug: Bug) => {
      this.bug = bug;
    });
  }

  public goBack(): void {
    this.location.back();
  }

  public save(): void {
    this.bugService.updateBug(this.bug).subscribe(() => this.goBack());
  }

  public closeBug(): void {
    this.bug.state = 'closed';
    this.save();
  }

  public assignTo(): void {
    this.bug.state = 'pending';
    this.save();
  }
}
