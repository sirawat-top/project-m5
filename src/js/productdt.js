let searchParams = new URLSearchParams(window.location.search).get("id");
      console.log(searchParams);

      const getdetail = async () => {
        try {
          const response = await axios.get(
            "https://6102d7aa79ed680017482359.mockapi.io/productdetail"
          );
          document.getElementById("detail").innerHTML = response.data
            .filter((x) => x.id == searchParams)
            .map(
              (detail) =>
                `
                <div class="row">
                    <div class="col-6">
                      <img id="imgdetail" src="${detail.prdImageUrl}"> 
                      
                    </div>
                    <div class="col-6">
                      <h4 id="namedetail">${detail.prdname}</h4><br>
                      <h4>Product Detail</h4>
                      <p>
                          ${detail.txtDetail}
                      </p>
                      <h4 id="pricedetail">Price :${detail.prdPrice}</h4>
                <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Please Select
                </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">S</a></li>
                <li><a class="dropdown-item" href="#">M</a></li>
                <li><a class="dropdown-item" href="#">L</a></li>
                <li><a class="dropdown-item" href="#">XL</a></li>
            </ul>
            </div><br>
            <button onclick="clicked()"  class="btn btn-primary" id="adddata">Add to cart</button><br>
            
           
                  </div>
                </div>
               
              
            `
            )
            .join("");
        } catch {
          console.log(`e`, e);
        }
      };
      getdetail();

    var cartararay=[];

    function clicked(){
  /*    var img = document.getElementById("imgdetail")
     var name = document.getElementById("namedetail")
     let price = document.getElementById("pricedetail")
     let realPrice = price.innerText.split(":")

     console.log(img.src,name.innerText,realPrice[1]) */
     cartararay.push({id:searchParams})
     console.log(cartararay)
    }