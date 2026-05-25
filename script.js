const btn = document.getElementById("btn")
const list = document.getElementById("list")
const message = document.getElementById("message")
const input = document.getElementById("notes")
const btnDelete = document.createElement ("button")
let pipu = []
console.log(btn, list,input)


btn.addEventListener ("click",() =>{
    const notes = input.value.trim()
    if(notes ===""){
        message.textContent = "llena esa vaina"
        return;
    }
    pipu.push(notes)
    localStorage.setItem("notas", JSON.stringify(pipu))

    message.textContent = ""

    loadNotes(notes);


    input.value = ""
    input.focus ()
    message.textContent = "Notes added succesfully"

})

function loadNotes (notes) {
    const li = document.createElement ("li")
    const btnDelete = document.createElement ("button")

    btnDelete.textContent = "Delete"

    li.textContent = notes
    input.value = ""


    btnDelete.addEventListener ("click",()=>{
        li.remove(notes)
        deleteNotes(notes)
        localStorage.clear(li)
    })

    list.appendChild (li)
    li.appendChild(btnDelete)



let hhh=  localStorage.getItem("notas", JSON.parse(pipu))


    
}




