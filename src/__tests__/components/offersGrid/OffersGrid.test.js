import React from 'react';
import renderer from 'react-test-renderer';
import OffersGrid from '../../../components/offersGrid/OffersGrid';

describe('OffersGrid', () => {
  it("OffersGrid's handleOffersSort function returns the selected sort value", () => {
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
    let selectedSortValue = '';
    const handleOffersSort = (sortValue) => {
      selectedSortValue = sortValue
    };
    const offersGridRenderer = renderer.create(
      <OffersGrid offers={offers}
                  handleOffersSort={handleOffersSort} />
    );

    const sortValue = 'name';
    offersGridRenderer.getInstance().handleOffersSort(sortValue);

    expect(selectedSortValue).toEqual(sortValue);
  });
});