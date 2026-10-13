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
                popuplayertitle: 'TEN-T satamat',
                interactive: true,
                title: '<img src="styles/legend/TENTsatamat_3.png" /> TEN-T satamat'
            });
var format_Tuotantolaitokset_4 = new ol.format.GeoJSON();
var features_Tuotantolaitokset_4 = format_Tuotantolaitokset_4.readFeatures(json_Tuotantolaitokset_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tuotantolaitokset_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tuotantolaitokset_4.addFeatures(features_Tuotantolaitokset_4);
var lyr_Tuotantolaitokset_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tuotantolaitokset_4, 
                style: style_Tuotantolaitokset_4,
                popuplayertitle: 'Tuotantolaitokset',
                interactive: true,
    title: 'Tuotantolaitokset<br />\
    <img src="styles/legend/Tuotantolaitokset_4_0.png" /> Massateollisuus<br />\
    <img src="styles/legend/Tuotantolaitokset_4_1.png" /> Puutuoteteollisuus<br />' });
var format_LBGrajoitettu_5 = new ol.format.GeoJSON();
var features_LBGrajoitettu_5 = format_LBGrajoitettu_5.readFeatures(json_LBGrajoitettu_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LBGrajoitettu_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBGrajoitettu_5.addFeatures(features_LBGrajoitettu_5);
var lyr_LBGrajoitettu_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LBGrajoitettu_5, 
                style: style_LBGrajoitettu_5,
                popuplayertitle: 'LBG - rajoitettu',
                interactive: true,
                title: '<img src="styles/legend/LBGrajoitettu_5.png" /> LBG - rajoitettu'
            });
var format_LBGsuunnitteilla_6 = new ol.format.GeoJSON();
var features_LBGsuunnitteilla_6 = format_LBGsuunnitteilla_6.readFeatures(json_LBGsuunnitteilla_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LBGsuunnitteilla_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBGsuunnitteilla_6.addFeatures(features_LBGsuunnitteilla_6);
var lyr_LBGsuunnitteilla_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LBGsuunnitteilla_6, 
                style: style_LBGsuunnitteilla_6,
                popuplayertitle: 'LBG - suunnitteilla',
                interactive: true,
                title: '<img src="styles/legend/LBGsuunnitteilla_6.png" /> LBG - suunnitteilla'
            });
var format_LBGtoiminnassa_7 = new ol.format.GeoJSON();
var features_LBGtoiminnassa_7 = format_LBGtoiminnassa_7.readFeatures(json_LBGtoiminnassa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LBGtoiminnassa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBGtoiminnassa_7.addFeatures(features_LBGtoiminnassa_7);
var lyr_LBGtoiminnassa_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LBGtoiminnassa_7, 
                style: style_LBGtoiminnassa_7,
                popuplayertitle: 'LBG - toiminnassa',
                interactive: true,
                title: '<img src="styles/legend/LBGtoiminnassa_7.png" /> LBG - toiminnassa'
            });
var format_HVOsuunnittteilla_8 = new ol.format.GeoJSON();
var features_HVOsuunnittteilla_8 = format_HVOsuunnittteilla_8.readFeatures(json_HVOsuunnittteilla_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HVOsuunnittteilla_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HVOsuunnittteilla_8.addFeatures(features_HVOsuunnittteilla_8);
var lyr_HVOsuunnittteilla_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HVOsuunnittteilla_8, 
                style: style_HVOsuunnittteilla_8,
                popuplayertitle: 'HVO - suunnittteilla',
                interactive: true,
                title: '<img src="styles/legend/HVOsuunnittteilla_8.png" /> HVO - suunnittteilla'
            });
var format_HVOtoiminnassa_9 = new ol.format.GeoJSON();
var features_HVOtoiminnassa_9 = format_HVOtoiminnassa_9.readFeatures(json_HVOtoiminnassa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HVOtoiminnassa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HVOtoiminnassa_9.addFeatures(features_HVOtoiminnassa_9);
var lyr_HVOtoiminnassa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HVOtoiminnassa_9, 
                style: style_HVOtoiminnassa_9,
                popuplayertitle: 'HVO - toiminnassa',
                interactive: true,
                title: '<img src="styles/legend/HVOtoiminnassa_9.png" /> HVO - toiminnassa'
            });
