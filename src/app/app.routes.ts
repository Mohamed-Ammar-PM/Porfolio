import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SummaryComponent } from './summary/summary.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';

export const routes: Routes = [
    {path: "", component: LandingComponent},
    {path: "summary", component: SummaryComponent},
    {path: "education", component: EducationComponent},
    {path: "work", component: WorkComponent},
    {path: "skills", component: SkillsComponent},
    {path: "projects", component: ProjectComponent}
];
