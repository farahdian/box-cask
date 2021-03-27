
$.ajax({
    url: 'https://api.airtable.com/v0/app4CroW3S1Yavm1w/Furniture',
    method: 'GET',
    headers: {
      Authorization: 'Bearer keyZ3VPNU13EIjSbl'
    },
    success: function(result) {
      console.log(result)
      result.records.forEach(item =>{
        container.innerHTML += 
        `<div class="card">
               <img src= "${item.fields.Images}">
               <div class="card-body">
                 <h3 class="title">${item.fields.Name}</h4>
                 <p>${item.fields.Description}</p>
                 <h4>$${item.fields["Unit cost"].toFixed(2)}</h4>
                 <button type="button" class="btn btn-warning btn-lg" onclick="window.location.href='https://airtable.com/shrTFHc2PBPSgz1is';">Buy Now</button>
               </div>
             </div>`
        })
}})