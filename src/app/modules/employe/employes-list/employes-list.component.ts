import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/interfaces/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {

  employe: Employe = {};
  //employes: Array <Employe> = new Array <Employe>();
  employes: any;

  constructor(private employeService: EmployeService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  updateEmploye(id:string) {
    this.router.navigate(['employe/update', id]);
  }

  employeDetail(id:string) {
    this.router.navigate(['employe/detail', id]);
  }

  reloadData() {
    this.employeService.getAllEmployes().subscribe(res => {
      this.employes = res;
      this.employes = this.employes.result;
    })
  }

  saveEmploye() {
    this.employeService.addE(this.employe).subscribe(res => {
      console.log(res);
      this.reloadData();
    })
  }

  deleteEmploye(id:string) {
    console.log("id : ", id);
    this.employeService.deleteE(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

}
