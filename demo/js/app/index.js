window.runApp = function () {
    require('../vendor/liba').sayHello();
    require('../vendor/libb').sayHello();
    console.log('in app index.js');
    window.webpack_local_cache.loadChunks(['asyncLiba'], function (result) {
        console.log('load status ', result);
        console.log('runApp dfdsa');
        require.ensure([], function (require) {
            require('../mod/asyncLiba');
        }, function () {

        }, 'asyncLiba');
    });
    require.ensure([],function(require){
        require('../mod/anonymousAsyncLib');
    });
};