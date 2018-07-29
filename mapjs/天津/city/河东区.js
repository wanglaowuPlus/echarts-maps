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
    echarts.registerMap('河东区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120102",
            "properties": {"name": "河东区", "cp": [117.250568, 39.122125], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@B@@@B@DBFB@@HBB@DEBCE@BGGA@C@E@AHBN@@@N_E@CAKAG@AAAA@@@ABIBC@CBABG@CBCBA@@FA@@@@B@@@@@^ERANCGE@CD@AG@@@@B@AEAAAEACA@@AA@A@AACB@@@BA@BFWF@@@A@@@@@AA@A@IA@DA@@B@BA@C@A@ACCDAACEAAAA@C@C@@@AC@IBEDIDGDCBABABAHCH@BIJMJCHGHCD@@CDEDCFADAD@D@DABA@@@C@BB@@@@@@@@BBGDA@CDA@@B@B@@@BBD@@BB@@B@BBHBDBB@@BB@@B@@@B@BBCFEDC@@@@@@@@@@NJB@@@B@J@L@F@L@@D@DAD@D@@@@@BB@@@B@B@B@B@B@@@D@B@B@B@B@@@"],
                "encodeOffsets": [[120075, 40099]]
            }
        }],
        "UTF8Encoding": true
    });
}));