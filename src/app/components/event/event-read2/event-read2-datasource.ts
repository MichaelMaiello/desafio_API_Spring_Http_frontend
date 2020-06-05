import { event } from './../event.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type


// TODO: replace this with real data from your application
const EXAMPLE_DATA: event[] = [
  {id: 1, nome: 'Hydrogen', descricao: 'asdfadfadf', qtdIngresso:1, preco:10 },
  {id: 2, nome: 'Hydrogen', descricao: 'asdfadfadf', qtdIngresso:1, preco:10 },
  {id: 3, nome: 'Hydrogen', descricao: 'asdfadfadf', qtdIngresso:1, preco:10 },
  {id: 4, nome: 'Hydrogen', descricao: 'asdfadfadf', qtdIngresso:1, preco:10 },
  {id: 5, nome: 'Hydrogen', descricao: 'asdfadfadf', qtdIngresso:1, preco:10 },
  {id: 6, nome: 'Hydrogen', descricao: 'asdfadfadf', qtdIngresso:1, preco:10 },
  {id: 7, nome: 'Hydrogen', descricao: 'asdfadfadf', qtdIngresso:1, preco:10 },
];

/**
 * Data source for the EventRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EventRead2DataSource extends DataSource<event> {
  data: event[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<event[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: event[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: event[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
