$(function () {

    $('.active_player').on('submit',function (e) {
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

        $.ajax(settings).then((response) => {
            console.log(response)
            generateCard(response.search_player_all.queryResults.row)
        });
    })
    const generateCard = (results) => {
            console.log(results)
        
            
            let cardContainer = $('#cardContainer');
            let newCard = $('<div>');
            newCard.addClass('card');
            let cardBody = $('<div>');
            cardBody.addClass('card-body');
            newCard.append(cardBody);
            let cardTitle = $('<h5>');
            cardTitle.addClass("card-title");
            cardTitle.text(`${results.name_display_first_last}`);
            cardBody.append(cardTitle);
            let cardTeam = $('<h6>');
            cardTeam.addClass('card-subtitle');
            cardTeam.text(`${results.team_full}`);
            cardBody.append(cardTeam);
            let cardBirthDate = $("<p class='card-text'>");
            // cardPosition.addClass('card-text');
            cardBirthDate.text(`DOB: ${results.birth_date}`);
            cardBody.append(cardBirthDate);
            let cardBirthLocation = $("<p class='card-text'>");
            // cardPosition.addClass('card-text');
            cardBirthLocation.text(`Place of Birth: ${results.birth_city}, ${results.birth_state}, ${results.birth_country}`);
            cardBody.append(cardBirthLocation);
            let cardPosition = $("<p class='card-text'>");
            // cardPosition.addClass('card-text');
            cardPosition.text(`Position: ${results.position}`);
            cardBody.append(cardPosition);
            cardContainer.append(newCard);
        
    }
})