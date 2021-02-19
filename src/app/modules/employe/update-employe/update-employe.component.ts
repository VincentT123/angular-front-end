import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/interfaces/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {

  id!: string;
  employe!: Employe;

  constructor(private employeService: EmployeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeService.getE(this.id).subscribe(data => {
      console.log("data.result : ", data.result);
      this.employe = data.result;
    })
  }

  updateEmploye() {
    this.employeService.updateE(this.id, this.employe).subscribe(data => {
      console.log(data);
    })
    this.router.navigateByUrl('employe/employes-list')
  }  

}
