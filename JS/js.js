function control(){
    let img=document.getElementById("offimage");
    let arr=img.src.split("/");
    console.log(arr);
    
    if(arr[arr.length-1]=="OFFbulb.jpg")
    {
        img.src="images/ONbulb.jpg";
    }
    else
    {
        img.src="images/OFFbulb.jpg";
    }
}
