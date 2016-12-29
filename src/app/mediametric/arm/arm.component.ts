import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { MediametricService } from '../mediametric.service';

@Component({
  selector: 'arm',
  styleUrls: ['./arm.component.css'],
  templateUrl: './arm.component.html'
})
export class ArmComponent {

  constructor(
    public mediametric: MediametricService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  executeRequest() {
    this.mediametric.testRequest()
      .subscribe(() => {
        this.router.navigate(['/arm']);
      });
  }
}
