export const layout = "layouts/events.vto";

export const type = "page";

type Event = {
  name: string;
  date: {
    start: Date;
    end: Date;
  };
  location: {
    name: string;
    lat: number;
    lng: number;
  };
  url: string;
  tags: string[];
};

export default function* ({ events }: { events: Event[] }) {
  const futureEvents = events
    .filter((event) => event.date.end > (new Date()))
    .toSorted((a, b) =>
      (new Date(a.date.start)).valueOf() - (new Date(b.date.start)).valueOf()
    );
  const pastEvents = events
    .filter((event) => event.date.start < (new Date()))
    .toSorted((a, b) =>
      (new Date(b.date.end)).valueOf() - (new Date(a.date.end)).valueOf()
    );

  yield {
    url: `/events/`,
    title: "Events",
    description: "Events that I will attend or contribute to!",
    events: futureEvents,
    past: false,
  };

  yield {
    url: `/events/past/`,
    title: "Past Events",
    description: "Events that I attended or contributed to!",
    events: pastEvents,
    past: true,
  };
}
