'use client';
import { Box, Container, Paper } from "@mui/material";
import { Calendar, Views, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import React, { Fragment, ReactElement, useMemo } from "react";
dayjs.extend(timezone);

const localizer = dayjsLocalizer(dayjs);

const ColoredDateCellWrapper = ({ children }: { children: ReactElement }) =>
    React.cloneElement(React.Children.only(children), {
        style: {
            backgroundColor: "lightblue",
        },
    });


interface CalendarProps {
    events: any;
}

export const CalendarComponent = (props: any) => {
    const { components, defaultDate, max, views } = useMemo(
        () => ({
            components: {
                timeSlotWrapper: ColoredDateCellWrapper,
            },
            defaultDate: new Date(2023, 6, 30),
            max: dayjs().endOf('day').subtract(1, 'hours').toDate(),
            views: Object.keys(Views).map((k) => Views[k as keyof typeof Views]),
        }),
        []
    );

    return (

        <Fragment>
            <div style={{ height: 500 }}>
                <Calendar
                defaultDate={defaultDate}
                    localizer={localizer}
                    events={props.events}
                    max={max}
                    showMultiDayTimes
                    views={views}
                    step={60}
                    style={{ height: 500 }}
                />
            </div>
        </Fragment>
    );
}
