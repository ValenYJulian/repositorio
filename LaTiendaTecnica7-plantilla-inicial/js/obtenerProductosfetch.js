fetch("https://fakestoreapi.com/products");{
    then(Response => Response.json())
    then(Response => console.log(json))
}