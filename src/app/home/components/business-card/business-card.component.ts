import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IconOptions } from '@angular/material/icon';

import { ThemingService } from '../../../core/services/theming.service';

type Topic = Readonly<{
  title: string;
  icon: string;
}>;

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
})
export class BusinessCardComponent {
  readonly topic1: Topic = {
    title: 'Full Stack Developer',
    icon: 'build',
  };

  readonly topic2: Topic = {
    title: 'DevOps & LiveOps Specialties',
    icon: 'star',
  };

  readonly topic3: Topic = {
    title: 'A Decade Of Experience',
    icon: 'developer_board',
  };

  private readonly svgIcons: readonly (readonly [string, string, IconOptions?])[] = [
    ['github', 'assets/img/github-logo.svg'],
    ['linkedin', 'assets/img/linkedin-logo.svg'],
  ];

  @ViewChild('topic1Details') private topic1DetailsTemplate: TemplateRef<any> = undefined as any;

  @ViewChild('topic2Details') private topic2DetailsTemplate: TemplateRef<any> = undefined as any;

  @ViewChild('topic3Details') private topic3DetailsTemplate: TemplateRef<any> = undefined as any;

  constructor(private readonly matDialog: MatDialog, themingService: ThemingService) {
    this.svgIcons.forEach(([iconName, url, options]) => themingService.addSvgIcon(iconName, url, options));
  }

  openTopic1Details(): void {
    this.matDialog.open(this.topic1DetailsTemplate);
  }

  openTopic2Details(): void {
    this.matDialog.open(this.topic2DetailsTemplate);
  }

  openTopic3Details(): void {
    this.matDialog.open(this.topic3DetailsTemplate);
  }
}
