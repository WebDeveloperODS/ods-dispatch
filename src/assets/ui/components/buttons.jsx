export function FunctionButton({extraClass, children, actionCall}){
    return(
        <button onClick={actionCall} className={`uppercase text-md font-bold px-3 py-2 rounded-md ${extraClass} cursor-pointer transition-all ease-in-out duration-300`}>{children}</button>
    )
}
export function PageButton({extraClass, children, addressLink}){
    return(
        <a href={addressLink} className={`uppercase text-md font-bold px-3 py-2 rounded-md ${extraClass} cursor-pointer transition-all ease-in-out duration-300`}>{children}</a>
    )
}