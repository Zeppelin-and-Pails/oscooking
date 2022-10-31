import React from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";

import styles from "./jss/homeStyle.js";

const useStyles = makeStyles(styles);

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Store />
              </CardIcon>
            </CardHeader>
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
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
