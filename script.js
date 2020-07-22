document.addEventListener("DOMContentLoaded",
function () {
    var currentImg=0;   //这个是用来取图片的索引下标的。

    var imgArr=["home1.jpg","home11.jpg","home4.jpg","home13.jpg","home12.jpg"];//定义一个数组来存放所有的图片

    function  changeImg(){

    if(currentImg>=(imgArr.length-1)){currentImg=0}  //当图片的索引超过图片数量就从第一个开始

    else{currentImg++;}   

    var img=document.getElementById("content-intro-home");

    img.style.backgroundImage="url(/dist/src/"+imgArr[currentImg]+")";  //这里特别要注意引号的使用，因为img[curentImg]是个变量，所以用"+变量+"

    }

    setInterval(changeImg,5000);//每隔400ms就换一个
}
);


