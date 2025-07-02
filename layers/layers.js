var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kuntakeskipisteet_1 = new ol.format.GeoJSON();
var features_Kuntakeskipisteet_1 = format_Kuntakeskipisteet_1.readFeatures(json_Kuntakeskipisteet_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuntakeskipisteet_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuntakeskipisteet_1.addFeatures(features_Kuntakeskipisteet_1);
var lyr_Kuntakeskipisteet_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuntakeskipisteet_1, 
                style: style_Kuntakeskipisteet_1,
                popuplayertitle: 'Kunta keskipisteet',
                interactive: true,
                title: '<img src="styles/legend/Kuntakeskipisteet_1.png" /> Kunta keskipisteet'
            });
var format_Kattavaverkko_2 = new ol.format.GeoJSON();
var features_Kattavaverkko_2 = format_Kattavaverkko_2.readFeatures(json_Kattavaverkko_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kattavaverkko_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kattavaverkko_2.addFeatures(features_Kattavaverkko_2);
var lyr_Kattavaverkko_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kattavaverkko_2, 
                style: style_Kattavaverkko_2,
                popuplayertitle: 'Kattavaverkko',
                interactive: true,
                title: '<img src="styles/legend/Kattavaverkko_2.png" /> Kattavaverkko'
            });
var format_Ydinverkko_3 = new ol.format.GeoJSON();
var features_Ydinverkko_3 = format_Ydinverkko_3.readFeatures(json_Ydinverkko_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ydinverkko_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ydinverkko_3.addFeatures(features_Ydinverkko_3);
var lyr_Ydinverkko_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ydinverkko_3, 
                style: style_Ydinverkko_3,
                popuplayertitle: 'Ydinverkko',
                interactive: true,
                title: '<img src="styles/legend/Ydinverkko_3.png" /> Ydinverkko'
            });
var format_TENTsatamat_4 = new ol.format.GeoJSON();
var features_TENTsatamat_4 = format_TENTsatamat_4.readFeatures(json_TENTsatamat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TENTsatamat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TENTsatamat_4.addFeatures(features_TENTsatamat_4);
var lyr_TENTsatamat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TENTsatamat_4, 
                style: style_TENTsatamat_4,
                popuplayertitle: 'TEN-T-satamat',
                interactive: true,
                title: '<img src="styles/legend/TENTsatamat_4.png" /> TEN-T-satamat'
            });
var format_Tehtaat_5 = new ol.format.GeoJSON();
var features_Tehtaat_5 = format_Tehtaat_5.readFeatures(json_Tehtaat_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tehtaat_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tehtaat_5.addFeatures(features_Tehtaat_5);
var lyr_Tehtaat_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tehtaat_5, 
                style: style_Tehtaat_5,
                popuplayertitle: 'Tehtaat',
                interactive: true,
    title: 'Tehtaat<br />\
    <img src="styles/legend/Tehtaat_5_0.png" /> Massateollisuus<br />\
    <img src="styles/legend/Tehtaat_5_1.png" /> Puutuoteteollisuus<br />' });
var format_Suunnitteilla_6 = new ol.format.GeoJSON();
var features_Suunnitteilla_6 = format_Suunnitteilla_6.readFeatures(json_Suunnitteilla_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suunnitteilla_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suunnitteilla_6.addFeatures(features_Suunnitteilla_6);
var lyr_Suunnitteilla_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suunnitteilla_6, 
                style: style_Suunnitteilla_6,
                popuplayertitle: 'Suunnitteilla',
                interactive: true,
                title: '<img src="styles/legend/Suunnitteilla_6.png" /> Suunnitteilla'
            });
var format_Rakenteilla_7 = new ol.format.GeoJSON();
var features_Rakenteilla_7 = format_Rakenteilla_7.readFeatures(json_Rakenteilla_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rakenteilla_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rakenteilla_7.addFeatures(features_Rakenteilla_7);
var lyr_Rakenteilla_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rakenteilla_7, 
                style: style_Rakenteilla_7,
                popuplayertitle: 'Rakenteilla',
                interactive: true,
                title: '<img src="styles/legend/Rakenteilla_7.png" /> Rakenteilla'
            });
