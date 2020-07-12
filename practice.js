let requestURL = 'https://raw.githubusercontent.com/mysidewalk/interview/master/frontend-engineer/kc-neighborhoods.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {

    const getResponse = request.response;


    var populatedriveAlone = function (jsonObj) {
        const driveAlone = new Array();
        for (var i = 0; i < jsonObj["features"].length; i++) {
            driveAlone.push(jsonObj.features[i].properties["pop-commute-drive_alone"]);
        }

        return driveAlone;
    }



    var populateDriveCarpool = function (jsonObj) {
        const carPool = new Array();
        for (var i = 0; i < jsonObj["features"].length; i++) {
            carPool.push(jsonObj.features[i].properties["pop-commute-drive_alone"]);
        }

        return carPool;
    };

    var populatePublicTransit = function (jsonObj) {
        const PublicTransit = new Array();
        for (var i = 0; i < jsonObj["features"].length; i++) {
            PublicTransit.push(jsonObj.features[i].properties["pop-commute-drive_alone"]);
        }

        return PublicTransit;
    };

    var populateWalkData = function (jsonObj) {
        const WalkData = new Array();
        for (var i = 0; i < jsonObj["features"].length; i++) {
            WalkData.push(jsonObj.features[i].properties["pop-commute-drive_alone"]);
        }

        return WalkData;
    };


    Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        accessibility: {
            description: ' '
        },
        title: {
            text: 'US and USSR nuclear stockpiles'
        },
        subtitle: {
            text: 'Sources: <a href="https://thebulletin.org/2006/july/global-nuclear-stockpiles-1945-2006">' +
                'thebulletin.org</a> &amp; <a href="https://www.armscontrol.org/factsheets/Nuclearweaponswhohaswhat">' +
                'armscontrol.org</a>'
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value; // clean, unformatted number for year
                }
            },
            accessibility: {
                rangeDescription: 'Range: 1940 to 2017.'
            }
        },
        yAxis: {
            title: {
                text: 'Nuclear weapon states'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Population of Commute by driving alone',
            data: populatedriveAlone(getResponse)
        },
        {
            name: 'Population of Commute by carpool',
            data: populateDriveCarpool(getResponse)
        },
        {
            name: 'Population of Commute by public transit',
            data: populatePublicTransit(getResponse)
        }, {
            name: 'Population of Commute by walking',
            data: populateWalkData(getResponse)
        }]
    })
};
