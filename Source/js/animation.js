
// Animation Hide and Show Certificates

console.log('Animation.js file loaded');
window.onload = (function () {
    $('#certificates').hide(); // Hide the #certificates element by default

    $('#certificate-list-btn').click(function () {
        if ($('#certificates').is(':hidden')) {
            $('#certificates').show(500);
            $('#certificate-list-btn').text('Show All My Certificates');
        } else {
            $('#certificates').hide(500);
            $('#certificate-list-btn').text('Hide All Certificates');
        }
    });
});

// window.onload = function () {
//     $('#certificate-list-btn').click(function () {
//         if ($('#certificates').is(':hidden')) {
//             $('#certificates').show(500);
//             $('#certificate-list-btn').text('Hide All Certificates');
//         } else {
//             $('#certificate-list-btn').text('Show All Certificates');
//             $('#certificates').hide(500);
//         }
//     });
// };
