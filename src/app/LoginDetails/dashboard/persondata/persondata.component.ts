import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface  Person{
  sno: number;
  name: string;
  email: string;
  mobile: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

const ELEMENT_DATA:Person[]=[
  {
    sno:1,name:'Mahendra',email:'mahendra@gmail.com',mobile:'9177976407',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  },
  {
    sno:2,name:'Siva',email:'siva@gmail.com',mobile:'2345678129',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  },
  {
    sno:3,name:'Ravi',email:'ravi@gmail.com',mobile:'9177976407',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  },
  {
    sno:4,name:'Kavay',email:'kavay@gmail.com',mobile:'9177976407',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  },
  {
    sno:5,name:'Mounika',email:'mounika@gmail.com',mobile:'9177976407',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  },
  {
    sno:6,name:'Raja',email:'raja@gmail.com',mobile:'9177976407',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  },
  {
    sno:7,name:'Sai',email:'sai@gmail.com',mobile:'9177976407',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  },
  {
    sno:8,name:'Krinamaya',email:'krinamaya@gmail.com',mobile:'9177976407',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  },
  {
    sno:9,name:'Mahendra',email:'mahendra@gmail.com',mobile:'9177976407',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  },
  {
    sno:10,name:'Joythi',email:'joythi@gmail.com',mobile:'9177976407',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  },
  {
    sno:11,name:'Naveen',email:'naveen@gmail.com',mobile:'9177976407',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  },
  {
    sno:12,name:'Suresh',email:'suresh@gmail.com',mobile:'9177976407',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  },
  {
    sno:13,name:'Priyanka',email:'priyanka@gmail.com',mobile:'9177976407',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  },
  {
    sno:14,name:'kajal',email:'kajal@gmail.com',mobile:'9177976407',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  },
  {
    sno:15,name:'Balu',email:'balu@gmail.com',mobile:'9177976407',country:'India', city: 'kadapa',state: 'AP',pincode:'516129'
  }
  
]

@Component({
  selector: 'app-persondata',
  templateUrl: './persondata.component.html',
  styleUrls: ['./persondata.component.css']
})
export class PersondataComponent {


  totalLength=15;
  pageSize=5;
  pageSizeOptions:number[]=[5,10,15];
 

  displayedColumns:string[]=['sno','name','email','mobile','city','state','country','pincode'];
  dataSourceData = new MatTableDataSource<Person>(ELEMENT_DATA);
  dataSource =ELEMENT_DATA
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
   this.dataSourceData.paginator = this.paginator;
  }


  currentPage = 1;

    get paginatedData(){
    const startIndex =(this.currentPage -1)  * this.pageSize;
    return this.dataSource.slice(startIndex,startIndex + this.pageSize)
  
  }


  totalPages(){
    return Math.ceil(this.dataSource.length / this.pageSize);
  }

  changepage(page: number){
    this.currentPage =page;
  }
  nextPage(){
    if(this.currentPage < this.totalPages()){
      this.currentPage++;
    }
  }

  prevPage(){
    if(this.currentPage > 1){
      this.currentPage--;
    }
  }

}
