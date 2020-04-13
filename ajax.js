$(document).ready(function () {
    const btn = $(".btn");
    const endPoint = "https://icanhazdadjoke.com/"
    // "http://aimtell.com/files/sites.json"

    // it seems as if CORS has not been enabled on your server.
    // instead I replaced your end point with one that returns dad jokes

    // store the handlebar template by ID
    let template = $("#template").html();

    // assign handlebars data on API call
    btn.click(function () {
        // call api
        $.getJSON(endPoint)
            .done(function (data) {
                // assign handlebars data to variable
                let dataSource = {
                    id: data.id,
                    joke: data.joke,
                    status: data.status
                }
                
                // compile the template 
                let compile = Handlebars.compile(template);

                // generate final result by compiling template with data source
                let result = compile(dataSource);

                // put that data into the content div
                $('#content').html(result);
            })
    })
})

