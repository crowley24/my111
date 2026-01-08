(function () {  
    'use strict';    

    if (typeof Lampa === 'undefined' || !Lampa.Utils) {  

        setTimeout(arguments.callee, 100);  

        return;  

    }  
      
 // Завантажуємо плагіни  

    Lampa.Utils.putScriptAsync([  

        'https://github.com/crowley24/main/blob/main/New_quality_v1.js',  

        'https://github.com/crowley24/main/blob/main/New_quality_v2.js',

    ], function () {  

        console.log('NewLogo и mob_style плагіни завантажені');  

    });  

})();












