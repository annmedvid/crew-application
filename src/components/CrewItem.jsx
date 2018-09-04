import React from 'react';
import PropTypes from 'prop-types';


const CrewItem = ({ item, changeStage }: Props) => (
    <section className="crew-item">
        <picture className="crew-photo">
            <source srcSet={item.picture.large} media="(max-width: 768px)" />
            <source srcSet={item.picture.medium} />
            <img src={item.picture.medium} alt={item.login.username} />
        </picture>
        <p className="crew-name">{Object.values(item.name).reduce((acc, value) => `${acc} ${value}`, '')}</p>
        <footer className="crew-actions">
            {item.currentStage > 0 && <button onClick={() => changeStage(item.id.value, -1)} className="back-btn">back</button>}
            {item.currentStage < 2 && <button onClick={() => changeStage(item.id.value, 1)} className="go-btn">go</button>}
        </footer>
    </section>
);

CrewItem.propTypes = {
    item: PropTypes.shape(),
    changeStage: PropTypes.func
};

export default CrewItem;
