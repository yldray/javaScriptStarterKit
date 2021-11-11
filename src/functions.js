function addToCart(quantity,productName="Elma"){ 
    //(productName="Elma") Default Deger veriliyor burada... 
    //quantity Adet
    console.log("Sepete eklendi :" +" Urun: "+ productName+" Adet: "+quantity)
}
//localhost acilmiyorsa npm run dev dikkat et
// Undefined Nedir?   Ben aslinda yokum!!  Bellekte ona dair hic birsey tanimlamadik yada gondermedik.
// o yuzden undefind
//addToCart()
//addToCart("Yumurta")
//addToCart("Karpuz")
addToCart(10,"Yumurta")
addToCart(10)
//()=>{ sen bir fonksiyonsun


let sayHello = ()=>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function (){
    console.log("Hello World 2")
}

sayHello2()

function addToCart2(productName,quantity,unitPrice){
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

let product1 = { productName:"Elma", unitPrice:10 , quantity:5}

function addToCart3(product){
    console.log("Urun :"+ product1.productName)
    console.log("Fiyati :"+product1.unitPrice) 
    console.log("Adeti :"+product1.quantity)
}

addToCart3(product1)



// HEAP
let product2 = { productName:"Elma", unitPrice:10 , quantity:5}
let product3 = { productName:"Elma", unitPrice:10 , quantity:5}

product2 = product3
product2.productName="Karpuz"
console.log(product3.productName)

// STACK 
let sayi1 = 10
let sayi2 = 20

sayi1 = sayi2
sayi2=100
console.log(sayi1)

function addToCart4(products){
    console.log(products)
}
//[ ] unutma Bunu alanlar bunlari da aldi Hepsini sepete ekle
let products = [
    {productName:"Elma", unitPrice:10 , quantity:5},
    {productName:"Armut", unitPrice:10 , quantity:5},
    {productName:"Karpuz", unitPrice:10 , quantity:5}
]

addToCart4(products)

function add(number1,number2){
   console.log(number1+number2)
}
function add2(number1,number2,number3){
    console.log(number1+number2+number3)
}
function add3(number1,number2,number3){
    console.log(number1+number2+number3)
}

add(20,30)


function add4(bisey,...numbers){//rest
    let total= 0
     for (let i = 0; i < numbers.length; i++) {
        
        total = total + numbers[i] 
     }
     console.log(total)
     console.log(bisey)
}

add4(20,30)
add4(20,30,40)
add4(20,30,40,50)


let numbers =[30,10,20,500,42,4230]
console.log(numbers)
console.log(Math.max(...numbers))

//distrucktring galiba tam bilmiyom



let regions =["ic anadolu","Marmara","Karadeniz"]
console.log(regions[1])


let [icanadolu,Marmara,Karadeniz,[icAnadoluSehirleri,MarmaraSehirleri,KaradenizSehirleri]] =[
    {name:"ic anadolu",population:"20M"},
    {name:"Marmara",population:"20M"},
    {name:"Karadeniz",population:"20M"},
    [
        ["Ankara","Konya"],
        ["Istanbul","Bursa"],
        ["Sinop","Trabzon"]
    ]
]

console.log(icanadolu)
console.log(Marmara)

console.log(icanadolu.name)
console.log(icanadolu.population)

console.log(icAnadoluSehirleri)
console.log(MarmaraSehirleri)
console.log(KaradenizSehirleri)



let newProductName,newUnitPrice, newQuantity
({productName:newProductName,  unitPrice:newUnitPrice, quantity:newQuantity}
={productName:"Elma", unitPrice:10 , quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)


//Nerede Kullaniirz
/*
login({title}){
    console.log("<h1>"+title+"</h1>")
}
*/
