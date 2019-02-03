import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './AboutContainer.css';

/**
 * About tab container
 */
const AboutContainer = () => (
  <Card className='about-card'>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Notable items in the application
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Offers are displayed in a responsive grid.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Each individual offers are displayed in square format tiles.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Desktop screen sizes (&gt;768px) would display four tiles per row, and mobile and tablet screen sizes (&lt;768px) would display two tiles per row.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        offers are sortable by the options in the key, sortIndexes.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        App is designed with Material UI design.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        'create-react-app' is used as the scaffolding tool for the application.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Redux architecture has been used in the application.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Redux saga has been used to asynchronously load data to the grid.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        React router is used for the routing.
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Unit tests are written using Jest.
      </Typography>
    </CardContent>
  </Card>
);

export default AboutContainer;