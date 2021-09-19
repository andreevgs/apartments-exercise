$('body').on('click', '.chart_toggle_bar button', (e) => {
    if (!$(e.target).is('.active_button')){
        if ($(e.target).is('#graph_chart')) {
            $('#pie_chart_tab').toggleClass('active_tab');
            $('#graph_chart_tab').toggleClass('active_tab');

            $('#pie_chart').toggleClass('active_button');
            $('#graph_chart').toggleClass('active_button');
        }
        else if ($(e.target).is('#pie_chart')) {
            $('#graph_chart_tab').toggleClass('active_tab');
            $('#pie_chart_tab').toggleClass('active_tab');

            $('#graph_chart').toggleClass('active_button');
            $('#pie_chart').toggleClass('active_button');
        }
    }
});