import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StageBlock from './components/StageBlock';
import { fetchCrewList, changeCrewStage } from "./actions/crew.actions";

class App extends PureComponent {
  static propTypes = {
      crewList: PropTypes.arrayOf(PropTypes.shape()),
      stages: PropTypes.shape(),
      fetchCrewList: PropTypes.func,
      changeCrewStage: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchCrewList();
  }

  render() {
    const { crewList, stages, changeCrewStage } = this.props;

    return (
      <article className="app">
          {Object.keys(stages).map((key) =>
            <StageBlock
                key={key}
                stage={stages[key]}
                items={crewList.filter(item => item.currentStage == key)}
                changeCrewStage={changeCrewStage}
            />
          )}
      </article>
    );
  }
}

const mapStateToProps = state => ({
    crewList: state.crew.crewList,
    stages: state.crew.stages
});

export default connect(mapStateToProps, {
    fetchCrewList,
    changeCrewStage
})(App);
