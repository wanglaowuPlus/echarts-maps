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
    echarts.registerMap('红桥区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120106",
            "properties": {"name": "红桥区", "cp": [117.153301, 39.165066], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@FCB@BAB@FBB@@@@@B@@ABA@CAA@E@A@ADC@A@@@AAA@ACAAA@@A@BA@A@@BADADABAFCBCFEBABADCB@BAA@AAC@A@@@A@G@@@@@@@G@@@@@@@@@A@K@C@A@@GC@@@@@@@@@@@G@C@@@@@CA@B@AA@A@@@@@@@A@@@@@@@@@A@@@@BA@@@A@A@A@A@@@ABA@A@C@@@@@ABA@C@@@@@@@BB@B@@@@B@@@@BABAB@AA@EAEAABA@A@ABCFABA@@@A@@B@@AB@BAB@B@B@B@@@@@B@BBB@B@@@DBB@@@D@B@@BB@B@BBB@@@B@B@B@B@B@BBBDHBDBBBB@@BBBBBBFB@@BB@@B@BC@@@@BAB@B@B@LBJ@@@B@@ABA@AB@BAHC@@"],
                "encodeOffsets": [[119980, 40125]]
            }
        }],
        "UTF8Encoding": true
    });
}));