import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';



export function Post ({author, publishedAt, content}) {

  const [comments, setComments] = useState ([
   'Post muito legal amigo!'
  ])

  const [newCommentText, setNewCommentText] = useState ('')

  const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr}
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  })

  function handleCreateNewComment (){
    event.preventDefault();

    const newCommentText =  event.target.comment.value;

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleCreateNewCommentChange () {
    setNewCommentText(event.target.value);
  }

  function deleteComment (commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(commentItem => {
      return commentItem !== commentToDelete;
    })
    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
        </div>
      </div>

      <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
      </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>;
          }
})}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

          <textarea 
            name="comment"
            placeholder="Escreva um comentário..."
            onChange={handleCreateNewCommentChange}
            value={newCommentText}
          />
          <footer>
            <button type="submit">Publicar</button>
          </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return ( 
          <Comment 
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
          )
        })}
      </div>
    </article>
  )
}