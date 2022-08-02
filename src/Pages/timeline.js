import React from 'react';
import "./timeline.css";
import TimelineData from "./timelinedata"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";

function TimelineFunc() {

let iconStyles = {border: '1px solid hsl(160, 100%, 50%)', borderRadius: "50%", background: 'hsl(160, 100%, 50%)', color: "hsl(257, 24%, 15%)", padding: "1.5% 1.5% 1% 1.5%"};

  return (
    <div className="timeline">
        <VerticalTimeline>
            {
                TimelineData.map((element) => {
                    let isWorkIcon = element.icon === "work"

                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            date={element.date}
                            dateClassName="date"
                            iconStyle={iconStyles}
                            icon={isWorkIcon ? <MdWork /> : < GiGraduateCap />}
                            >
                                <h3 className="timeline-title">{element.title}</h3>
                                <h5 className="timeline-company">{element.company}</h5>
                                <p id="timeline-description">{element.desc}</p>
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    </div>
  )
}

export default TimelineFunc




