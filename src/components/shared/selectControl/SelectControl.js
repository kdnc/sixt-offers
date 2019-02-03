import React, {PureComponent} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './SelectControl.css';

const styles = theme => ({
  selectInput: {
    marginLeft: '20px',
    minWidth: '100px'
  }
});

/**
 * Select control to display a list of select options
 */
class SelectControl extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      selectedValue: 'none'
    };
  }

  /**
   * Handle menu item selection in the select control
   * @param {MouseEvent} event - Mouse event for the option selection
   */
  handleOptionSelected = event => {
    const selectedValue = event.target.value;
    this.props.handleOptionSelected(selectedValue);
    this.setState({
      selectedValue
    });
  };

  render() {
    const {selectOptions, selectControlLabel, classes} = this.props;
    const menuItems = selectOptions.map(selectOption =>
      <MenuItem key={selectOption.value}
                value={selectOption.value}>{selectOption.label}</MenuItem>
    );
    const menuItemWithNoneOption = (
      <MenuItem key={'none'} value='none'>
        <em>None</em>
      </MenuItem>
    );
    menuItems.unshift(menuItemWithNoneOption);

    return (
      <>
      <Typography variant="h6" component="h6">
        {selectControlLabel}
      </Typography>
      <Select
        className={classes.selectInput}
        value={this.state.selectedValue}
        onChange={this.handleOptionSelected}>
        {menuItems}
      </Select>
      </>
    );
  }
}

SelectControl.propTypes = {
  selectOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  selectControlLabel: PropTypes.string,
  handleOptionSelected: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SelectControl);;