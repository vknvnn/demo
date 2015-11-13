define({
    load: function (name, req, onload) {
        'use strict';
        console.log("ngamd loaded: ", req.toUrl(name));
        req(['angularAMD', name], function (angularAMD, value) {
            console.log("ngamd loaded: ", req.toUrl(name));
            angularAMD.processQueue();
            onload(value);
        });
    }
});