let eu = {
   nome : "Brenda",
   idade : 18, 
   fruta : "Melancia"
};

eu.cidade = "Rio de Janeiro";

delete eu.idade;

console.log(eu)

//

let cadastro = [{
    nome : "Luan",
    idade : 22,
    telefone : 21964355035,
    amigos : ["Kauan", "William" , "Joana", "Suelen"]
},

{
   nome : "Lucimar",
   idade : 32,
   telefone : 33978452424,
   amigos : ["Lucas", "Lilian", "Yolanda", "Sérgio"]
},

{
    nome : "Bruno",
    idade : 20,
    telefone : 22945873256,
    amigos : ["Kelly", "Geovana", "Gustavo", "Vitória"]
},

{
    nome : "Marta",
    idade : 27,
    telefone : 81958324643,
    amigos : ["Hugo", "Vitor", "Mirella", "Priscila"]
},

{
    nome : "Alexandre",
    idade : 30,
    telefone : 77986874324,
    amigos : ["Barbára", "André", "Murilo", "Márcia"] 
}
]

console.log(cadastro[0].amigos[3])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[0])
console.log(cadastro[4].amigos[0])