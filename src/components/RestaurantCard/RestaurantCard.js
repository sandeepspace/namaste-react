// Inline Style
const styleCard = {
    backgroundColor: '#f0f0f0'
}

const RestaurantCard = (props) => {
    const { title, thumbnail, category, rating, price } = props.restData;
    return (
        // <div className="res-card" style={styleCard}>
        <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
            <img
                className="rest-img"
                src={thumbnail}
                alt="rest-logo"
            />
            <h3>{title}</h3>
            <h4>{category}</h4>
            <h4>{rating}</h4>
            <h4>${price}</h4>
        </div>
    )
}
export default RestaurantCard;