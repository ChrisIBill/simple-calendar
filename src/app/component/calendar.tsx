import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import { Box, Container, Paper } from "@mui/material";

const localizer = dayjsLocalizer(dayjs);
interface CalendarProps {
    events: any;
}
export default const CalendarComponent = (props: CalendarProps) => {
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={props.events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
}
