import React from "react";

interface EventProps {
  title: string;
  loc: string;
  min: string;
}

interface SpkProps {
  title: string;
  lead: string;
  loc: string;
}

interface ActProps {
  title: string;
  loc: string;
  min: string;
}

interface WorkshopProps {
  title: string;
  loc: string;
  lead: string;
}

interface TimeProps {
  t: string;
}

export function Time(props: TimeProps) {
  return (
    <div className="border-b-2 items-center bg-white/50 text-white font-lexend text-center px-4 pt-4">
      <p className="text-white text-xl">{props.t}</p>
    </div>
  );
}

export function Workshop(props: WorkshopProps) {
  return (
    <div className="text-center bg-white rounded mx-2 text-white font-lexend">
      <p className="text-rose-pink text-xl pt-2">{props.title}</p>
    </div>
  );
}

export function Speaker(props: SpkProps) {
  return (
    <div className="text-center bg-team-yellow rounded mx-2 text-white font-lexend">
      <p className="text-rose-pink text-xl pt-2">{props.title}</p>
    </div>
  );
}

export function Activity(props: ActProps) {
  if (props.min == "30") {
    return (
      <div className="h-24 md:h-16 justify-center text-center items-center bg-rose-purple rounded mx-2 text-white font-lexend">
        <p className="text-xl pt-1 mb-0 p-0">{props.title}</p>
      </div>
    );
  }
  if (props.min == "60") {
    return (
      <div className="h-48 md:h-32 justify-center text-center items-center bg-rose-purple rounded mx-2 text-white font-lexend">
        <p className="text-xl md:text-xl pt-2 mb-0 p-0">{props.title}</p>
      </div>
    );
  }
  return (
    <div className="h-[17rem] justify-center text-center items-center bg-rose-purple rounded mx-2 text-white font-lexend">
      <p className="text-xl pt-2 mb-0 p-0">{props.title}</p>
    </div>
  );
}

export function Event(props: EventProps) {
  if (props.min == "120") {
    return (
      <div className="h-[24rem] md:h-[17rem] justify-center text-center items-center bg-schedule-blue rounded mx-2 text-white font-lexend">
        <p className="text-xl pt-2 mb-0 p-0">{props.title}</p>
      </div>
    );
  }
  return (
    <div className="h-48 md:h-32 justify-center text-center items-center bg-schedule-blue rounded mx-2 text-white font-lexend">
      <p className="text-xl pt-2 mb-0 p-0">{props.title}</p>
    </div>
  );
}
