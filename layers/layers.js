var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Valtatiet_1 = new ol.format.GeoJSON();
var features_Valtatiet_1 = format_Valtatiet_1.readFeatures(json_Valtatiet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Valtatiet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Valtatiet_1.addFeatures(features_Valtatiet_1);
var lyr_Valtatiet_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Valtatiet_1, 
                style: style_Valtatiet_1,
                popuplayertitle: 'Valtatiet',
                interactive: false,
                title: '<img src="styles/legend/Valtatiet_1.png" /> Valtatiet'
            });
var format_TENTverkko_2 = new ol.format.GeoJSON();
var features_TENTverkko_2 = format_TENTverkko_2.readFeatures(json_TENTverkko_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TENTverkko_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TENTverkko_2.addFeatures(features_TENTverkko_2);
var lyr_TENTverkko_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TENTverkko_2, 
                style: style_TENTverkko_2,
                popuplayertitle: 'TEN-T-verkko',
                interactive: true,
                title: '<img src="styles/legend/TENTverkko_2.png" /> TEN-T-verkko'
            });
var format_Satamat_3 = new ol.format.GeoJSON();
var features_Satamat_3 = format_Satamat_3.readFeatures(json_Satamat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Satamat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Satamat_3.addFeatures(features_Satamat_3);
var lyr_Satamat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Satamat_3, 
                style: style_Satamat_3,
                popuplayertitle: 'Satamat',
                interactive: true,
                title: '<img src="styles/legend/Satamat_3.png" /> Satamat'
            });
var format_Tehtaat_4 = new ol.format.GeoJSON();
var features_Tehtaat_4 = format_Tehtaat_4.readFeatures(json_Tehtaat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tehtaat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tehtaat_4.addFeatures(features_Tehtaat_4);
var lyr_Tehtaat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tehtaat_4, 
                style: style_Tehtaat_4,
                popuplayertitle: 'Tehtaat',
                interactive: true,
    title: 'Tehtaat<br />\
    <img src="styles/legend/Tehtaat_4_0.png" /> Massateollisuus<br />\
    <img src="styles/legend/Tehtaat_4_1.png" /> Puutuoteteollisuus<br />' });
var format_Suunnitteilla_5 = new ol.format.GeoJSON();
var features_Suunnitteilla_5 = format_Suunnitteilla_5.readFeatures(json_Suunnitteilla_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suunnitteilla_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suunnitteilla_5.addFeatures(features_Suunnitteilla_5);
var lyr_Suunnitteilla_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suunnitteilla_5, 
                style: style_Suunnitteilla_5,
                popuplayertitle: 'Suunnitteilla',
                interactive: true,
                title: '<img src="styles/legend/Suunnitteilla_5.png" /> Suunnitteilla'
            });
var format_Rakenteilla_6 = new ol.format.GeoJSON();
var features_Rakenteilla_6 = format_Rakenteilla_6.readFeatures(json_Rakenteilla_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rakenteilla_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rakenteilla_6.addFeatures(features_Rakenteilla_6);
var lyr_Rakenteilla_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rakenteilla_6, 
                style: style_Rakenteilla_6,
                popuplayertitle: 'Rakenteilla',
                interactive: true,
                title: '<img src="styles/legend/Rakenteilla_6.png" /> Rakenteilla'
            });
