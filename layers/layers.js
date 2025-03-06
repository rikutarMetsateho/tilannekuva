var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tehtaat_1 = new ol.format.GeoJSON();
var features_Tehtaat_1 = format_Tehtaat_1.readFeatures(json_Tehtaat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tehtaat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tehtaat_1.addFeatures(features_Tehtaat_1);
var lyr_Tehtaat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tehtaat_1, 
                style: style_Tehtaat_1,
                popuplayertitle: 'Tehtaat',
                interactive: true,
    title: 'Tehtaat<br />\
    <img src="styles/legend/Tehtaat_1_0.png" /> Kemiallinen<br />\
    <img src="styles/legend/Tehtaat_1_1.png" /> Mekaaninen<br />\
    <img src="styles/legend/Tehtaat_1_2.png" /> <br />' });
var format_Latauspaikka_2 = new ol.format.GeoJSON();
var features_Latauspaikka_2 = format_Latauspaikka_2.readFeatures(json_Latauspaikka_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Latauspaikka_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latauspaikka_2.addFeatures(features_Latauspaikka_2);
var lyr_Latauspaikka_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latauspaikka_2, 
                style: style_Latauspaikka_2,
                popuplayertitle: 'Latauspaikka',
                interactive: true,
                title: '<img src="styles/legend/Latauspaikka_2.png" /> Latauspaikka'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Tehtaat_1.setVisible(true);lyr_Latauspaikka_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Tehtaat_1,lyr_Latauspaikka_2];
