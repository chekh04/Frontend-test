import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersSortComponent } from './characters-sort.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CharactersSortComponent],
  exports: [CharactersSortComponent],
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, FormsModule],
})
export class CharactersSortModule {}
