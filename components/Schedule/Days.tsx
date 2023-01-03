import React from "react";
import { Activity, Speaker, Workshop, Event, Time } from "./SchedBlocks";

export const Saturday = () => {
  return (
    <table className="table-fixed w-full border-collapse">
      <tbody>
        <th className="w-1/4"></th>
        <tr>
          <Time t="8:30 AM" />
        </tr>
        <tr>
          <Time t="9:00 AM" />
          <td rowSpan="4">
            <Event title="Check-in" loc="WCH127" min="120" />
          </td>
        </tr>
        <tr>
          <Time t="9:30 AM" />
        </tr>
        <tr>
          <Time t="10:00 AM" />
        </tr>
        <tr>
          <Time t="10:30 AM" />
          <td rowSpan="2">
            <Event title="Opening Ceremony" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="11:00 AM" />
          <td rowSpan="2">
            <Activity title="Icebreakers" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="11:30 AM" />
        </tr>
        <tr>
          <Time t="12:00 PM" />
          <td rowSpan="2">
            <Workshop
              title="UI/UX"
              lead="Trinah Maulion & Gabriela Alvarez"
              loc="WCH127"
            />
          </td>
        </tr>
        <tr>
          <Time t="12:30 PM" />
        </tr>
        <tr>
          <Time t="1:00 PM" />
          <td rowSpan="2">
            <Event title="Lunch" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="1:30 PM" />
        </tr>
        <tr>
          <Time t="2:00 PM" />

          <td rowSpan="2">
            <Speaker
              title="Artificial Intelligence"
              lead="Jack O'Grady"
              loc="WCH127"
            />
          </td>
        </tr>
        <tr>
          <Time t="2:30 PM" />
        </tr>
        <tr>
          <Time t="3:00 PM" />
          <td rowSpan="2">
            <Event title="Intern Panel" loc="WCH127" min="60" />
          </td>
          <td rowSpan="2">
            <Workshop title="Intro to Arduino" lead="Joshua" loc="WCH127" />
          </td>
        </tr>
        <tr>
          <Time t="3:30 PM" />
        </tr>
        <tr>
          <Time t="4:00 PM" />
          <td rowSpan="2">
            <Workshop title="Intro to React" lead="Divyank Shah" loc="WCH127" />
          </td>
        </tr>
        <tr>
          <Time t="4:30 PM" />
        </tr>
        <tr>
          <Time t="5:00 PM" />
          <td rowSpan="2">
            <Speaker
              title="How to Publish a Project"
              lead="Nic Stone"
              loc="WCH127"
            />
          </td>
        </tr>
        <tr>
          <Time t="5:30 PM" />
        </tr>
        <tr>
          <Time t="6:00 PM" />
          <td rowSpan="2">
            <Event title="Dinner" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="6:30 PM" />
          <td rowSpan="4">
            <Activity title="Movie" loc="WCH127" min="120" />
          </td>
        </tr>
        <tr>
          <Time t="7:00 PM" />
          <td rowSpan="2">
            <Workshop
              title="Intro to Game Development"
              lead="Westin Montano"
              loc="WCH127"
            />
          </td>
        </tr>
        <tr>
          <Time t="7:30 PM" />
        </tr>
        <tr>
          <Time t="8:00 PM" />
          <td rowSpan="2">
            <Activity title="Jackbox" loc="WCH127" min="60" />{" "}
          </td>
        </tr>
        <tr>
          <Time t="8:30 PM" />
        </tr>
        <tr>
          <Time t="9:00 PM" />
        </tr>
        <tr>
          <Time t="9:30 PM" />
        </tr>
        <tr>
          <Time t="10:00 PM" />
        </tr>
        <tr>
          <Time t="9:30 PM" />
        </tr>
        <tr>
          <Time t="10:00 PM" />
          <td rowSpan="2">
            <Activity title="Kahoot" loc="WCH127" min="60" />{" "}
          </td>
        </tr>
        <tr>
          <Time t="10:30 PM" />
        </tr>
        <tr>
          <Time t="11:00 PM" />
        </tr>
        <tr>
          <Time t="11:30 PM" />
          <td rowSpan="2">
            <Activity
              title="Super Smash Bros Tournament"
              loc="WCH127"
              min="60"
            />
          </td>
        </tr>
        <tr>
          <Time t="12:00 AM" />
        </tr>
        <tr>
          <Time t="12:30 AM" />
        </tr>
      </tbody>
    </table>
  );
};

export const Sunday = () => {
  return (
    <table className="table-fixed w-full border-collapse">
      <tbody>
        <th className="w-1/4"></th>
        <tr>
          <Time t="8:00 AM" />
        </tr>
        <tr>
          <Time t="8:30 AM" />
          <td rowSpan="2">
            <Event title="Breakfast" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="9:00 AM" />
        </tr>
        <tr>
          <Time t="9:30 AM" />
        </tr>
        <tr>
          <Time t="10:00 AM" />
        </tr>
        <tr>
          <Time t="10:30 AM" />
        </tr>
        <tr>
          <Time t="11:00 AM" />
          <td rowSpan="2">
            <Event title="Soft Deadline" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="11:30 AM" />
        </tr>
        <tr>
          <Time t="12:00 PM" />
          <td rowSpan="2">
            <Event title="Deadline" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="12:30 PM" />
          <td rowSpan="2">
            <Event title="Lunch" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="1:00 PM" />
        </tr>
        <tr>
          <Time t="1:30 PM" />
        </tr>
        <tr>
          <Time t="2:00 PM" />
        </tr>
        <tr>
          <Time t="2:30 PM" />
        </tr>
        <tr>
          <Time t="3:00 PM" />
          <td rowSpan="2">
            <Event title="Closing Ceremony" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="3:30 PM" />
        </tr>
        <tr>
          <Time t="4:00 PM" />
        </tr>
      </tbody>
    </table>
  );
};
