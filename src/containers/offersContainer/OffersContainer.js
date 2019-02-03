import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as offersActions from '../../actions/offersActions'
import OffersGrid from "../../components/offersGrid/OffersGrid";

/**
 * Offers tab container
 */
export class OffersContainer extends Component {

  componentDidMount() {
    this.props.offersActions.loadOffers();
  }

  /**
   * Handle offers sort option selection
   * @param {string} selectedSortValue - Value of the selected sort option
   */
  handleOffersSort(selectedSortValue) {
    this.props.offersActions.loadSortedOffers(selectedSortValue);
  }

  render() {
    return (
      <OffersGrid offers={this.props.offers}
                  handleOffersSort={this.handleOffersSort.bind(this)}/>
    );
  };
}

function mapStateToProps(state) {
  let {offers} = state.offerData;
  return {offers};
}

function mapDispatchToProps(dispatch) {
  return {
    offersActions: bindActionCreators(offersActions, dispatch)
  };
}

OffersContainer.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    carGroupInfo: PropTypes.shape({
      modelExample: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired
      })
    }),
    prices: PropTypes.shape({
      totalPrice: PropTypes.shape({
        amount: PropTypes.shape({
          value: PropTypes.number.isRequired,
          currency: PropTypes.string.isRequired
        })
      })
    })
  })),
  offersActions: PropTypes.shape({
    loadOffers: PropTypes.func.isRequired,
    loadSortedOffers: PropTypes.func.isRequired
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(OffersContainer);