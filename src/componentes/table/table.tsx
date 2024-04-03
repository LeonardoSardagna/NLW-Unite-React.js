import { ComponentProps } from "react";

interface TableProps extends ComponentProps<'table'>{}
export function Table(props: TableProps){
    return(
        <div className="border border-white/20 rounded-lg">
            <table {...props} className="w-full"/>
        </div>
    )
}