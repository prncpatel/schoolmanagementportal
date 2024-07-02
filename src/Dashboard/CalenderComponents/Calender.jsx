import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "styled-components";
import CalendarToolbar from "./CalendarToolbar";
import EventModal from "./EventModal";
import AddEventDialog from "./AddEventDialog";
import EventIcon from "@mui/icons-material/Event";
import { useBoolean, useId } from "@fluentui/react-hooks";
import "./Calender.css";
import mockEvents from "./mockEvent";
import EventCallout from "./EventCallout";

const localizer = momentLocalizer(moment);

const CalendarContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CalendarComponent = () => {
  const [events, setEvents] = useState(mockEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] =
    useBoolean(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [targetElement, setTargetElement] = useState(null);
  const labelId = useId("callout-label");

  const handleSelectSlot = ({ start }) => {
    setSelectedDate(start);
    setAddDialogOpen(true);
  };

  const handleEventIconClick = (event, e) => {
    e.stopPropagation();
    const eventsOnSameDate = events.filter((ev) =>
      moment(ev.start).isSame(event.start, "day")
    );
    setSelectedDateEvents(eventsOnSameDate);
    setSelectedEvent(event);
    if (e.target.id !== "") {
      setTargetElement(e.target.id);
    } else {
      setTargetElement(e.target.farthestViewportElement.id);
    }
    if (!isCalloutVisible) {
      toggleIsCalloutVisible();
    }
  };

  const handleEventListItemClick = (event) => {
    setSelectedEvent(event);
    setEventModalOpen(true);
    toggleIsCalloutVisible();
  };

  const handleEventModalClose = () => {
    setEventModalOpen(false);
    setSelectedEvent(null);
  };

  const handleAddEventClose = () => {
    setAddDialogOpen(false);
  };

  const handleSaveEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const eventPropGetter = (event) => {
    return {
      style: {
        backgroundColor: "transparent",
      },
    };
  };

  const customEventWrapper = ({ children, event }) => {
    const eventDate = moment(event.start).format("YYYY-MM-DD");
    const firstEventOnDate = events.find(
      (e) => moment(e.start).format("YYYY-MM-DD") === eventDate
    );
    if (firstEventOnDate.id !== event.id) {
      return null;
    }
    return <div>{children}</div>;
  };

  return (
    <CalendarContainer>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 600 }}
        selectable
        onSelectSlot={handleSelectSlot}
        eventPropGetter={eventPropGetter}
        components={{
          toolbar: (props) => <CalendarToolbar {...props} />,
          eventWrapper: customEventWrapper,
          event: ({ event }) => {
            const uniqueId = `event-icon-${event.id}`;
            return (
              <EventIcon
                className="event-icon"
                onClick={(e) => handleEventIconClick(event, e)}
                style={{ margin: "auto" }}
                id={uniqueId}
                disabled={isCalloutVisible} // Disable when callout is visible
              />
            );
          },
        }}
      />
      {isCalloutVisible && targetElement && (
        <EventCallout
          targetElement={targetElement}
          toggleIsCalloutVisible={toggleIsCalloutVisible}
          labelId={labelId}
          selectedDateEvents={selectedDateEvents}
          handleEventListItemClick={handleEventListItemClick}
        />
      )}
      <EventModal
        event={selectedEvent}
        open={eventModalOpen}
        onClose={handleEventModalClose}
      />
      <AddEventDialog
        open={addDialogOpen}
        onClose={handleAddEventClose}
        selectedDate={selectedDate}
        onSave={handleSaveEvent}
      />
    </CalendarContainer>
  );
};

export default React.memo(CalendarComponent);
