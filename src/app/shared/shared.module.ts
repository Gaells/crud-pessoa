import { NgModule } from '@angular/core';
import { MinimoValidatorDirective, NumericoDirective } from './directives';
import { MeuPipePipe } from './pipes';
// Diretivas

// Pipes


@NgModule({ 
  declarations: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe
],
  exports: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe
]
})
export class SharedModule { }
