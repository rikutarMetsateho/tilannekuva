var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TENTKattavaverkko_1 = new ol.format.GeoJSON();
var features_TENTKattavaverkko_1 = format_TENTKattavaverkko_1.readFeatures(json_TENTKattavaverkko_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TENTKattavaverkko_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TENTKattavaverkko_1.addFeatures(features_TENTKattavaverkko_1);
var lyr_TENTKattavaverkko_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TENTKattavaverkko_1, 
                style: style_TENTKattavaverkko_1,
                popuplayertitle: 'TEN-T-Kattava verkko',
                interactive: false,
                title: '<img src="styles/legend/TENTKattavaverkko_1.png" /> TEN-T-Kattava verkko'
            });
var format_TENTYdinverkko_2 = new ol.format.GeoJSON();
var features_TENTYdinverkko_2 = format_TENTYdinverkko_2.readFeatures(json_TENTYdinverkko_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TENTYdinverkko_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TENTYdinverkko_2.addFeatures(features_TENTYdinverkko_2);
var lyr_TENTYdinverkko_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TENTYdinverkko_2, 
                style: style_TENTYdinverkko_2,
                popuplayertitle: 'TEN-T-Ydinverkko',
                interactive: false,
                title: '<img src="styles/legend/TENTYdinverkko_2.png" /> TEN-T-Ydinverkko'
            });
var format_TENTsatamat_3 = new ol.format.GeoJSON();
var features_TENTsatamat_3 = format_TENTsatamat_3.readFeatures(json_TENTsatamat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TENTsatamat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TENTsatamat_3.addFeatures(features_TENTsatamat_3);
var lyr_TENTsatamat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TENTsatamat_3, 
                style: style_TENTsatamat_3,
                popuplayertitle: 'TEN-T-satamat',
                interactive: true,
                title: '<img src="styles/legend/TENTsatamat_3.png" /> TEN-T-satamat'
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
var format_HVO_5 = new ol.format.GeoJSON();
var features_HVO_5 = format_HVO_5.readFeatures(json_HVO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HVO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HVO_5.addFeatures(features_HVO_5);
var lyr_HVO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HVO_5, 
                style: style_HVO_5,
                popuplayertitle: 'HVO',
                interactive: true,
                title: '<img src="styles/legend/HVO_5.png" /> HVO'
            });
var format_Shk_6 = new ol.format.GeoJSON();
var features_Shk_6 = format_Shk_6.readFeatures(json_Shk_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shk_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shk_6.addFeatures(features_Shk_6);
var lyr_Shk_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shk_6, 
                style: style_Shk_6,
                popuplayertitle: 'Sähkö',
                interactive: true,
                title: '<img src="styles/legend/Shk_6.png" /> Sähkö'
            });
var format_LBG_7 = new ol.format.GeoJSON();
var features_LBG_7 = format_LBG_7.readFeatures(json_LBG_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LBG_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBG_7.addFeatures(features_LBG_7);
var lyr_LBG_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LBG_7, 
                style: style_LBG_7,
                popuplayertitle: 'LBG',
                interactive: true,
                title: '<img src="styles/legend/LBG_7.png" /> LBG'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_TENTKattavaverkko_1.setVisible(true);lyr_TENTYdinverkko_2.setVisible(true);lyr_TENTsatamat_3.setVisible(true);lyr_Tehtaat_4.setVisible(true);lyr_HVO_5.setVisible(true);lyr_Shk_6.setVisible(true);lyr_LBG_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TENTKattavaverkko_1,lyr_TENTYdinverkko_2,lyr_TENTsatamat_3,lyr_Tehtaat_4,lyr_HVO_5,lyr_Shk_6,lyr_LBG_7];
