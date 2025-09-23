const P1 = ({extraClass='', children})=> {
    return(
        <p className={`text-md xl:text-lg ${extraClass}`}>{children}</p>
    ) 
}
const P2 = ({extraClass='', children})=> {
    return(
        <p className={`text-sm xl:text-md ${extraClass}`}>{children}</p>
    ) 
}

export { P1, P2 }