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
      new Article('Event-Driven Microservices with Kafka and RabbitMQ', 'https://www.redoxengine.com/blog/event-driven-architecture-with-kafka-and-rabbitmq/', 11),
      new Article('Deploying Stateful Applications on Kubernetes', 'https://medium.com/tektutor/deploying-stateful-applications-in-kubernetes-8ffd46920b55', 9),
      new Article('AWS EC2 Instances: A Comprehensive Guide to Virtual Machines', 'https://trackit.io/comprehensive-guide-to-amazon-ec2/', 18),
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
