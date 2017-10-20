function setStatus(event) {
    if (compareDates(event) == 'past'){
      event.classList.remove('upcoming');
    }
};

function getEventDate(event) {
    date = new Date(event.dataset.year, (event.dataset.month -1), event.dataset.day); // Month indexes from Zero, Day doesn't WTF.
    return date;
}

function compareDates(comparableEvent){
    let today = new Date();
    let event = getEventDate(comparableEvent);

    switch(true) {
        case event >= today:
            return 'upcoming';
            break;
    case event < today:
        return 'past';
        break;
    };
};

// If we're running under Node
if(typeof exports !== 'undefined') {
    exports.getEventDate = getEventDate;
    exports.compareDates = compareDates;
};
