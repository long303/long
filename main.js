var student = [
    {pic:"./img/Mendy.jfif",name: "Mendy",nation: "Togo", score:5},
    {pic:"./img/Tommy.jfif",name: "Tommy",nation: "USA", score:4}, 
    {pic:"./img/Pimchanok.jpg",name: "Pimchanok",nation: "Thailand", score:4},
    {pic:"./img/Pedro.png",name: "Pedro",nation: "Brazil", score:4},
    {pic:"./img/Alia.jfif",name: "Alia",nation: "India", score:5}, 
    {pic:"./img/thompson.jpg",name: "Thompson",nation: "England", score:4},
    {pic:"./img/Wood.jpg",name: "Wood",nation: "New Zealand", score:4}, 
    {pic:"./img/An.jpg",name: "An",nation: "Viet Nam", score:5},
    {pic:"./img/gwen.jpg",name: "Gwen",nation: "USA", score:5}, 
    {pic:"./img/Alexander.jfif",name: "Alexander",nation: "Italy", score:5}
]
function bam_nut(numb) {
    let check=confirm(`Bạn có muốn xóa ${student[numb].name}`)
    student.splice(numb,1)
    create_info()
   
}

 function create_info() {
    let student_list=document.getElementById("student")
    student_list.innerHTML=""
//   console.log(student_list)
for (let index = 0; index < student.length; index++) {

    let info=document.createElement("div")
    info.classList="col-6 col-md-4 col-lg-3 student-detail"
    student_list.appendChild(info)

    let btn=document.createElement("button")
    btn.innerText="X"
    info.appendChild(btn)
    btn.setAttribute("onclick",`bam_nut(${index})`)

    let div1=document.createElement("div")
    info.appendChild(div1)

    let div_img=document.createElement("img")
    div1.appendChild(div_img)
    div_img.setAttribute("src",student[index].pic)

    let ten=document.createElement("h1")
    ten.innerText=student[index].name
    info.appendChild(ten)

    let quoctich=document.createElement("p")
    quoctich.innerText=student[index].nation
    info.appendChild(quoctich)

    let diem=document.createElement("h3")
    diem.innerText=student[index].score
    info.appendChild(diem)
    // const element = student[index];
    
}
 }
create_info()