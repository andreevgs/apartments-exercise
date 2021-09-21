$('body').on('click', '#randomize_locally', (e) => {
    drawCharts(randomizeGraph(), randomizePie(), colors);
});

$('body').on('click', '#get_from_server', (e) => {
    getAndDrowGraphs('https://api.demoleap.com/exercise');
});

$('body').on('click', '#get_from_node', (e) => {
    getAndDrowGraphs('https://test-exercise-app.herokuapp.com/api/graphs');
});