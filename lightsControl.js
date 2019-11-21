
function getLightURI(element)
{
    var IP = "http://192.168.0.50/api/";
    var username = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";
    var lights = "/lights/";
    var URI = IP + username + lights;
    return URI + element.attr("id")+"/";
}
function getLightURL(element)
{
    var IP = "http://192.168.0.50/api/";
    var username = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";
    var lights = "/lights/";
    var URI = IP + username + lights;
    return URI + element + "/";
}

function togglelight(element)
{
    var getState = $.getJSON(getLightURI(element), function (data)
    {
        var state = data["state"]["on"];
        if (state)
        {
            state = false;
        }
        else
        {
            state = true;
        }
        var colourState = data["state"]["hue"];
        console.log(i);
        var colourHue = [120,1000,4000];

        var lightState = {"on": state, "bri": 120, "hue": 120};

        $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}
function turnOnAll(){
    var i;
    for (i = 0; i < 7; i++){
        var getState = $.getJSON(getLightURL(i), function (data)
        {
            var state = data["state"]["on"];
            if (state)
            {
                state = false;
            }
            else
            {
                state = true;
            }
            var colourState = data["state"]["hue"];
            console.log(colourState);
            var colourHue = [120,1000,4000];
            var lightState = {"on": state, "bri": 120, "hue": 120};

            $.ajax({
                url: getLightURL(i) + "state/",
                type: "PUT",
                data: JSON.stringify(lightState)
            })
        });
    }
}
$(document).ready(function()
{
    $('td').click(function()
    {
        togglelight($(this));
    })
});