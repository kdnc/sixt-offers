import React from 'react';
import renderer from 'react-test-renderer';
import OfferTile from '../../../components/offerTile/OfferTile';

describe('OfferTile', () => {
  it("OfferTile renders correctly", () => {
    const name = 'BMW 1er Series';
    const imageUrl = 'https://s3.eu-central-1.amazonaws.com/sixt-vehicle-group-info-images-stage/5dd09a1b4481b1d3eba6dc96c3fb28e473553023.jpg';
    const price = 99.75;
    const currency = 'USD';

    const offerTileRenderer = renderer.create(
      <OfferTile name={name}
                 imageUrl={imageUrl}
                 price={price}
                 currency={currency}
      />
    );
  });
});