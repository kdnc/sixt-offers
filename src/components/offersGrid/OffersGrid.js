import React, {Component} from 'react';
import PropTypes from 'prop-types';
import OfferTile from "../offerTile/OfferTile";
import SelectControl from "../shared/selectControl/SelectControl";
import {offersSortOptions} from "../../utils/OffersSortOptions";
import './OffersGrid.css';

/**
 * Grid component to display the offers
 */
class OffersGrid extends Component {

  /**
   * Handle sort option selection
   * @param {string} selectedSortValue - Value of the selected sort option
   */
  handleOffersSort = selectedSortValue => {
    this.props.handleOffersSort(selectedSortValue);
  };

  render() {
    let {offers = []} = this.props;

    let offerTiles = offers.map((offer) => {
      const {id} = offer;
      const {name, imageUrl} = offer.carGroupInfo.modelExample;
      const {value: price, currency} = offer.prices.totalPrice.amount;
      return <OfferTile
        key={id}
        name={name}
        imageUrl={imageUrl}
        price={price}
        currency={currency}/>
    });

    return (
      <div>
        <div className='sort-control-container'>
          {<SelectControl selectOptions={offersSortOptions}
                          handleOptionSelected={this.handleOffersSort}
                          selectControlLabel='Sort by'/>
          }
        </div>
        <div className="offers-grid">
          {offerTiles}
        </div>
      </div>
    );
  }
}

OffersGrid.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
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
  handleOffersSort: PropTypes.func.isRequired
};

export default OffersGrid;