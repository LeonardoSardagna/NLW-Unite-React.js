import { ComponentProps } from "react";

interface TableHeaderProps extends ComponentProps<'th'>{}
export function TableHeader (props: TableHeaderProps){
    return(
        <th {...props} className="font-semibold text-sm px-3 py-4 text-left"/>
    )
}