import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/model/contact';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss'],
})
export class ViewContactComponent implements OnInit {
  public contactId: any;
  public contactData: User = {};
  isFetching = false;
  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.isFetching = true;
    this.activatedRoute.params.subscribe((param: Params) => {
      this.contactId = param['id'];
    });
    this.api.fetchDate(this.contactId).subscribe((res: any) => {
      this.contactData = res.data;
      this.isFetching = false;
    });
  }
}
