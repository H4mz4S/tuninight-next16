import React from 'react'
import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import events from "@/lib/constants"


const Page = () => {
    return (
        <section>
            <h1 className="text-center mt-10">The Hub For TunisNight <br/> Event You Can't Miss </h1>
            <p className="text-center text-3xl mt-5 ">Events, Festival and Concert , All in One Place</p>
            <ExploreBtn/>

            <div className="text-center mt-20 space-y-7">
                <h3>Featured Event</h3>

                <ul className="events">
                    {events.map((event) => (
                        <li key={event.title}>
                            <EventCard {...event} />
                        </li>
                            
                    ))}

                </ul>
            </div>
        </section>
    )
}
export default Page
