import React from 'react';
import { Callout, getTheme, mergeStyleSets, FontWeights, Text, DirectionalHint } from "@fluentui/react";
import { List, ListItem, ListItemText } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";

const theme = getTheme();
const styles = mergeStyleSets({
  callout: {
    width: "100%",
    maxWidth: 220,
    padding: 0,
    background: theme.semanticColors.bodyBackground,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E4E7EC",
    padding: "10px 15px",
  },
  date: {
    fontSize: "1rem",
    fontWeight: FontWeights.semibold,
  },
  closeIcon: {
    cursor: "pointer",
    fontSize: "1rem",
  },
  eventList: {
    padding: "10px 15px",
  },
});

const EventCallout = ({ targetElement, toggleIsCalloutVisible, labelId, selectedDateEvents, handleEventListItemClick }) => {
  return (
    <Callout
      target={`#${targetElement}`}
      onDismiss={toggleIsCalloutVisible}
      setInitialFocus
      gapSpace={-10}
      directionalHint={DirectionalHint.leftCenter}
      className={styles.callout}
      coverTarget
      ariaLabelledBy={labelId}
      role="dialog"
    >
      <div className={styles.header}>
        <Text block variant="xLarge" className={styles.date}>
          {selectedDateEvents.length > 0
            ? moment(selectedDateEvents[0].start).format("LL")
            : ""}
        </Text>
        <CloseIcon
          className={styles.closeIcon}
          onClick={toggleIsCalloutVisible}
        />
      </div>
      <div className={styles.eventList}>
        <List>
          {selectedDateEvents.map((event) => (
            <ListItem
              button
              key={event.id}
              onClick={() => handleEventListItemClick(event)}
            >
              <ListItemText
                primary={event.title}
                secondary={event.description}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Callout>
  );
};

export default EventCallout;
