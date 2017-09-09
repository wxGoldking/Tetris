  var $newg=$('input:eq(0)');
        var $stop=$('input:eq(1)');
        var condi=0,ing=0;
       var index=0,timer=0;//标记量index代表方块类型
       var trs = document.getElementsByTagName("tr");
       var tds=[];
       for (var i = 0; i < trs.length; i++) {
           tds[i]=trs[i].getElementsByTagName('td');
       };//获取table中每个td对象，存放在tds二维数组中
       var arr=[],x=0,y=4,brr=[],pan=0,drr=[],score=0;//brr代表固定下来的方块
       var $score=$('#score');
       var index1=0,index2=0,index7=0,indexL=0,index5=0,indexT=0;
       var mi=0;
       while(mi++<17){
            tds[mi].indexOf=arr.indexOf;
       }
        function xuanze(){
                switch(index){
                    case 0:x>16&&(x=16);
                        drr=[tds[x][y],tds[x][y+1],tds[x+1][y],tds[x+1][y+1]];
                        arr=arr.concat(drr);
                    break;//O方块
                    case 1:
                        if(index1==0){
                            x>14&&(x=14);
                            drr=[tds[x][y+1],tds[x+1][y+1],tds[x+2][y+1],tds[x+3][y+1]];
                        }else if(index1==1){
                            x>16&&(x=16);
                            drr=[tds[x+1][y-1],tds[x+1][y],tds[x+1][y+1],tds[x+1][y+2]];
                        }
                        arr=arr.concat(drr);
                    break;//I方块
                    case 2:
                        if(index7==0){
                            x>15&&(x=15);
                            drr=[tds[x][y],tds[x][y+1],tds[x+1][y+1],tds[x+2][y+1]];
                        }else if(index7==1){
                            x>16&&(x=16);
                            drr=[tds[x][y+2],tds[x+1][y+2],tds[x+1][y+1],tds[x+1][y]];
                        }else if(index7==2){
                            x>15&&(x=15);
                            drr=[tds[x+2][y+2],tds[x][y+1],tds[x+1][y+1],tds[x+2][y+1]];
                        }else if(index7==3){
                            x>16&&(x=16);
                            drr=[tds[x][y],tds[x][y+1],tds[x][y+2],tds[x+1][y]];
                        }
                        arr=arr.concat(drr);
                    break;//7方块
                    case 3:
                        if(indexL==0){
                            x>15&&(x=15); 
                            drr=[tds[x][y+1],tds[x][y],tds[x+1][y],tds[x+2][y]];
                        }else if(indexL==1){
                            x>16&&(x=16);
                            drr=[tds[x][y],tds[x][y+1],tds[x][y+2],tds[x+1][y+2]]
                        }else if(indexL==2){
                            x>15&&(x=15);
                            drr=[tds[x][y+2],tds[x+1][y+2],tds[x+2][y+2],tds[x+2][y+1]];
                        }else if(indexL==3){
                            x>15&&(x=15);
                            drr=[tds[x+1][y],tds[x+2][y],tds[x+2][y+1],tds[x+2][y+2]];
                        }
                        arr=arr.concat(drr);
                    break;//反L方块
                    case 4:x>15&&(x=15);
                        if(index5==0){
                            drr=[tds[x][y],tds[x+1][y],tds[x+1][y+1],tds[x+2][y+1]];
                        }else if(index5==1){
                            drr=[tds[x+1][y+1],tds[x+1][y],tds[x+2][y],tds[x+2][y-1]];
                        }
                        arr=arr.concat(drr);
                    break;//5方块
                    case 5:
                        x>15&&(x=15);
                         if(index2==0){ 
                            drr=[tds[x][y+1],tds[x+1][y+1],tds[x+1][y],tds[x+2][y]];
                        }else if(index2==1){
                            drr=[tds[x+1][y],tds[x+1][y+1],tds[x+2][y+1],tds[x+2][y+2]];
                        }
                        arr=arr.concat(drr);
                    break;//2方块
                    case 6:
                        if(indexT==0){
                            x>15&&(x=15); 
                            drr=[tds[x][y],tds[x+1][y],tds[x+1][y+1],tds[x+2][y]];
                        }else if(indexT==1){
                            x>16&&(x=16);
                            drr=[tds[x][y],tds[x][y+1],tds[x][y+2],tds[x+1][y+1]];
                        }else if(indexT==2){
                            x>15&&(x=15);
                            drr=[tds[x][y+2],tds[x+1][y+1],tds[x+1][y+2],tds[x+2][y+2]];
                        }else if(indexT==3){
                            x>15&&(x=15);
                            drr=[tds[x+1][y+1],tds[x+2][y],tds[x+2][y+1],tds[x+2][y+2]];
                        }

                        arr=arr.concat(drr);
                    break;//T方块
                }
            }
        function newBlock(){//产生随机方块
                arr=[],x=0,y=4,pan=1;
                index=parseInt(Math.random()*7);
                xuanze();
                for (var j = 0; j < arr.length; j++) {
                    arr[j].className="move";
                };
            }
        function bottom(arr){//方块是否超出边界检测
            var m=1;
             while(m){
                    if(brr.indexOf(arr[m-1])!=-1){
                        return false;
                    }else if(m==arr.length){
                        return true;
                    }
                    m++;
                }
        }
        function stat(){//是否继续下落检测
                var crr=arr.slice(0,4);
                while(crr.length){
                    if(tds[17].indexOf(crr.pop())!=-1){
                       pan=false;
                       return pan;  
                    }
                }
                pan=bottom(arr);
                return pan;
        }
        function xiaohang(){//消行、计分
                var m=17;
                    while(m>=0){
                        var n=0,num=0;
                        while(n<10){
                            if(tds[m][n].className=="fix"){
                                if(num==9){
                                    score+=10;
                                    $score.html(''+score);
                                    var n1=0;
                                    while(n1<10){
                                        tds[m][n1].className="";
                                        brr.splice(brr.indexOf(tds[m][n1]),1);
                                        n1++;
                                    }
                                    for (var m1 = m-1; m1 >=0; m1--) {
                                            for (var n2 = 0; n2 < 10; n2++) {
                                                if(tds[m1][n2].className=="fix"){
                                                    tds[m1][n2].className="";
                                                    brr.splice(brr.indexOf(tds[m1][n2]),1);
                                                    tds[m1+1][n2].className="fix";
                                                    brr.push(tds[m1+1][n2]);
                                                }
                                            };
                                    };
                                    m++;
                                }
                                num++;
                            }
                            n++;
                        }m--;
                    }
        }
        function xialuo(){//自动下落
            if(brr.indexOf(tds[0][4])!=-1){
                condi=0;
                ing=0;
                $("p>b:eq(1)").fadeIn();
                return;
            } 
             timer=setInterval(function(){
                ;
                x++;
                xuanze();
                if(stat()){//继续下落
                        var i=0;
                        while(i++<4){
                            arr.shift().className="";
                        }
                        for (var i = 0; i < arr.length; i++) {
                            arr[i].className="move";
                        };
                }
                else {//无法继续下落
                    for (var i = 0; i < 4; i++) {
                            arr.pop();
                        };
                    clearInterval(timer);
                    //停表
                    for (var i = 0; i < arr.length; i++) {
                        arr[i].className="fix";
                    };
                    brr=brr.concat(arr);
                    xiaohang();//增加brr元素
                     while(arr.length>0){
                        arr.shift();//清空arr
                    }
                    newBlock();//产生新的方块
                    xialuo();//下落
                }
            },1000)
        }
        document.onkeydown=function(event){
            if(condi==1||ing==0) return;
            switch(event.keyCode){
                case 37: 
                    if(pan){
                        y--;
                        xuanze();
                        var crr=arr.splice(4);
                        var biaoji=true;
                        var bianjie=true;
                                for (var i = 0; i < crr.length; i++) {
                                    if(crr[i]==undefined){
                                        bianjie=false;
                                        break;
                                    }
                                };
                        while(crr.length){
                            if(brr.indexOf(crr.pop())!=-1){
                                biaoji=false;
                                break;
                            }
                        }
                        if(biaoji&&bianjie){
                            while(arr.length>0){
                                arr.shift().className="";
                            }
                            xuanze();
                           for (var i = 0; i < arr.length; i++) {
                               arr[i].className="move";
                           }
                       }
                       else y++;
                   }
                break;
                case 39:
                    if(pan){
                          y++;
                        xuanze();
                         var crr=arr.splice(4);
                        var biaoji=true;
                        var bianjie=true;
                                for (var i = 0; i < crr.length; i++) {
                                    if(crr[i]==undefined){
                                        bianjie=false;
                                        break;
                                    }
                                };
                        while(crr.length){
                            if(brr.indexOf(crr.pop())!=-1){
                                biaoji=false;
                                break;
                            }
                        }
                        if(biaoji&&bianjie){
                            while(arr.length>0){
                                    arr.shift().className="";
                                }
                                xuanze();
                               for (var i = 0; i < arr.length; i++) {
                                   arr[i].className="move";
                               };
                            }
                            else y--;
                        }
                break;
                case 40:
                        x++;
                        xuanze();
                        if(stat()){  
                            var i=0  
                            while(i++<4){
                                arr.shift().className="";
                            }            
                            for (var i = 0; i < arr.length; i++) {
                                arr[i].className="move";
                            };
                        }else{
                            var i=0  
                            while(i++<4){
                                arr.pop();
                            }
                            clearInterval(timer);
                            //停表
                            for (var i = 0; i < arr.length; i++) {
                                arr[i].className="fix";
                            };
                            brr=brr.concat(arr);
                            xiaohang();//增加brr元素
                             while(arr.length>0){
                                arr.shift();//清空arr
                            }
                            newBlock();//产生新的方块
                            xialuo();//下落   
                        }
                break;
                case 38://旋转方块
                function xuanzhuan(a){
                 var bianjie=true;
                    for (var i = 0; i < crr.length; i++) {
                        if(crr[i]==undefined){
                            bianjie=false;
                            break;
                        }
                    };
                    if(bottom(crr)&&bianjie){ 
                          
                        switch(a){
                            case 1:if(index1==0){
                                        index1=1;
                                }else if(index1==1){
                                    index1=0;
                                };
                            break;
                            case 5:if(index2==0){
                                        index2=1;
                                }else if(index2==1){
                                    index2=0;
                                };
                                break;
                            case 4:if(index5==0){
                                        index5=1;
                                }else if(index5==1){
                                    index5=0;
                                }
                            break;
                            case 2:if(index7==0){
                                        index7=1;
                                }else if(index7==1){
                                    index7=2;
                                }else if(index7==2){
                                    index7=3;
                                }
                                else if(index7==3){
                                    index7=0;
                                }
                            break;
                            case 3:if(indexL==0){
                                        indexL=1;
                                }else if(indexL==1){
                                    indexL=2;
                                }else if(indexL==2){
                                    indexL=3;
                                }
                                else if(indexL==3){
                                    indexL=0;
                                }
                            break;
                            case 6:if(indexT==0){
                                        indexT=1;
                                }else if(indexT==1){
                                    indexT=2;
                                }else if(indexT==2){
                                    indexT=3;
                                }
                                else if(indexT==3){
                                    indexT=0;
                                }
                            break;
                        }
                        var i=0  
                        while(i++<4){
                            arr.shift().className="";
                        }
                           arr=crr; 
                            drr=arr;
                                     
                           for (var i = 0; i < arr.length; i++) {
                            arr[i].className="move";
                        };
                    }
                }
                    if(index==1){//长条
                        switch(index1){
                            case 0: var crr=[tds[x+1][y-1],tds[x+1][y],tds[x+1][y+1],tds[x+1][y+2]];
                                xuanzhuan(index);
                            break;
                            case 1: var crr=[tds[x][y+1],tds[x+1][y+1],tds[x+2][y+1],tds[x+3][y+1]];
                                xuanzhuan(index);
                        }
                    }   
                    else if(index==5){//2方块
                            switch(index2){
                                case 0:var crr=[tds[x+1][y],tds[x+1][y+1],tds[x+2][y+1],tds[x+2][y+2]];
                                    xuanzhuan(index);
                                break;
                                case 1:var crr=[tds[x][y+1],tds[x+1][y+1],tds[x+1][y],tds[x+2][y]];
                                    xuanzhuan(index);
                            }
                    }
                    else if(index==4){//5方块
                        switch(index5){
                            case 0:var crr=[tds[x+1][y+1],tds[x+1][y],tds[x+2][y],tds[x+2][y-1]];
                                xuanzhuan(index);
                            break;
                            case 1:var crr=[tds[x][y],tds[x+1][y],tds[x+1][y+1],tds[x+2][y+1]];
                                xuanzhuan(index);
                        }
                    }
                    else if(index==2){//7方块
                            switch(index7){
                                case 0:var crr=[tds[x][y+2],tds[x+1][y+2],tds[x+1][y+1],tds[x+1][y]];
                                   xuanzhuan(index);
                                break;
                                case 1:
                                    var crr=[tds[x+2][y+2],tds[x][y+1],tds[x+1][y+1],tds[x+2][y+1]];
                                    xuanzhuan(index);
                                break;
                                case 2:
                                    var crr=[tds[x][y],tds[x][y+1],tds[x][y+2],tds[x+1][y]];
                                   xuanzhuan(index);
                                break;
                                case 3:
                                    var crr=[tds[x][y],tds[x][y+1],tds[x+1][y+1],tds[x+2][y+1]];
                                    xuanzhuan(index);
                                break;
                                }
                    }
                    else if(index==3){//反L方块
                            switch(indexL){
                                case 0:
                                    var crr=[tds[x][y],tds[x][y+1],tds[x][y+2],tds[x+1][y+2]];
                                   xuanzhuan(index);
                                break;
                                case 1:
                                    var crr=[tds[x][y+2],tds[x+1][y+2],tds[x+2][y+2],tds[x+2][y+1]];
                                    xuanzhuan(index);
                                break;
                                case 2:
                                    var crr=[tds[x+1][y],tds[x+2][y],tds[x+2][y+1],tds[x+2][y+2]];
                                    var bianjie=true;
                                    for (var i = 0; i < crr.length; i++) {
                                        if(crr[i]==undefined){
                                            bianjie=false;
                                            break;
                                        }
                                    };
                                    if(bottom(crr)&&bianjie){ 
                                        indexL=3;
                                        var i=0  
                                        while(i++<4){
                                            arr.shift().className="";
                                        }
                                        arr=crr;    
                                        drr=arr;         
                                        for (var i = 0; i < arr.length; i++) {
                                            arr[i].className="move";
                                    };
                                }
                                break;
                                case 3:
                                    var crr=[tds[x][y+1],tds[x][y],tds[x+1][y],tds[x+2][y]];
                                    xuanzhuan(index);
                                break;
                            }
                    }
                    else if(index==6){//T方块
                            switch(indexT){
                                case 0:
                                    var crr=[tds[x][y],tds[x][y+1],tds[x][y+2],tds[x+1][y+1]];
                                    xuanzhuan(index);
                                break;
                                case 1:
                                    var crr=[tds[x][y+2],tds[x+1][y+1],tds[x+1][y+2],tds[x+2][y+2]];
                                    xuanzhuan(index);
                                break;
                                case 2:
                                    var crr=[tds[x+1][y+1],tds[x+2][y],tds[x+2][y+1],tds[x+2][y+2]];
                                    xuanzhuan(index);
                                break;
                                case 3:
                                    var crr=[tds[x][y],tds[x+1][y],tds[x+1][y+1],tds[x+2][y]];
                                    xuanzhuan(index);
                                break;
                            }
                    }
            }
    }
    $newg.click(function(){
            $score.html('0');
            ing=1;
            condi=0;
            $("p>b:eq(0)").fadeOut();
            $("p>b:eq(1)").fadeOut();
            while(brr.length>0){
                brr.pop().className="";
            }
             while(arr.length>0){
                arr.pop().className="";
            }
            clearTimeout(timer);
            arr=[],x=0,y=4,brr=[],pan=0,drr=[],score=0;
            index1=0,index2=0,index7=0,indexL=0,index5=0,indexT=0;
            newBlock();
            xialuo();
            $newg.blur();
    })
    $stop.click(function() {
        if(ing==1&&condi==0){
            clearTimeout(timer);
            $("p>b:eq(0)").fadeIn();
            condi=1;
        }else if(ing==1&&condi==1){
            condi=0;
            clearTimeout(timer);
            $("p>b:eq(0)").fadeOut();
            xialuo();
        }else return
    });
    $("<b>Paused</b>").appendTo($("p.title")).css({
        "width":200,"height":100,"position":"absolute","left":"50%","top":200,
        "font-size":30,"color":"rgba(255,255,255,0.7)","margin-left":-100,"text-align":"center","display":"none"
    })//暂停文案
    $("<b>Game Over!</b>").appendTo($("p.title")).css({
        "width":200,"height":100,"position":"absolute","left":"50%","top":200,
        "font-size":30,"color":"rgba(255,255,255,0.7)","margin-left":-100,"text-align":"center","display":"none"
    })//游戏结束文案