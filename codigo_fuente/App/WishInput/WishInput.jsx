import PropTypes from "prop-types";
import React, { useState } from "react";

const WishInput = ({ onNewWish }) => {
    const [newWishText, setNewWishText] = useState('');

    return (
        <fieldset className="new-wish">
            <legend>New wish</legend>
            <input 
                className="wish-input"
                placeholder="Enter your wish here" 
                value={newWishText} 
                onChange={e => setNewWishText(e.target.value)}
                onKeyUp={e => {
                    if (e.key === 'Enter' && newWishText.length) {
                        onNewWish({ done: false, text: newWishText });
                        setNewWishText('');
                    }
                }}
            />
        </fieldset>
    );
};

WishInput.propTypes = {
    onNewWish: PropTypes.func,
};

WishInput.defaultProps = {
    onNewWish: () => {},
};

export default WishInput;
