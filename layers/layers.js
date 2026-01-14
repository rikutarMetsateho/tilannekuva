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
var format_Tehtaat_3 = new ol.format.GeoJSON();
var features_Tehtaat_3 = format_Tehtaat_3.readFeatures(json_Tehtaat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tehtaat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tehtaat_3.addFeatures(features_Tehtaat_3);
var lyr_Tehtaat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tehtaat_3, 
                style: style_Tehtaat_3,
                popuplayertitle: 'Tehtaat',
                interactive: true,
    title: 'Tehtaat<br />\
    <img src="styles/legend/Tehtaat_3_0.png" /> Massateollisuus<br />\
    <img src="styles/legend/Tehtaat_3_1.png" /> Puutuoteteollisuus<br />' });
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
                popuplayertitle: 'TEN-T satamat',
                interactive: true,
                title: '<img src="styles/legend/TENTsatamat_4.png" /> TEN-T satamat'
            });
var format_LBGsuunnitteilla_5 = new ol.format.GeoJSON();
var features_LBGsuunnitteilla_5 = format_LBGsuunnitteilla_5.readFeatures(json_LBGsuunnitteilla_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LBGsuunnitteilla_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBGsuunnitteilla_5.addFeatures(features_LBGsuunnitteilla_5);
var lyr_LBGsuunnitteilla_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LBGsuunnitteilla_5, 
                style: style_LBGsuunnitteilla_5,
                popuplayertitle: 'LBG - suunnitteilla',
                interactive: true,
                title: '<img src="styles/legend/LBGsuunnitteilla_5.png" /> LBG - suunnitteilla'
            });
var format_LBGtoiminnassa_6 = new ol.format.GeoJSON();
var features_LBGtoiminnassa_6 = format_LBGtoiminnassa_6.readFeatures(json_LBGtoiminnassa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LBGtoiminnassa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBGtoiminnassa_6.addFeatures(features_LBGtoiminnassa_6);
var lyr_LBGtoiminnassa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LBGtoiminnassa_6, 
                style: style_LBGtoiminnassa_6,
                popuplayertitle: 'LBG - toiminnassa',
                interactive: true,
                title: '<img src="styles/legend/LBGtoiminnassa_6.png" /> LBG - toiminnassa'
            });
var format_HVOtoiminnassa_7 = new ol.format.GeoJSON();
var features_HVOtoiminnassa_7 = format_HVOtoiminnassa_7.readFeatures(json_HVOtoiminnassa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HVOtoiminnassa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HVOtoiminnassa_7.addFeatures(features_HVOtoiminnassa_7);
var lyr_HVOtoiminnassa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HVOtoiminnassa_7, 
                style: style_HVOtoiminnassa_7,
                popuplayertitle: 'HVO - toiminnassa',
                interactive: true,
                title: '<img src="styles/legend/HVOtoiminnassa_7.png" /> HVO - toiminnassa'
            });
var format_Shksuunnitteilla_8 = new ol.format.GeoJSON();
var features_Shksuunnitteilla_8 = format_Shksuunnitteilla_8.readFeatures(json_Shksuunnitteilla_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shksuunnitteilla_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shksuunnitteilla_8.addFeatures(features_Shksuunnitteilla_8);
cluster_Shksuunnitteilla_8 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Shksuunnitteilla_8
});
var lyr_Shksuunnitteilla_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Shksuunnitteilla_8, 
                style: style_Shksuunnitteilla_8,
                popuplayertitle: 'Sähkö - suunnitteilla',
                interactive: true,
                title: '<img src="styles/legend/Shksuunnitteilla_8.png" /> Sähkö - suunnitteilla'
            });
