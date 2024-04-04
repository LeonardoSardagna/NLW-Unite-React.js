import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'> {
    transparent?: boolean
}
export function IconButton({ transparent, ...props }: IconButtonProps) {
    return (
        <button {...props}
            className={twMerge(
                "p-1.5 rounded-md border border-white/20 transition ease-in-out hover:scale-110",
                transparent ? "bg-black/50" : "bg-black",
                props.disabled ? "opacity-50" : ''
            )}
        />
    )
}