var format_Vetysuunnitteilla_10 = new ol.format.GeoJSON();
var features_Vetysuunnitteilla_10 = format_Vetysuunnitteilla_10.readFeatures(json_Vetysuunnitteilla_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vetysuunnitteilla_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vetysuunnitteilla_10.addFeatures(features_Vetysuunnitteilla_10);
var lyr_Vetysuunnitteilla_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vetysuunnitteilla_10, 
                style: style_Vetysuunnitteilla_10,
                popuplayertitle: 'Vety - suunnitteilla',
                interactive: true,
                title: '<img src="styles/legend/Vetysuunnitteilla_10.png" /> Vety - suunnitteilla'
            });
var format_Vetytoiminnassa_11 = new ol.format.GeoJSON();
var features_Vetytoiminnassa_11 = format_Vetytoiminnassa_11.readFeatures(json_Vetytoiminnassa_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vetytoiminnassa_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vetytoiminnassa_11.addFeatures(features_Vetytoiminnassa_11);
var lyr_Vetytoiminnassa_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vetytoiminnassa_11, 
                style: style_Vetytoiminnassa_11,
                popuplayertitle: 'Vety - toiminnassa',
                interactive: true,
                title: '<img src="styles/legend/Vetytoiminnassa_11.png" /> Vety - toiminnassa'
            });
var format_Shkrajoitettu_12 = new ol.format.GeoJSON();
var features_Shkrajoitettu_12 = format_Shkrajoitettu_12.readFeatures(json_Shkrajoitettu_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shkrajoitettu_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shkrajoitettu_12.addFeatures(features_Shkrajoitettu_12);
var lyr_Shkrajoitettu_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Shkrajoitettu_12, 
                style: style_Shkrajoitettu_12,
                popuplayertitle: 'Sähkö - rajoitettu',
                interactive: true,
                title: '<img src="styles/legend/Shkrajoitettu_12.png" /> Sähkö - rajoitettu'
            });
var format_Shksuunnitteilla_13 = new ol.format.GeoJSON();
var features_Shksuunnitteilla_13 = format_Shksuunnitteilla_13.readFeatures(json_Shksuunnitteilla_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shksuunnitteilla_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shksuunnitteilla_13.addFeatures(features_Shksuunnitteilla_13);
cluster_Shksuunnitteilla_13 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Shksuunnitteilla_13
});
var lyr_Shksuunnitteilla_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Shksuunnitteilla_13, 
                style: style_Shksuunnitteilla_13,
                popuplayertitle: 'Sähkö - suunnitteilla',
                interactive: true,
                title: '<img src="styles/legend/Shksuunnitteilla_13.png" /> Sähkö - suunnitteilla'
            });
var format_Shktoiminnassa_14 = new ol.format.GeoJSON();
var features_Shktoiminnassa_14 = format_Shktoiminnassa_14.readFeatures(json_Shktoiminnassa_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Shktoiminnassa_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shktoiminnassa_14.addFeatures(features_Shktoiminnassa_14);
cluster_Shktoiminnassa_14 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Shktoiminnassa_14
});
var lyr_Shktoiminnassa_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Shktoiminnassa_14, 
                style: style_Shktoiminnassa_14,
                popuplayertitle: 'Sähkö - toiminnassa',
                interactive: true,
                title: '<img src="styles/legend/Shktoiminnassa_14.png" /> Sähkö - toiminnassa'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_TENTKattavaverkko_1.setVisible(true);lyr_TENTYdinverkko_2.setVisible(true);lyr_TENTsatamat_3.setVisible(true);lyr_Tuotantolaitokset_4.setVisible(false);lyr_LBGrajoitettu_5.setVisible(true);lyr_LBGsuunnitteilla_6.setVisible(true);lyr_LBGtoiminnassa_7.setVisible(true);lyr_HVOsuunnittteilla_8.setVisible(true);lyr_HVOtoiminnassa_9.setVisible(true);lyr_Vetysuunnitteilla_10.setVisible(true);lyr_Vetytoiminnassa_11.setVisible(true);lyr_Shkrajoitettu_12.setVisible(true);lyr_Shksuunnitteilla_13.setVisible(true);lyr_Shktoiminnassa_14.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TENTKattavaverkko_1,lyr_TENTYdinverkko_2,lyr_TENTsatamat_3,lyr_Tuotantolaitokset_4,lyr_LBGrajoitettu_5,lyr_LBGsuunnitteilla_6,lyr_LBGtoiminnassa_7,lyr_HVOsuunnittteilla_8,lyr_HVOtoiminnassa_9,lyr_Vetysuunnitteilla_10,lyr_Vetytoiminnassa_11,lyr_Shkrajoitettu_12,lyr_Shksuunnitteilla_13,lyr_Shktoiminnassa_14];
