document.getElementById("btn").addEventListener("click", get_data);
      async function get_data(){
        try{
          var re = await fetch("https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number");
          var res = await re.json();
          console.log(res);
          var art = res.data;
          console.log(art);
          for(var i = 0; i < art.length; i++){
            var title = art[i]["title"];
            var name = art[i]["artist_display"];
            var date = art[i]["date_display"];
            console.log(document.getElementById("result"));
            document.getElementById("result").textContent += `The Title of the Art is  ${title}.`;
            document.getElementById("result").textContent += `The Name of the Artist is  ${name}.`;
           document.getElementById("result").textContent += `The Date of the Art Display is  ${date}.`; 
          }
        }catch{
          console.log("Error fetching data..!");
        }
        }
        

      
