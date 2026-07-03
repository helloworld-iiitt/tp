import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import FullCalendar from "@fullcalendar/react";
import { useState } from "react";
import type { EventApi, EventClickArg } from "@fullcalendar/core";

import EventDetailsModal from "./EventDetailsModal";

const Calender = () => {
    const [selectedEvent, setSelectedEvent] = useState<EventApi | null>(null);

    const downloadEventIcs = (event: EventApi) => {
        const formatDate = (date: Date) =>
            date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

        const start = event.start;

        if (!start) return;

        const end = event.end ?? start;

        const icsContent = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "PRODID:-//IIITT TNP//Calendar Export//EN",
            "BEGIN:VEVENT",
            `UID:${event.id || Date.now()}@iiitt.ac.in`,
            `DTSTAMP:${formatDate(new Date())}`,
            `DTSTART:${formatDate(start)}`,
            `DTEND:${formatDate(end)}`,
            `SUMMARY:${event.title}`,
            `DESCRIPTION:${event.extendedProps?.description || ""}`,
            `LOCATION:${event.extendedProps?.location || ""}`,
            "END:VEVENT",
            "END:VCALENDAR",
        ].join("\r\n");

        const blob = new Blob([icsContent], {
            type: "text/calendar;charset=utf-8",
        });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `${event.title}.ics`;

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        URL.revokeObjectURL(url);
    };

    const handleEventClick = (info: EventClickArg) => {
        info.jsEvent.preventDefault();
        setSelectedEvent(info.event);
    };

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
                        Events & Opportunities
                    </h1>

                    <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                        Stay informed about placement drives, internship
                        opportunities, workshops, assessments, company
                        interactions and important recruitment updates.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3 mb-10">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="font-semibold text-slate-900">
                            Placement Drives
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">
                            Track upcoming recruitment drives and company
                            hiring schedules.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="font-semibold text-slate-900">
                            Internships
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">
                            Stay updated with internship opportunities and
                            application deadlines.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="font-semibold text-slate-900">
                            Workshops & Assessments
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">
                            Never miss workshops, coding tests, PPTs and
                            career development sessions.
                        </p>
                    </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                    <div className="border-b border-slate-200 px-6 py-5">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h2 className="text-xl font-semibold text-slate-900">
                                    Recruitment Calendar
                                </h2>
                                <p className="mt-1 text-sm text-slate-500">
                                    Click on any event to view details and add it to your personal calendar.
                                </p>
                            </div>

                            <div className="flex flex-col items-start gap-2 md:items-end">
                                <a
                                    href="https://calendar.google.com/calendar/u/4?cid=Y184M2YxNjc1MDE3ODYxOTMzZmNkNDNmNTRkMTYxMTAyMTY1NGM0ZTJmMDg3NmIwNGQ0YTM1MWNiODE4YWI5MDQxQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
                                >
                                    Open Student Calendar
                                </a>

                                <p className="text-xs text-slate-500">
                                    Accessible only with an @iiitt.ac.in Google account.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:p-6">
                        <FullCalendar
                            plugins={[
                                dayGridPlugin,
                                timeGridPlugin,
                                googleCalendarPlugin,
                            ]}
                            initialView="dayGridMonth"
                            headerToolbar={{
                                left: "prev,next today",
                                center: "title",
                                right: "dayGridMonth,timeGridWeek,timeGridDay",
                            }}
                            googleCalendarApiKey={
                                import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY
                            }
                            events={{
                                googleCalendarId:
                                import.meta.env.VITE_GOOGLE_CALENDAR_ID,
                            }}
                            eventClick={handleEventClick}
                            height="auto"
                        />
                    </div>
                </div>

                <EventDetailsModal
                    event={selectedEvent}
                    onClose={() => setSelectedEvent(null)}
                    onAddToCalendar={downloadEventIcs}
                />
            </div>
        </section>
    );
};

export default Calender;