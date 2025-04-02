import S from './post.module.css';

export function Post(props) {
    return (
        <div className={S.containerPost}>
            <p className={S.p}>{props.author}</p>
            <p>{props.age}</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repudiandae commodi reprehenderit magnam, expedita consequatur ipsum, cum vel maiores esse perspiciatis deleniti fugiat. Dignissimos aperiam similique omnis quod iusto adipisci.
            </p>
        </div>
    )
}
