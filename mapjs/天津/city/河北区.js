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
    echarts.registerMap('河北区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120105",
            "properties": {"name": "河北区", "cp": [117.211569, 39.166632], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@DBB@@AB@JBBBDBJKDB@@B@@@@@@@@@DBBBB@BBDBDBBBB@@@@@BA@@@@@@BABAFBHIDABBBA@@B@JJDDDB@@BABABABADCB@BABABA@@@AB@@@@@BABA@@BABAB@@A@@AA@@AACCCCA@AAAABBJ@@AHBBC@AF@@@@@@@B@@@@@B@@@@@@@BBBBDC@@@@@A@G@I@@A@A@A@A@C@@@A@A@A@A@A@@@A@@A@@@@@CBC@C@CK@E@K@I@A@@@A@MI@@@@@@@@@@CDEFAD@A@A@@@AA@@AA@CAGAAAA@@@AA@@AC@A@@@A@AB@DCB@HCAA@@@@@@@@AAA@CAGAEAA@A@ABABABAB@B@BBH@J@B@BABA@CDABABEFADEDABCBCBAB@@@BABB@@@BBDB@BBB@B@@@BCD@B@B@FBB@DAB@BA@@@@@A@EAA@ABA@EDB@@B@@@@@@BB@@D@DBH@DBD@AB@@@@"],
                "encodeOffsets": [[119993, 40130]]
            }
        }],
        "UTF8Encoding": true
    });
}));