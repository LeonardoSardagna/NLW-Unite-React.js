import { ComponentProps } from "react";
import {twMerge} from "tailwind-merge";

interface TableCellProps extends ComponentProps<'td'> { }
export function TableCell(props: TableCellProps) {
    return (
        <td {...props} className={twMerge("text-sm px-4 py-3 text-left", props.className)} />
    )
}