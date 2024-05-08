const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const loaders = document.getElementById("loaders")
const container = document.getElementsByClassName("container")
let init = 0
const botSay = (data) => {
    return["woi gua jaddid alwi, nama lu siapa ha?",
    `hallo ${data?.nama}, berapa umur lu?`,
    `ha ${data?.usia}?, hobi lu apa ya?`,
    `njir, sama dong gua juga hobi ${data?.hobi}, btw udah punya pacar belum lu?`,
    `oh ${data?.pacar}, ya udah kalo gitu ya...`,
    ]
}
pertanyaan.innerHTML = botSay()[0]

let usersData =[]

function botStart() {
    if(jawaban.value.length < 1) return alert("anda harus isi jawaban terlebih dahulu!")
    init++
    if(init === 1) {
        botDelay({nama: jawaban.value})      
    }else if (init ===2) {
        botDelay({usia: jawaban.value})
    }else if (init ===3) {
        botDelay({hobi: jawaban.value})
    }else if (init ===4) {
        botDelay({pacar: jawaban.value}) 
    }else if (init ===5) {
        finishing()
    }else {
        botEnd()
    }
}

function botDelay(jawabanUser){
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() =>{
        pertanyaan.innerHTML = botSay(jawabanUser) [init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    },[1000])
    usersData.push(jawaban.value)
    jawaban.value=""
}

function finishing(){
    pertanyaan.innerHTML = `thank you ${usersData[0]} udah main ke jaddid bot👌.lain kali main ${usersData[2]} sama gua biar tambah jago lagi lu.`
    jawaban.value="ok thanks juga 🤩"
}

function botEnd(){
    alert(`terima kasih ${usersData[0]} udah berkunjung, anda akan diarahkan kehalaman utama kembali`)
    window.location.reload(

    )
}