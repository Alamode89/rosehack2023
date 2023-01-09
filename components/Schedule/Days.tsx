import React from "react";
import { Activity, Speaker, Workshop, Event, Time } from "./SchedBlocks";

export const Saturday = () => {
  return (
    <table className="table-fixed w-full border-collapse">
      <tbody>
        <th className="w-1/4" />
        <tr>
          <Time t="8:30 AM" />
        </tr>
        <tr>
          <Time t="9:00 AM" />
          <td rowSpan={4}>
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
          <td rowSpan={2}>
            <Event title="Opening Ceremony" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="11:00 AM" />
          <td rowSpan={1}>
            <Activity title="Icebreakers" loc="WCH127" min="30" />
          </td>
        </tr>
        <tr>
          <Time t="11:30 AM" />
          <td rowSpan={2}>
            <Workshop
              title="How to Hackathon"
              lead="Angelika Bermudez"
              loc="WCH127"
            />
          </td>
        </tr>
        <tr>
          <Time t="12:00 PM" />
        </tr>
        <tr>
          <Time t="12:30 PM" />
          <td rowSpan={2}>
            <Event title="Lunch" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="1:00 PM" />
        </tr>
        <tr>
          <Time t="1:30 PM" />
          <td rowSpan={2}>
            <Speaker
              title="Artificial Intelligence"
              lead="Jack O'Grady"
              loc="WCH127"
            />
          </td>
        </tr>
        <tr>
          <Time t="2:00 PM" />
        </tr>
        <tr>
          <Time t="2:30 PM" />
          <td rowSpan={2}>
            <Workshop
              title="UI/UX"
              lead="Trinah Maulion & Gabriela Alvarez"
              loc="WCH127"
            />
          </td>
        </tr>

        <tr>
          <Time t="3:00 PM" />
        </tr>
        <tr>
          <Time t="3:30 PM" />
          <td rowSpan={2}>
            <Speaker
              title="How to Publish a Project"
              lead="Nic Stone"
              loc="WCH127"
            />
          </td>
        </tr>
        <tr>
          <Time t="4:00 PM" />
        </tr>
        <tr>
          <Time t="4:30 PM" />

          <td rowSpan={2}>
            <Workshop
              title="Intro to Game Dev"
              lead="Westin Montano"
              loc="WCH127"
            />
          </td>
        </tr>
        <tr>
          <Time t="5:00 PM" />
        </tr>
        <tr>
          <Time t="5:30 PM" />
          <td rowSpan={2}>
            <Workshop title="Intro to React" lead="Divyank Shah" loc="WCH127" />
          </td>
        </tr>
        <tr>
          <Time t="6:00 PM" />
        </tr>
        <tr>
          <Time t="6:30 PM" />
          <td rowSpan={2}>
            <Workshop
              title="Intro to Arduino"
              lead="Joshua Candelaria"
              loc="WCH127"
            />
          </td>
        </tr>
        <tr>
          <Time t="7:00 PM" />
        </tr>
        <tr>
          <Time t="7:30 PM" />
          <td rowSpan={2}>
            <Event title="Dinner" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="8:00 PM" />
          <td rowSpan={2}></td>
        </tr>
        <tr>
          <Time t="8:30 PM" />
          <td rowSpan={2}>
            <Event title="Intern Panel" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="9:00 PM" />
        </tr>
        <tr>
          <Time t="9:30 PM" />
        </tr>
        <tr>
          <Time t="10:00 PM" />
          <td rowSpan={2}>
            <Workshop
              title="Resume Workshop"
              lead="Divyank Shah"
              loc="WCH127"
            />
          </td>
        </tr>
        <tr>
          <Time t="9:30 PM" />
        </tr>
        <tr>
          <Time t="10:00 PM" />
        </tr>
        <tr>
          <Time t="10:30 PM" />
        </tr>
        <tr>
          <Time t="11:00 PM" />
          {/* the name is so long omg */}
          <td rowSpan={2}>
            <div className="border-white/50 border-2 text-center bg-team-yellow rounded-3xl mx-2 text-white font-lexend">
              <p className="text-rose-pink md:text-xl text-lg pt-2 hidden md:block">
                Sustainability in Tech
              </p>
              <p className="text-rose-pink md:text-xl text-lg pt-2 block md:hidden">
                Sustain. in Tech
              </p>
              <div className="h-[2px] w-full bg-rose-pink " />
              <p className="md:text-cl text-sm text-rose-pink mt-2">
                Samarth Srinivasa
              </p>
              <div className="h-[2px] w-full bg-rose-pink " />
              <p className="text-rose-pink text-m md:text-xl mt-1 mb-0">
                WCH127
              </p>
            </div>
          </td>
        </tr>
        <tr>
          <Time t="11:30 PM" />
        </tr>
        <tr>
          <Time t="12:00 AM" />
        </tr>
      </tbody>
    </table>
  );
};

export const Sunday = () => {
  return (
    <table className="table-fixed w-full border-collapse">
      <tbody>
        <th className="w-1/4" />
        <tr>
          <Time t="12:00 AM" />
          <td rowSpan={2}>
            <Activity title="Hot Choco & Snacks" loc="WCH127" min="60" />
          </td>
          <td rowSpan={2}>
            <Activity
              title="Super Smash Bros Tournament"
              loc="WCH127"
              min="60"
            />
          </td>
        </tr>
        <tr>
          <Time t="12:30 AM" />
        </tr>
        <tr>
          <Time t="1:00 AM" />
          <td rowSpan={4}>
            <Activity title="Movie" loc="WCH127" min="120" />
          </td>
        </tr>
        <tr>
          <Time t="1:30 AM" />
        </tr>
        <tr>
          <Time t="2:00 AM" />
        </tr>
        <tr>
          <Time t="2:30 AM" />
        </tr>
        <tr>
          <Time t="3:00 AM" />
          <td rowSpan={1}>
            <Activity title="Kahoot" loc="WCH127" min="30" />
          </td>
        </tr>
        <tr>
          <Time t="3:30 AM" />
          <td rowSpan={1}>
            <Activity title="TypeRacer Contest" loc="WCH127" min="30" />
          </td>
        </tr>
        <tr>
          <Time t="4:00 AM" />
        </tr>
        <tr>
          <Time t="4:30 AM" />
        </tr>
        <tr>
          <Time t="5:00 AM" />
        </tr>
        <tr>
          <Time t="5:30 AM" />
        </tr>
        <tr>
          <Time t="6:00 AM" />
          <td rowSpan={2}>
            <Activity title="Morning Yoga" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="6:30 AM" />
        </tr>
        <tr>
          <Time t="7:00 AM" />
          <td rowSpan={2}>
            <Activity title="Therapy Dogs" loc="WCH127" min="60" />
          </td>
        </tr>
        <tr>
          <Time t="7:30 AM" />
        </tr>
        <tr>
          <Time t="8:00 AM" />
        </tr>
        <tr>
          <Time t="8:30 AM" />
          <td rowSpan={2}>
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
        </tr>
        <tr>
          <Time t="11:30 AM" />
        </tr>
        <tr>
          <Time t="12:00 PM" />
        </tr>
        <tr>
          <Time t="12:30 PM" />
          <td rowSpan={2}>
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
          <td rowSpan={2}>
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
