import React, {useState, useEffect} from "react";
import { useAppState } from "../../AppState.js";
import { Route, Link, withRouter } from "react-router-dom";
import Form from "../Form.js";
import Schedule from '../Calender'

const Dashboard = (props) => {
  const { state, dispatch } = useAppState();
  const { token, url, events, username } = state;
  // event

  const getEvents = async () => {
    const response = await fetch(url + "/events/", {
      method: "get",
      headers: {
        Authorization: "bearer " + token,
      },
    });
    const fetchedEvents = await response.json();
    dispatch({ type: "getEvents", payload: fetchedEvents });
  };

  useEffect(() => {
    getEvents();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loaded = () => {
    return (
      <div className="dashboard">
        <h1>{username}'s Events</h1>
        <Schedule />
        <Link to="/dashboard/new">
          <button>New Event</button>
        </Link>
        <Route
          path="/dashboard/:action"
          render={(rp) => <Form {...rp} getEvents={getEvents} />}
        />
         <ul>
          {state.events.map((event) => (
            <div className="event" key={event.id}>
              <h2>{event.title}</h2>
              <h4>{event.date}</h4>
              <h4>{event.time}</h4>
              <h4>{event.location}</h4>
              <button
                onClick={() => {
                  dispatch({ type: "select", payload: event });
                  props.history.push("/dashboard/edit");
                }}
              >
                Edit Event
              </button>
              <button
                onClick={() => {
                  fetch(url + "/events/" + event.id, {
                    method: "delete",
                    headers: {
                      Authorization: "bearer " + token,
                    },
                  }).then(() => getEvents());
                }}
              >
                Delete Event
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  };
  return events ? loaded() : <h1>Loading...</h1>;
  
};

export default withRouter(Dashboard);