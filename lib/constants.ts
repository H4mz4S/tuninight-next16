export type EventItem = {
    image: string;
    title: string;
    slug: string;
    location: string;
    date: string;
    time: string;
};


export const events: EventItem[] = [
    {
        image: "/images/event1.png",
        title: "Fabrica",
        slug: "fabrica",
        location: "Tunis, Tunisia",
        date: "2025-04-19",
        time: "11:00 PM",
    },
    {
        image: "/images/event2.png",
        title: "Wabi",
        slug: "wabi",
        location: "Tozeur, Tunisia",
        date: "2025-05-03",
        time: "10:00 PM",
    },
    {
        image: "/images/event3.png",
        title: "NeverStill",
        slug: "neverstill",
        location: "Tunis, Tunisia",
        date: "2025-06-14",
        time: "11:30 PM",
    },
    {
        image: "/images/event4.png",
        title: "Woodstock",
        slug: "woodstock",
        location: "Aïn Draham, Tunisia",
        date: "2025-07-26",
        time: "06:00 PM",
    },
    {
        image: "/images/event5.png",
        title: "Fantasy",
        slug: "fantasy",
        location: "Djerba, Tunisia",
        date: "2025-08-15",
        time: "08:00 PM",
    },
    {
        image: "/images/event6.png",
        title: "Carpe Diem",
        slug: "carpe-diem",
        location: "Gammarth, Tunisia",
        date: "2025-09-05",
        time: "10:30 PM",
    },

];


export default events;