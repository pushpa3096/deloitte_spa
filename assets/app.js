window.addEventListener('load', () => {
    axios.get('/assets/itemDetails.json')
        .then((res) => {
            var data = res.data['responseData']
            Object.entries(data).map(item => {
                var title = item[1].itemName;
                var desc = item[1].type;
                var price = item[1].price;
                var rating = item[1].rating;

                var badge = document.createElement('div');
                badge.className = 'content-box';
                var HTML = "";
                for (var i = 0; i < 5; i++) {  
                    var icoClass = i < rating ? "fa fa-star" : "fa fa-star-o"; 
                    HTML += "<i class='" + icoClass + "'></i>"; 
                }


                badge.innerHTML =
                    '<div class="itemPic"></div>' +
                    '<h6>' + title + '</h6>' +
                    '<div class="d-flex" style="font-size:0.85rem; color:grey; justify-content:space-between">' + desc + '<span class="price">' + price + '</span>' + '</div>' +
                    '<div >' +
                    '<div >' + HTML +
                    '<i class=" fa fa-shopping-cart " aria-hidden="true " style="float:right"></i>' + '</div>';
                var c = document.querySelector('#app');
                c.appendChild(badge);
            })
        }).catch((err) => {
            console.log(err);
            var c = document.querySelector('#error-template'); 
            c.innerHTML=err
        })



})