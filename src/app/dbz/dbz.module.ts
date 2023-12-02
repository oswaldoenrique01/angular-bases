import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import {MainPageDbzComponent} from "./pages/main-page.component";
import {CharactersComponent} from './components/characters/characters.component';
import {AddCharacterComponent} from './components/add-character/add-character.component';


@NgModule({
  declarations: [MainPageDbzComponent, CharactersComponent, AddCharacterComponent],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [MainPageDbzComponent]
})
export class DbzModule {
}
