import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tutorials-page.component.html',
})
export class TutorialsPageComponent {
}

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tutorial-export-drum-vsti.html',
})
export class TutorialExportVstiComponent {
}

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tutorial-record-guitar.html',
})
export class TutorialRecordGuitarComponent {
}

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tutorial-record-android.html',
})
export class TutorialRecordAndroidComponent {
}
