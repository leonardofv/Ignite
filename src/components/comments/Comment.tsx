import S from './Comment.module.css';
import { Avatar } from '../avatar/Avatar';
import { ThumbsUp, Trash } from '@phosphor-icons/react';

import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment( {content, onDeleteComment }: CommentProps ) {

    const [ likeCount, setLikeCount ] = useState(0);

    const handleDeleteComment = () => {
        // console.log('Delete');
        onDeleteComment(content);
    };

    const handleLikeComment = () => {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={S.comment}>
            <Avatar hasBorder={false} src="https://github.com/leonardofv.png" />

            <div className={S.commentBox}>
                <div className={S.commentContent}>
                    <header>
                        <div className={S.authorAndTime}>
                            <strong>Leonardo Vasconcelos</strong>
                            <time title="13 de abril" dateTime="2025-04-13 10:29:36">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar cometário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Like <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}