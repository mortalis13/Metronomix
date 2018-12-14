import { MainPageComponent } from './main-page/main-page.component';
import { LinksPageComponent } from './links-page/links-page.component';
import * as TUTORIALS from './tutorials-page/tutorials-page.component';
import * as MISC from './misc-pages/misc-pages.component';

import { TestComponent } from './tests/test.component';


export const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'tutorials',
    component: TUTORIALS.TutorialsPageComponent
  },
  {
    path: 'tutorials/how_to_export_drum_vsti',
    component: TUTORIALS.TutorialExportVstiComponent
  },
  {
    path: 'tutorials/how_to_record_guitar',
    component: TUTORIALS.TutorialRecordGuitarComponent
  },
  {
    path: 'tutorials/how_to_record_android',
    component: TUTORIALS.TutorialRecordAndroidComponent
  },
  {
    path: 'links',
    component: LinksPageComponent
  },
  {
    path: 'privacy-policy',
    component: MISC.PrivacyPolicyPageComponent
  },
]
