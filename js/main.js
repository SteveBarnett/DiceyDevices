$(function() {

    var positions = [
        'top-row first-column',
        'top-row second-column',
        'top-row third-column',
        'bottom-row first-column',
        'bottom-row second-column',
        'bottom-row third-column'
    ];

    var stretchers = [
        'wider',
        'much-wider',
        'taller',
        'much-taller',
        '',
        ''
    ];

    var twisters = [
        'right',
        'right-lots',
        'left',
        'left-lots',
        '',
        ''
    ];

    // "icon-"

    var colours = [
        '',
        'icon-red',
        'icon-blue',
        'icon-grey',
        'icon-cream icon-outlined',
        'icon-green',
        'icon-silver',
        'icon-silver icon-outlined'
    ];

    var sfx = [
        'faded',
        'desaturated',
        'blurred',
        'darkened',
        'lightened',
        'dirty',
        'cracked',
        'cracked-large'
    ];


    // elements

    var $devices = $(".device");
    var $icons = $(".icon");

    function shuffle(array) {
      var m = array.length, t, i;

      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    }

    shuffle(positions);
    shuffle(stretchers);
    shuffle(twisters);
    shuffle(colours);
    shuffle(sfx);

    $devices.each(function(key, value){
        $(this).addClass(positions[key]);
        $(this).addClass(stretchers[key]);
        $(this).addClass(twisters[key]);
        $(this).addClass(sfx[key]);
    });

    $icons.each(function(key, value){
        $(this).addClass(colours[key]);
    });
});
