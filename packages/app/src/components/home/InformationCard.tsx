import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3),
    backgroundColor: '#ffffff',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  linkedTitle: {
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
}));

const informationData = [
  {
    title: 'SDKs',
    content:
      'Enable faster integrations of your API by providing multi-language SDKs with API reference docs, dynamic code samples, assisted authentication and more - all auto-generated to provide a comprehensive developer experience beyond any API documentation tool.',
    link: '/apimatic-widget',
  },
  {
    title: 'Card 1 Title',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed ullamcorper libero. Fusce bibendum euismod ex, sit amet interdum ipsum tristique non. Aliquam erat volutpat. Sed at hendrerit velit. Aliquam erat volutpat. Sed at hendrerit velit dolor sit.Sed at hendrerit velit dolor sit.',
  },
  {
    title: 'Card 2 Title',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed ullamcorper libero. Fusce bibendum euismod ex, sit amet interdum ipsum tristique non. Aliquam erat volutpat. Sed at hendrerit velit. Aliquam erat volutpat. Sed at hendrerit velit dolor sit.Sed at hendrerit velit dolor sit.',
  },
];

function InformationCard({ title, content, link }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {link ? (
        <Link to={link}>
          <Typography variant="h5" className={`${classes.title} ${classes.linkedTitle}`}>
            {title}
          </Typography>
        </Link>
      ) : (
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
      )}
      <CardContent>
        <Typography variant="body1">{content}</Typography>
      </CardContent>
    </Card>
  );
}

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {informationData.map((info, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <InformationCard
              title={info.title}
              content={info.content}
              link={info.link}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
