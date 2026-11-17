let journalVar = false;
const socket = window.io('/', { transports: ['websocket'] });


window.onload = function () {
    let journalButton = document.getElementById('JOURNAL_BUTTON');
    if (journalButton) {
        journalButton.addEventListener('click', function () {
            if (journalVar) {
                journalVar = false;
                socket.emit('closeJournal');
                // console.log("journal closed");
            } else {
                journalVar = true;
                socket.emit('openJournal');
                // console.log("journal opened");
            }
        });
    }
};