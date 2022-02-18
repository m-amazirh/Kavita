import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbCollapseModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { ReadMoreComponent } from './read-more/read-more.component';
import { RouterModule } from '@angular/router';
import { DrawerComponent } from './drawer/drawer.component';
import { TagBadgeComponent } from './tag-badge/tag-badge.component';
import { ShowIfScrollbarDirective } from './show-if-scrollbar.directive';
import { A11yClickDirective } from './a11y-click.directive';
import { SeriesFormatComponent } from './series-format/series-format.component';
import { UpdateNotificationModalComponent } from './update-notification/update-notification-modal.component';
import { CircularLoaderComponent } from './circular-loader/circular-loader.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SentenceCasePipe } from './sentence-case.pipe';
import { PersonBadgeComponent } from './person-badge/person-badge.component';
import { BadgeExpanderComponent } from './badge-expander/badge-expander.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    SafeHtmlPipe,
    ReadMoreComponent,
    DrawerComponent,
    TagBadgeComponent,
    ShowIfScrollbarDirective,
    A11yClickDirective,
    SeriesFormatComponent,
    UpdateNotificationModalComponent,
    CircularLoaderComponent,
    SentenceCasePipe,
    PersonBadgeComponent,
    BadgeExpanderComponent,
    ImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NgbCollapseModule,
    NgbTooltipModule, // RegisterMemberComponent
    NgCircleProgressModule.forRoot(),
  ],
  exports: [
    SafeHtmlPipe, // Used globally
    SentenceCasePipe, // Used globablly
    ReadMoreComponent, // Used globably
    DrawerComponent, // Can be replaced with boostrap offscreen canvas (v5)
    ShowIfScrollbarDirective, // Used book reader only?
    A11yClickDirective, // Used globally
    SeriesFormatComponent, // Used globally
    TagBadgeComponent, // Used globally
    CircularLoaderComponent, // Used in Cards only
    PersonBadgeComponent,  // Used Series Detail
    BadgeExpanderComponent, // Used globally
    ImageComponent // Used globally
  ],
})
export class SharedModule { }
