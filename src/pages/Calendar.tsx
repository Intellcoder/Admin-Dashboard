import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import type {
  DateSelectArg,
  EventApi,
  EventClickArg,
} from "@fullcalendar/core";
import { INITIAL_EVENTS, createEventId } from "../utils/event-utils";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import Typography from "@mui/material/Typography";
import EventList from "../components/EventList";
import LinkDisplay from "../components/LinkDisplay";

const Calendar = () => {
  const [CurrentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [calendarView, setCalendarView] = useState("dayGridMonth");
  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt("Please enter a new title for your events");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  console.log(calendarView);

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCalendarView("listWeek");
      } else {
        setCalendarView("dayGridMonth");
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-2">
      <LinkDisplay title="Calendar" text="Full Calendar Interactive Page" />
      <div className="lg:grid grid-cols-[20%_78%] gap-4 pt-3 pb-3 ">
        <div className=" ">
          <div
            className={`dark:bg-primary-400 p-2  md:overflow-y-auto ${
              CurrentEvents.length > 3 ? "md:h-[74%]" : "md:h-[100%]"
            }`}
          >
            <div className="">
              <Typography className="text-grey-100 ">Events</Typography>
            </div>
            <div className="overflow-auto ">
              {CurrentEvents.map((event) => (
                <EventList
                  key={event.id}
                  title={event.title}
                  startStr={event.startStr}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="text-grey-200 mb-4">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            height="auto"
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right:
                window.innerWidth < 768
                  ? ""
                  : "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events: EventApi[]) => setCurrentEvents(events)}
            initialEvents={INITIAL_EVENTS}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
