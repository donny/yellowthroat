$(document).ready(function() {

    $("#worldnews").click(function() {
        console.log('worldnews');
        $("#content").html("<p>worldnews</p>");


        $.getJSON(
                "http://www.reddit.com/r/worldnews.json?jsonp=?",
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
            )
            .success(function() {
                alert("second success");
            })
            .error(function() {
                alert("error");
            })
            .complete(function() {
                alert("complete");
            });


    });

    $("#programmerdadjokes").click(function() {
        console.log('programmerdadjokes');
        $("#content").html("<p>programmerdadjokes</p>");
    });

    $("#upliftingnews").click(function() {
        console.log('upliftingnews');
        $("#content").html("<p>upliftingnews</p>");
    });

    $("#spacex").click(function() {
        console.log('spacex');
        $("#content").html("<p>spacex</p>");
    });

});
