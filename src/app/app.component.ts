import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  articles = [];
  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 11),
      new Article('Reactjs', 'https://reactjs.org', 9),
      new Article('Vuejs', 'https://vuejs.org', 8),
      // new Article('Nestjs', 'https://nestjs.com', 10),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    this.articles.push(new Article(title.value, link.value, 0));

    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
