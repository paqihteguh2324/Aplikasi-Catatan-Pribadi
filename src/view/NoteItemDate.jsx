import React from "react";

function NoteItemDate({ date }) {
    const dateObj = new Date(date);
  
    // List of day names in Indonesian
    const dayNames = ["minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];
  
    // Function to convert month number to Indonesian month name
    function getMonthName(month) {
      const monthNames = [
        "januari", "februari", "maret", "april", "mei", "juni",
        "juli", "agustus", "september", "oktober", "november", "desember"
      ];
      return monthNames[month];
    }
  
    // Get day of the week (0 = Sunday, 1 = Monday, etc.)
    const dayOfWeek = dateObj.getDay();
  
    // Get date, month, and year from the Date object
    const day = dateObj.getDate();
    const month = getMonthName(dateObj.getMonth());
    const year = dateObj.getFullYear();
  
    // Format into "kamis, 12 agustus 2022"
    const formattedDate = `${dayNames[dayOfWeek]}, ${day} ${month} ${year}`;
  
    return (
      <div className="note-item__date">
        <p>{formattedDate}</p>
      </div>
    );
  }

    export default NoteItemDate;