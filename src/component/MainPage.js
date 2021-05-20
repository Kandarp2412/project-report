import { Card } from "@material-ui/core";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    "aria-controls": `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginLeft: 15,
    // backgroundColor: theme.palette.background.paper,
  },
}));

function MainPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //   const [data, setData] = useState("projectname:xyz");
  return (
    <div>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
          style={{
            backgroundColor: "white",
            color: "black",

            marginLeft: "72px",
          }}
        >
          <Tab
            value="one"
            style={{ fontSize: "16px" }}
            label="All active launchpads"
            wrapped
            {...a11yProps("one")}
          />
          <Tab
            value="two"
            label="Completed launchpads"
            style={{ fontSize: "16px" }}
            {...a11yProps("two")}
          />
          <Tab
            value="three"
            style={{ fontSize: "16px" }}
            label="upcoming launchpads"
            {...a11yProps("three")}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        {/* <div style={{ display: "flex", marginLeft: "40px", marginTop: "20px" }}>
        <li style={{ marginLeft: "10px", listStyleType: "none" }}>
          All active launchpads
        </li>
        <li style={{ marginLeft: "30px", listStyleType: "none" }}>
          Completed launch pad
        </li>
        <li style={{ marginLeft: "30px", listStyleType: "none" }}>
          Upcomming launch pad
        </li>
      </div> */}
        <h4>Active launchpads</h4>
        <Card
          style={{
            marginTop: "50px",
            // border: "1px solid black",
            paddingTop: "20px",
            paddingBottom: "20px",
            // backgroundColor: "#89c2d9",
            // width: "1300px",
            marginLeft: "50px",
            marginRight: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src="http://www.logodesign.net/images/abstract-logo.png"
            style={{ height: "50px", width: "60px" }}
          />
          <li style={{ listStyleType: "none" }}>Project 1</li>
          <div>
            <li
              style={{
                // marginLeft: "10px",
                listStyleType: "none",
              }}
            >
              PeriodEnd
              <br />
              <b>01/09/2021</b>
            </li>
          </div>
          <li style={{ listStyleType: "none" }}>
            Please <a href="#">Connnect your wallet</a> to see more detail
            <ArrowForwardIosIcon
              style={{
                alignItems: "center",
                float: "right",
                marginLeft: "50px",
              }}
            />
          </li>
        </Card>
        <Card
          style={{
            marginTop: "50px",
            // border: "1px solid black",
            paddingTop: "20px",
            paddingBottom: "20px",
            // backgroundColor: "#89c2d9",
            //   width: "1100px",
            marginLeft: "50px",
            marginRight: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src="https://99designs-acquisition-frontend.imgix.net/serverless/images/categoryPage/hero/logo-design/04-artsigma.jpg?auto=format&w=300&h=300"
            style={{ height: "60px", width: "60px" }}
          />
          <li style={{ listStyleType: "none" }}>Project 2</li>
          <div>
            <li
              style={{
                // marginLeft: "10px",
                listStyleType: "none",
              }}
            >
              PeriodEnd
              <br />
              <b>01/09/2021</b>
            </li>
          </div>
          <li style={{ listStyleType: "none" }}>
            Please <a href="#">Connnect your wallet</a> to see more detail
            <ArrowForwardIosIcon
              style={{
                alignItems: "center",
                float: "right",
                marginLeft: "50px",
              }}
            />
          </li>
        </Card>
        <Card
          style={{
            marginTop: "50px",
            // border: "1px solid black",
            paddingTop: "20px",
            paddingBottom: "20px",
            // backgroundColor: "#89c2d9",
            //   width: "1100px",
            marginLeft: "50px",
            marginRight: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src="https://digitalsynopsis.com/wp-content/uploads/2019/04/beautiful-gradient-logo-designs-1.jpg"
            style={{ height: "50px", width: "60px" }}
          />
          <li style={{ listStyleType: "none" }}>Project 3</li>
          <div>
            <li
              style={{
                // marginLeft: "10px",
                listStyleType: "none",
              }}
            >
              PeriodEnd
              <br />
              <b>01/09/2021</b>
            </li>
          </div>
          <li style={{ listStyleType: "none" }}>
            Please <a href="#">Connnect your wallet</a> to see more detail
            <ArrowForwardIosIcon
              style={{
                alignItems: "center",
                float: "right",
                marginLeft: "50px",
              }}
            />
          </li>
        </Card>
      </TabPanel>
      <TabPanel value={value} index="two">
        <h4>Completed launchpads</h4>
        <Card
          style={{
            marginTop: "50px",
            // border: "1px solid black",
            paddingTop: "20px",
            paddingBottom: "20px",
            // backgroundColor: "#89c2d9",
            // width: "1300px",
            marginLeft: "50px",
            marginRight: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src="http://www.logodesign.net/images/abstract-logo.png"
            style={{ height: "50px", width: "60px" }}
          />
          <li style={{ listStyleType: "none" }}>Project 1</li>
          <div>
            <li
              style={{
                // marginLeft: "10px",
                listStyleType: "none",
              }}
            >
              PeriodEnd
              <br />
              <b>01/09/2021</b>
            </li>
          </div>
          <li style={{ listStyleType: "none" }}>
            Please <a href="#">Connnect your wallet</a> to see more detail
            <ArrowForwardIosIcon
              style={{
                alignItems: "center",
                float: "right",
                marginLeft: "50px",
              }}
            />
          </li>
        </Card>
        <Card
          style={{
            marginTop: "50px",
            // border: "1px solid black",
            paddingTop: "20px",
            paddingBottom: "20px",
            // backgroundColor: "#89c2d9",
            //   width: "1100px",
            marginLeft: "50px",
            marginRight: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src="https://99designs-acquisition-frontend.imgix.net/serverless/images/categoryPage/hero/logo-design/04-artsigma.jpg?auto=format&w=300&h=300"
            style={{ height: "60px", width: "60px" }}
          />
          <li style={{ listStyleType: "none" }}>Project 2</li>
          <div>
            <li
              style={{
                // marginLeft: "10px",
                listStyleType: "none",
              }}
            >
              PeriodEnd
              <br />
              <b>01/09/2021</b>
            </li>
          </div>
          <li style={{ listStyleType: "none" }}>
            Please <a href="#">Connnect your wallet</a> to see more detail
            <ArrowForwardIosIcon
              style={{
                alignItems: "center",
                float: "right",
                marginLeft: "50px",
              }}
            />
          </li>
        </Card>
        <Card
          style={{
            marginTop: "50px",
            // border: "1px solid black",
            paddingTop: "20px",
            paddingBottom: "20px",
            // backgroundColor: "#89c2d9",
            //   width: "1100px",
            marginLeft: "50px",
            marginRight: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src="https://digitalsynopsis.com/wp-content/uploads/2019/04/beautiful-gradient-logo-designs-1.jpg"
            style={{ height: "50px", width: "60px" }}
          />
          <li style={{ listStyleType: "none" }}>Project 3</li>
          <div>
            <li
              style={{
                // marginLeft: "10px",
                listStyleType: "none",
              }}
            >
              PeriodEnd
              <br />
              <b>01/09/2021</b>
            </li>
          </div>
          <li style={{ listStyleType: "none" }}>
            Please <a href="#">Connnect your wallet</a> to see more detail
            <ArrowForwardIosIcon
              style={{
                alignItems: "center",
                float: "right",
                marginLeft: "50px",
              }}
            />
          </li>
        </Card>
      </TabPanel>
      <TabPanel value={value} index="three">
        <h4>Upcoming launchpads</h4>
        <Card
          style={{
            marginTop: "50px",
            // border: "1px solid black",
            paddingTop: "20px",
            paddingBottom: "20px",
            // backgroundColor: "#89c2d9",
            // width: "1300px",
            marginLeft: "50px",
            marginRight: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src="http://www.logodesign.net/images/abstract-logo.png"
            style={{ height: "50px", width: "60px" }}
          />
          <li style={{ listStyleType: "none" }}>Project 1</li>
          <div>
            <li
              style={{
                // marginLeft: "10px",
                listStyleType: "none",
              }}
            >
              PeriodEnd
              <br />
              <b>01/09/2021</b>
            </li>
          </div>
          <li style={{ listStyleType: "none" }}>
            Please <a href="#">Connnect your wallet</a> to see more detail
            <ArrowForwardIosIcon
              style={{
                alignItems: "center",
                float: "right",
                marginLeft: "50px",
              }}
            />
          </li>
        </Card>
        <Card
          style={{
            marginTop: "50px",
            // border: "1px solid black",
            paddingTop: "20px",
            paddingBottom: "20px",
            // backgroundColor: "#89c2d9",
            //   width: "1100px",
            marginLeft: "50px",
            marginRight: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src="https://99designs-acquisition-frontend.imgix.net/serverless/images/categoryPage/hero/logo-design/04-artsigma.jpg?auto=format&w=300&h=300"
            style={{ height: "60px", width: "60px" }}
          />
          <li style={{ listStyleType: "none" }}>Project 2</li>
          <div>
            <li
              style={{
                // marginLeft: "10px",
                listStyleType: "none",
              }}
            >
              PeriodEnd
              <br />
              <b>01/09/2021</b>
            </li>
          </div>
          <li style={{ listStyleType: "none" }}>
            Please <a href="#">Connnect your wallet</a> to see more detail
            <ArrowForwardIosIcon
              style={{
                alignItems: "center",
                float: "right",
                marginLeft: "50px",
              }}
            />
          </li>
        </Card>
        <Card
          style={{
            marginTop: "50px",
            // border: "1px solid black",
            paddingTop: "20px",
            paddingBottom: "20px",
            // backgroundColor: "#89c2d9",
            //   width: "1100px",
            marginLeft: "50px",
            marginRight: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <img
            src="https://digitalsynopsis.com/wp-content/uploads/2019/04/beautiful-gradient-logo-designs-1.jpg"
            style={{ height: "50px", width: "60px" }}
          />
          <li style={{ listStyleType: "none" }}>Project 3</li>
          <div>
            <li
              style={{
                // marginLeft: "10px",
                listStyleType: "none",
              }}
            >
              PeriodEnd
              <br />
              <b>01/09/2021</b>
            </li>
          </div>
          <li style={{ listStyleType: "none" }}>
            Please <a href="#">Connnect your wallet</a> to see more detail
            <ArrowForwardIosIcon
              style={{
                alignItems: "center",
                float: "right",
                marginLeft: "50px",
              }}
            />
          </li>
        </Card>
      </TabPanel>
    </div>
  );
}

export default MainPage;
