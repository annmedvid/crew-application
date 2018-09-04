import React from 'react';
import PropTypes from 'prop-types';

const StageBlock = ({ items, stage, changeCrewStage }) => (
    <section className="stage-block">
        <h1 className="stage-header">{stage}</h1>
    </section>
);

StageBlock.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape()),
    stage: PropTypes.string,
    changeCrewStage: PropTypes.func
};

export default StageBlock;
