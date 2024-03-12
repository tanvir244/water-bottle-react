import './Bottles.css';

const Bottles = ({bottle}) => {
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>{price}</p>
        </div>
    );
};

export default Bottles;