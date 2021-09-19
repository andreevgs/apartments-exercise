const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
};

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
    };
};

const randomizePie = () => {
    return {
        "Data1": getRandom(1, 50),
        "Data2": getRandom(1, 50),
        "Data3": getRandom(1, 50)
    };
};

exports.getGraphs = (req, res) => {
    const graphs = {
        bars: randomizeGraph(),
        pie: randomizePie()
    };
    res.json(graphs);
};
