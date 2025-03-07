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
                interactive: true,
                title: '<img src="styles/legend/Valtatiet_1.png" /> Valtatiet'
            });
var format_TENT_2 = new ol.format.GeoJSON();
var features_TENT_2 = format_TENT_2.readFeatures(json_TENT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TENT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TENT_2.addFeatures(features_TENT_2);
var lyr_TENT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TENT_2, 
                style: style_TENT_2,
                popuplayertitle: 'TEN-T ',
                interactive: true,
                title: '<img src="styles/legend/TENT_2.png" /> TEN-T '
            });
var format_Latauspaikat_3 = new ol.format.GeoJSON();
var features_Latauspaikat_3 = format_Latauspaikat_3.readFeatures(json_Latauspaikat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Latauspaikat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latauspaikat_3.addFeatures(features_Latauspaikat_3);
var lyr_Latauspaikat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latauspaikat_3, 
                style: style_Latauspaikat_3,
                popuplayertitle: 'Latauspaikat',
                interactive: true,
    title: 'Latauspaikat<br />\
    <img src="styles/legend/Latauspaikat_3_0.png" /> CEF-rahoituspäätös 2025<br />\
    <img src="styles/legend/Latauspaikat_3_1.png" /> EV tukipäätös 2024<br />\
    <img src="styles/legend/Latauspaikat_3_2.png" /> EV tukipäätös 2025<br />\
    <img src="styles/legend/Latauspaikat_3_3.png" /> Rakenteilla<br />\
    <img src="styles/legend/Latauspaikat_3_4.png" /> Toiminnassa<br />' });
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
    <img src="styles/legend/Tehtaat_4_1.png" /> Puutuoteteollisuus<br />\
    <img src="styles/legend/Tehtaat_4_2.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Valtatiet_1.setVisible(true);lyr_TENT_2.setVisible(true);lyr_Latauspaikat_3.setVisible(true);lyr_Tehtaat_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Valtatiet_1,lyr_TENT_2,lyr_Latauspaikat_3,lyr_Tehtaat_4];
