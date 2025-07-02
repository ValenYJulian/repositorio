document.addEventListener ("DOMContentLoaded"),()=>{

    const endpoint = `./data/data.json`
    const getProductos = async () =>{
        try{
            Response = await fetch (endpoint)
            datos= await Response.json()
            console.log(datos)
        }catch(error){
            console.log("eror")
        }

    }
    getProductos()
document.addEventListener("DOMContentLoaded"),()=>{
    const contenedorProd = document.querySelector(`section.productos`)
    const mostrarProductos = (datos)=>{
        datos.foreach (item =>{
            const card = document.createElement('div')
            card.className = 'card'
            card.innerHTML = ` <div class="top">
                        <img src="images/productos/arandanos.jpg" alt="">
                        <p class="titProd">PRODUCTO 1</p>
                        <p class="descrpcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus natus </p>
                        <a href="opiniones.html" class="resenias">ver reseñas</a>
                    </div>
                    <div class="bottom">
                        <div class="precio">
                            <span>$1560</span> <button class="favorito"><i
                                    class="fa-solid fa-heart"></i></button></span>
                        </div>
                        <div class="agregar">
                            <div class="amount">
                                <span class="descrpcion"> Cant </span>
                                <input type="number" name="cant" id="cant" min="0" value="1">
                            </div>
                            <button class="addcarrito"><i class="fa-solid fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="top">
                        <img src="images/productos/cerezas.jpg" alt="">
                        <p class="titProd">PRODUCTO 2</p>
                        <p class="descrpcion">Lorem ipsum dolor sit amet consecte. </p>
                        <a href="opiniones.html" class="resenias">ver reseñas</a>
                    </div>
                    <div class="bottom">
                        <div class="precio">
                            <span>$1000</span> <button class="favorito"><i
                                    class="fa-solid fa-heart-circle-check"></i></button></span>
                        </div>
                        <div class="agregar">
                            <div class="amount">
                                <span class="descrpcion"> Cant </span>
                                <input type="number" name="cant" id="cant" min="0" value="1">
                            </div>
                            <button class="addcarrito"><i class="fa-solid fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="top">
                        <img src="images/productos/manzanas.jpg" alt="">
                        <p class="titProd">PRODUCTO 3</p>
                        <p class="descrpcion">Lorem ipsum dolor sit amet consecte. </p>
                        <a href="opiniones.html" class="resenias">ver reseñas</a>
                    </div>
                    <div class="bottom">
                        <div class="precio">
                            <span>$1800</span> <button class="favorito"><i
                                    class="fa-solid fa-heart"></i></button></span>
                        </div>
                        <div class="agregar">
                            <div class="amount">
                                <span class="descrpcion"> Cant </span>
                                <input type="number" name="cant" id="cant" min="0" value="1">
                            </div>
                            <button class="addcarrito"><i class="fa-solid fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="top">
                        <img src="images/productos/frutillas.jpg" alt="">
                        <p class="titProd">PRODUCTO 4</p>
                        <p class="descrpcion">Lorem ipsum dolor sit amet consecte. </p>
                        <a href="opiniones.html" class="resenias">ver reseñas</a>
                    </div>
                    <div class="bottom">
                        <div class="precio">
                            <span>$1250</span> <button class="favorito"><i
                                    class="fa-solid fa-heart-circle-check"></i></button></span>
                        </div>
                        <div class="agregar">
                            <div class="amount">
                                <span class="descrpcion"> Cant </span>
                                <input type="number" name="cant" id="cant" min="0" value="1">
                            </div>
                            <button class="addcarrito"><i class="fa-solid fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="top">
                        <img src="images/productos/kiwis.jpg" alt="">
                        <p class="titProd">PRODUCTO 5</p>
                        <p class="descrpcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <a href="opiniones.html" class="resenias">ver reseñas</a>
                    </div>
                    <div class="bottom">
                        <div class="precio">
                            <span>$1150</span> <button class="favorito"><i
                                    class="fa-solid fa-heart"></i></button></span>
                        </div>
                        <div class="agregar">
                            <div class="amount">
                                <span class="descrpcion"> Cant </span>
                                <input type="number" name="cant" id="cant" min="0" value="1">
                            </div>
                            <button class="addcarrito"><i class="fa-solid fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="top">
                        <img src="images/productos/uvas.jpg" alt="">
                        <p class="titProd">PRODUCTO 6</p>
                        <p class="descrpcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus natus</p>
                        <a href="opiniones.html" class="resenias">ver reseñas</a>
                    </div>
                    <div class="bottom">
                        <div class="precio">
                            <span>$2320
                            </span> <button class="favorito"><i
                                    class="fa-solid fa-heart"></i></button></span>
                        </div>
                        <div class="agregar">
                            <div class="amount">
                                <span class="descrpcion"> Cant </span>
                                <input type="number" name="cant" id="cant" min="0" value="1">
                            </div>
                            <button class="addcarrito"><i class="fa-solid fa-cart-plus"></i></button>
                        </div>
                    </div>
                </div>`
            contenedorProd.appendChild(card)
        })
    }
}
}