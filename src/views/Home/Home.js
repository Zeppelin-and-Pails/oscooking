import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import styles from "./jss/homeStyle.js";
import {Quote, Muted, Primary, Info, Success} from "../../components/Typography";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Used Space</p>
              <h3 className={classes.cardTitle}>
                49/50 <small>GB</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked from Github
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Material Dashboard Heading</h4>
              <p className={classes.cardCategoryWhite}>
                Created using Roboto Font Family
              </p>
            </CardHeader>
            <CardBody>
              <div className={classes.typo}>
                <div className={classes.note}>Header 1</div>
                <h1>The Life of Material Dashboard</h1>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 2</div>
                <h2>The Life of Material Dashboard</h2>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 3</div>
                <h3>The Life of Material Dashboard</h3>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 4</div>
                <h4>The Life of Material Dashboard</h4>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 5</div>
                <h5>The Life of Material Dashboard</h5>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Header 6</div>
                <h6>The Life of Material Dashboard</h6>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Paragraph</div>
                <p>
                  I will be the leader of a company that ends up being worth billions
                  of dollars, because I got the answers. I understand culture. I am
                  the nucleus. I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things could
                  be at.
                </p>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Quote</div>
                <Quote
                  text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                  author=" Kanye West, Musician"
                />
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Muted Text</div>
                <Muted>
                  I will be the leader of a company that ends up being worth billions
                  of dollars, because I got the answers...
                </Muted>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Primary Text</div>
                <Primary>
                  I will be the leader of a company that ends up being worth billions
                  of dollars, because I got the answers...
                </Primary>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Info Text</div>
                <Info>
                  I will be the leader of a company that ends up being worth billions
                  of dollars, because I got the answers...
                </Info>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Success Text</div>
                <Success>
                  I will be the leader of a company that ends up being worth billions
                  of dollars, because I got the answers...
                </Success>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Warning Text</div>
                <Warning>
                  I will be the leader of a company that ends up being worth billions
                  of dollars, because I got the answers...
                </Warning>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Danger Text</div>
                <Danger>
                  I will be the leader of a company that ends up being worth billions
                  of dollars, because I got the answers...
                </Danger>
              </div>
              <div className={classes.typo}>
                <div className={classes.note}>Small Tag</div>
                <h2>
                  Header with small subtitle
                  <br />
                  <small>
                    Use {'"'}Small{'"'} tag for the headers
                  </small>
                </h2>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
