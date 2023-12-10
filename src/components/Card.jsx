import star from "../images/star.png"

function Card(props) {

    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <section className="card">
            <div className="card-photo-container">
                <img src={props.item.coverImg} className="card-photo" />
                {badgeText && badge(badgeText)}
            </div>
            <div className="stats-container">
                <div className="star-image-container">
                    <img src={star} className="star-image" />
                </div>
                <span className="rating">{props.item.stats.rating}</span>
                <span className="count gray">({props.item.stats.reviewCount}) • </span>
                <span className="country gray">{props.item.location}</span>
            </div>
            <p className="description">{props.item.title}</p>
            <p className="price"><span className="bold">From ${props.item.price}</span> / person</p>
            
        </section>
    )
}

function badge(badgeText){
    return(
        <div className="status-container">
            <p className="status">{badgeText}</p>
        </div>
    )
}

export default Card;