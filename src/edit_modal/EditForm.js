import React, { useState } from "react";
import format from "date-fns/format";
import parse from "date-fns/format";
import v4 from "uuid/v4";
import ColorPicker from "./ColorPicker";

const EditForm = ({
  close,
  addEvent,
  updateEvent,
  preselectedDate,
  id,
  start,
  color: initialColor,
  content: initialContent
}) => {
  const initialDate = parse(start || preselectedDate);
  const [content, setContent] = useState(initialContent || "");
  const [date, setDate] = useState(format(initialDate, "YYYY-MM-DD"));
  const [time, setTime] = useState(format(initialDate, "HH:mm"));
  const [color, setColor] = useState(initialColor || 1);

  return (
    <form
      className="event-form"
      onSubmit={async evt => {
	evt.preventDefault();
	const start = parse(`${date}T${time}`);
	if (id) {
	  await updateEvent({
	    id,
	    content,
	    start,
	    color
	  });
	} else {
	  await addEvent({
	    id: v4(),
	    content,
	    start,
	    color
	  });
	}
	close();
      }}
    >
      <input
	placeholder="Event name"
	className="input"
	type="text"
	maxLength={30}
	value={content}
	required
	onChange={evt => setContent(evt.target.value)}
      />
      <div className="form-field">
	<label className="label">Date:</label>
	<input
	  className="input"
	  type="date"
	  value={date}
	  required
	  onChange={evt => setDate(evt.target.value)}
	/>
      </div>
      <div className="form-field">
	<label className="label">Time:</label>
	<input
	  className="input"
	  type="time"
	  value={time}
	  required
	  onChange={evt => setTime(evt.target.value)}
	/>
      </div>
      <div className="form-field">
	<label className="label">Color:</label>
	<ColorPicker value={color} onChange={setColor} />
      </div>
      <div className="actions">
	<button className="btn" type="button" onClick={close}>
	  Cancel
	</button>
	<button className="btn -primary" type="submit">
	  Save
	</button>
      </div>
    </form>
  );
};

export default EditForm;