lyr_TENTKattavaverkko_1.set('fieldAliases', {'fid': 'fid', 'primaryindex': 'primaryindex', 'LINK_ID': 'LINK_ID', 'LINK_MMLID': 'LINK_MMLID', 'KUNTAKOODI': 'KUNTAKOODI', 'HALLINN_LK': 'HALLINN_LK', 'TOIMINN_LK': 'TOIMINN_LK', 'LINKKITYYP': 'LINKKITYYP', 'TIENUMERO': 'TIENUMERO', 'TIEOSANRO': 'TIEOSANRO', 'AJORATA': 'AJORATA', 'AET': 'AET', 'LET': 'LET', 'SILTA_ALIK': 'SILTA_ALIK', 'AJOSUUNTA': 'AJOSUUNTA', 'TIENIMI_SU': 'TIENIMI_SU', 'TIENIMI_RU': 'TIENIMI_RU', 'TIENIM_PSA': 'TIENIM_PSA', 'TIENIM_KSA': 'TIENIM_KSA', 'TIENIM_ISA': 'TIENIM_ISA', 'ENS_TALO_O': 'ENS_TALO_O', 'ENS_TALO_V': 'ENS_TALO_V', 'VIIM_TAL_O': 'VIIM_TAL_O', 'VIIM_TAL_V': 'VIIM_TAL_V', 'MUOKKAUSPV': 'MUOKKAUSPV', 'SIJ_TARK': 'SIJ_TARK', 'KOR_TARK': 'KOR_TARK', 'ALKU_PAALU': 'ALKU_PAALU', 'LOPP_PAALU': 'LOPP_PAALU', 'GEOM_FLIP': 'GEOM_FLIP', 'LINK_TILA': 'LINK_TILA', 'GEOM_LAHDE': 'GEOM_LAHDE', 'MTK_TIE_LK': 'MTK_TIE_LK', 'TIEN_KASVU': 'TIEN_KASVU', 'layer': 'layer', 'path': 'path', });
lyr_TENTYdinverkko_2.set('fieldAliases', {'primaryind': 'primaryind', 'KUNTAKOODI': 'KUNTAKOODI', 'EURTIENRO': 'EURTIENRO', 'ID': 'ID', 'ALKU_M': 'ALKU_M', 'LOPPU_M': 'LOPPU_M', 'MUOKKAUSPV': 'MUOKKAUSPV', 'LINK_ID': 'LINK_ID', });
lyr_TENTsatamat_3.set('fieldAliases', {'TEN-T-satama': 'TEN-T-satama', 'Ydin/kattava': 'Ydin/kattava', 'Kunta': 'Kunta', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Lähde': 'Lähde', 'Muuta': 'Muuta', });
lyr_Tehtaat_4.set('fieldAliases', {'nro2015': 'nro2015', 'NETRS': 'NETRS', 'IETRS': 'IETRS', 'Tuotantolaitos': 'Tuotantolaitos', 'Tuotsuunta': 'Tuotsuunta', 'Firma': 'Firma', 'Tehdas': 'Tehdas', 'Tyyppi': 'Tyyppi', 'Maakunta': 'Maakunta', 'ELY-keskus': 'ELY-keskus', });
lyr_HVO_5.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Linkki': 'Linkki', 'Osoite': 'Osoite', });
lyr_Shk_6.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Linkki': 'Linkki', 'Osoite': 'Osoite', 'field_12': 'field_12', });
lyr_LBG_7.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Linkki': 'Linkki', 'Osoite': 'Osoite', });
lyr_TENTKattavaverkko_1.set('fieldImages', {'fid': 'TextEdit', 'primaryindex': 'TextEdit', 'LINK_ID': 'TextEdit', 'LINK_MMLID': 'TextEdit', 'KUNTAKOODI': 'Range', 'HALLINN_LK': 'Range', 'TOIMINN_LK': 'Range', 'LINKKITYYP': 'Range', 'TIENUMERO': 'TextEdit', 'TIEOSANRO': 'Range', 'AJORATA': 'Range', 'AET': 'Range', 'LET': 'Range', 'SILTA_ALIK': 'Range', 'AJOSUUNTA': 'Range', 'TIENIMI_SU': 'TextEdit', 'TIENIMI_RU': 'TextEdit', 'TIENIM_PSA': 'TextEdit', 'TIENIM_KSA': 'TextEdit', 'TIENIM_ISA': 'TextEdit', 'ENS_TALO_O': 'Range', 'ENS_TALO_V': 'Range', 'VIIM_TAL_O': 'Range', 'VIIM_TAL_V': 'Range', 'MUOKKAUSPV': 'TextEdit', 'SIJ_TARK': 'TextEdit', 'KOR_TARK': 'TextEdit', 'ALKU_PAALU': 'TextEdit', 'LOPP_PAALU': 'TextEdit', 'GEOM_FLIP': 'Range', 'LINK_TILA': 'Range', 'GEOM_LAHDE': 'Range', 'MTK_TIE_LK': 'Range', 'TIEN_KASVU': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_TENTYdinverkko_2.set('fieldImages', {'primaryind': 'TextEdit', 'KUNTAKOODI': 'TextEdit', 'EURTIENRO': 'TextEdit', 'ID': 'TextEdit', 'ALKU_M': 'TextEdit', 'LOPPU_M': 'TextEdit', 'MUOKKAUSPV': 'TextEdit', 'LINK_ID': 'TextEdit', });
lyr_TENTsatamat_3.set('fieldImages', {'TEN-T-satama': 'TextEdit', 'Ydin/kattava': 'TextEdit', 'Kunta': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Lähde': 'TextEdit', 'Muuta': 'TextEdit', });
lyr_Tehtaat_4.set('fieldImages', {'nro2015': 'Range', 'NETRS': 'TextEdit', 'IETRS': 'TextEdit', 'Tuotantolaitos': 'TextEdit', 'Tuotsuunta': 'TextEdit', 'Firma': 'TextEdit', 'Tehdas': 'TextEdit', 'Tyyppi': 'TextEdit', 'Maakunta': 'TextEdit', 'ELY-keskus': 'TextEdit', });
lyr_HVO_5.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'Teho kW': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Lisätietoja2': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', });
lyr_Shk_6.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'Teho kW': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', 'field_12': 'TextEdit', });
lyr_LBG_7.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'Teho kW': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', });
lyr_TENTKattavaverkko_1.set('fieldLabels', {'fid': 'no label', 'primaryindex': 'no label', 'LINK_ID': 'no label', 'LINK_MMLID': 'no label', 'KUNTAKOODI': 'no label', 'HALLINN_LK': 'no label', 'TOIMINN_LK': 'no label', 'LINKKITYYP': 'no label', 'TIENUMERO': 'no label', 'TIEOSANRO': 'no label', 'AJORATA': 'no label', 'AET': 'no label', 'LET': 'no label', 'SILTA_ALIK': 'no label', 'AJOSUUNTA': 'no label', 'TIENIMI_SU': 'no label', 'TIENIMI_RU': 'no label', 'TIENIM_PSA': 'no label', 'TIENIM_KSA': 'no label', 'TIENIM_ISA': 'no label', 'ENS_TALO_O': 'no label', 'ENS_TALO_V': 'no label', 'VIIM_TAL_O': 'no label', 'VIIM_TAL_V': 'no label', 'MUOKKAUSPV': 'no label', 'SIJ_TARK': 'no label', 'KOR_TARK': 'no label', 'ALKU_PAALU': 'no label', 'LOPP_PAALU': 'no label', 'GEOM_FLIP': 'no label', 'LINK_TILA': 'no label', 'GEOM_LAHDE': 'no label', 'MTK_TIE_LK': 'no label', 'TIEN_KASVU': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TENTYdinverkko_2.set('fieldLabels', {'primaryind': 'hidden field', 'KUNTAKOODI': 'hidden field', 'EURTIENRO': 'header label - visible with data', 'ID': 'hidden field', 'ALKU_M': 'hidden field', 'LOPPU_M': 'hidden field', 'MUOKKAUSPV': 'hidden field', 'LINK_ID': 'hidden field', });
lyr_TENTsatamat_3.set('fieldLabels', {'TEN-T-satama': 'header label - always visible', 'Ydin/kattava': 'header label - always visible', 'Kunta': 'header label - always visible', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Lähde': 'hidden field', 'Muuta': 'hidden field', });
lyr_Tehtaat_4.set('fieldLabels', {'nro2015': 'hidden field', 'NETRS': 'hidden field', 'IETRS': 'hidden field', 'Tuotantolaitos': 'hidden field', 'Tuotsuunta': 'hidden field', 'Firma': 'hidden field', 'Tehdas': 'hidden field', 'Tyyppi': 'header label - visible with data', 'Maakunta': 'hidden field', 'ELY-keskus': 'hidden field', });
lyr_HVO_5.set('fieldLabels', {'Yritys': 'no label', 'Nimi': 'no label', 'Käyttövoima': 'no label', 'Teho kW': 'no label', 'SijaintiN': 'no label', 'SijaintiE': 'no label', 'Tilanne': 'no label', 'Kunta': 'no label', 'Lisätietoja1': 'no label', 'Lisätietoja2': 'no label', 'Linkki': 'no label', 'Osoite': 'no label', });
lyr_Shk_6.set('fieldLabels', {'Yritys': 'no label', 'Nimi': 'no label', 'Käyttövoima': 'no label', 'Teho kW': 'no label', 'SijaintiN': 'no label', 'SijaintiE': 'no label', 'Tilanne': 'no label', 'Kunta': 'no label', 'Lisätietoja1': 'no label', 'Linkki': 'no label', 'Osoite': 'no label', 'field_12': 'no label', });
lyr_LBG_7.set('fieldLabels', {'Yritys': 'no label', 'Nimi': 'no label', 'Käyttövoima': 'no label', 'Teho kW': 'no label', 'SijaintiN': 'no label', 'SijaintiE': 'no label', 'Tilanne': 'no label', 'Kunta': 'no label', 'Lisätietoja1': 'no label', 'Linkki': 'no label', 'Osoite': 'no label', });
lyr_LBG_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});