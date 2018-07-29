(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(exports, require('echarts'));
    } else {
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded');
        return;
    }
    echarts.registerMap('南开区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120104",
            "properties": {"name": "南开区", "cp": [117.154143, 39.100474], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@@A@A@@@@@@B@B@@@@@@@@A@A@@@@B@@@@I@G@@E@C@CAC@C@A@A@@@A@@@A@@@@@A@CAE@C@I@@@K@C@A@@@A@A@A@@@@@A@@@A@@@A@@@A@A@A@@@A@ABA@@@@@A@C@CBA@CBE@CBA@C@ABA@@@ABA@@BA@@B@@AB@@AB@IAYIA@A@A@A@ABA@ABA@EHGFCDGFABAB@@@@@@@@ADCDABABABCDCDCHABABAD@DAB@DAT@B@D@BAB@@@BA@@@@@ABCDABADA@ABCDABGFMLFB@BB@@@@@B@@BB@BB@BB@@@BBDDB@BBCB@FD@BAFD@@@@@@@@BB@@@@@B@@BB@B@@B@@@B@BADEBAB@B@BAFBFBB@@BBABA@A@@A@@@@@@AAA@@@@@@D@B@BA@@@@D@B@B@BA@@B@B@B@B@@@B@@A@@B@@@@@@@@@B@@@@@@@B@B@@B@ADB@@@@D@H@@@@@@@@@@@D@@HB@D@L@B@@@@@@@@@H@@@@@@@H@B@@@B@D@BBB@@A@A@IAG@A@A"],
                "encodeOffsets": [[120007, 40074]]
            }
        }],
        "UTF8Encoding": true
    });
}));