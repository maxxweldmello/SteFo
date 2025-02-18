import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperComponent } from './stepper/stepper.component';
import { SubmissionComponent } from './submission/submission.component';

const routes: Routes = [
  { path: '', redirectTo: 'stepper', pathMatch: 'full' },
  { path: 'stepper', component: StepperComponent },
  { path: 'submission', component: SubmissionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
