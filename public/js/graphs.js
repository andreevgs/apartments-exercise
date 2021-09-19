const colors = {"Data1": '#186AA5', "Data2": '#0FA8E2', "Data3": '#98E3FE'};

const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
}

const randomizeGraph = () => {
    return {
        "Jan.": getRandom(1, 50),
        "Feb.": getRandom(1, 50),
        "Mar.": getRandom(1, 50),
        "Apr.": getRandom(1, 50),
        "May": getRandom(1, 50),
        "Jun.": getRandom(1, 50),
        "Jul.": getRandom(1, 50),
        "Aug.": getRandom(1, 50),
        "Sep.": getRandom(1, 50),
        "Oct.": getRandom(1, 50),
        "Nov.": getRandom(1, 50),
        "Dec.": getRandom(1, 50)
    }
}

const randomizePie = () => {
    return {
        "Data1": getRandom(1, 50),
        "Data2": getRandom(1, 50),
        "Data3": getRandom(1, 50)
    }
}

const drawCharts = (graphsData, pieData, pieColors) => {
    const graphsDataArray = []
    for (const [key, value] of Object.entries(graphsData)) {
        graphsDataArray.push({label: key, y: value})
    }
    const pieDataArray = []
    for (const [key, value] of Object.entries(pieData)) {
        const pieData = {
            y: value,
            name: key
        }
        if (pieColors && pieColors[key]) {
            pieData.color = pieColors[key];
        }
        pieDataArray.push(pieData)
    }

    const graphOptions = {
        dataPointWidth: 20,
        data: [
            {
                type: "column",
                color: "#186AA5",
                dataPoints: graphsDataArray
            }
        ]
    };

    const pieOptions = {
        legend:{
            horizontalAlign: "right",
            verticalAlign: "center"
        },
        data: [{
            type: "pie",
            showInLegend: true,
            toolTipContent: "<b>{name}</b>: #percent%",
            indexLabel: "{name}",
            legendText: "{name} (#percent%)",
            indexLabelPlacement: "inside",
            dataPoints: pieDataArray
        }]
    };

    $("#graph_container").CanvasJSChart(graphOptions);
    $("#pie_container").CanvasJSChart(pieOptions);
}

const getGraphs = (url) => {
    $.ajax({
        url: url,
        type: "POST",
        success: function(response) {
            drawCharts(response.bars, response.pie, colors);
        },
        error: function() {
            alert('Error getting data has occurred. Please, try again');
        }
    });
}

window.onload = function () {
    drawCharts(randomizeGraph(), randomizePie(), colors);
}