$(function () {

    $('.active_player').on('click',function (e) {
        e.preventDefault();
        let player_name = $('#player_name').val().trim();
        let yes_no = $('#yes_no').val();

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": `https://mlb-data.p.rapidapi.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='${yes_no}'&name_part='${player_name}%25'`,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mlb-data.p.rapidapi.com",
                "x-rapidapi-key": "f8c62c6da0msh66a624b29081a48p18af92jsnc6d3dfbee09f"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    })
})