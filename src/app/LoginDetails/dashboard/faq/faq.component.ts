import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {

  faqs=[
    {
      question: 'What is angular?',
      answer: 'Angular is a powerful open-source TypeScript framework developed by Google for building dynamic web applications. Front-end developers use frameworks like Angular or React to create efficient and interactive user interfaces. Angular simplifies creating Single Page Applications (SPAs) by extending HTML with new attributes.',
      expanded: false
    },
    {
      question: "Whati is java?",
      answer: 'Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers write once, and run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java was first released in 1995 and is widely used for developing applications for desktop, web, and mobile devices. Java is known for its simplicity, robustness, and security features, making it a popular choice for enterprise-level applications.',
      expanded: false
   },
    {
      question: "What is HTML?",
      answer: "HTML is an acronym which stands for Hyper Text Markup Language which is used for creating web pages and web applications. Let's see what is meant by Hypertext Markup Language, and Web page",
      expanded: false

    },
    {
      question: "What is CSS?",
      answer: "CSS, or Cascading Style Sheets, is the language used to style and enhance HTML documents. It defines the presentation of HTML elements on a web page, enabling changes to fonts, colors, sizes, spacing, column layouts, and animations.",
      expanded: false
    },
    {
      question: "What is JavaScript",
      answer: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)",
      expanded: false
    }

  ]



}
