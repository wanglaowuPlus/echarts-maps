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
    echarts.registerMap('河西区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120103",
            "properties": {"name": "河西区", "cp": [117.227536, 39.081897], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@B@B@@@B@D@B@@AD@B@B@@@B@B@B@D@B@@@DB@@@@@@A@B@BBBB@@@@@@BBDBB@@BDB@@@@BBD@@@B@BBBB@@BBB@B@@@@@@B@@@@@B@@@@@@DB@@B@DBB@BBB@@@@@@@@@BBDCHGDGNIJI@ADGBGBABADAHCJCFCJAD@B@@@L@HANAP@@C@@GECC@@A@@A@ABC@ABC@CBA@AA@C@@@@@EAE@@DC@AAAAA@ABABE@AC@@@@@@AAA@C@@@@@@@BG@@@@@@@@@@BG@@@@@@B@A@@@@@A@@@@@@@C@A@A@C@E@M@@@@Dm@M@@@ABEHIJGJGHABOEA@@@@@EAEA@@@@@@@@A@@BA@@BA@@@AB@@AB@B@@AB@B@DAB@DAF@DAB@D@D@B@@@@AB@B@B@@@B@B@B@@@B@@@B@@@B@@@@@B@B@B@@@B"],
                "encodeOffsets": [[119992, 40041]]
            }
        }],
        "UTF8Encoding": true
    });
}));