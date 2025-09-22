export function H1({children,extraCss}){
    return(
        <h1 className={`${extraCss} text-3xl xl:text-4xl font-bold uppercase tracking-normal`}>{children}</h1>
    )
}
export function H2({children,extraCss}){
    return(
        <h2 className={`${extraCss} text-2xl xl:text-3xl font-bold tracking-normal`}>{children}</h2>
    )
}
export function H3({children,extraCss}){
    return(
        <h3 className={`${extraCss} text-lg tracking-normal`}>{children}</h3>
    )
}
export function TagHead({children, extraCss}){
    return (
        <h5 className={`font-semibold uppercase tracking-wide ${extraCss}`}>{children}</h5>
    )
}