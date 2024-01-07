import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { getTodayString } from "../../utils/DateUtils";
import { getCurrentTimeString } from "../../utils/TimeUtils";

export const AppointmentsPage = ({ contacts, appointments, addAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState(getTodayString);
  const [time, setTime] = useState(getCurrentTimeString);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment({
      title,
      contact,
      date,
      time
    });

    setTitle('');
    setContact('');
    setDate(getTodayString);
    setTime(getCurrentTimeString);
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} titlePropName="title"/>
      </section>
    </div>
  );
};