$('body').on('click', '#randomize_locally', (e) => {
    drawCharts(randomizeGraph(), randomizePie(), colors);
});

$('body').on('click', '#get_from_server', (e) => {
    getGraphs('https://api.demoleap.com/exercise');
});

$('body').on('click', '#get_from_node', (e) => {
    getGraphs('http://localhost:3000/api/graphs');
});