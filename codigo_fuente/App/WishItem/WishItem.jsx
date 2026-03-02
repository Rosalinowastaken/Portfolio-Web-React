import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

const WishItem = ({ done, text, id, onDoneChange }) => (
    <li
        className={classNames('wish-list_item', {
            'wish-list_item--done': done
        })}
    >
        <input 
            id={id} 
            checked={done} 
            onChange={e => onDoneChange(e.target.checked)} 
            type="checkbox" // Corrección de typo
        />
        <label htmlFor={id}>{text}</label>
    </li>
);

WishItem.propTypes = {
    done: PropTypes.bool,
    text: PropTypes.string,
    id: PropTypes.string,
    onDoneChange: PropTypes.func,
};

WishItem.defaultProps = {
    done: false,
    text: '',
    id: '',
    onDoneChange: () => {},
};

export default WishItem;
