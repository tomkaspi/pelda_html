const elkuld = function(){
    if (document.getElementById("elf").checked){
        if (document.getElementById("d").checked || document.getElementById("e").checked || document.getElementById("f").checked){
            document.getElementById("myform").submit()
        }
        else{
            alert("Kérjük, válasszon fizetési módot!")
        }
    }
    else{
        alert("Kérjük, fogadja el a feltételeket!")
    }
}
var cost_ = 0

const kiszamol = function(){
    if (document.getElementById("d").checked){
        cost_ = 30
    }
    if (document.getElementById("e").checked){
        cost_ = 25
    }
    if (document.getElementById("f").checked){
        cost_ = 15
    }
    if (document.getElementById("a").checked || document.getElementById("b").checked || document.getElementById("c").checked){
        cost_ = cost_*1.1
    }
    document.getElementById("kisz").value = cost_
}