lyr_TENTKattavaverkko_1.set('fieldAliases', {'fid': 'fid', 'primaryindex': 'primaryindex', 'LINK_ID': 'LINK_ID', 'LINK_MMLID': 'LINK_MMLID', 'KUNTAKOODI': 'KUNTAKOODI', 'HALLINN_LK': 'HALLINN_LK', 'TOIMINN_LK': 'TOIMINN_LK', 'LINKKITYYP': 'LINKKITYYP', 'TIENUMERO': 'TIENUMERO', 'TIEOSANRO': 'TIEOSANRO', 'AJORATA': 'AJORATA', 'AET': 'AET', 'LET': 'LET', 'SILTA_ALIK': 'SILTA_ALIK', 'AJOSUUNTA': 'AJOSUUNTA', 'TIENIMI_SU': 'TIENIMI_SU', 'TIENIMI_RU': 'TIENIMI_RU', 'TIENIM_PSA': 'TIENIM_PSA', 'TIENIM_KSA': 'TIENIM_KSA', 'TIENIM_ISA': 'TIENIM_ISA', 'ENS_TALO_O': 'ENS_TALO_O', 'ENS_TALO_V': 'ENS_TALO_V', 'VIIM_TAL_O': 'VIIM_TAL_O', 'VIIM_TAL_V': 'VIIM_TAL_V', 'MUOKKAUSPV': 'MUOKKAUSPV', 'SIJ_TARK': 'SIJ_TARK', 'KOR_TARK': 'KOR_TARK', 'ALKU_PAALU': 'ALKU_PAALU', 'LOPP_PAALU': 'LOPP_PAALU', 'GEOM_FLIP': 'GEOM_FLIP', 'LINK_TILA': 'LINK_TILA', 'GEOM_LAHDE': 'GEOM_LAHDE', 'MTK_TIE_LK': 'MTK_TIE_LK', 'TIEN_KASVU': 'TIEN_KASVU', 'layer': 'layer', 'path': 'path', });
lyr_TENTYdinverkko_2.set('fieldAliases', {'primaryind': 'primaryind', 'KUNTAKOODI': 'KUNTAKOODI', 'EURTIENRO': 'EURTIENRO', 'ID': 'ID', 'ALKU_M': 'ALKU_M', 'LOPPU_M': 'LOPPU_M', 'MUOKKAUSPV': 'MUOKKAUSPV', 'LINK_ID': 'LINK_ID', });
lyr_TENTsatamat_3.set('fieldAliases', {'TEN-T-satama': 'TEN-T-satama', 'Ydin/kattava': 'Ydin/kattava', 'Kunta': 'Kunta', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Lähde': 'Lähde', 'Muuta': 'Muuta', });
lyr_Tuotantolaitokset_4.set('fieldAliases', {'fid': 'fid', 'TL_NRO': 'TL_NRO', 'N_ERTS': 'N_ERTS', 'E_ERTS': 'E_ERTS', 'Tyyppi': 'Tyyppi', });
lyr_LBGrajoitettu_5.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Linkki': 'Linkki', 'Osoite': 'Osoite', });
lyr_LBGsuunnitteilla_6.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Linkki': 'Linkki', 'Osoite': 'Osoite', 'field_12': 'field_12', });
lyr_LBGtoiminnassa_7.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Linkki': 'Linkki', 'Osoite': 'Osoite', 'field_12': 'field_12', });
lyr_HVOsuunnittteilla_8.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Linkki': 'Linkki', 'Osoite': 'Osoite', });
lyr_HVOtoiminnassa_9.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Linkki': 'Linkki', 'Osoite': 'Osoite', 'field_12': 'field_12', });
lyr_Vetysuunnitteilla_10.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Linkki': 'Linkki', 'Osoite': 'Osoite', });
lyr_Vetytoiminnassa_11.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Linkki': 'Linkki', 'Osoite': 'Osoite', });
lyr_Shkrajoitettu_12.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Linkki': 'Linkki', 'Osoite': 'Osoite', });
lyr_Shksuunnitteilla_13.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Linkki': 'Linkki', 'Osoite': 'Osoite', });
lyr_Shktoiminnassa_14.set('fieldAliases', {'Yritys': 'Yritys', 'Nimi': 'Nimi', 'Käyttövoima': 'Käyttövoima', 'SijaintiN': 'SijaintiN', 'SijaintiE': 'SijaintiE', 'Tilanne': 'Tilanne', 'Kunta': 'Kunta', 'Lisätietoja1': 'Lisätietoja1', 'Lisätietoja2': 'Lisätietoja2', 'Linkki': 'Linkki', 'Osoite': 'Osoite', });
lyr_TENTKattavaverkko_1.set('fieldImages', {'fid': 'TextEdit', 'primaryindex': 'TextEdit', 'LINK_ID': 'TextEdit', 'LINK_MMLID': 'TextEdit', 'KUNTAKOODI': 'Range', 'HALLINN_LK': 'Range', 'TOIMINN_LK': 'Range', 'LINKKITYYP': 'Range', 'TIENUMERO': 'TextEdit', 'TIEOSANRO': 'Range', 'AJORATA': 'Range', 'AET': 'Range', 'LET': 'Range', 'SILTA_ALIK': 'Range', 'AJOSUUNTA': 'Range', 'TIENIMI_SU': 'TextEdit', 'TIENIMI_RU': 'TextEdit', 'TIENIM_PSA': 'TextEdit', 'TIENIM_KSA': 'TextEdit', 'TIENIM_ISA': 'TextEdit', 'ENS_TALO_O': 'Range', 'ENS_TALO_V': 'Range', 'VIIM_TAL_O': 'Range', 'VIIM_TAL_V': 'Range', 'MUOKKAUSPV': 'TextEdit', 'SIJ_TARK': 'TextEdit', 'KOR_TARK': 'TextEdit', 'ALKU_PAALU': 'TextEdit', 'LOPP_PAALU': 'TextEdit', 'GEOM_FLIP': 'Range', 'LINK_TILA': 'Range', 'GEOM_LAHDE': 'Range', 'MTK_TIE_LK': 'Range', 'TIEN_KASVU': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_TENTYdinverkko_2.set('fieldImages', {'primaryind': 'TextEdit', 'KUNTAKOODI': 'TextEdit', 'EURTIENRO': 'TextEdit', 'ID': 'TextEdit', 'ALKU_M': 'TextEdit', 'LOPPU_M': 'TextEdit', 'MUOKKAUSPV': 'TextEdit', 'LINK_ID': 'TextEdit', });
lyr_TENTsatamat_3.set('fieldImages', {'TEN-T-satama': 'TextEdit', 'Ydin/kattava': 'TextEdit', 'Kunta': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Lähde': 'TextEdit', 'Muuta': 'TextEdit', });
lyr_Tuotantolaitokset_4.set('fieldImages', {'fid': '', 'TL_NRO': '', 'N_ERTS': '', 'E_ERTS': '', 'Tyyppi': 'TextEdit', });
lyr_LBGrajoitettu_5.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Lisätietoja2': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', });
lyr_LBGsuunnitteilla_6.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Lisätietoja2': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', 'field_12': '', });
lyr_LBGtoiminnassa_7.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Lisätietoja2': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', 'field_12': '', });
lyr_HVOsuunnittteilla_8.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Lisätietoja2': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', });
lyr_HVOtoiminnassa_9.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Lisätietoja2': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', 'field_12': '', });
lyr_Vetysuunnitteilla_10.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Lisätietoja2': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', });
lyr_Vetytoiminnassa_11.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Lisätietoja2': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', });
lyr_Shkrajoitettu_12.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Lisätietoja2': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', });
lyr_Shksuunnitteilla_13.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Lisätietoja2': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', });
lyr_Shktoiminnassa_14.set('fieldImages', {'Yritys': 'TextEdit', 'Nimi': 'TextEdit', 'Käyttövoima': 'TextEdit', 'SijaintiN': 'TextEdit', 'SijaintiE': 'TextEdit', 'Tilanne': 'TextEdit', 'Kunta': 'TextEdit', 'Lisätietoja1': 'TextEdit', 'Lisätietoja2': 'TextEdit', 'Linkki': 'TextEdit', 'Osoite': 'TextEdit', });
lyr_TENTKattavaverkko_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'primaryindex': 'inline label - visible with data', 'LINK_ID': 'inline label - visible with data', 'LINK_MMLID': 'inline label - visible with data', 'KUNTAKOODI': 'inline label - visible with data', 'HALLINN_LK': 'inline label - visible with data', 'TOIMINN_LK': 'inline label - visible with data', 'LINKKITYYP': 'inline label - visible with data', 'TIENUMERO': 'inline label - visible with data', 'TIEOSANRO': 'inline label - visible with data', 'AJORATA': 'inline label - visible with data', 'AET': 'inline label - visible with data', 'LET': 'inline label - visible with data', 'SILTA_ALIK': 'inline label - visible with data', 'AJOSUUNTA': 'inline label - visible with data', 'TIENIMI_SU': 'inline label - visible with data', 'TIENIMI_RU': 'inline label - visible with data', 'TIENIM_PSA': 'inline label - visible with data', 'TIENIM_KSA': 'inline label - visible with data', 'TIENIM_ISA': 'inline label - visible with data', 'ENS_TALO_O': 'inline label - visible with data', 'ENS_TALO_V': 'inline label - visible with data', 'VIIM_TAL_O': 'inline label - visible with data', 'VIIM_TAL_V': 'inline label - visible with data', 'MUOKKAUSPV': 'inline label - visible with data', 'SIJ_TARK': 'inline label - visible with data', 'KOR_TARK': 'inline label - visible with data', 'ALKU_PAALU': 'inline label - visible with data', 'LOPP_PAALU': 'inline label - visible with data', 'GEOM_FLIP': 'inline label - visible with data', 'LINK_TILA': 'inline label - visible with data', 'GEOM_LAHDE': 'inline label - visible with data', 'MTK_TIE_LK': 'inline label - visible with data', 'TIEN_KASVU': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'inline label - visible with data', });
lyr_TENTYdinverkko_2.set('fieldLabels', {'primaryind': 'inline label - visible with data', 'KUNTAKOODI': 'inline label - visible with data', 'EURTIENRO': 'inline label - visible with data', 'ID': 'inline label - visible with data', 'ALKU_M': 'inline label - visible with data', 'LOPPU_M': 'inline label - visible with data', 'MUOKKAUSPV': 'inline label - visible with data', 'LINK_ID': 'inline label - visible with data', });
lyr_TENTsatamat_3.set('fieldLabels', {'TEN-T-satama': 'inline label - visible with data', 'Ydin/kattava': 'inline label - visible with data', 'Kunta': 'inline label - visible with data', 'SijaintiN': 'inline label - visible with data', 'SijaintiE': 'inline label - visible with data', 'Lähde': 'inline label - visible with data', 'Muuta': 'inline label - visible with data', });
lyr_Tuotantolaitokset_4.set('fieldLabels', {'fid': 'no label', 'TL_NRO': 'inline label - visible with data', 'N_ERTS': 'inline label - visible with data', 'E_ERTS': 'inline label - visible with data', 'Tyyppi': 'inline label - visible with data', });
lyr_LBGrajoitettu_5.set('fieldLabels', {'Yritys': 'inline label - visible with data', 'Nimi': 'inline label - visible with data', 'Käyttövoima': 'inline label - visible with data', 'SijaintiN': 'inline label - visible with data', 'SijaintiE': 'inline label - visible with data', 'Tilanne': 'inline label - visible with data', 'Kunta': 'inline label - visible with data', 'Lisätietoja1': 'inline label - visible with data', 'Lisätietoja2': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', });
lyr_LBGsuunnitteilla_6.set('fieldLabels', {'Yritys': 'inline label - visible with data', 'Nimi': 'inline label - visible with data', 'Käyttövoima': 'inline label - visible with data', 'SijaintiN': 'inline label - visible with data', 'SijaintiE': 'inline label - visible with data', 'Tilanne': 'inline label - visible with data', 'Kunta': 'inline label - visible with data', 'Lisätietoja1': 'inline label - visible with data', 'Lisätietoja2': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', 'field_12': 'no label', });
lyr_LBGtoiminnassa_7.set('fieldLabels', {'Yritys': 'inline label - visible with data', 'Nimi': 'inline label - visible with data', 'Käyttövoima': 'inline label - visible with data', 'SijaintiN': 'inline label - visible with data', 'SijaintiE': 'inline label - visible with data', 'Tilanne': 'inline label - visible with data', 'Kunta': 'inline label - visible with data', 'Lisätietoja1': 'inline label - visible with data', 'Lisätietoja2': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', 'field_12': 'no label', });
lyr_HVOsuunnittteilla_8.set('fieldLabels', {'Yritys': 'inline label - visible with data', 'Nimi': 'inline label - visible with data', 'Käyttövoima': 'inline label - visible with data', 'SijaintiN': 'inline label - visible with data', 'SijaintiE': 'inline label - visible with data', 'Tilanne': 'inline label - visible with data', 'Kunta': 'inline label - visible with data', 'Lisätietoja1': 'inline label - visible with data', 'Lisätietoja2': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', });
lyr_HVOtoiminnassa_9.set('fieldLabels', {'Yritys': 'inline label - visible with data', 'Nimi': 'inline label - visible with data', 'Käyttövoima': 'inline label - visible with data', 'SijaintiN': 'inline label - visible with data', 'SijaintiE': 'inline label - visible with data', 'Tilanne': 'inline label - visible with data', 'Kunta': 'inline label - visible with data', 'Lisätietoja1': 'inline label - visible with data', 'Lisätietoja2': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', 'field_12': 'no label', });
lyr_Vetysuunnitteilla_10.set('fieldLabels', {'Yritys': 'inline label - visible with data', 'Nimi': 'inline label - visible with data', 'Käyttövoima': 'inline label - visible with data', 'SijaintiN': 'inline label - visible with data', 'SijaintiE': 'inline label - visible with data', 'Tilanne': 'inline label - visible with data', 'Kunta': 'inline label - visible with data', 'Lisätietoja1': 'inline label - visible with data', 'Lisätietoja2': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', });
lyr_Vetytoiminnassa_11.set('fieldLabels', {'Yritys': 'inline label - visible with data', 'Nimi': 'inline label - visible with data', 'Käyttövoima': 'inline label - visible with data', 'SijaintiN': 'inline label - visible with data', 'SijaintiE': 'inline label - visible with data', 'Tilanne': 'inline label - visible with data', 'Kunta': 'inline label - visible with data', 'Lisätietoja1': 'inline label - visible with data', 'Lisätietoja2': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', });
lyr_Shkrajoitettu_12.set('fieldLabels', {'Yritys': 'inline label - visible with data', 'Nimi': 'inline label - visible with data', 'Käyttövoima': 'inline label - visible with data', 'SijaintiN': 'inline label - visible with data', 'SijaintiE': 'inline label - visible with data', 'Tilanne': 'inline label - visible with data', 'Kunta': 'inline label - visible with data', 'Lisätietoja1': 'inline label - visible with data', 'Lisätietoja2': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', });
lyr_Shksuunnitteilla_13.set('fieldLabels', {'Yritys': 'inline label - visible with data', 'Nimi': 'inline label - visible with data', 'Käyttövoima': 'inline label - visible with data', 'SijaintiN': 'inline label - visible with data', 'SijaintiE': 'inline label - visible with data', 'Tilanne': 'inline label - visible with data', 'Kunta': 'inline label - visible with data', 'Lisätietoja1': 'inline label - visible with data', 'Lisätietoja2': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', });
lyr_Shktoiminnassa_14.set('fieldLabels', {'Yritys': 'inline label - visible with data', 'Nimi': 'inline label - visible with data', 'Käyttövoima': 'inline label - visible with data', 'SijaintiN': 'inline label - visible with data', 'SijaintiE': 'inline label - visible with data', 'Tilanne': 'inline label - visible with data', 'Kunta': 'inline label - visible with data', 'Lisätietoja1': 'inline label - visible with data', 'Lisätietoja2': 'inline label - visible with data', 'Linkki': 'inline label - visible with data', 'Osoite': 'inline label - visible with data', });
lyr_Shktoiminnassa_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});