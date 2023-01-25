import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment ({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){

    onDeleteComment(content);

  }

  function handleLikeComment(){
    setLikeCount(likeCount + 1);
  }
  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/valentimm.png" />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
              <strong>Valentim</strong>
              <time title="21 de fevereiro às 20:12" dateTime="2023-02-21 20:12:40">Cerca de 1h atrás</time>
              </div>

              <button onClick={handleDeleteComment} alt="Deletar comentário">
                <Trash size={24}/>
              </button>

            </header>
            <p>{content}</p>
          </div>
          <footer>
            <button
            onClick={handleLikeComment}
            >
              <ThumbsUp size={20} />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
      </div>
    </div>
  )
}