var format_Shktoiminnassa_9 = new ol.format.GeoJSON();
var features_Shktoiminnassa_9 = format_Shktoiminnassa_9.readFeatures(json_Shktoiminnassa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shktoiminnassa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shktoiminnassa_9.addFeatures(features_Shktoiminnassa_9);
cluster_Shktoiminnassa_9 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Shktoiminnassa_9
});
var lyr_Shktoiminnassa_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Shktoiminnassa_9, 
                style: style_Shktoiminnassa_9,
                popuplayertitle: 'Sähkö - toiminnassa',
                interactive: true,
                title: '<img src="styles/legend/Shktoiminnassa_9.png" /> Sähkö - toiminnassa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_TENTKattavaverkko_1.setVisible(true);lyr_TENTYdinverkko_2.setVisible(true);lyr_Tehtaat_3.setVisible(false);lyr_TENTsatamat_4.setVisible(true);lyr_LBGsuunnitteilla_5.setVisible(true);lyr_LBGtoiminnassa_6.setVisible(true);lyr_HVOtoiminnassa_7.setVisible(true);lyr_Shksuunnitteilla_8.setVisible(true);lyr_Shktoiminnassa_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TENTKattavaverkko_1,lyr_TENTYdinverkko_2,lyr_Tehtaat_3,lyr_TENTsatamat_4,lyr_LBGsuunnitteilla_5,lyr_LBGtoiminnassa_6,lyr_HVOtoiminnassa_7,lyr_Shksuunnitteilla_8,lyr_Shktoiminnassa_9];
