import React from "react";

// A sample data for the event schedule
const schedule = [
  {
    time: "9:00 AM",
    title: "Registration and Breakfast",
    speaker: "",
    location: "Lobby",
  },
  {
    time: "10:00 AM",
    title: "Welcome and Introduction",
    speaker: "Jane Doe",
    location: "Main Hall",
  },
  {
    time: "10:30 AM",
    title: "Keynote Speech",
    speaker: "John Smith",
    location: "Main Hall",
  },
  {
    time: "11:15 AM",
    title: "Coffee Break",
    speaker: "",
    location: "Lobby",
  },
  {
    time: "11:30 AM",
    title: "Workshop 1: How to use Tailwind CSS in React",
    speaker: "Alice Lee",
    location: "Room A",
  },
  {
    time: "11:30 AM",
    title: "Workshop 2: How to build a React app with Firebase",
    speaker: "Bob Chen",
    location: "Room B",
  },
  {
    time: "12:30 PM",
    title: "Lunch",
    speaker: "",
    location: "Cafeteria",
  },
  {
    time: "1:30 PM",
    title: "Panel Discussion: The Future of React",
    speaker: "Jane Doe, John Smith, Alice Lee, Bob Chen",
    location: "Main Hall",
  },
  {
    time: "2:30 PM",
    title: "Closing Remarks and Feedback",
    speaker: "Jane Doe",
    location: "Main Hall",
  },
  {
    time: "3:00 PM",
    title: "Networking and Farewell",
    speaker: "",
    location: "Lobby",
  },
];

// A function component that renders a single schedule item
const ScheduleItem = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center p-4 border-b">
      <div className="md:w-1/6 text-center md:text-left font-bold text-lg text-blue-500">
        {item.time}
      </div>
      <div className="md:w-4/6 md:px-4">
        <div className="text-xl">{item.title}</div>
        {item.speaker && <div className="text-gray-600">{item.speaker}</div>}
      </div>
      <div className="md:w-1/6 text-center md:text-right text-gray-600">
        {item.location}
      </div>
    </div>
  );
};

// A function component that renders the schedule page
const SchedulePage = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-4xl font-bold text-center mb-4">Event Schedule</h1>
      <div className="max-w-4xl mx-auto">
        {schedule.map((item, index) => (
          <ScheduleItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
