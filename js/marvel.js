var marvel = {
    render: function() {
        var url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=bd7171f2defbbada0504c6a5c114e9b5&hash=5b046fbca154bec526fca0d648a7b641";
        var message = document.getElementById("message");
        var footer = document.getElementById("footer");
        var marvelContainer = document.getElementById("marvel-container");


        $.ajax({
            url:url,
            type: "GET",
            beforeSend: function(){
                message.innerHTML = "Carregando...";
            },
            complete: function(){
                message.innerHTML = "Carregado com Sucesso!";
            },
            success: function(data){
                footer.innerHTML = data.attributionHTML;
                var string = "";
                string += "<div class= 'row' >";

                for (var i = 0; i < data.data.results.length; i++) {
                  var element = data.data.results[i];


                  string += "<div class= 'col-md-3' >";
                  string += " <a href='"+element.urls[0].url+"' target='_blank' >"
                  string += " <img src= '"+element.thumbnail.path+"/portrait_fantastic."+element.thumbnail.extension+"'  />";
                  string += " </a>"
                  string += "<h6>" + element.name + "</h6>";
                  string += "</div>";

                  if ((i+1) % 4 == 0 ){
                      string += "</div>";
                      string += "<div class= 'row' >";
                  }
                }

                marvelContainer.innerHTML = string;
            },
            error: function(){
                message.innerHTML = "Nós pedimos desculpas!";
            }
        });
    }
};
marvel.render();
