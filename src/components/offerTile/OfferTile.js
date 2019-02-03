import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './OfferTile.css';

const styles = theme => ({
  offerTileCard: {
    height: '100%'
  },
  offerTileCardContent: {
    paddingTop: 0
  },
  offerName: {
    fontWeight: 'bold',
    fontSize: '16px'
  }
});

/**
 * Single offer tile component
 */
const OfferTile = ({name, imageUrl, price, currency, classes}) => (
  <div className="offer-item">
    <div className="offer-item-inner">
      <Card className={classes.offerTileCard}>
        <CardActionArea>
          <CardMedia
            component="img"
            className="offer-image"
            image={imageUrl}
          />
          <CardContent className={classes.offerTileCardContent}>
            <Typography component="p" className={classes.offerName}>
              {name}
            </Typography>
            <Typography component="p">
              Price - {currency} {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  </div>
);

OfferTile.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OfferTile);;