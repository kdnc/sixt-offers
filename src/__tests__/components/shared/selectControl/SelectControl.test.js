import React from 'react';
import renderer from 'react-test-renderer';
import SelectControl from '../../../../components/shared/selectControl/SelectControl';

describe('SelectControl', () => {
  it("SelectControl renders correctly", () => {
    const selectOptions = [
      {label: 'Name', value: 'name'},
      {label: 'Price', value: 'price'},
      {label: 'Popularity', value: 'popularity'}
    ];
    const selectControlLabel = 'Sort by';

    const handleOptionSelected = () => {
    };

    const selectControlRenderer = renderer.create(
      <SelectControl selectOptions={selectOptions}
                     selectControlLabel={selectControlLabel}
                     handleOptionSelected={handleOptionSelected}
      />
    );

  });
});