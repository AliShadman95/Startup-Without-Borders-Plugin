import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";

import { makeStyles } from "@material-ui/core/styles";

const ListMenu = () => {
  return (
    <List component="nav">
      <ListItem>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Roma" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Events" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Members" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Sponsors" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Partners" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Speakers" />
      </ListItem>
    </List>
  );
};

export default ListMenu;
