//为了分页，不把n写死了
let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET',`/page${n + 1}`);
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response);

            const array = JSON.parse(request.response);
            array.forEach(item=>{
                const li = document.createElement('li');
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1;
        }
    };
    request.send();
}


getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/5.json');
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200){
            //查看请求响应的字符串类型
            console.log(typeof request.response);
            //把符合json的字符串转换成js
            const object = JSON.parse(request.response);
            myName.textContent = object.name;
        }
    };
    request.send();
}



getXML.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml');
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
};

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET','/3.html');
    request.onload = () => {
        //创建div标签
        const div = document.createElement('div');
        //填写div内容
        div.innerHTML = request.response;
        //插入到body里
        document.body.appendChild(div);
    };
    request.onerror = () => {};
    request.send();
}


getJS.onclick = () =>{
    // 创建请求对象
    const request = new XMLHttpRequest();
    //调用open方法选择请求方式
    request.open('GET','/2.js');
    // 监听请求是否成功
    request.onload= () =>{
        //把响应的内容打印出来
        console.log('request.response');
        console.log(request.response);
        //创建script标签
        const script = document.createElement('script');
        //填写script内容
        script.innerHTML = request.response;
        //把script插到body里
        document.body.appendChild(script);
    };
    request.onerror= () =>{};
    //在写发送请求时忘记写括号了
    request.send();
}

/*ajax在js里请求到css渲染 */
getCSS.onclick =() =>{
    const request = new XMLHttpRequest();
    request.open("GET","/style.css");
    request.onreadystatechange= () =>{
        console.log(request.readyState);
        //加载完成是4
        if(request.readyState === 4){
            //下载完成,成功是200多,300多会重新发送请求，400多就会发送失败
            if(request.status>=200 && request.status < 300){
                //创建 style 标签
                const style = document.createElement('style');
                //填写 style 内容
                style.innerHTML = request.response;
                //插到 index.html的头部里
                document.head.appendChild(style);
            }else{
                alert('加载css 失败');
            }
        }
    };
    //把请求发送出去
    request.send();
}