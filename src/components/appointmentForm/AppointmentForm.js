import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
import { getTodayString } from "../../utils/DateUtils";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group"></div>
        <ContactPicker contacts={contacts} contact={contact} setContact={setContact} />
        <div className="form-group"></div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date || getTodayString()}
            onChange={e => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            className="form-control"
            id="time"
            value={time}
            onChange={e => setTime(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit  
        </button>
      </form>
      <style jsx>{`
       .form-group {
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
};
