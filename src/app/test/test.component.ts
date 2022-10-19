import { Component, Inject } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';
import { Test } from './test';
import { TestService } from './test.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class Test2Component {

  constructor(
    private testService: TestService,
    private dialog: MatDialog,
  ) { }


  displayedColumns: string[] = ['id', 'name', 'email'];
  dataToDisplay = [...this.testService.listAll()];
  dataSource = new ExampleDataSource(this.dataToDisplay);


  addData() {
    const dialogRef = this.dialog.open(TestFormCreateComponent, {
      width: '300px',
      data: {name: ""},
    });

    dialogRef.afterClosed().subscribe(result => {
      let name: string = result;
      this.testService.add(name);
      this.dataToDisplay = [...this.testService.listAll()];
      this.dataSource.setData(this.dataToDisplay);
    });
  }


  removeData() {
    this.testService.remove();
    this.dataToDisplay = [...this.testService.listAll()];
    this.dataSource.setData(this.dataToDisplay);
  }
}





class ExampleDataSource extends DataSource<Test> {
  private _dataStream = new ReplaySubject<Test[]>();

  constructor(initialData: Test[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<Test[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: Test[]) {
    this._dataStream.next(data);
  }
}





@Component({
  selector: 'app-test-form-create',
  templateUrl: './test-form-create.component.html',
  styleUrls: ['./test-form-create.component.css']
})
export class TestFormCreateComponent {

  constructor(
    public dialogRef: MatDialogRef<TestFormCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: ""},
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
