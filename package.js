Package.describe({
    name: 'smoral:sweetalert',
    summary: "a beautiful replacement for javascript's alert() ",
    version: '1.1.1',
    git: 'https://github.com/smoral/meteor-sweetalert.git',
});

Package.onUse(function(api) {

    api.versionsFrom("METEOR@0.9.1.1");

    api.add_files([
        'sweetalert/dist/sweetalert.css',
        'sweetalert/dist/sweetalert.min.js'
    ], ['client']);

    if(api.export){

    }
})
