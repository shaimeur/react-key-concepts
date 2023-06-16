const MyCompoenent = (props) =>{
    const { image, title, description } = props.concepts;
    return (
        <li className="concept">
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    )
}

export default MyCompoenent