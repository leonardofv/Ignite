import S from './Avatar.module.css';

export function Avatar({hasBorder = true, src}) { //desestruturação

    // const hasBorder = props.hasBorder != false; //controlar borda

    return (
         <img 
            className={ hasBorder ? S.avatarWithBorder : S.avatar } 
            src={src} 
         />
    )
}