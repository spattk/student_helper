import React from "react";
import Timeline from "react-timeline-semantic-ui";
import "../css/App.css";

const Feedback = (props) => {
  return (
    <div>
      <Timeline
        direction="left"
        icon="hand point left outline"
        time="Week 1 Feedback"
        description="Comments: Streamlined the UI both code and looks nice; basic functionality almost done; basically lots of stuff completed this week; nice design of URLs and interface."
        color="orange"
        tags={["Grade A+"]}
        lineHeight={4}
        lineColor="white"
      />
      <Timeline
        direction="right"
        icon="hand point right outline"
        time="Week 2 Feedback"
        description="Comments: Implementing kanban board for students using the helper; 'registered users' works; now working on multiple user logins with authentication (back end + front-end schema designed, but not yet connected--requires session management). Good demo, good plan going forward."
        color="orange"
        tags={["Grade A"]}
        lineHeight={4}
        lineColor="white"
      />
      <Timeline
        direction="left"
        icon="hand point left outline"
        time="Week 3 Feedback"
        description="Comments: demo of sign-up registration verified via postman; still working on pulling 'developer' information from back-end; seamless integration of Kanban board into UI; interface for auditing kanban cards are work-in-progress; also added JWT token system for authentication; clearly a lot of effort put in."
        color="orange"
        tags={["Grade A+"]}
        lineHeight={4}
        lineColor="white"
      />
      <Timeline
        direction="right"
        icon="hand point right outline"
        time="Week 4 Feedback"
        description="Comments: Nice new user functionality for projects, eg 'Add Story' (which required to change both front+back end, and it went smoothly); Needs to integrate ID serialization for auto-generating IDs;"
        color="orange"
        tags={["Grade A"]}
        lineHeight={4}
        lineColor="white"
      />
      <Timeline
        direction="left"
        icon="hand point left outline"
        time="Week 5 Feedback"
        description="Comments: User authentication finished, including different types of users; demo showed JWT token didn't actually cause security failure, but good job trying..."
        color="orange"
        tags={["Grade A-"]}
        lineHeight={4}
        lineColor="white"
      />
    </div>
  );
};

export default Feedback;
