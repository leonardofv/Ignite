import S from './post.module.css';
import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comments/Comment';

import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

    const [ comments, setComments ] = useState([ ]);
    const [ newCommentText, setNewCommentText ] = useState('');

    const handleCreateNewComment = (event) => {
        event.preventDefault();

        setComments([...comments, newCommentText]);   
        setNewCommentText('');  
        
    };

    const deleteComment = (commentToDelete) => {
        
        const commentWithOutDeletedOne = comments.filter((comment) => {
            return comment != commentToDelete;
        });
        setComments(commentWithOutDeletedOne);
    }

    const dateTimeFormatted = format(publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
        includeSeconds: true,
    });


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
                {content.map((item) => {
                    if (item.type == 'paragraph') {
                        return <p key={item.content}>{item.content}</p>
                    }else if (item.type == 'link') {
                        return <p key={item.content}><a href='#'>{item.content}</a></p>
                    }
                })};
            </div>

            <form className={S.commentForm} onSubmit={handleCreateNewComment} >
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name='inputTextArea'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={(event) => setNewCommentText(event.target.value)}
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={S.commentList}>
                {comments.map((comment) => {
                    return <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment} 
                    />
                })}
            </div>

        </article>
    )
}
