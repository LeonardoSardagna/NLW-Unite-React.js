import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<'button'> {
    transparent?: boolean
}
export function IconButton({ transparent, ...props }: IconButtonProps) {
    return (
        <button {...props}
            className={twMerge(
                "p-1.5 rounded-md border border-white/20",
                transparent ? "bg-black/30" : "bg-black/10",
                props.disabled ? "opacity-50" : ''
            )}
        />
    )
}