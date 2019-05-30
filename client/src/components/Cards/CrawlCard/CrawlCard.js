import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './CrawlCard.css';
import barImg from '../../../images/London.gif';
import ProfilePage from '../../../Pages/ProfilePage/ProfilePage'
// import results from '../../Results/Results'

const styles = theme => ({
    card: {
        margin: "5px",
        flexDirection: "row",
        maxWidth: "350px",
        minWidth: "300px",
        backgroundColor: "black",
        color: "white",
        position: "relative"

    },
    media: {
        color: "white",
        height: 0,
        paddingTop: '56.25%', // 16:9

    },
    type: {
        color: "white"
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        color: "white",
        backgroundColor: "#292929",
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
        backgroundColor: "#292929",
        color: "white"
    },
    avatar: {
        backgroundColor: "#D89B00",
    },
    crawlTitle: {
        color: "#D89B00"
    },
    crawlSubTitle: {
        color: "white"
    },
    header: {
        color: "#D89B00"
    }
});



class CrawlCard extends Component {
    state = { expanded: false };
    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                            D
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={classes.author}
                    subheader={classes.location}
                />
                <CardMedia
                    className={classes.media}
                    image={barImg}
                    title={classes.title}
                />
                <CardContent >
                    <Typography className={classes.type} >
                        {/*  */}
                        <h4 id='crawl-name' className={classes.crawlTitle} >
                            {classes.title}
                        </h4>
                        <h5 className='crawl-city'>
                            {classes.location}
                        </h5>

                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent className={classes.cardText}>
                        <Typography className={classes.type} paragraph>
                            <div className='title'>
                                {classes.title}
                            </div>
                        </Typography>
                        <Typography className={classes.type} paragraph>
                            {classes.venues}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

CrawlCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CrawlCard);

