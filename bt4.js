let a = Number(prompt("nhap so a"));
let b = Number(prompt("nhap so b"));
let c = Number(prompt("nhap so c"));

let detal = b**2 - 4*a*c;
let x1,x2;

if (detal > 0) {
    alert(`phuong trinh co 2 nghiem phan biet  x1 =${x1=(-b-Math.sqrt(detal))/2*a} x2=${x1=(-b+Math.sqrt(detal))/2*a}`)
} else if (detal == 0){
    alert(`phuong trinh co 1 nghiem kep x=${-b/2*a}`);
} else if (detal < 0){
    alert(`phuong trinh vo nghiem`);
}

