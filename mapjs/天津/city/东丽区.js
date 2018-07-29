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
    echarts.registerMap('东丽区', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "120110",
            "properties": {"name": "东丽区", "cp": [117.393967, 39.127764], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@AA@AAC@C@G@C@EAAMAC@AACEAE@K@@AAA@IAIEA@CBOFIBOHA@@@A@@@@@@@@AA@A@@ACI@AAC@@@AAC@A@@AA@@@@@@@A@A@@@@@@@@@A@AAC@A@@AC@@@@@@@C@@@@AC@A@A@@@@@@@@@@@A@AAA@G@@A@@@@@@A@@@A@A@AAA@E@@@@@@J@@@@@B@BAB@B@@@B@B@D@B@L@JAB@@@D@D@BBB@@@B@@GBEb@@C@C@@@O@AAA@C@@@@@@B@@@@@@@@C@GV@AACICG@AAC@CBM@A@AY@OBA@@@C@ABE@ABA@@AEUE@IQ@@D@@AEMAEFCDADFB@B@ACAED@@AAKBCBA@I@@@AAACAECAAGECCCAC@@@A@@BADCFCF@BCDILCFCBA@A@CAC@ECEAC@A@CBC@CB@@CB@BAB@@@B@BBDBD@D@FADADCBA@CAA@@@CCECGEICCA@@GAA@KCE@G@G@A@GBC@ODID@@CBMFGFCDEJ@@CF@DAFCH@BCBCBA@@@I@GAG@A@@@GAG@CBE@KDIBCBAB@BEBILGFCDQHIBKDC@G@MBC@O@MBGBK@@@A@@B@@@D@DBBBBDFBBDCBDB@D@B@@A@AB@@CJBB@B@@B@@@@@B@@XEAEB@@A@@DABBB@B@@BB@BDBFBBBFA@@@@@BHC@@DHFMDQB]F@@@@A@@@@@EB@@ABAD@DAHAB@DADAJ@B@@BBBBH@LBDBF@M`@@M@GA@B@F@DHBAHF@ADCFA@GA@@EACAA@@@A@@J@H@B@@@@CDAAAA@@@@@@A@@@@@A@@@@@@@E@@BADGA@BI@AABBBBB@DDDDBB@@BB@@@BA@ABAB@@ABAB@@@@A@@B@@ABABABA@CDABABABAB@@BDHFDDFDBBDDHDHDJDLFJDF@LDFBH@LBBBLFAJCZEAAFB@@BQCAFD@DDDBB@BBDAB@LEHAFANCRCFA@ABCB@JBD@@@B@NAH@DAB@D@F@H@F@J@H@JCF@FAF@F@B@CD@BHDFBJB@DNBBA@@B@B@@AB@B@B@@ABAB@@A@@@A@A@@AACE@ABAACTCPHBFFBZADBFDBCHJJKRCP@JGJCBA@@FABA@@AQGIDA@@DAL@LDJD@G@@CEKEEBAAVEBB@BADDBLDBBADAB@@BB@@BA@@BABAB@AABA@Q@AHCJCHCJCLED@JAFAB@@@BBB@@@JAJ@HCH@BA"],
                "encodeOffsets": [[120391, 40118]]
            }
        }],
        "UTF8Encoding": true
    });
}));