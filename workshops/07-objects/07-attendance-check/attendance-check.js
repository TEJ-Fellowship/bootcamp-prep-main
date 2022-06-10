let classRoom = [
  {
    Marnie: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
      { Friday: true },
    ],
  },
  {
    Lena: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
      { Friday: true },
    ],
  },
  {
    Shoshanna: [
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
      { Friday: false },
    ],
  },
  {
    Jessa: [
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
      { Friday: true },
    ],
  },
];

// YOUR CODE BELOW
function attendanceCheck(day) {
  //say the day is 'Monday'
  // students will be ['Marnie', 'Shoshanna']
  let students = [];

  for (let i = 0; i < classRoom.length; i++) {
    let curVal = classRoom[i];
    for (let key in curVal) {
      let curStudent = key;
      let curAttendance = curVal[curStudent];
      for (let j = 0; j < curAttendance.length; j++) {
        let curDayAttendance = curAttendance[j];
        if (curDayAttendance[day]) {
          students.push(curStudent);
        }
      }
    }
  }

  return students;
}
