let pokemonRepository=function(){let t=[],e="https://pokeapi.co/api/v2/pokemon/?limit=333";function o(e){"object"==typeof e&&"name"in e&&"detailsUrl"in e?t.push(e):console.log("pokemon is not correct")}function i(t){pokemonRepository.loadDetails(t).then(function(){console.log(t),a(t)})}function a(t){let e=$(".modal-body"),o=$(".modal-title");$(".modal-header");o.empty(),e.empty();let i=$("<h1>"+t.name+"</h1>"),a=$('<img class="modal-img" style="width:50%">');a.attr("src",t.imageUrlFront);let n=$('<img class="modal-img" style="width:50%">');n.attr("src",t.imageUrlBack);let l=$("<p>height : "+t.height+"</p>"),p=$("<p>weight : "+t.weight+"</p>"),s=$("<p>types : "+t.types+"</p>"),r=$("<p>abilities : "+t.abilities+"</p>");o.append(i),e.append(a),e.append(n),e.append(l),e.append(p),e.append(s),e.append(r)}return{add:o,getAll:function(){return t},addListItem:function(t){pokemonRepository.loadDetails(t).then(function(){let e=$(".row"),o=$('<div class="card" style="width:400px"></div>'),a=$('<img class="card-img-top" alt="Card image" style="width:20%" />');a.attr("src",t.imageUrlFront);let n=$('<div class="card-body"></div>'),l=$("<h4 class='card-title' >"+t.name+"</h4>"),p=$('<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">See Profile</button>');e.append(o),o.append(a),o.append(n),n.append(l),n.append(p),p.on("click",function(e){i(t)})})},loadList:function(){return $.ajax(e).then(function(t){t.results.forEach(function(t){let e={name:t.name,detailsUrl:t.url};o(e),console.log(e)})}).catch(function(t){console.error(t)})},loadDetails:function(t){let e=t.detailsUrl;return $.ajax(e).then(function(e){t.imageUrlFront=e.sprites.front_default,t.imageUrlBack=e.sprites.back_default,t.height=e.height,t.types=[];for(let o=0;o<e.types.length;o++)t.types.push(e.types[o].type.name);t.abilities=[];for(let o=0;o<e.abilities.length;o++)t.abilities.push(e.abilities[o].ability.name);t.weight=e.weight}).catch(function(t){console.error(t)})},showModal:a,showDetails:i}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});