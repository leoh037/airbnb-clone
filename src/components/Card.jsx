import star from "../images/star.png"

function Card(props) {
    return (
        <section className="card">
            <div className="card-photo-container">
                <img src={props.img} className="card-photo" />
                <div className="status-container">
                    <p className="status">{ (props.status > 0) ? "ONLINE" : "SOLD OUT" }</p>
                </div>
            </div>
            <div className="stats-container">
                <div className="star-image-container">
                    <img src={star} className="star-image" />
                </div>
                <span className="rating">{props.rating}</span>
                <span className="count gray">({props.reviewCount}) • </span>
                <span className="country gray">{props.country}</span>
            </div>
            <p className="description">{props.title}</p>
            <p className="price"><span className="bold">From ${props.price}</span> / person</p>
            
        </section>
    )
}

export default Card;