{
    let nei = document.querySelector(".neirong-top");
    let num = 4;
    let q = "a";
    let t = setInterval(fon, 2000);

    function fon() {
        if (q === "a") {
            num++;
        } else if (q === "i") {
            num--;
        }
        nei.style.marginLeft = -295 * num + "px";
        nei.style.transition = "1s all";
    }

    nei.addEventListener("transitionend", function () {
        flag = true;
        if (num === 12) {
            num = 4;
            nei.style.transition = "none";
            nei.style.marginLeft = "-1170px"
        }
        if (num === 0) {
            num = 8;
            nei.style.transition = "none";
            nei.style.marginLeft = "-2340px";
        }
    });
    let lefts = document.querySelector(".left");
    let rights = document.querySelector(".right");
    let flag = true;     //当他为真的时
    rights.onclick = function () {
        q = "a";
        if (flag) {    //点击是为真
            flag = false;   //点击过后是为假
            fon();
        }
    };
    lefts.onclick = function () {
        q = "i";
        if (flag) {
            flag = false;
            fon();
        }
    };
    let wai = document.querySelector(".neirong");
    wai.onmouseover = window.onblur = function () {
        clearInterval(t);
    };
    wai.onmouseout = window.onfocus = function () {
        t = setInterval(fon, 2000);
    };
}

{
    //banner
    let imgs = document.querySelectorAll(".top7 li");
    console.log(imgs);
    let dians = document.querySelectorAll(".lunbodian .dian");
    let banners = document.querySelector(".banner-img");
    let lefts = document.querySelector(".prev");
    let nexts = document.querySelector(".next");
    banners.onmouseover=window.onblur=function () {
        clearInterval(tta);
    };
    window.addEventListener("onblur",function () {
        clearInterval(tta);
    });
    banners.onmouseout = window.onfocus=function () {
        tta=setInterval(wcc,3000);
    };
    window.addEventListener("onfocus",function () {
        tta=setInterval(wcc,3000);
    });
    let now = 0;
    let z = 10;
    let flag;
    let tta=setInterval(wcc,3000);
    function wcc( q ="i") {
        if(q==="i"){
            imgs[now].classList.add("left-chu");
            dians[now].classList.remove("active");
            now++;
            if(now ===imgs.length){
            now=0;
            }
            imgs[now].classList.add("right-jin");
            dians[now].classList.add("active");
        }else if(q=0){
            imgs[now].classList.add("right-chu");
            dians[now].classList.remove("active");
            now--;
            if(now===-1){
                now===imgs.length-1
            }
            imgs[now].classList.add("left-jin");
            dians[now].classList.add("active");
        }

        imgs[now].style.zIndex=z++;
    }
    imgs.forEach(function(ele,index){
        ele.addEventListener("animationend",function(){
            ele.className="";
            flag =true;
        })
    });
    dians.forEach(function (ele,index) {
        ele.onclick=function () {
            if(flag){
                flag = false;
            if(now < index) {
                imgs[now].classList.add("left-chu");
                imgs[index].classList.add("right-jin");
            }else if(now >index){
                imgs[now].classList.add("right-chu");
                imgs[index].classList.add("left-jin");
            }
            imgs[index].style.zIndex=z++;
            dians[now].classList.remove("active");
            dians[index].classList.add("active");
            now=index;
        }
        }
    });
    flag=true;
    nexts.onclick=function () {
        q ="i";
        if(flag){
            flag=false;
            wcc();
        }
    };
    flag=true;
    lefts.onclick=function () {
        q="0";
        if(flag){
            flag=false;
            wcc();
        }
    }
    
    
    
    
    
    
    
    
    
    
}