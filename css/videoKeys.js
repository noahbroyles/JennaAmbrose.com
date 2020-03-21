document.onkeydown = checkKeys;
    function checkKeys(e) {
        var v = document.getElementById('vid');
        var keycode;
        if (window.event)
            {keycode = window.event.keyCode;}
        else if (e)
            {keycode = e.which;}
        if (keycode == 77) { // M
            v.muted = !v.muted;
        }
        if (keycode == 75) { // K
            if (v.paused) {
                v.play();
            } else {
                v.pause()
            }
                    
    }
}