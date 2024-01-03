import cn from 'classnames'
import React from 'react';
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClickButton: () => void
    text: string
    buttonClassName?: string
    variable?: 'text' | 'button'
}

const Button = ({
    onClickButton,
    text,
    buttonClassName,
    variable,
    ...props
}: IButton) => {
    return (
        <button
            onClick={onClickButton}
            className={cn({
                buttonClassName,
                "": variable === 'text',
                "bg-red-400 p-2 rounded-sm hover:opacity-70 max-w-40": variable === 'button'
            })}
            {...props}
        >
            {text}
        </button>
    );
}

export default Button;