lyr_Tehtaat_1.set('fieldAliases', {'nro2015': 'nro2015', 'NETRS': 'NETRS', 'IETRS': 'IETRS', 'Tuotantolaitos': 'Tuotantolaitos', 'Tuotsuunta': 'Tuotsuunta', 'Firma': 'Firma', 'Tehdas': 'Tehdas', 'Tyyppi': 'Tyyppi', 'Maakunta': 'Maakunta', 'ELY-keskus': 'ELY-keskus', 'field_11': 'field_11', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', 'field_15': 'field_15', 'field_16': 'field_16', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', 'field_20': 'field_20', 'field_21': 'field_21', 'field_22': 'field_22', 'field_23': 'field_23', 'field_24': 'field_24', 'field_25': 'field_25', 'field_26': 'field_26', 'field_27': 'field_27', 'field_28': 'field_28', 'field_29': 'field_29', 'field_30': 'field_30', 'field_31': 'field_31', 'field_32': 'field_32', 'field_33': 'field_33', 'field_34': 'field_34', 'field_35': 'field_35', 'field_36': 'field_36', 'field_37': 'field_37', 'field_38': 'field_38', 'field_39': 'field_39', 'field_40': 'field_40', 'field_41': 'field_41', 'field_42': 'field_42', 'field_43': 'field_43', 'field_44': 'field_44', 'field_45': 'field_45', 'field_46': 'field_46', 'field_47': 'field_47', 'field_48': 'field_48', 'field_49': 'field_49', 'field_50': 'field_50', 'field_51': 'field_51', 'field_52': 'field_52', 'field_53': 'field_53', 'field_54': 'field_54', 'field_55': 'field_55', 'field_56': 'field_56', 'field_57': 'field_57', 'field_58': 'field_58', });
lyr_Latauspaikka_2.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Kapasiteetti': 'Kapasiteetti', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja': 'Lisätietoja', 'Linkki': 'Linkki', 'Osoite': 'Osoite', 'TEN-T': 'TEN-T', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?', 'Lähde': 'Lähde', 'Muistiinpanot': 'Muistiinpanot', });
lyr_Tehtaat_1.set('fieldImages', {'nro2015': 'Range', 'NETRS': 'TextEdit', 'IETRS': 'TextEdit', 'Tuotantolaitos': 'TextEdit', 'Tuotsuunta': 'TextEdit', 'Firma': 'TextEdit', 'Tehdas': 'TextEdit', 'Tyyppi': 'TextEdit', 'Maakunta': 'TextEdit', 'ELY-keskus': 'TextEdit', 'field_11': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', 'field_15': 'TextEdit', 'field_16': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', 'field_20': 'TextEdit', 'field_21': 'TextEdit', 'field_22': 'TextEdit', 'field_23': 'TextEdit', 'field_24': 'TextEdit', 'field_25': 'TextEdit', 'field_26': 'TextEdit', 'field_27': 'TextEdit', 'field_28': 'TextEdit', 'field_29': 'TextEdit', 'field_30': 'TextEdit', 'field_31': 'TextEdit', 'field_32': 'TextEdit', 'field_33': 'TextEdit', 'field_34': 'TextEdit', 'field_35': 'TextEdit', 'field_36': 'TextEdit', 'field_37': 'TextEdit', 'field_38': 'TextEdit', 'field_39': 'TextEdit', 'field_40': 'TextEdit', 'field_41': 'TextEdit', 'field_42': 'TextEdit', 'field_43': 'TextEdit', 'field_44': 'TextEdit', 'field_45': 'TextEdit', 'field_46': 'TextEdit', 'field_47': 'TextEdit', 'field_48': 'TextEdit', 'field_49': 'TextEdit', 'field_50': 'TextEdit', 'field_51': 'TextEdit', 'field_52': 'TextEdit', 'field_53': 'TextEdit', 'field_54': 'TextEdit', 'field_55': 'TextEdit', 'field_56': 'TextEdit', 'field_57': 'TextEdit', 'field_58': 'TextEdit', });
lyr_Latauspaikka_2.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'Kapasiteetti': 'TextEdit', 'Teho kW': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', 'TEN-T': 'TextEdit', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'CheckBox', 'Lähde': 'TextEdit', 'Muistiinpanot': 'TextEdit', });
lyr_Tehtaat_1.set('fieldLabels', {'nro2015': 'no label', 'NETRS': 'no label', 'IETRS': 'no label', 'Tuotantolaitos': 'no label', 'Tuotsuunta': 'no label', 'Firma': 'no label', 'Tehdas': 'no label', 'Tyyppi': 'no label', 'Maakunta': 'no label', 'ELY-keskus': 'no label', 'field_11': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', 'field_15': 'no label', 'field_16': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', 'field_20': 'no label', 'field_21': 'no label', 'field_22': 'no label', 'field_23': 'no label', 'field_24': 'no label', 'field_25': 'no label', 'field_26': 'no label', 'field_27': 'no label', 'field_28': 'no label', 'field_29': 'no label', 'field_30': 'no label', 'field_31': 'no label', 'field_32': 'no label', 'field_33': 'no label', 'field_34': 'no label', 'field_35': 'no label', 'field_36': 'no label', 'field_37': 'no label', 'field_38': 'no label', 'field_39': 'no label', 'field_40': 'no label', 'field_41': 'no label', 'field_42': 'no label', 'field_43': 'no label', 'field_44': 'no label', 'field_45': 'no label', 'field_46': 'no label', 'field_47': 'no label', 'field_48': 'no label', 'field_49': 'no label', 'field_50': 'no label', 'field_51': 'no label', 'field_52': 'no label', 'field_53': 'no label', 'field_54': 'no label', 'field_55': 'no label', 'field_56': 'no label', 'field_57': 'no label', 'field_58': 'no label', });
lyr_Latauspaikka_2.set('fieldLabels', {'Yritys': 'no label', 'Nimi': 'no label', 'Käyttövoima': 'no label', 'Kapasiteetti': 'no label', 'Teho kW': 'no label', 'SijaintiN': 'no label', 'SijaintiE': 'no label', 'Tilanne': 'no label', 'Kunta': 'no label', 'Lisätietoja': 'no label', 'Linkki': 'no label', 'Osoite': 'no label', 'TEN-T': 'no label', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'no label', 'Lähde': 'no label', 'Muistiinpanot': 'no label', });
lyr_Latauspaikka_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});