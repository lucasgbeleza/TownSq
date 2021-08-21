import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'services/get-data.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  constructor(public dataService: GetDataService) { }

  postsDataFromUrl: any;
  usersDataFromUrl: any;

  ngOnInit(): void {
    this.showPostsData();
    this.showUsersData();
  }

  showPostsData(){
    this.dataService.getPostsData().subscribe(postsData => {
      console.log(postsData)
      this.postsDataFromUrl = postsData;
    });
  }
  showUsersData(){
    this.dataService.getPostsData().subscribe(usersData => {
      console.log(usersData)
      this.usersDataFromUrl = usersData;
    });
  }

}
