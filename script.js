const btn = document.getElementById("btn")
const list = document.getElementById("list")
const message = document.getElementById("message")
const input = document.getElementById("notes")
console.log(btn, list,input)

let noteList = JSON.parse(localStorage.getItem('notas')) || []

noteList.forEach(nota => loadNotes(nota))

btn.addEventListener ("click",() =>{
    const notes = input.value.trim()
    if(notes ===""){
        message.textContent = "Please  complete this field"
        return;
    }
    noteList.push(notes)
    saveStorage()
    loadNotes(notes);
    message.textContent = ""

    input.value = ""
    input.focus ()
    message.textContent = "Notes added succesfully"

})

function loadNotes (notes) {
    const li = document.createElement ("li")
    const btnDelete = document.createElement ("button")

    btnDelete.textContent = "Delete"
    li.textContent = notes

    btnDelete.addEventListener ("click",()=>{
        li.remove()
        deleteNotes(notes)
    })

    list.appendChild (li)
    li.appendChild(btnDelete)    
}

function deleteNotes(notes) {
    noteList = noteList.filter(nota => nota !== notes)
    saveStorage()
}

// ─── 5. GUARDAR el array completo en localStorage ─────────────
function saveStorage() {
    localStorage.setItem("notas", JSON.stringify(noteList))
}




