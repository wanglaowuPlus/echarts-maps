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
    echarts.registerMap('和平区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120101",
            "properties": {"name": "和平区", "cp": [117.195907, 39.118327], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@D@L@@@J@DBF@D@B@@@@@B@@@B@@@B@B@DBD@D@D@FH@J@@@@@@A@@B@B@@@@@@@@@@A@A@@@@B@B@@@BABABABAB@B@FBHBDBB@D@@@B@BA@C@CBCBCDEFCDC@@AA@@@@@@@@A@AAA@CAA@@@CA@@@@@@@A@@@@@A@@@@A@A@AA@@AAAAA@@@C@AA@@@@CA@AA@CAAA@@@@@@AAAAA@B@@@@@@@CA@@A@C@A@A@A@@@A@A@C@@BA@C@A@@@A@A@"],
                "encodeOffsets": [[119992, 40041]]
            }
        }],
        "UTF8Encoding": true
    });
}));