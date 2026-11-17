/* Example Socket.IO client. Identity and roles must never be sent by this script. */
(function () {
    if (!window.io) {
        return;
    }
    const socket = window.io('/', { transports: ['websocket'] });

    socket.on('pong', function (payload) {
        console.info('pong', payload);
    });

    socket.on('openJournal', function () {
        console.log("journal opened");
    })

    socket.on('closeJournal', function () {
        console.log("journal closed");
    });
})();
