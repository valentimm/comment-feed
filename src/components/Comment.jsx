import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment () {
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
              <button alt="Deletar comentário">
                <Trash size={24}/>
              </button>
            </header>
            <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>
          <footer>
            <button>
              <ThumbsUp size={20} />
              Aplaudir <span>20</span>
            </button>
          </footer>
      </div>
    </div>
  )
}