import S from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
};


export function Avatar({hasBorder = true, ...props }:AvatarProps) { //desestruturação

    console.log(props);
    // const hasBorder = props.hasBorder != false; //controlar borda

    return (
         <img 
            className={ hasBorder ? S.avatarWithBorder : S.avatar } 
            {...props}
         />
    )
}