import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/model/contact';
import { ApiService } from 'src/app/services/api.service';
import { faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  faEye = faEye;
  displayedColumns: string[] = [
    'ID',
    'Avatar',
    'F.Name',
    'L.Name',
    'Email',
    
    'Action',
  ];
  isFetching = false;
  contacts!: User[];
  searchText!: any;
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.dataSource){
      this.dataSource.paginator = value;
    }
  }
  @ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    if (this.dataSource){
      this.dataSource.sort = value;
    }
  }
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.isFetching = true;
    this.getContact();
  }
  getContact() {
    this.api.getContacts().subscribe((res) => {

      this.contacts = Object.assign(res).data;
      this.dataSource = new MatTableDataSource(this.contacts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filterPredicate = (data: User, filter: string) => {
        return !filter || filter == data.id;
      };
      this.isFetching = false;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
  }

}
