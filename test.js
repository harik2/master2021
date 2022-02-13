// "use strict"
function test()
{
 var num=100
 console.log("value of num in test() "+num)
 {
 console.log("Inner Block begins")
 let num=200
 console.log("value of num : "+num)
 
 }
 var num=300;
 console.log(" 1 value of num : "+num)
}
test()
let a ={nom: 'harik',prenom:'mohamed','age': 10};
let r=[12,12,'test12'];
console.log(a['nom'],a.prenom,a['prenom'])
for (const key in a) {
  //  if (Object.hasOwnProperty.call(a, key)) {
        const element = a[key];
        console.log('in',element,key)
        
    //}
}

for (const i of Object.keys(a)) {
    
    console.log('of',a[i]);
}
Object.keys(a).forEach((v,i)=>{
    console.log('foreach',v,a[v])
});

let n=6,s=0,t=[];
for (let i = 0; i < n; i++) {
    
if(n%i==0) {

    s+=i;
    t.push(i);
}
    
}
if(n===s) {

    console.log(n,'est parfait')
} 
console.log('tableau',t)
console.log('=================')
let o={
    nom: 'hariki',
    saluer(){    let re=()=>    console.log('this = ',this); re()}
    

}
o.saluer()
let sa=o.saluer.bind(o);
 sa();
// console.log(sa)
(function(){
    console.log('cc')
})();
let tab=[1,2]
function red(tab,f){
return tab.reduce((i,v)=>i+f(v),10);


}
let d=red(tab,(x)=>x);
console.log('d',d)
let or={
c:'0000',
vor(){
    console.log('this de o',this)
    },
o:{
    nom:'harikp',
v(){
    setTimeout(()=>{

        console.log('this de o',this);
    },0);
        
        ;
}

    }
}
or.o.v()
or.vor()
let tab2=[8,12,30];

let len =tab2.splice(-1,1);
console.log('len',len,tab2);
let obj={nom: 'sabri',prenom: 'sanaa',age: '30'};
let {nom, age}=obj;
console.log('nom',nom)
//reduce 
let l2=Object.values(obj).map((e)=>e.length );
console.log('l2',l2)
let sommeX=(x,f)=>{
    return f(x);
};
let somme=l2.reduce((a,c)=>a+sommeX(c,(e)=>e*e));
console.log('somme',somme);
let b=[1,2];
let c=[3,4,...b,6];
let [h,l]=c;
console.log('d=',c)
console.log('l=',l)