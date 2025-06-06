import S from './post.module.css';
import { Avatar } from '../avatar/Avatar';
import { Comment } from '../comments/Comment';

import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';


//interface altor
interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}
//interface para o conteúdo
interface Content {
    type: "paragraph" | "link";
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {

    const [ comments, setComments ] = useState<string[]>([]);
    const [ newCommentText, setNewCommentText ] = useState('');

    const handleCreateNewComment = (event: FormEvent) => {
        event.preventDefault();

        setComments([...comments, newCommentText]);   
        setNewCommentText('');  
    };
                                        //informar onde está acontecendo o evento no formulário
    const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity(''); //requerimento de campo obrigatório
        setNewCommentText(event.target.value)
    }

    const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('campo obrigatório');
    }

    const deleteComment = (commentToDelete: string) => {
        
        const commentWithOutDeletedOne = comments.filter((comment) => {
            return comment != commentToDelete;
        });

        setComments(commentWithOutDeletedOne);
    }

    const dateTimeFormatted = format(post.publishedAt, "d 'de' LLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
        includeSeconds: true,
    });


    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={S.post}>
            <header className={S.header}>
                <div  className={S.author}>
                    <Avatar src={post.author.avatarUrl}/>

                    <div className={S.authorInfor}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={dateTimeFormatted} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={S.content}>
                {post.content.map((item) => {
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
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required={true}
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
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