lyr_Valtatiet_1.set('fieldAliases', {'fid': 'fid', 'primaryindex': 'primaryindex', 'LINK_ID': 'LINK_ID', 'LINK_MMLID': 'LINK_MMLID', 'KUNTAKOODI': 'KUNTAKOODI', 'HALLINN_LK': 'HALLINN_LK', 'TOIMINN_LK': 'TOIMINN_LK', 'LINKKITYYP': 'LINKKITYYP', 'TIENUMERO': 'TIENUMERO', 'TIEOSANRO': 'TIEOSANRO', 'AJORATA': 'AJORATA', 'AET': 'AET', 'LET': 'LET', 'SILTA_ALIK': 'SILTA_ALIK', 'AJOSUUNTA': 'AJOSUUNTA', 'TIENIMI_SU': 'TIENIMI_SU', 'TIENIMI_RU': 'TIENIMI_RU', 'TIENIM_PSA': 'TIENIM_PSA', 'TIENIM_KSA': 'TIENIM_KSA', 'TIENIM_ISA': 'TIENIM_ISA', 'ENS_TALO_O': 'ENS_TALO_O', 'ENS_TALO_V': 'ENS_TALO_V', 'VIIM_TAL_O': 'VIIM_TAL_O', 'VIIM_TAL_V': 'VIIM_TAL_V', 'MUOKKAUSPV': 'MUOKKAUSPV', 'SIJ_TARK': 'SIJ_TARK', 'KOR_TARK': 'KOR_TARK', 'ALKU_PAALU': 'ALKU_PAALU', 'LOPP_PAALU': 'LOPP_PAALU', 'GEOM_FLIP': 'GEOM_FLIP', 'LINK_TILA': 'LINK_TILA', 'GEOM_LAHDE': 'GEOM_LAHDE', 'MTK_TIE_LK': 'MTK_TIE_LK', 'TIEN_KASVU': 'TIEN_KASVU', });
lyr_TENT_2.set('fieldAliases', {'primaryind': 'primaryind', 'KUNTAKOODI': 'KUNTAKOODI', 'EURTIENRO': 'EURTIENRO', 'ID': 'ID', 'ALKU_M': 'ALKU_M', 'LOPPU_M': 'LOPPU_M', 'MUOKKAUSPV': 'MUOKKAUSPV', 'LINK_ID': 'LINK_ID', });
lyr_Latauspaikat_3.set('fieldAliases', {'fid': 'fid', 'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Kapasiteetti': 'Kapasiteetti', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Lisätietoja': 'Lisätietoja', 'Linkki': 'Linkki', 'Osoite': 'Osoite', });
lyr_Tehtaat_4.set('fieldAliases', {'nro2015': 'nro2015', 'NETRS': 'NETRS', 'IETRS': 'IETRS', 'Tuotantolaitos': 'Tuotantolaitos', 'Tuotsuunta': 'Tuotsuunta', 'Firma': 'Firma', 'Tehdas': 'Tehdas', 'Tyyppi': 'Tyyppi', 'Maakunta': 'Maakunta', 'ELY-keskus': 'ELY-keskus', });
lyr_Valtatiet_1.set('fieldImages', {'fid': 'TextEdit', 'primaryindex': 'TextEdit', 'LINK_ID': 'TextEdit', 'LINK_MMLID': 'TextEdit', 'KUNTAKOODI': 'Range', 'HALLINN_LK': 'Range', 'TOIMINN_LK': 'Range', 'LINKKITYYP': 'Range', 'TIENUMERO': 'TextEdit', 'TIEOSANRO': 'Range', 'AJORATA': 'Range', 'AET': 'Range', 'LET': 'Range', 'SILTA_ALIK': 'Range', 'AJOSUUNTA': 'Range', 'TIENIMI_SU': 'TextEdit', 'TIENIMI_RU': 'TextEdit', 'TIENIM_PSA': 'TextEdit', 'TIENIM_KSA': 'TextEdit', 'TIENIM_ISA': 'TextEdit', 'ENS_TALO_O': 'Range', 'ENS_TALO_V': 'Range', 'VIIM_TAL_O': 'Range', 'VIIM_TAL_V': 'Range', 'MUOKKAUSPV': 'TextEdit', 'SIJ_TARK': 'TextEdit', 'KOR_TARK': 'TextEdit', 'ALKU_PAALU': 'TextEdit', 'LOPP_PAALU': 'TextEdit', 'GEOM_FLIP': 'Range', 'LINK_TILA': 'Range', 'GEOM_LAHDE': 'Range', 'MTK_TIE_LK': 'Range', 'TIEN_KASVU': 'Range', });
lyr_TENT_2.set('fieldImages', {'primaryind': 'TextEdit', 'KUNTAKOODI': 'TextEdit', 'EURTIENRO': 'TextEdit', 'ID': 'TextEdit', 'ALKU_M': 'TextEdit', 'LOPPU_M': 'TextEdit', 'MUOKKAUSPV': 'TextEdit', 'LINK_ID': 'TextEdit', });
lyr_Latauspaikat_3.set('fieldImages', {'fid': 'TextEdit', 'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'Kapasiteetti': 'TextEdit', 'Teho kW': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Lisätietoja': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', });
lyr_Tehtaat_4.set('fieldImages', {'nro2015': 'Range', 'NETRS': 'TextEdit', 'IETRS': 'TextEdit', 'Tuotantolaitos': 'TextEdit', 'Tuotsuunta': 'TextEdit', 'Firma': 'TextEdit', 'Tehdas': 'TextEdit', 'Tyyppi': 'TextEdit', 'Maakunta': 'TextEdit', 'ELY-keskus': 'TextEdit', });
lyr_Valtatiet_1.set('fieldLabels', {'fid': 'no label', 'primaryindex': 'no label', 'LINK_ID': 'no label', 'LINK_MMLID': 'no label', 'KUNTAKOODI': 'no label', 'HALLINN_LK': 'no label', 'TOIMINN_LK': 'no label', 'LINKKITYYP': 'no label', 'TIENUMERO': 'no label', 'TIEOSANRO': 'no label', 'AJORATA': 'no label', 'AET': 'no label', 'LET': 'no label', 'SILTA_ALIK': 'no label', 'AJOSUUNTA': 'no label', 'TIENIMI_SU': 'no label', 'TIENIMI_RU': 'no label', 'TIENIM_PSA': 'no label', 'TIENIM_KSA': 'no label', 'TIENIM_ISA': 'no label', 'ENS_TALO_O': 'no label', 'ENS_TALO_V': 'no label', 'VIIM_TAL_O': 'no label', 'VIIM_TAL_V': 'no label', 'MUOKKAUSPV': 'no label', 'SIJ_TARK': 'no label', 'KOR_TARK': 'no label', 'ALKU_PAALU': 'no label', 'LOPP_PAALU': 'no label', 'GEOM_FLIP': 'no label', 'LINK_TILA': 'no label', 'GEOM_LAHDE': 'no label', 'MTK_TIE_LK': 'no label', 'TIEN_KASVU': 'no label', });
lyr_TENT_2.set('fieldLabels', {'primaryind': 'no label', 'KUNTAKOODI': 'no label', 'EURTIENRO': 'no label', 'ID': 'no label', 'ALKU_M': 'no label', 'LOPPU_M': 'no label', 'MUOKKAUSPV': 'no label', 'LINK_ID': 'no label', });
lyr_Latauspaikat_3.set('fieldLabels', {'fid': 'no label', 'Yritys': 'inline label - always visible', 'Nimi': 'inline label - always visible', 'Käyttövoima': 'inline label - always visible', 'Kapasiteetti': 'inline label - always visible', 'Teho kW': 'inline label - always visible', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Tilanne': 'inline label - always visible', 'Lisätietoja': 'hidden field', 'Linkki': 'hidden field', 'Osoite': 'inline label - always visible', });
lyr_Tehtaat_4.set('fieldLabels', {'nro2015': 'hidden field', 'NETRS': 'hidden field', 'IETRS': 'hidden field', 'Tuotantolaitos': 'inline label - always visible', 'Tuotsuunta': 'inline label - always visible', 'Firma': 'inline label - always visible', 'Tehdas': 'inline label - always visible', 'Tyyppi': 'inline label - always visible', 'Maakunta': 'hidden field', 'ELY-keskus': 'hidden field', });
lyr_Tehtaat_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});