var format_Toiminnassa_7 = new ol.format.GeoJSON();
var features_Toiminnassa_7 = format_Toiminnassa_7.readFeatures(json_Toiminnassa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toiminnassa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toiminnassa_7.addFeatures(features_Toiminnassa_7);
var lyr_Toiminnassa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toiminnassa_7, 
                style: style_Toiminnassa_7,
                popuplayertitle: 'Toiminnassa',
                interactive: true,
                title: '<img src="styles/legend/Toiminnassa_7.png" /> Toiminnassa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Valtatiet_1.setVisible(true);lyr_TENTverkko_2.setVisible(true);lyr_Satamat_3.setVisible(true);lyr_Tehtaat_4.setVisible(true);lyr_Suunnitteilla_5.setVisible(true);lyr_Rakenteilla_6.setVisible(true);lyr_Toiminnassa_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Valtatiet_1,lyr_TENTverkko_2,lyr_Satamat_3,lyr_Tehtaat_4,lyr_Suunnitteilla_5,lyr_Rakenteilla_6,lyr_Toiminnassa_7];
lyr_Valtatiet_1.set('fieldAliases', {'fid': 'fid', 'primaryindex': 'primaryindex', 'LINK_ID': 'LINK_ID', 'LINK_MMLID': 'LINK_MMLID', 'KUNTAKOODI': 'KUNTAKOODI', 'HALLINN_LK': 'HALLINN_LK', 'TOIMINN_LK': 'TOIMINN_LK', 'LINKKITYYP': 'LINKKITYYP', 'TIENUMERO': 'TIENUMERO', 'TIEOSANRO': 'TIEOSANRO', 'AJORATA': 'AJORATA', 'AET': 'AET', 'LET': 'LET', 'SILTA_ALIK': 'SILTA_ALIK', 'AJOSUUNTA': 'AJOSUUNTA', 'TIENIMI_SU': 'TIENIMI_SU', 'TIENIMI_RU': 'TIENIMI_RU', 'TIENIM_PSA': 'TIENIM_PSA', 'TIENIM_KSA': 'TIENIM_KSA', 'TIENIM_ISA': 'TIENIM_ISA', 'ENS_TALO_O': 'ENS_TALO_O', 'ENS_TALO_V': 'ENS_TALO_V', 'VIIM_TAL_O': 'VIIM_TAL_O', 'VIIM_TAL_V': 'VIIM_TAL_V', 'MUOKKAUSPV': 'MUOKKAUSPV', 'SIJ_TARK': 'SIJ_TARK', 'KOR_TARK': 'KOR_TARK', 'ALKU_PAALU': 'ALKU_PAALU', 'LOPP_PAALU': 'LOPP_PAALU', 'GEOM_FLIP': 'GEOM_FLIP', 'LINK_TILA': 'LINK_TILA', 'GEOM_LAHDE': 'GEOM_LAHDE', 'MTK_TIE_LK': 'MTK_TIE_LK', 'TIEN_KASVU': 'TIEN_KASVU', });
lyr_TENTverkko_2.set('fieldAliases', {'primaryind': 'primaryind', 'KUNTAKOODI': 'KUNTAKOODI', 'EURTIENRO': 'EURTIENRO', 'ID': 'ID', 'ALKU_M': 'ALKU_M', 'LOPPU_M': 'LOPPU_M', 'MUOKKAUSPV': 'MUOKKAUSPV', 'LINK_ID': 'LINK_ID', });
lyr_Satamat_3.set('fieldAliases', {'TEN-T-satama': 'TEN-T-satama', 'Ydin/kattava': 'Ydin/kattava', 'Kunta': 'Kunta', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Lähde': 'Lähde', 'Muuta': 'Muuta', });
lyr_Tehtaat_4.set('fieldAliases', {'nro2015': 'nro2015', 'NETRS': 'NETRS', 'IETRS': 'IETRS', 'Tuotantolaitos': 'Tuotantolaitos', 'Tuotsuunta': 'Tuotsuunta', 'Firma': 'Firma', 'Tehdas': 'Tehdas', 'Tyyppi': 'Tyyppi', 'Maakunta': 'Maakunta', 'ELY-keskus': 'ELY-keskus', });
lyr_Suunnitteilla_5.set('fieldAliases', {'fid': 'fid', 'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Kapasiteetti': 'Kapasiteetti', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Lisätietoja3': 'Lisätietoja3', 'Linkki': 'Linkki', 'Osoite': 'Osoite', 'TEN-T': 'TEN-T', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?', 'Lähde': 'Lähde', 'Muistiinpanot': 'Muistiinpanot', });
lyr_Rakenteilla_6.set('fieldAliases', {'fid': 'fid', 'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Kapasiteetti': 'Kapasiteetti', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Lisätietoja3': 'Lisätietoja3', 'Linkki': 'Linkki', 'Osoite': 'Osoite', 'TEN-T': 'TEN-T', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?', 'Lähde': 'Lähde', 'Muistiinpanot': 'Muistiinpanot', });
lyr_Toiminnassa_7.set('fieldAliases', {'fid': 'fid', 'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Kapasiteetti': 'Kapasiteetti', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Lisätietoja3': 'Lisätietoja3', 'Linkki': 'Linkki', 'Osoite': 'Osoite', 'TEN-T': 'TEN-T', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?', 'Lähde': 'Lähde', 'Muistiinpanot': 'Muistiinpanot', });
lyr_Valtatiet_1.set('fieldImages', {'fid': 'TextEdit', 'primaryindex': 'TextEdit', 'LINK_ID': 'TextEdit', 'LINK_MMLID': 'TextEdit', 'KUNTAKOODI': 'Range', 'HALLINN_LK': 'Range', 'TOIMINN_LK': 'Range', 'LINKKITYYP': 'Range', 'TIENUMERO': 'TextEdit', 'TIEOSANRO': 'Range', 'AJORATA': 'Range', 'AET': 'Range', 'LET': 'Range', 'SILTA_ALIK': 'Range', 'AJOSUUNTA': 'Range', 'TIENIMI_SU': 'TextEdit', 'TIENIMI_RU': 'TextEdit', 'TIENIM_PSA': 'TextEdit', 'TIENIM_KSA': 'TextEdit', 'TIENIM_ISA': 'TextEdit', 'ENS_TALO_O': 'Range', 'ENS_TALO_V': 'Range', 'VIIM_TAL_O': 'Range', 'VIIM_TAL_V': 'Range', 'MUOKKAUSPV': 'TextEdit', 'SIJ_TARK': 'TextEdit', 'KOR_TARK': 'TextEdit', 'ALKU_PAALU': 'TextEdit', 'LOPP_PAALU': 'TextEdit', 'GEOM_FLIP': 'Range', 'LINK_TILA': 'Range', 'GEOM_LAHDE': 'Range', 'MTK_TIE_LK': 'Range', 'TIEN_KASVU': 'Range', });
lyr_TENTverkko_2.set('fieldImages', {'primaryind': 'TextEdit', 'KUNTAKOODI': 'TextEdit', 'EURTIENRO': 'TextEdit', 'ID': 'TextEdit', 'ALKU_M': 'TextEdit', 'LOPPU_M': 'TextEdit', 'MUOKKAUSPV': 'TextEdit', 'LINK_ID': 'TextEdit', });
lyr_Satamat_3.set('fieldImages', {'TEN-T-satama': 'TextEdit', 'Ydin/kattava': 'TextEdit', 'Kunta': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Lähde': 'TextEdit', 'Muuta': 'TextEdit', });
lyr_Tehtaat_4.set('fieldImages', {'nro2015': 'Range', 'NETRS': 'TextEdit', 'IETRS': 'TextEdit', 'Tuotantolaitos': 'TextEdit', 'Tuotsuunta': 'TextEdit', 'Firma': 'TextEdit', 'Tehdas': 'TextEdit', 'Tyyppi': 'TextEdit', 'Maakunta': 'TextEdit', 'ELY-keskus': 'TextEdit', });
lyr_Suunnitteilla_5.set('fieldImages', {'fid': '', 'Yritys': '', 'Nimi': '', 'Käyttövoima': '', 'Kapasiteetti': '', 'Teho kW': '', 'SijaintiN': '', 'SijaintiE': '', 'Tilanne': '', 'Kunta': '', 'Lisätietoja1': '', 'Lisätietoja2': '', 'Lisätietoja3': '', 'Linkki': '', 'Osoite': '', 'TEN-T': '', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': '', 'Lähde': '', 'Muistiinpanot': '', });
lyr_Rakenteilla_6.set('fieldImages', {'fid': '', 'Yritys': '', 'Nimi': '', 'Käyttövoima': '', 'Kapasiteetti': '', 'Teho kW': '', 'SijaintiN': '', 'SijaintiE': '', 'Tilanne': '', 'Kunta': '', 'Lisätietoja1': '', 'Lisätietoja2': '', 'Lisätietoja3': '', 'Linkki': '', 'Osoite': '', 'TEN-T': '', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': '', 'Lähde': '', 'Muistiinpanot': '', });
lyr_Toiminnassa_7.set('fieldImages', {'fid': 'TextEdit', 'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'Kapasiteetti': 'TextEdit', 'Teho kW': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Lisätietoja2': 'TextEdit', 'Lisätietoja3': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', 'TEN-T': 'TextEdit', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'CheckBox', 'Lähde': 'TextEdit', 'Muistiinpanot': 'TextEdit', });
lyr_Valtatiet_1.set('fieldLabels', {'fid': 'header label - always visible', 'primaryindex': 'header label - always visible', 'LINK_ID': 'header label - always visible', 'LINK_MMLID': 'header label - always visible', 'KUNTAKOODI': 'header label - always visible', 'HALLINN_LK': 'header label - always visible', 'TOIMINN_LK': 'header label - always visible', 'LINKKITYYP': 'header label - always visible', 'TIENUMERO': 'header label - always visible', 'TIEOSANRO': 'header label - always visible', 'AJORATA': 'header label - always visible', 'AET': 'header label - always visible', 'LET': 'header label - always visible', 'SILTA_ALIK': 'header label - always visible', 'AJOSUUNTA': 'header label - always visible', 'TIENIMI_SU': 'header label - always visible', 'TIENIMI_RU': 'header label - always visible', 'TIENIM_PSA': 'header label - always visible', 'TIENIM_KSA': 'header label - always visible', 'TIENIM_ISA': 'header label - always visible', 'ENS_TALO_O': 'header label - always visible', 'ENS_TALO_V': 'header label - always visible', 'VIIM_TAL_O': 'header label - always visible', 'VIIM_TAL_V': 'header label - always visible', 'MUOKKAUSPV': 'header label - always visible', 'SIJ_TARK': 'header label - always visible', 'KOR_TARK': 'header label - always visible', 'ALKU_PAALU': 'header label - always visible', 'LOPP_PAALU': 'header label - always visible', 'GEOM_FLIP': 'header label - always visible', 'LINK_TILA': 'header label - always visible', 'GEOM_LAHDE': 'header label - always visible', 'MTK_TIE_LK': 'header label - always visible', 'TIEN_KASVU': 'header label - always visible', });
lyr_TENTverkko_2.set('fieldLabels', {'primaryind': 'hidden field', 'KUNTAKOODI': 'hidden field', 'EURTIENRO': 'header label - visible with data', 'ID': 'hidden field', 'ALKU_M': 'hidden field', 'LOPPU_M': 'hidden field', 'MUOKKAUSPV': 'hidden field', 'LINK_ID': 'hidden field', });
lyr_Satamat_3.set('fieldLabels', {'TEN-T-satama': 'header label - always visible', 'Ydin/kattava': 'hidden field', 'Kunta': 'header label - always visible', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Lähde': 'header label - always visible', 'Muuta': 'hidden field', });
lyr_Tehtaat_4.set('fieldLabels', {'nro2015': 'hidden field', 'NETRS': 'hidden field', 'IETRS': 'hidden field', 'Tuotantolaitos': 'header label - always visible', 'Tuotsuunta': 'header label - always visible', 'Firma': 'hidden field', 'Tehdas': 'header label - always visible', 'Tyyppi': 'header label - always visible', 'Maakunta': 'hidden field', 'ELY-keskus': 'hidden field', });
lyr_Suunnitteilla_5.set('fieldLabels', {'fid': 'hidden field', 'Yritys': 'header label - always visible', 'Nimi': 'hidden field', 'Käyttövoima': 'header label - always visible', 'Kapasiteetti': 'header label - always visible', 'Teho kW': 'header label - always visible', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Tilanne': 'header label - always visible', 'Kunta': 'header label - always visible', 'Lisätietoja1': 'header label - visible with data', 'Lisätietoja2': 'hidden field', 'Lisätietoja3': 'hidden field', 'Linkki': 'header label - visible with data', 'Osoite': 'header label - visible with data', 'TEN-T': 'hidden field', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'hidden field', 'Lähde': 'hidden field', 'Muistiinpanot': 'hidden field', });
lyr_Rakenteilla_6.set('fieldLabels', {'fid': 'hidden field', 'Yritys': 'header label - always visible', 'Nimi': 'hidden field', 'Käyttövoima': 'header label - always visible', 'Kapasiteetti': 'header label - always visible', 'Teho kW': 'header label - always visible', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Tilanne': 'header label - always visible', 'Kunta': 'header label - always visible', 'Lisätietoja1': 'header label - visible with data', 'Lisätietoja2': 'hidden field', 'Lisätietoja3': 'hidden field', 'Linkki': 'header label - visible with data', 'Osoite': 'header label - visible with data', 'TEN-T': 'hidden field', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'hidden field', 'Lähde': 'hidden field', 'Muistiinpanot': 'hidden field', });
lyr_Toiminnassa_7.set('fieldLabels', {'fid': 'hidden field', 'Yritys': 'header label - always visible', 'Nimi': 'hidden field', 'Käyttövoima': 'header label - always visible', 'Kapasiteetti': 'header label - always visible', 'Teho kW': 'header label - always visible', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Tilanne': 'header label - always visible', 'Kunta': 'header label - always visible', 'Lisätietoja1': 'header label - visible with data', 'Lisätietoja2': 'hidden field', 'Lisätietoja3': 'hidden field', 'Linkki': 'header label - visible with data', 'Osoite': 'header label - visible with data', 'TEN-T': 'hidden field', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'hidden field', 'Lähde': 'hidden field', 'Muistiinpanot': 'hidden field', });
lyr_Toiminnassa_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});