const preciorollos=1000
const precioempanadas=800
const preciococos=1000
const preciopromo2000=2000
const precioalfajores=1000
const preciodonas=500
var acuventas = 0
var acugastos = 0
var saldodia = 0


class ventas
{
    constructor(rollos, empanadas, cocos, bebida, hamburguesas,almuerzo,promo2000,alfajores,donas,gastos)
    {
        this.rollos=rollos;
        this.empanadas=empanadas;
        this.cocos=cocos;
        this.bebida=bebida;
        this.hamburguesas=hamburguesas;
        this.almuerzo=almuerzo;
        this.promo2000=promo2000;
        this.alfajores=alfajores;
        this.donas=donas;
        this.gastos=gastos;
        
    }
}
    
class UI
{
    addVenta(product)
    {
        const productList= document.getElementById("product-list")
        const element = document.createElement("div");

        element.innerHTML = `
        <div class="card text-center mb-4">
        <div class="card-body" style="text-align: justify;">
            <font size=6>
                <br><strong>Rollos de Canela</strong>: ${product.rollos}
                <br><strong>Empanadas</strong>: ${product.empanadas}
                <br><strong>Suspiros de coco</strong>: ${product.cocos}
                <br><strong>Bebidas</strong>: ${product.bebida}
                <br><strong>Hamburguesas</strong>: ${product.hamburguesas}
                <br><strong>Almuerzo</strong>: ${product.almuerzo}
                <br><strong>PROMO 2000</strong>: ${product.promo2000}
                <br><strong>Alfajores</strong>: ${product.alfajores}
                <br><strong>Donas</strong>: ${product.donas}
                <br><strong>Gastos</strong>: ${product.gastos}

            </font> 
        </div>        
        </div> 
        `;

        productList.appendChild(element);
                
    }
    
    resetform()
    {
        document.getElementById("product-form").reset();
    
    }
    

    showMessage(message,codigo)
    {
        const div = document.createElement("div");
        div.className = `alert alert-${codigo} mt-2`;
        div.appendChild(document.createTextNode(message))

        //como se muestra en pantalla, DOM
        const container = document.querySelector(".container")
        const app = document.querySelector("#App")
        container.insertBefore(div, app);
    
        setTimeout(function()  
        {

            document.querySelector('.alert').remove();

        }, 2000);


    }

    MostrarSaldo(mostrar,color)
    {

        const div = document.createElement("div");
        div.className = `alert alert-${color} mt-2`;
        div.appendChild(document.createTextNode(mostrar))
                    
        //como se muestra en pantalla, DOM
        const container = document.querySelector(".container")
        const app = document.querySelector("#App")
        container.insertBefore(div, app);
        
        setTimeout(function()  
        {

            document.querySelector('.alert').remove();

        }, 2000);
 

    }
    


}

// Eventos del DOM (Documento Object Model)

//Elemento para agregar
document.getElementById("product-form").addEventListener("submit", function(e)
{

    e.preventDefault();
    const rollos = Number(document.getElementById("rollos").value)*preciorollos;
    const empanadas = Number(document.getElementById("empanadas").value)*precioempanadas;
    const cocos = Number(document.getElementById("cocos").value)*preciococos;
    const bebida = Number(document.getElementById("bebida").value);
    const hamburguesas = Number(document.getElementById("hamburguesas").value);
    const almuerzo = Number(document.getElementById("almuerzo").value);
    const promo2000 = Number(document.getElementById("promo2000").value)*preciopromo2000;
    const alfajores = Number(document.getElementById("alfajores").value)*precioalfajores;
    const donas = Number(document.getElementById("donas").value)*preciodonas;    
    const gastos = Number(document.getElementById("gastos").value); 

    const venta = new ventas(rollos, empanadas, cocos, bebida, hamburguesas,almuerzo,promo2000,alfajores,donas,gastos)
    const ui = new UI();

    if(rollos=== 0 && empanadas === 0 &&cocos===0 && bebida===0&& hamburguesas===0&& almuerzo===0&& promo2000===0&& alfajores===0 && donas===0&& gastos===0)
    {
        ui.showMessage("No hay venta para registrar", "danger")

    }
    else 
    {
        ui.addVenta(venta);
        ui.resetform();
        ui.showMessage("Venta registrada", "success")


        acuventas = acuventas + rollos+empanadas+cocos+bebida+hamburguesas+almuerzo+promo2000+alfajores+donas
        console.log(acuventas)
        console.log(rollos)
        acugastos = acugastos + gastos
        saldodia = acuventas - acugastos 


        const ventasinfo= document.getElementById("ventasinfo")
        const gastosinfo= document.getElementById("gastosinfo")
        const totalinfo= document.getElementById("totalinfo")
        ventasinfo.textContent=acuventas;
        gastosinfo.textContent=acugastos;
        totalinfo.textContent=saldodia;
        


    }
 

});

// Elemento para eliminar
document.getElementById("product-list").addEventListener("click", function(e)
{
    const ui = new UI();
    ui.deleteProduct(e.target);

})

