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
    title: 'Petstore SDKs',
    content:
      'APIMatic\'s Petstore SDKs offer seamless integration for developers, streamlining the process of incorporating pet store functionalities into applications with ease and efficiency. With comprehensive API documentation and code generation, APIMatic empowers developers to effortlessly create robust and reliable pet store experiences.',
    link: '/apimatic-widget',
  },
  {
    title: 'Stripe SDKs',
    content:
      'Stripe SDKs by APIMatic provide a simplified pathway for developers to seamlessly integrate secure payment processing into their applications. With code generation for multiple languages, these SDKs enable smooth interaction with the Stripe API, ensuring reliable and efficient transaction management.',
  },
  {
    title: 'MessageMedia SDKs',
    content:
      'MessageMedia SDKs by APIMatic empower developers to effortlessly integrate powerful messaging capabilities into their applications. Offering support for various programming languages, these SDKs streamline communication processes and enhance user engagement through the MessageMedia API.',
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
