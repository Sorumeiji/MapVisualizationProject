const driveAlone = [];
const carPool = [];
const publicTransit = [];
const walkData = [];
var obj;

fetch('https://raw.githubusercontent.com/mysidewalk/interview/master/frontend-engineer/kc-tracts.json')
    .then(response => response.json()).then(data => obj = data).then(() => generateData(obj));

fetch('https://raw.githubusercontent.com/mysidewalk/interview/master/frontend-engineer/kc-neighborhoods.json')
    .then(response => response.json()).then(data => obj = data).then(() => generateData(obj)).then(() => displayChart());


function generateData(data) {
    for (var i = 0; i < data["features"].length; i++) {
        driveAlone.push(data["features"][i].properties["pop-commute-drive_alone"]);
        carPool.push(data["features"][i].properties["pop-commute-drive_carpool"]);
        publicTransit.push(data["features"][i].properties["pop-commute-public_transit"]);
        walkData.push(data["features"][i].properties["pop-commute-walk"]);
    }
}

function displayChart() {
    Highcharts.chart('container', {
        chart: {
            type: 'area'
        },
        accessibility: {
            description: 'Image description: An chart that displays data on different ways on how population commutes'
        },
        title: {
            text: 'Commuter population attributes'
        },
        subtitle: {
            text: 'Data taken from neighborhoods around the Kansas City Kansas Area'
        },
        xAxis: {
            allowDecimals: false,
            labels: {
                formatter: function () {
                    return this.value;
                }
            },
            accessibility: {
                rangeDescription: 'Range: 0k to 4k.'
            }
        },
        yAxis: {
            title: {
                text: 'Population'
            },
            labels: {
                formatter: function () {
                    return this.value / 1000 + 'k';
                }
            }
        },
        tooltip: {
            pointFormat: '{series.name}  <b>{point.y:,.0f}</b><br/>  {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 0,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 10,
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
            data: driveAlone
        },
        {
            name: 'Population of Commute by carpool',
            data: carPool
        },
        {
            name: 'Population of Commute by public transit',
            data: publicTransit
        }, {
            name: 'Population of Commute by walking',
            data: walkData
        }]
    })
};
