import PropTypes from "prop-types";
import React from "react";
import WishItem from '../WishItem/WishItem';

const Wishlist = ({ wishes, onWishesChange }) => {

    // Función para manejar cambios en el estado "done" de un wish
    const handleDoneChange = (index, value) => {
        const updatedWishes = [...wishes];
        updatedWishes[index].done = value;
        onWishesChange(updatedWishes);
    };

    return (
        <ul className="wish-list">
            {wishes.map(({ text, done }, index) => (
                <WishItem
                    key={text}
                    text={text}
                    done={done}
                    id={`wish${index}`}
                    onDoneChange={(value) => handleDoneChange(index, value)}
                />
            ))}
        </ul>
    );
};

Wishlist.propTypes = {
    wishes: PropTypes.arrayOf(
        PropTypes.shape({
            done: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    onWishesChange: PropTypes.func.isRequired
};

Wishlist.defaultProps = {
    wishes: [],
    onWishesChange: () => {}
};

export default Wishlist;
