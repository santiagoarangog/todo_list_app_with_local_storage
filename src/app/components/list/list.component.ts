import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  myForm?: FormGroup;
  list: any = []
  task?: string;

  ngOnInit(): void {
    this.GetAll();
    this.myForm = new FormGroup({
      task: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    let obj = {
      TaskName: this.myForm?.get('task')?.value,
      IsComplete: false
    };
    this.list.push(obj);
    this.Save();
    this.myForm?.reset();
  }

  ChangeStatus(index: number, currentValue: boolean) {
    if (this.list.length > index) {
      let obj = this.list[index];
      if (obj != null && typeof obj != "undefined") {
        obj.IsComplete = !currentValue;
        this.list[index] = obj;
        this.Save();
      }
    }
  }

  Delete(index: number) {
    if (this.list.length > index) {
      this.list.splice(index, 1);
      this.Save();
    }
  }

  DeleteAll() {
    this.list = [];
    this.Save();
  }

  Save() {
    localStorage.setItem("todo", JSON.stringify(this.list));
  }

  GetAll() {
    let value = localStorage.getItem("todo");
    if (value != '' && value != null && typeof value != "undefined") {
      this.list = JSON.parse(value!);
    }
  }

  isFormValid(): boolean {
    return <boolean>this.myForm?.valid;
  }

  protected readonly onsubmit = onsubmit;
}
