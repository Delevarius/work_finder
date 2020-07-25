import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import Component from './components';

function mapStateToProps(state : any) {
  const {
    workItems,
    filterIndustryOptions,
    filterCatergoryOptions,
    currentIndustryFilter,
    currentCategoryFilter
  } = state.work;
    return {
      workItems,
      filterIndustryOptions,
      filterCatergoryOptions,
      currentIndustryFilter,
      currentCategoryFilter
    };
}

export function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(actionCreators, dispatch);
}

const Work = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Work;