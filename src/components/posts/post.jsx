import S from './post.module.css';
import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comments/Comment';

export function Post({ author, publishedAt }) {

    const dateTimeFormatted = new Intl.DateTimeFormat("pt-BR", {
       day: "numeric",
       month: "long",
       year: "numeric",
       hour: "2-digit",
       minute: "2-digit"
    }).format(publishedAt);

    return (
        <article className={S.post}>
            <header className={S.header}>
                <div  className={S.author}>
                    <Avatar src={author.avatarUrl}/>

                    <div className={S.authorInfor}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={dateTimeFormatted} dateTime="2025-04-13 10:29:00">
                    {dateTimeFormatted}
                </time>
            </header>

            <div className={S.content}>
                
            </div>

            <form className={S.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={S.commentList}>
                <Comment />
            </div>

        </article>
    )
}
