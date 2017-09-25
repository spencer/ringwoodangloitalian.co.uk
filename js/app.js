function setStatus(event) {
  const date  = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  let eventYear = event.dataset.year;
  let eventMonth = event.dataset.month;
  let eventDay = event.dataset.day;

  //CheckYear
  switch(checkDateSegment(eventYear, year)){
    case 'past':
      event.classList.remove('upcoming');
      break;
    case 'present':
      //if the year is current, check the Month
      switch(checkDateSegment(eventMonth, month)){
        case 'past':
            event.classList.remove('upcoming');
          break;
        case 'present':
          //if the month is current Check the Day
          if (eventDay < day) { event.classList.remove('upcoming'); }
      };
  };

  //Set 'current' event
  document.querySelector(".upcoming").classList.add('current');
}

function checkDateSegment(eventElement, element){
  switch(true) {
    case eventElement < element:
      return 'past';
      break;
    case eventElement == element:
      return 'present';
      break;
  };
}

function highlightEvents(){
  const events = document.querySelectorAll(".event");
  events.forEach(event => setStatus(event));

};


window.onload = highlightEvents;
