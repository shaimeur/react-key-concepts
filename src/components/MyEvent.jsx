const MyEvent = (props) =>{
    const { image, title, description } = props.concepts;

    return (
        <div>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default MyEvent