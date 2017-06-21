$(document).ready(function() {
    $("#worldnews").click(() => handler("worldnews"));
    $("#programmerdadjokes").click(() => handler("programmerdadjokes"));
    $("#upliftingnews").click(() => handler("upliftingnews"));
    $("#spacex").click(() => handler("spacex"));
});

function handler(sub) {
    console.log(sub);
    $("#content").html("<p>" + sub + "</p>");

    $.getJSON(
        "http://www.reddit.com/r/" + sub + ".json?jsonp=?",
        function foo(data) {
            $.each(
                data.data.children.slice(0, 10),
                function(i, post) {
                    $("#content").append('<br>' + post.data.title);
                    $("#content").append('<br>' + post.data.url);
                    $("#content").append('<br>' + post.data.permalink);
                    $("#content").append('<br>' + post.data.ups);
                    $("#content").append('<br>' + post.data.downs);
                    $("#content").append('<hr>');
                }
            )
        }
    );
}
