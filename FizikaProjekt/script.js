function kuld(){
    let kerdes1 = document.form.k1.value
    let kerdes2 = document.form.k2.value
    let kerdes3 = document.form.k3.value
    let pont = 0;
    console.log(kerdes1)
    if (kerdes1 == "a"){
        pont++;
    }
    if (kerdes2 == "a"){
        pont++;
    }
    else if(kerdes2 == "b"){ 
        pont++
    }
    if (kerdes3 == "gyujto"){
        pont++;
    }
}