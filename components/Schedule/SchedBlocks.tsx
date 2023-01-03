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
    <div className="border-b-2 border-white bg-team-pink text-white font-lexend text-center px-4 pt-4">
      <p className="text-white text-xl">{props.t}</p>
    </div>
  );
}

export function Workshop(props: WorkshopProps) {
  return (
    <div className="text-center bg-white drop-shadow-pink rounded-3xl mx-2 text-white font-lexend">
      <p className="text-rose-pink text-xl pt-2">{props.title}</p>
      <div className="h-[2px] w-full bg-rose-pink " />
      <p className="text-rose-pink mt-2"> {props.lead}</p>
      <div className="h-[2px] w-full bg-rose-pink " />
      <p className="text-rose-pink text-xl mt-1 mb-0"> {props.loc}</p>
    </div>
  );
}

export function Activity(props: ActProps) {
  if (props.min == "60") {
    return (
      <div className="h-32 justify-center text-center items-center bg-rose-purple rounded-3xl mx-2 text-white font-lexend">
        <p className="text-xl pt-2 mb-0 p-0">{props.title}</p>
        <div className="h-[2px] w-full bg-white" />
        <p className="text-xl mt-1 pb-2"> {props.loc}</p>
      </div>
    );
  }
  if (props.min == "120") {
    return (
      <div className="h-[17rem] justify-center text-center items-center bg-rose-purple rounded-3xl mx-2 text-white font-lexend">
        <p className="text-xl pt-2 mb-0 p-0">{props.title}</p>
        <div className="h-[2px] w-full bg-white" />
        <p className="text-xl mt-1 pb-2"> {props.loc}</p>
      </div>
    );
  }
}

export function Speaker(props: SpkProps) {
  return (
    <div className="text-center bg-team-yellow rounded-3xl mx-2 text-white font-lexend">
      <p className="text-rose-pink text-xl pt-2">{props.title}</p>
      <div className="h-[2px] w-full bg-rose-pink " />
      <p className="text-rose-pink mt-2"> {props.lead}</p>
      <div className="h-[2px] w-full bg-rose-pink " />
      <p className="text-rose-pink text-xl mt-1 mb-0"> {props.loc}</p>
    </div>
  );
}

export function Event(props: EventProps) {
  if (props.min == "120") {
    return (
      <div className="h-[17rem] justify-center text-center items-center bg-rose-pink rounded-3xl mx-2 text-white font-lexend">
        <p className="text-xl pt-2 mb-0 p-0">{props.title}</p>
        <div className="h-[2px] w-full bg-white" />
        <p className="text-xl mt-1 pb-2"> {props.loc}</p>
      </div>
    );
  }
  if (props.min == "60") {
    return (
      <div className="h-32 justify-center text-center items-center bg-rose-pink rounded-3xl mx-2 text-white font-lexend">
        <p className="text-xl pt-2 mb-0 p-0">{props.title}</p>
        <div className="h-[2px] w-full bg-white " />
        <p className="text-xl mt-1 pb-2 mb-0"> {props.loc}</p>
      </div>
    );
  }
}
