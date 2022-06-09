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
  let allAtt = [];
  for (let i = 0; i < classRoom.length; i++) {
    loop1: for (let key in classRoom[i]) {
      let name = key;
      let att = classRoom[i][name];
      for (let j = 0; j < att.length; j++) {
        if (att[j][day]) {
          allAtt.push(name);
          break loop1;
        }
      }
    }
  }
  return allAtt;
}
