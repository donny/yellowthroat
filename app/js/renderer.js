$(document).ready(function() {
    $("#worldnews").click(() => handler("worldnews"));
    $("#programmerdadjokes").click(() => handler("programmerdadjokes"));
    $("#upliftingnews").click(() => handler("upliftingnews"));
    $("#spacex").click(() => handler("spacex"));
});

function handler(sub) {
    $.getJSON(
        "http://www.reddit.com/r/" + sub + ".json?jsonp=?",
        function process(data) {
            $("#content-table").find('tbody').empty();
            $.each(
                data.data.children.slice(0, 10),
                function(i, post) {
                    let row = "<tr>";
                    row += "<td>" + post.data.ups + "</td>";
                    row += "<td>" + post.data.author + "</td>";
                    row += "<td>" + post.data.title + "</td>";
                    row += "</tr>"
                    $('#content-table > tbody:last-child').append(row);
                }
            )
        }
    );
}
