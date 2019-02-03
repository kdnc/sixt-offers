import React from 'react';
import renderer from 'react-test-renderer';
import {OffersContainer} from '../../../containers/offersContainer/OffersContainer';

describe('Offers container', () => {
  it('OffersContainer renders correctly', () => {
    const offers = [
      {
        id: 'A0132ACY:A0132AD0-CLMR',
        carGroupInfo: {
          modelExample: {
            name: 'BMW 1er Series',
            imageUrl: 'https://s3.eu-central-1.amazonaws.com/sixt-vehicle-group-info-images-stage/5dd09a1b4481b1d3eba6dc96c3fb28e473553023.jpg'
          }
        },
        prices: {
          totalPrice: {
            amount: {
              value: 99.75,
              currency: 'USD'
            }
          }
        }
      }
    ];
    const offersActions = {
      loadOffers: jest.fn(),
      loadSortedOffers: jest.fn(),
    };
    const offersContainerRenderer = renderer.create(
      <OffersContainer offersActions={offersActions}
                       offers={offers}/>
    );
  });
});