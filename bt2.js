const diemtoan = Number(prompt("nhap diem toan:"));
const diemhoa = Number(prompt("nhap diem hoa:"));
const diemly = Number(prompt("nhap diem ly:"));

const avg = (diemtoan+diemly+diemhoa)/3 ;

if (avg >= 8) {
    alert(`voi diem trung binh ${avg} ban dc rank A`);
} else if(avg >= 6.5 && avg < 8) {
    alert(`voi diem trung binh ${avg} ban dc rank B`);
} else if (avg >= 5.0 && avg  <6.5) {
    alert(`voi diem trung binh ${avg} ban dc rank C`);
} else if (avg>=0 && avg< 5){
    alert(`voi diem trung binh ${avg} ban dc rank D`);
} 

