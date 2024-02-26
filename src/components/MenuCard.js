//import './MenuCard.css';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//<FontAwesomeIcon icon={faMotorcycle} />
function MenuCard({menuItem}) {

    //console.log(menuItem);

    return (
        <>
        <article className="menu-card">
            <img className="menu-card-image" src={menuItem.image} width="300px" height="250px" alt={menuItem.alt} />
            <div className="menu-card-body">
                <h3 className="menu-card-header">{menuItem.name}</h3>
                <p className="menu-card-text">{menuItem.description}</p>
                <button>Order for delivery</button>
            </div>
        </article>
        </>
    );
}

export default MenuCard;