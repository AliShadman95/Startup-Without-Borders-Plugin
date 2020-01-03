import React, { useEffect } from "react";
import { registerRoutes } from "../../helpers/Crud";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Events from "./Events/Events";
import Speakers from "./Speakers/Speakers";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  },
  tabPanel: { width: "85vw" }
}));

const VerticalTab = ({ wp }) => {
  useEffect(() => {
    registerRoutes();
  }, []);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Events" {...a11yProps(0)} />
        <Tab label="Members" {...a11yProps(1)} />
        <Tab label="Sponsors" {...a11yProps(2)} />
        <Tab label="Partners" {...a11yProps(3)} />
        <Tab label="Speakers" {...a11yProps(4)} />
        <Tab label="Analytics" {...a11yProps(5)} />
        <Tab label="Settings" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0} className={classes.tabPanel}>
        <Events wp={wp} />
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.tabPanel}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4} className={classes.tabPanel}>
        <Speakers wp={wp} />
      </TabPanel>
      <TabPanel value={value} index={5} className={classes.tabPanel}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6} className={classes.tabPanel}>
        Item Seven
      </TabPanel>
    </div>
  );
};

export default VerticalTab;
