import type { EventApi } from "@fullcalendar/core";
import { Calendar, Clock3, Download, MapPin, X } from "lucide-react";

interface EventDetailsModalProps {
    event: EventApi | null;
    onClose: () => void;
    onAddToCalendar: (event: EventApi) => void;
}

const EventDetailsModal = ({
                               event,
                               onClose,
                               onAddToCalendar,
                           }: EventDetailsModalProps) => {
    if (!event) return null;

    const handleBackdropClick = (
        e: React.MouseEvent<HTMLDivElement>
    ) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const formatDate = (date: Date | null) => {
        if (!date) return "To be announced";

        return new Intl.DateTimeFormat("en-IN", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
        }).format(date);
    };

    return (
        <div
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4"
        >
            <div
                className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="border-b border-slate-200 bg-white">
                    <div className="flex items-start justify-between p-6 md:p-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                                {event.title}
                            </h2>
                        </div>

                        <button
                            onClick={onClose}
                            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                <div className="p-6 md:p-8">
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-xl border border-slate-200 p-5">
                            <div className="flex items-center gap-3">
                                <Calendar
                                    size={18}
                                    className="text-blue-600"
                                />
                                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                                    Date & Time
                                </span>
                            </div>

                            <p className="mt-3 text-slate-900 leading-7">
                                {formatDate(event.start)}
                            </p>
                        </div>

                        <div className="rounded-xl border border-slate-200 p-5">
                            <div className="flex items-center gap-3">
                                <MapPin
                                    size={18}
                                    className="text-blue-600"
                                />
                                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                                    Location
                                </span>
                            </div>

                            <p className="mt-3 text-slate-900 leading-7">
                                {event.extendedProps?.location ||
                                    "Location will be announced soon"}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-slate-200">
                        <div className="border-b border-slate-200 px-5 py-4">
                            <div className="flex items-center gap-3">
                                <Clock3
                                    size={18}
                                    className="text-blue-600"
                                />
                                <span className="font-semibold text-slate-900">
                                    Event Details
                                </span>
                            </div>
                        </div>

                        <div className="p-5">
                            <p className="whitespace-pre-wrap leading-8 text-slate-700">
                                {event.extendedProps?.description ||
                                    "No additional information has been provided for this event."}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                        <button
                            onClick={onClose}
                            className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
                        >
                            Close
                        </button>

                        <button
                            onClick={() => onAddToCalendar(event)}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                        >
                            <Download size={18} />
                            Add to Calendar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsModal;