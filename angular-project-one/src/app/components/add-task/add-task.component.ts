import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter
  text: string | undefined;
  start: string | undefined;
  finished: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) {
      alert('Pleae add');
      return;
    }

    const newTask = {
      text: this.text,
      start: this.start,
      finished: this.finished
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.start = '';
    this.finished = false;

  }

}