lyr_TENTKattavaverkko_1.set('fieldAliases', {'fid': 'fid', 'primaryindex': 'primaryindex', 'LINK_ID': 'LINK_ID', 'LINK_MMLID': 'LINK_MMLID', 'KUNTAKOODI': 'KUNTAKOODI', 'HALLINN_LK': 'HALLINN_LK', 'TOIMINN_LK': 'TOIMINN_LK', 'LINKKITYYP': 'LINKKITYYP', 'TIENUMERO': 'TIENUMERO', 'TIEOSANRO': 'TIEOSANRO', 'AJORATA': 'AJORATA', 'AET': 'AET', 'LET': 'LET', 'SILTA_ALIK': 'SILTA_ALIK', 'AJOSUUNTA': 'AJOSUUNTA', 'TIENIMI_SU': 'TIENIMI_SU', 'TIENIMI_RU': 'TIENIMI_RU', 'TIENIM_PSA': 'TIENIM_PSA', 'TIENIM_KSA': 'TIENIM_KSA', 'TIENIM_ISA': 'TIENIM_ISA', 'ENS_TALO_O': 'ENS_TALO_O', 'ENS_TALO_V': 'ENS_TALO_V', 'VIIM_TAL_O': 'VIIM_TAL_O', 'VIIM_TAL_V': 'VIIM_TAL_V', 'MUOKKAUSPV': 'MUOKKAUSPV', 'SIJ_TARK': 'SIJ_TARK', 'KOR_TARK': 'KOR_TARK', 'ALKU_PAALU': 'ALKU_PAALU', 'LOPP_PAALU': 'LOPP_PAALU', 'GEOM_FLIP': 'GEOM_FLIP', 'LINK_TILA': 'LINK_TILA', 'GEOM_LAHDE': 'GEOM_LAHDE', 'MTK_TIE_LK': 'MTK_TIE_LK', 'TIEN_KASVU': 'TIEN_KASVU', 'layer': 'layer', 'path': 'path', });
lyr_TENTYdinverkko_2.set('fieldAliases', {'primaryind': 'primaryind', 'KUNTAKOODI': 'KUNTAKOODI', 'EURTIENRO': 'EURTIENRO', 'ID': 'ID', 'ALKU_M': 'ALKU_M', 'LOPPU_M': 'LOPPU_M', 'MUOKKAUSPV': 'MUOKKAUSPV', 'LINK_ID': 'LINK_ID', });
lyr_Tehtaat_3.set('fieldAliases', {'nro2015': 'nro2015', 'NETRS': 'NETRS', 'IETRS': 'IETRS', 'Tuotantolaitos': 'Tuotantolaitos', 'Tuotsuunta': 'Tuotsuunta', 'Firma': 'Firma', 'Tehdas': 'Tehdas', 'Tyyppi': 'Tyyppi', 'Maakunta': 'Maakunta', 'ELY-keskus': 'ELY-keskus', });
lyr_TENTsatamat_4.set('fieldAliases', {'TEN-T-satama': 'TEN-T-satama', 'Ydin/kattava': 'Ydin/kattava', 'Kunta': 'Kunta', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Lähde': 'Lähde', 'Muuta': 'Muuta', });
lyr_LBGsuunnitteilla_5.set('fieldAliases', {'fid': 'fid', 'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Linkki': 'Linkki', 'Osoite': 'Osoite', });
lyr_LBGtoiminnassa_6.set('fieldAliases', {'fid': 'fid', 'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Linkki': 'Linkki', 'Osoite': 'Osoite', });
lyr_HVOtoiminnassa_7.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Linkki': 'Linkki', 'Osoite': 'Osoite', });
lyr_Shksuunnitteilla_8.set('fieldAliases', {'fid': 'fid', 'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Linkki': 'Linkki', 'Osoite': 'Osoite', 'field_12': 'field_12', });
lyr_Shktoiminnassa_9.set('fieldAliases', {'fid': 'fid', 'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'Teho kW': 'Teho kW', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Linkki': 'Linkki', 'Osoite': 'Osoite', 'field_12': 'field_12', });
lyr_TENTKattavaverkko_1.set('fieldImages', {'fid': 'TextEdit', 'primaryindex': 'TextEdit', 'LINK_ID': 'TextEdit', 'LINK_MMLID': 'TextEdit', 'KUNTAKOODI': 'Range', 'HALLINN_LK': 'Range', 'TOIMINN_LK': 'Range', 'LINKKITYYP': 'Range', 'TIENUMERO': 'TextEdit', 'TIEOSANRO': 'Range', 'AJORATA': 'Range', 'AET': 'Range', 'LET': 'Range', 'SILTA_ALIK': 'Range', 'AJOSUUNTA': 'Range', 'TIENIMI_SU': 'TextEdit', 'TIENIMI_RU': 'TextEdit', 'TIENIM_PSA': 'TextEdit', 'TIENIM_KSA': 'TextEdit', 'TIENIM_ISA': 'TextEdit', 'ENS_TALO_O': 'Range', 'ENS_TALO_V': 'Range', 'VIIM_TAL_O': 'Range', 'VIIM_TAL_V': 'Range', 'MUOKKAUSPV': 'TextEdit', 'SIJ_TARK': 'TextEdit', 'KOR_TARK': 'TextEdit', 'ALKU_PAALU': 'TextEdit', 'LOPP_PAALU': 'TextEdit', 'GEOM_FLIP': 'Range', 'LINK_TILA': 'Range', 'GEOM_LAHDE': 'Range', 'MTK_TIE_LK': 'Range', 'TIEN_KASVU': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_TENTYdinverkko_2.set('fieldImages', {'primaryind': 'TextEdit', 'KUNTAKOODI': 'TextEdit', 'EURTIENRO': 'TextEdit', 'ID': 'TextEdit', 'ALKU_M': 'TextEdit', 'LOPPU_M': 'TextEdit', 'MUOKKAUSPV': 'TextEdit', 'LINK_ID': 'TextEdit', });
lyr_Tehtaat_3.set('fieldImages', {'nro2015': 'Range', 'NETRS': 'TextEdit', 'IETRS': 'TextEdit', 'Tuotantolaitos': 'TextEdit', 'Tuotsuunta': 'TextEdit', 'Firma': 'TextEdit', 'Tehdas': 'TextEdit', 'Tyyppi': 'TextEdit', 'Maakunta': 'TextEdit', 'ELY-keskus': 'TextEdit', });
lyr_TENTsatamat_4.set('fieldImages', {'TEN-T-satama': 'TextEdit', 'Ydin/kattava': 'TextEdit', 'Kunta': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Lähde': 'TextEdit', 'Muuta': 'TextEdit', });
lyr_LBGsuunnitteilla_5.set('fieldImages', {'fid': 'TextEdit', 'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'Teho kW': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', });
lyr_LBGtoiminnassa_6.set('fieldImages', {'fid': '', 'Yritys': '', 'Nimi': '', 'Käyttövoima': '', 'Teho kW': '', 'SijaintiN': '', 'SijaintiE': '', 'Tilanne': '', 'Kunta': '', 'Lisätietoja1': '', 'Linkki': '', 'Osoite': '', });
lyr_HVOtoiminnassa_7.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'Teho kW': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Lisätietoja2': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', });
lyr_Shksuunnitteilla_8.set('fieldImages', {'fid': 'TextEdit', 'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'Teho kW': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', 'field_12': 'TextEdit', });
lyr_Shktoiminnassa_9.set('fieldImages', {'fid': 'TextEdit', 'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'Teho kW': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', 'field_12': 'TextEdit', });
lyr_TENTKattavaverkko_1.set('fieldLabels', {'fid': 'no label', 'primaryindex': 'no label', 'LINK_ID': 'no label', 'LINK_MMLID': 'no label', 'KUNTAKOODI': 'no label', 'HALLINN_LK': 'no label', 'TOIMINN_LK': 'no label', 'LINKKITYYP': 'no label', 'TIENUMERO': 'no label', 'TIEOSANRO': 'no label', 'AJORATA': 'no label', 'AET': 'no label', 'LET': 'no label', 'SILTA_ALIK': 'no label', 'AJOSUUNTA': 'no label', 'TIENIMI_SU': 'no label', 'TIENIMI_RU': 'no label', 'TIENIM_PSA': 'no label', 'TIENIM_KSA': 'no label', 'TIENIM_ISA': 'no label', 'ENS_TALO_O': 'no label', 'ENS_TALO_V': 'no label', 'VIIM_TAL_O': 'no label', 'VIIM_TAL_V': 'no label', 'MUOKKAUSPV': 'no label', 'SIJ_TARK': 'no label', 'KOR_TARK': 'no label', 'ALKU_PAALU': 'no label', 'LOPP_PAALU': 'no label', 'GEOM_FLIP': 'no label', 'LINK_TILA': 'no label', 'GEOM_LAHDE': 'no label', 'MTK_TIE_LK': 'no label', 'TIEN_KASVU': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TENTYdinverkko_2.set('fieldLabels', {'primaryind': 'hidden field', 'KUNTAKOODI': 'hidden field', 'EURTIENRO': 'header label - visible with data', 'ID': 'hidden field', 'ALKU_M': 'hidden field', 'LOPPU_M': 'hidden field', 'MUOKKAUSPV': 'hidden field', 'LINK_ID': 'hidden field', });
lyr_Tehtaat_3.set('fieldLabels', {'nro2015': 'hidden field', 'NETRS': 'hidden field', 'IETRS': 'hidden field', 'Tuotantolaitos': 'hidden field', 'Tuotsuunta': 'hidden field', 'Firma': 'hidden field', 'Tehdas': 'hidden field', 'Tyyppi': 'header label - visible with data', 'Maakunta': 'hidden field', 'ELY-keskus': 'hidden field', });
lyr_TENTsatamat_4.set('fieldLabels', {'TEN-T-satama': 'inline label - visible with data', 'Ydin/kattava': 'inline label - visible with data', 'Kunta': 'inline label - visible with data', 'SijaintiN': 'no label', 'SijaintiE': 'no label', 'Lähde': 'no label', 'Muuta': 'no label', });
lyr_LBGsuunnitteilla_5.set('fieldLabels', {'fid': 'hidden field', 'Yritys': 'inline label - visible with data', 'Nimi': 'inline label - visible with data', 'Käyttövoima': 'inline label - visible with data', 'Teho kW': 'inline label - visible with data', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Tilanne': 'inline label - visible with data', 'Kunta': 'hidden field', 'Lisätietoja1': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', });
lyr_LBGtoiminnassa_6.set('fieldLabels', {'fid': 'hidden field', 'Yritys': 'inline label - visible with data', 'Nimi': 'inline label - visible with data', 'Käyttövoima': 'inline label - visible with data', 'Teho kW': 'hidden field', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Tilanne': 'inline label - visible with data', 'Kunta': 'hidden field', 'Lisätietoja1': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', });
lyr_HVOtoiminnassa_7.set('fieldLabels', {'Yritys': 'inline label - visible with data', 'Nimi': 'inline label - visible with data', 'Käyttövoima': 'inline label - visible with data', 'Teho kW': 'hidden field', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Tilanne': 'inline label - visible with data', 'Kunta': 'hidden field', 'Lisätietoja1': 'inline label - visible with data', 'Lisätietoja2': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', });
lyr_Shksuunnitteilla_8.set('fieldLabels', {'fid': 'hidden field', 'Yritys': 'inline label - visible with data', 'Nimi': 'hidden field', 'Käyttövoima': 'inline label - visible with data', 'Teho kW': 'hidden field', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Tilanne': 'inline label - visible with data', 'Kunta': 'hidden field', 'Lisätietoja1': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', 'field_12': 'hidden field', });
lyr_Shktoiminnassa_9.set('fieldLabels', {'fid': 'hidden field', 'Yritys': 'inline label - visible with data', 'Nimi': 'inline label - visible with data', 'Käyttövoima': 'inline label - visible with data', 'Teho kW': 'inline label - visible with data', 'SijaintiN': 'hidden field', 'SijaintiE': 'hidden field', 'Tilanne': 'inline label - visible with data', 'Kunta': 'hidden field', 'Lisätietoja1': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', 'field_12': 'hidden field', });
lyr_Shktoiminnassa_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});