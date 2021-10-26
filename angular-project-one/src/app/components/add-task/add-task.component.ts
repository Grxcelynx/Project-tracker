import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import {Task} from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter()
  text!: string;
  start!: string;
  finished: boolean = false;
  showAddTask!: boolean;
  subscription: Subscription;


  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => 
      this.showAddTask = value)
  }

  ngOnInit(): void {}

  onSubmit() {
    if(!this.text) {
      alert('Pleae add a title!');
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
