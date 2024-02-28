
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MenuCard({menuItem}) {

    return (
        <>
        <article className="menu-card">
            <img className="menu-card-image" src={menuItem.image} width="300px" height="250px" alt={menuItem.alt} />
            <div className="menu-card-body">
                <h3 className="menu-card-header">{menuItem.name}</h3>
                <p className="menu-card-text">{menuItem.description}</p>
                <p className="menu-card-link-text">Order for delivery&nbsp;&nbsp;&nbsp;<span><FontAwesomeIcon icon={faMotorcycle} size="1x" /></span></p>
            </div>
        </article>
        </>
    );
}

export default MenuCard;