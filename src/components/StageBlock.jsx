import React from 'react';
import PropTypes from 'prop-types';
import CrewItem from './CrewItem';

const StageBlock = ({ items, stage, changeCrewStage }) => (
    <section className="stage-block">
        <h1 className="stage-header">{stage}</h1>
        {items.map(item =>
            <CrewItem
                key={item.id.value}
                item={item}
                changeStage={changeCrewStage}
            />
        )}
    </section>
);

StageBlock.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape()),
    stage: PropTypes.string,
    changeCrewStage: PropTypes.func
};

export default StageBlock;
