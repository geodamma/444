var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: false,
    title: '金門集水區<br />\
    <img src="styles/legend/_1_0.png" /> 1<br />\
    <img src="styles/legend/_1_1.png" /> 10<br />\
    <img src="styles/legend/_1_2.png" /> 100<br />\
    <img src="styles/legend/_1_3.png" /> 101<br />\
    <img src="styles/legend/_1_4.png" /> 102<br />\
    <img src="styles/legend/_1_5.png" /> 103<br />\
    <img src="styles/legend/_1_6.png" /> 104<br />\
    <img src="styles/legend/_1_7.png" /> 105<br />\
    <img src="styles/legend/_1_8.png" /> 106<br />\
    <img src="styles/legend/_1_9.png" /> 107<br />\
    <img src="styles/legend/_1_10.png" /> 108<br />\
    <img src="styles/legend/_1_11.png" /> 109<br />\
    <img src="styles/legend/_1_12.png" /> 11<br />\
    <img src="styles/legend/_1_13.png" /> 110<br />\
    <img src="styles/legend/_1_14.png" /> 111<br />\
    <img src="styles/legend/_1_15.png" /> 112<br />\
    <img src="styles/legend/_1_16.png" /> 113<br />\
    <img src="styles/legend/_1_17.png" /> 114<br />\
    <img src="styles/legend/_1_18.png" /> 115<br />\
    <img src="styles/legend/_1_19.png" /> 116<br />\
    <img src="styles/legend/_1_20.png" /> 117<br />\
    <img src="styles/legend/_1_21.png" /> 118<br />\
    <img src="styles/legend/_1_22.png" /> 119<br />\
    <img src="styles/legend/_1_23.png" /> 12<br />\
    <img src="styles/legend/_1_24.png" /> 120<br />\
    <img src="styles/legend/_1_25.png" /> 121<br />\
    <img src="styles/legend/_1_26.png" /> 122<br />\
    <img src="styles/legend/_1_27.png" /> 123<br />\
    <img src="styles/legend/_1_28.png" /> 124<br />\
    <img src="styles/legend/_1_29.png" /> 125<br />\
    <img src="styles/legend/_1_30.png" /> 126<br />\
    <img src="styles/legend/_1_31.png" /> 127<br />\
    <img src="styles/legend/_1_32.png" /> 128<br />\
    <img src="styles/legend/_1_33.png" /> 129<br />\
    <img src="styles/legend/_1_34.png" /> 13<br />\
    <img src="styles/legend/_1_35.png" /> 130<br />\
    <img src="styles/legend/_1_36.png" /> 131<br />\
    <img src="styles/legend/_1_37.png" /> 132<br />\
    <img src="styles/legend/_1_38.png" /> 133<br />\
    <img src="styles/legend/_1_39.png" /> 134<br />\
    <img src="styles/legend/_1_40.png" /> 135<br />\
    <img src="styles/legend/_1_41.png" /> 136<br />\
    <img src="styles/legend/_1_42.png" /> 137<br />\
    <img src="styles/legend/_1_43.png" /> 138<br />\
    <img src="styles/legend/_1_44.png" /> 139<br />\
    <img src="styles/legend/_1_45.png" /> 14<br />\
    <img src="styles/legend/_1_46.png" /> 140<br />\
    <img src="styles/legend/_1_47.png" /> 141<br />\
    <img src="styles/legend/_1_48.png" /> 142<br />\
    <img src="styles/legend/_1_49.png" /> 143<br />\
    <img src="styles/legend/_1_50.png" /> 144<br />\
    <img src="styles/legend/_1_51.png" /> 145<br />\
    <img src="styles/legend/_1_52.png" /> 146<br />\
    <img src="styles/legend/_1_53.png" /> 147<br />\
    <img src="styles/legend/_1_54.png" /> 148<br />\
    <img src="styles/legend/_1_55.png" /> 149<br />\
    <img src="styles/legend/_1_56.png" /> 15<br />\
    <img src="styles/legend/_1_57.png" /> 150<br />\
    <img src="styles/legend/_1_58.png" /> 151<br />\
    <img src="styles/legend/_1_59.png" /> 152<br />\
    <img src="styles/legend/_1_60.png" /> 153<br />\
    <img src="styles/legend/_1_61.png" /> 154<br />\
    <img src="styles/legend/_1_62.png" /> 155<br />\
    <img src="styles/legend/_1_63.png" /> 156<br />\
    <img src="styles/legend/_1_64.png" /> 157<br />\
    <img src="styles/legend/_1_65.png" /> 158<br />\
    <img src="styles/legend/_1_66.png" /> 159<br />\
    <img src="styles/legend/_1_67.png" /> 16<br />\
    <img src="styles/legend/_1_68.png" /> 160<br />\
    <img src="styles/legend/_1_69.png" /> 161<br />\
    <img src="styles/legend/_1_70.png" /> 162<br />\
    <img src="styles/legend/_1_71.png" /> 163<br />\
    <img src="styles/legend/_1_72.png" /> 164<br />\
    <img src="styles/legend/_1_73.png" /> 165<br />\
    <img src="styles/legend/_1_74.png" /> 17<br />\
    <img src="styles/legend/_1_75.png" /> 18<br />\
    <img src="styles/legend/_1_76.png" /> 19<br />\
    <img src="styles/legend/_1_77.png" /> 2<br />\
    <img src="styles/legend/_1_78.png" /> 20<br />\
    <img src="styles/legend/_1_79.png" /> 21<br />\
    <img src="styles/legend/_1_80.png" /> 22<br />\
    <img src="styles/legend/_1_81.png" /> 23<br />\
    <img src="styles/legend/_1_82.png" /> 24<br />\
    <img src="styles/legend/_1_83.png" /> 25<br />\
    <img src="styles/legend/_1_84.png" /> 26<br />\
    <img src="styles/legend/_1_85.png" /> 27<br />\
    <img src="styles/legend/_1_86.png" /> 28<br />\
    <img src="styles/legend/_1_87.png" /> 29<br />\
    <img src="styles/legend/_1_88.png" /> 3<br />\
    <img src="styles/legend/_1_89.png" /> 30<br />\
    <img src="styles/legend/_1_90.png" /> 31<br />\
    <img src="styles/legend/_1_91.png" /> 32<br />\
    <img src="styles/legend/_1_92.png" /> 33<br />\
    <img src="styles/legend/_1_93.png" /> 34<br />\
    <img src="styles/legend/_1_94.png" /> 35<br />\
    <img src="styles/legend/_1_95.png" /> 36<br />\
    <img src="styles/legend/_1_96.png" /> 37<br />\
    <img src="styles/legend/_1_97.png" /> 38<br />\
    <img src="styles/legend/_1_98.png" /> 39<br />\
    <img src="styles/legend/_1_99.png" /> 4<br />\
    <img src="styles/legend/_1_100.png" /> 40<br />\
    <img src="styles/legend/_1_101.png" /> 41<br />\
    <img src="styles/legend/_1_102.png" /> 42<br />\
    <img src="styles/legend/_1_103.png" /> 43<br />\
    <img src="styles/legend/_1_104.png" /> 44<br />\
    <img src="styles/legend/_1_105.png" /> 45<br />\
    <img src="styles/legend/_1_106.png" /> 46<br />\
    <img src="styles/legend/_1_107.png" /> 47<br />\
    <img src="styles/legend/_1_108.png" /> 48<br />\
    <img src="styles/legend/_1_109.png" /> 49<br />\
    <img src="styles/legend/_1_110.png" /> 5<br />\
    <img src="styles/legend/_1_111.png" /> 50<br />\
    <img src="styles/legend/_1_112.png" /> 51<br />\
    <img src="styles/legend/_1_113.png" /> 52<br />\
    <img src="styles/legend/_1_114.png" /> 53<br />\
    <img src="styles/legend/_1_115.png" /> 54<br />\
    <img src="styles/legend/_1_116.png" /> 55<br />\
    <img src="styles/legend/_1_117.png" /> 56<br />\
    <img src="styles/legend/_1_118.png" /> 57<br />\
    <img src="styles/legend/_1_119.png" /> 58<br />\
    <img src="styles/legend/_1_120.png" /> 59<br />\
    <img src="styles/legend/_1_121.png" /> 6<br />\
    <img src="styles/legend/_1_122.png" /> 60<br />\
    <img src="styles/legend/_1_123.png" /> 61<br />\
    <img src="styles/legend/_1_124.png" /> 62<br />\
    <img src="styles/legend/_1_125.png" /> 63<br />\
    <img src="styles/legend/_1_126.png" /> 64<br />\
    <img src="styles/legend/_1_127.png" /> 65<br />\
    <img src="styles/legend/_1_128.png" /> 66<br />\
    <img src="styles/legend/_1_129.png" /> 67<br />\
    <img src="styles/legend/_1_130.png" /> 68<br />\
    <img src="styles/legend/_1_131.png" /> 69<br />\
    <img src="styles/legend/_1_132.png" /> 7<br />\
    <img src="styles/legend/_1_133.png" /> 70<br />\
    <img src="styles/legend/_1_134.png" /> 71<br />\
    <img src="styles/legend/_1_135.png" /> 72<br />\
    <img src="styles/legend/_1_136.png" /> 73<br />\
    <img src="styles/legend/_1_137.png" /> 74<br />\
    <img src="styles/legend/_1_138.png" /> 75<br />\
    <img src="styles/legend/_1_139.png" /> 76<br />\
    <img src="styles/legend/_1_140.png" /> 77<br />\
    <img src="styles/legend/_1_141.png" /> 78<br />\
    <img src="styles/legend/_1_142.png" /> 79<br />\
    <img src="styles/legend/_1_143.png" /> 8<br />\
    <img src="styles/legend/_1_144.png" /> 80<br />\
    <img src="styles/legend/_1_145.png" /> 81<br />\
    <img src="styles/legend/_1_146.png" /> 82<br />\
    <img src="styles/legend/_1_147.png" /> 83<br />\
    <img src="styles/legend/_1_148.png" /> 84<br />\
    <img src="styles/legend/_1_149.png" /> 85<br />\
    <img src="styles/legend/_1_150.png" /> 86<br />\
    <img src="styles/legend/_1_151.png" /> 87<br />\
    <img src="styles/legend/_1_152.png" /> 88<br />\
    <img src="styles/legend/_1_153.png" /> 89<br />\
    <img src="styles/legend/_1_154.png" /> 9<br />\
    <img src="styles/legend/_1_155.png" /> 90<br />\
    <img src="styles/legend/_1_156.png" /> 91<br />\
    <img src="styles/legend/_1_157.png" /> 92<br />\
    <img src="styles/legend/_1_158.png" /> 93<br />\
    <img src="styles/legend/_1_159.png" /> 94<br />\
    <img src="styles/legend/_1_160.png" /> 95<br />\
    <img src="styles/legend/_1_161.png" /> 96<br />\
    <img src="styles/legend/_1_162.png" /> 97<br />\
    <img src="styles/legend/_1_163.png" /> 98<br />\
    <img src="styles/legend/_1_164.png" /> 99<br />\
    <img src="styles/legend/_1_165.png" /> <br />'
        });
var format_3_2 = new ol.format.GeoJSON();
var features_3_2 = format_3_2.readFeatures(json_3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_2.addFeatures(features_3_2);
var lyr_3_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3_2, 
                style: style_3_2,
                interactive: true,
                title: '<img src="styles/legend/3_2.png" /> 聚落3'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr_3_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr_3_2];
lyr__1.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', });
lyr_3_2.set('fieldAliases', {'分區簡': '分區簡', });
lyr__1.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'TextEdit', 'NAME': 'TextEdit', });
lyr_3_2.set('fieldImages', {'分區簡': 'TextEdit', });
lyr__1.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', });
lyr_3_2.set('fieldLabels', {'分區簡': 'header label', });
lyr_3_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});