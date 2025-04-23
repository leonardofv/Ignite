import S from './Avatar.module.css';

export function Avatar(props) {
    return (
         <img className={S.avatar} src={props.src} />
    )
}