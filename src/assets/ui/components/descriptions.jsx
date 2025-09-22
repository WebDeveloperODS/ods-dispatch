const P1 = ({extraClass='', children})=> {
    return(
        <p className={`text-md xl:text-lg ${extraClass}`}>{children}</p>
    ) 
}

export { P1 }