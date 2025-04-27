import S from './post.module.css';
import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comments/Comment';

import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Key } from '@phosphor-icons/react';

export function Post({ author, publishedAt, content }) {

    const dateTimeFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
        includeSeconds: true,
    })
      

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

                <time title={dateTimeFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={S.content}>
                {content.map((item, index) => {
                    if (item.type == 'paragraph') {
                        return <p key={index}>{item.content}</p>
                    }else if (item.type == 'link') {
                        return <p key={index}><a href='#'>{item.content}</a></p>
                    }
                })}
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
