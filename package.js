Package.describe({
    name: 'kevohagan:sweetalert',
    summary: "a beautiful replacement for javascript's alert() ",
    version: '0.4.2',
    git: 'https://github.com/kevohagan/meteor-sweetalert.git',
});

Package.onUse(function(api) {

    api.versionsFrom("METEOR@0.9.1.1");

    api.add_files([
        'sweetalert/dist/sweetalert.css',
        'sweetalert/dist/sweetalert-dev.js'
    ], ['client']);

    if(api.export){

    }
})
