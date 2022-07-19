export default function Title(props){
return(
    <div>
        <h1 className="titleHead">{props.headLine}</h1>
        <br />
        <h2 className="titleSubHead">{props.subTitle}</h2>
    </div>
);
}