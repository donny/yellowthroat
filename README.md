# yellowthroat

Yellowthroat is an Electron app to browse predefined Reddit's subreddits.

### Background

This project is part of [52projects](https://donny.github.io/52projects/) and the new stuff that I learn through this project: [Electron](https://electron.atom.io), [Photon](http://photonkit.com), and [jQuery](https://jquery.com) (revisit).

### Project

Yellowthroat can be run by downloading the repository and performing the following commands: `npm install && npm start`. The app shows some predefined Reddit's subreddits on the left pane. Clicking one of them brings up the top stories from that subreddit on the right pane. The screenshot of the app can be seen below:

![Screenshot](https://raw.githubusercontent.com/donny/yellowthroat/master/screenshot.png)

### Implementation

There are many Electron [boilerplates](https://github.com/sindresorhus/awesome-electron#boilerplates) and Yellowthroat is based on [electron-quick-start](https://github.com/electron/electron-quick-start) as described in the Electron [tutorial](https://electron.atom.io/docs/tutorial/quick-start/). We employ [Photon](http://photonkit.com) that provides style guide and components for Electron apps.

The main code is in [`renderer.js`](https://github.com/donny/yellowthroat/blob/master/app/js/renderer.js) which can be seen below:

```javascript
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
```

### Conclusion

...
