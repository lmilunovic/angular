import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: string;

  findUserById = (id: string) => {
    return DUMMY_USERS.find((e) => {
      return e.id === id;
    });
  };

  onSelectUser(id: string) {
    this.selectedUser = this.findUserById(id)?.name;
    console.log(id);
  }
}
