import { Component } from '@angular/core';

interface Comment {
  author: string;
  text: string;
  replies: string[];
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.html',
  styleUrls: ['./comments.scss']
})
export class CommentsComponent {
  // List of comments
  comments: Comment[] = [
    { author: 'Alice', text: 'This is a comment', replies: ['First reply'] },
    { author: 'Bob', text: 'Another comment', replies: [] }
  ];

  // Tracks which comment's reply box is open
  selectedComment: Comment | null = null;

  // Holds the value typed in the reply textarea
  newReply: string = '';

  // Opens or closes the reply box for a comment
  selectComment(comment: Comment) {
    if (this.selectedComment === comment) {
      this.selectedComment = null;
    } else {
      this.selectedComment = comment;
      this.newReply = ''; // clear textarea
    }
  }

  // Adds a reply to a comment
  addReply(comment: Comment) {
    if (this.newReply.trim()) {
      comment.replies.push(this.newReply.trim());
      this.newReply = '';
      this.selectedComment = null;
    }
  }
}