var format_Toiminnassa_8 = new ol.format.GeoJSON();
var features_Toiminnassa_8 = format_Toiminnassa_8.readFeatures(json_Toiminnassa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toiminnassa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toiminnassa_8.addFeatures(features_Toiminnassa_8);
var lyr_Toiminnassa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toiminnassa_8, 
                style: style_Toiminnassa_8,
                popuplayertitle: 'Toiminnassa',
                interactive: true,
                title: '<img src="styles/legend/Toiminnassa_8.png" /> Toiminnassa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Kuntakeskipisteet_1.setVisible(false);lyr_Kattavaverkko_2.setVisible(true);lyr_Ydinverkko_3.setVisible(true);lyr_TENTsatamat_4.setVisible(true);lyr_Tehtaat_5.setVisible(true);lyr_Suunnitteilla_6.setVisible(true);lyr_Rakenteilla_7.setVisible(true);lyr_Toiminnassa_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Kuntakeskipisteet_1,lyr_Kattavaverkko_2,lyr_Ydinverkko_3,lyr_TENTsatamat_4,lyr_Tehtaat_5,lyr_Suunnitteilla_6,lyr_Rakenteilla_7,lyr_Toiminnassa_8];
lyr_Kuntakeskipisteet_1.set('fieldAliases', {'fid': 'fid', 'GML_ID': 'GML_ID', 'NATCODE': 'NATCODE', 'NAMEFIN': 'NAMEFIN', 'NAMESWE': 'NAMESWE', 'LANDAREA': 'LANDAREA', 'FRESHWAREA': 'FRESHWAREA', 'SEAWAREA': 'SEAWAREA', 'TOTALAREA': 'TOTALAREA', 'MÄT': 'MÄT', 'KUT': 'KUT', 'LET': 'LET', 'MÄK': 'MÄK', 'KUK': 'KUK', 'LEK': 'LEK', 'Yhteensä': 'Yhteensä', 'MÄT_1': 'MÄT_1', 'KUT_1': 'KUT_1', 'LET_1': 'LET_1', 'MÄK_1': 'MÄK_1', 'KUK_1': 'KUK_1', 'LEK_1': 'LEK_1', 'Yhteensä_1': 'Yhteensä_1', 'MÄT_2': 'MÄT_2', 'KUT_2': 'KUT_2', 'LET_2': 'LET_2', 'MÄK_2': 'MÄK_2', 'KUK_2': 'KUK_2', 'LEK_2': 'LEK_2', 'Yhteensä_2': 'Yhteensä_2', });
lyr_Kattavaverkko_2.set('fieldAliases', {'fid': 'fid', 'primaryindex': 'primaryindex', 'LINK_ID': 'LINK_ID', 'LINK_MMLID': 'LINK_MMLID', 'KUNTAKOODI': 'KUNTAKOODI', 'HALLINN_LK': 'HALLINN_LK', 'TOIMINN_LK': 'TOIMINN_LK', 'LINKKITYYP': 'LINKKITYYP', 'TIENUMERO': 'TIENUMERO', 'TIEOSANRO': 'TIEOSANRO', 'AJORATA': 'AJORATA', 'AET': 'AET', 'LET': 'LET', 'SILTA_ALIK': 'SILTA_ALIK', 'AJOSUUNTA': 'AJOSUUNTA', 'TIENIMI_SU': 'TIENIMI_SU', 'TIENIMI_RU': 'TIENIMI_RU', 'TIENIM_PSA': 'TIENIM_PSA', 'TIENIM_KSA': 'TIENIM_KSA', 'TIENIM_ISA': 'TIENIM_ISA', 'ENS_TALO_O': 'ENS_TALO_O', 'ENS_TALO_V': 'ENS_TALO_V', 'VIIM_TAL_O': 'VIIM_TAL_O', 'VIIM_TAL_V': 'VIIM_TAL_V', 'MUOKKAUSPV': 'MUOKKAUSPV', 'SIJ_TARK': 'SIJ_TARK', 'KOR_TARK': 'KOR_TARK', 'ALKU_PAALU': 'ALKU_PAALU', 'LOPP_PAALU': 'LOPP_PAALU', 'GEOM_FLIP': 'GEOM_FLIP', 'LINK_TILA': 'LINK_TILA', 'GEOM_LAHDE': 'GEOM_LAHDE', 'MTK_TIE_LK': 'MTK_TIE_LK', 'TIEN_KASVU': 'TIEN_KASVU', 'layer': 'layer', 'path': 'path', });
lyr_Ydinverkko_3.set('fieldAliases', {'primaryind': 'primaryind', 'KUNTAKOODI': 'KUNTAKOODI', 'EURTIENRO': 'EURTIENRO', 'ID': 'ID', 'ALKU_M': 'ALKU_M', 'LOPPU_M': 'LOPPU_M', 'MUOKKAUSPV': 'MUOKKAUSPV', 'LINK_ID': 'LINK_ID', });
lyr_TENTsatamat_4.set('fieldAliases', {'TEN-T-satama': 'TEN-T-satama', 'Ydin/kattava': 'Ydin/kattava', 'Kunta': 'Kunta', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Lähde': 'Lähde', 'Muuta': 'Muuta', });
lyr_Tehtaat_5.set('fieldAliases', {'nro2015': 'nro2015', 'NETRS': 'NETRS', 'IETRS': 'IETRS', 'Tuotantolaitos': 'Tuotantolaitos', 'Tuotsuunta': 'Tuotsuunta', 'Firma': 'Firma', 'Tehdas': 'Tehdas', 'Tyyppi': 'Tyyppi', 'Maakunta': 'Maakunta', 'ELY-keskus': 'ELY-keskus', });
lyr_Suunnitteilla_6.set('fieldAliases', {'fid': 'fid', 'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Kapasiteetti': 'Kapasiteetti', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Lisätietoja3': 'Lisätietoja3', 'Linkki': 'Linkki', 'Osoite': 'Osoite', 'TEN-T': 'TEN-T', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?', 'Lähde': 'Lähde', 'Muistiinpanot': 'Muistiinpanot', });
lyr_Rakenteilla_7.set('fieldAliases', {'fid': 'fid', 'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Kapasiteetti': 'Kapasiteetti', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Lisätietoja3': 'Lisätietoja3', 'Linkki': 'Linkki', 'Osoite': 'Osoite', 'TEN-T': 'TEN-T', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?', 'Lähde': 'Lähde', 'Muistiinpanot': 'Muistiinpanot', });
lyr_Toiminnassa_8.set('fieldAliases', {'fid': 'fid', 'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Kapasiteetti': 'Kapasiteetti', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Lisätietoja3': 'Lisätietoja3', 'Linkki': 'Linkki', 'Osoite': 'Osoite', 'TEN-T': 'TEN-T', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?', 'Lähde': 'Lähde', 'Muistiinpanot': 'Muistiinpanot', });
lyr_Kuntakeskipisteet_1.set('fieldImages', {'fid': 'TextEdit', 'GML_ID': 'TextEdit', 'NATCODE': 'TextEdit', 'NAMEFIN': 'TextEdit', 'NAMESWE': 'TextEdit', 'LANDAREA': 'TextEdit', 'FRESHWAREA': 'TextEdit', 'SEAWAREA': 'TextEdit', 'TOTALAREA': 'TextEdit', 'MÄT': 'TextEdit', 'KUT': 'TextEdit', 'LET': 'TextEdit', 'MÄK': 'TextEdit', 'KUK': 'TextEdit', 'LEK': 'TextEdit', 'Yhteensä': 'TextEdit', 'MÄT_1': 'TextEdit', 'KUT_1': 'TextEdit', 'LET_1': 'TextEdit', 'MÄK_1': 'TextEdit', 'KUK_1': 'TextEdit', 'LEK_1': 'TextEdit', 'Yhteensä_1': 'TextEdit', 'MÄT_2': 'TextEdit', 'KUT_2': 'TextEdit', 'LET_2': 'TextEdit', 'MÄK_2': 'TextEdit', 'KUK_2': 'TextEdit', 'LEK_2': 'TextEdit', 'Yhteensä_2': 'TextEdit', });
lyr_Kattavaverkko_2.set('fieldImages', {'fid': 'TextEdit', 'primaryindex': 'TextEdit', 'LINK_ID': 'TextEdit', 'LINK_MMLID': 'TextEdit', 'KUNTAKOODI': 'Range', 'HALLINN_LK': 'Range', 'TOIMINN_LK': 'Range', 'LINKKITYYP': 'Range', 'TIENUMERO': 'TextEdit', 'TIEOSANRO': 'Range', 'AJORATA': 'Range', 'AET': 'Range', 'LET': 'Range', 'SILTA_ALIK': 'Range', 'AJOSUUNTA': 'Range', 'TIENIMI_SU': 'TextEdit', 'TIENIMI_RU': 'TextEdit', 'TIENIM_PSA': 'TextEdit', 'TIENIM_KSA': 'TextEdit', 'TIENIM_ISA': 'TextEdit', 'ENS_TALO_O': 'Range', 'ENS_TALO_V': 'Range', 'VIIM_TAL_O': 'Range', 'VIIM_TAL_V': 'Range', 'MUOKKAUSPV': 'TextEdit', 'SIJ_TARK': 'TextEdit', 'KOR_TARK': 'TextEdit', 'ALKU_PAALU': 'TextEdit', 'LOPP_PAALU': 'TextEdit', 'GEOM_FLIP': 'Range', 'LINK_TILA': 'Range', 'GEOM_LAHDE': 'Range', 'MTK_TIE_LK': 'Range', 'TIEN_KASVU': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Ydinverkko_3.set('fieldImages', {'primaryind': 'TextEdit', 'KUNTAKOODI': 'TextEdit', 'EURTIENRO': 'TextEdit', 'ID': 'TextEdit', 'ALKU_M': 'TextEdit', 'LOPPU_M': 'TextEdit', 'MUOKKAUSPV': 'TextEdit', 'LINK_ID': 'TextEdit', });
lyr_TENTsatamat_4.set('fieldImages', {'TEN-T-satama': 'TextEdit', 'Ydin/kattava': 'TextEdit', 'Kunta': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Lähde': 'TextEdit', 'Muuta': 'TextEdit', });
lyr_Tehtaat_5.set('fieldImages', {'nro2015': 'Range', 'NETRS': 'TextEdit', 'IETRS': 'TextEdit', 'Tuotantolaitos': 'TextEdit', 'Tuotsuunta': 'TextEdit', 'Firma': 'TextEdit', 'Tehdas': 'TextEdit', 'Tyyppi': 'TextEdit', 'Maakunta': 'TextEdit', 'ELY-keskus': 'TextEdit', });
lyr_Suunnitteilla_6.set('fieldImages', {'fid': '', 'Yritys': '', 'Nimi': '', 'Käyttövoima': '', 'Kapasiteetti': '', 'Teho kW': '', 'SijaintiN': '', 'SijaintiE': '', 'Tilanne': '', 'Kunta': '', 'Lisätietoja1': '', 'Lisätietoja2': '', 'Lisätietoja3': '', 'Linkki': '', 'Osoite': '', 'TEN-T': '', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': '', 'Lähde': '', 'Muistiinpanot': '', });
lyr_Rakenteilla_7.set('fieldImages', {'fid': '', 'Yritys': '', 'Nimi': '', 'Käyttövoima': '', 'Kapasiteetti': '', 'Teho kW': '', 'SijaintiN': '', 'SijaintiE': '', 'Tilanne': '', 'Kunta': '', 'Lisätietoja1': '', 'Lisätietoja2': '', 'Lisätietoja3': '', 'Linkki': '', 'Osoite': '', 'TEN-T': '', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': '', 'Lähde': '', 'Muistiinpanot': '', });
lyr_Toiminnassa_8.set('fieldImages', {'fid': 'TextEdit', 'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'Kapasiteetti': 'TextEdit', 'Teho kW': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Lisätietoja2': 'TextEdit', 'Lisätietoja3': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', 'TEN-T': 'TextEdit', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'CheckBox', 'Lähde': 'TextEdit', 'Muistiinpanot': 'TextEdit', });
lyr_Kuntakeskipisteet_1.set('fieldLabels', {'fid': 'no label', 'GML_ID': 'no label', 'NATCODE': 'no label', 'NAMEFIN': 'no label', 'NAMESWE': 'no label', 'LANDAREA': 'no label', 'FRESHWAREA': 'no label', 'SEAWAREA': 'no label', 'TOTALAREA': 'no label', 'MÄT': 'no label', 'KUT': 'no label', 'LET': 'no label', 'MÄK': 'no label', 'KUK': 'no label', 'LEK': 'no label', 'Yhteensä': 'no label', 'MÄT_1': 'no label', 'KUT_1': 'no label', 'LET_1': 'no label', 'MÄK_1': 'no label', 'KUK_1': 'no label', 'LEK_1': 'no label', 'Yhteensä_1': 'no label', 'MÄT_2': 'no label', 'KUT_2': 'no label', 'LET_2': 'no label', 'MÄK_2': 'no label', 'KUK_2': 'no label', 'LEK_2': 'no label', 'Yhteensä_2': 'no label', });
lyr_Kattavaverkko_2.set('fieldLabels', {'fid': 'no label', 'primaryindex': 'no label', 'LINK_ID': 'no label', 'LINK_MMLID': 'no label', 'KUNTAKOODI': 'no label', 'HALLINN_LK': 'no label', 'TOIMINN_LK': 'no label', 'LINKKITYYP': 'no label', 'TIENUMERO': 'no label', 'TIEOSANRO': 'no label', 'AJORATA': 'no label', 'AET': 'no label', 'LET': 'no label', 'SILTA_ALIK': 'no label', 'AJOSUUNTA': 'no label', 'TIENIMI_SU': 'no label', 'TIENIMI_RU': 'no label', 'TIENIM_PSA': 'no label', 'TIENIM_KSA': 'no label', 'TIENIM_ISA': 'no label', 'ENS_TALO_O': 'no label', 'ENS_TALO_V': 'no label', 'VIIM_TAL_O': 'no label', 'VIIM_TAL_V': 'no label', 'MUOKKAUSPV': 'no label', 'SIJ_TARK': 'no label', 'KOR_TARK': 'no label', 'ALKU_PAALU': 'no label', 'LOPP_PAALU': 'no label', 'GEOM_FLIP': 'no label', 'LINK_TILA': 'no label', 'GEOM_LAHDE': 'no label', 'MTK_TIE_LK': 'no label', 'TIEN_KASVU': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Ydinverkko_3.set('fieldLabels', {'primaryind': 'hidden field', 'KUNTAKOODI': 'hidden field', 'EURTIENRO': 'header label - visible with data', 'ID': 'hidden field', 'ALKU_M': 'hidden field', 'LOPPU_M': 'hidden field', 'MUOKKAUSPV': 'hidden field', 'LINK_ID': 'hidden field', });
lyr_TENTsatamat_4.set('fieldLabels', {'TEN-T-satama': 'header label - always visible', 'Ydin/kattava': 'header label - always visible', 'Kunta': 'header label - always visible', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Lähde': 'hidden field', 'Muuta': 'hidden field', });
lyr_Tehtaat_5.set('fieldLabels', {'nro2015': 'hidden field', 'NETRS': 'hidden field', 'IETRS': 'hidden field', 'Tuotantolaitos': 'header label - always visible', 'Tuotsuunta': 'header label - always visible', 'Firma': 'hidden field', 'Tehdas': 'header label - always visible', 'Tyyppi': 'header label - always visible', 'Maakunta': 'hidden field', 'ELY-keskus': 'hidden field', });
lyr_Suunnitteilla_6.set('fieldLabels', {'fid': 'hidden field', 'Yritys': 'header label - always visible', 'Nimi': 'hidden field', 'Käyttövoima': 'header label - always visible', 'Kapasiteetti': 'header label - always visible', 'Teho kW': 'header label - always visible', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Tilanne': 'header label - always visible', 'Kunta': 'header label - always visible', 'Lisätietoja1': 'header label - visible with data', 'Lisätietoja2': 'hidden field', 'Lisätietoja3': 'hidden field', 'Linkki': 'header label - visible with data', 'Osoite': 'header label - visible with data', 'TEN-T': 'hidden field', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'hidden field', 'Lähde': 'hidden field', 'Muistiinpanot': 'hidden field', });
lyr_Rakenteilla_7.set('fieldLabels', {'fid': 'hidden field', 'Yritys': 'header label - always visible', 'Nimi': 'hidden field', 'Käyttövoima': 'header label - always visible', 'Kapasiteetti': 'header label - always visible', 'Teho kW': 'header label - always visible', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Tilanne': 'header label - always visible', 'Kunta': 'header label - always visible', 'Lisätietoja1': 'header label - visible with data', 'Lisätietoja2': 'hidden field', 'Lisätietoja3': 'hidden field', 'Linkki': 'header label - visible with data', 'Osoite': 'header label - visible with data', 'TEN-T': 'hidden field', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'hidden field', 'Lähde': 'hidden field', 'Muistiinpanot': 'hidden field', });
lyr_Toiminnassa_8.set('fieldLabels', {'fid': 'hidden field', 'Yritys': 'header label - always visible', 'Nimi': 'hidden field', 'Käyttövoima': 'header label - always visible', 'Kapasiteetti': 'header label - always visible', 'Teho kW': 'header label - always visible', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Tilanne': 'header label - always visible', 'Kunta': 'header label - always visible', 'Lisätietoja1': 'header label - visible with data', 'Lisätietoja2': 'hidden field', 'Lisätietoja3': 'hidden field', 'Linkki': 'header label - visible with data', 'Osoite': 'header label - visible with data', 'TEN-T': 'hidden field', 'Sijaitseeko latauskenttä korkeintaan kolmen kilometrin päässä vähintään kolmen kattavaan tieverkkoon kuuluvan maantien poistumisliittymästä?': 'hidden field', 'Lähde': 'hidden field', 'Muistiinpanot': 'hidden field', });
lyr_Toiminnassa_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});