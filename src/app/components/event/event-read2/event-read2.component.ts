import { event } from './../event.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { EventRead2DataSource, } from './event-read2-datasource';

@Component({
  selector: 'app-event-read2',
  templateUrl: './event-read2.component.html',
  styleUrls: ['./event-read2.component.scss']
})
export class EventRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<event>;
  dataSource: EventRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nome', 'descricao', 'qtdIngresso', 'preco'];

  ngOnInit() {
    this.dataSource = new EventRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
