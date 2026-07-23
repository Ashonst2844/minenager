interface ImageProps {
    type:"normal"|"icon"
    url:string;
    w?:string;
    h?:string;
    className?:string
}
function Image(props: ImageProps) {
    return props.type=="normal"?
    <picture style={{
        width:props.w?props.w:"100%",
        minWidth:props.w?props.w:"100%",
        height:props.h?props.h:"100%"
    }} className={props.className}>
        <source srcSet={`${props.url}.webp`} type="image/webp"/>
        <img src={`${props.url}.jpg`} alt={props.url} loading="lazy"/>
    </picture>
    :
    <img src={`/icons/${props.url}.svg`} alt={props.url} loading="eager" className={props.className}/>
} export default Image;