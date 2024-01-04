function fnLogin() {

    var oUname = document.getElementById("uname")
   
    var oUpass = document.getElementById("upass")

    var lUname = document.getElementById("lname")
   
    var lUpass = document.getElementById("lpass")
   
    var oError = document.getElementById("error_box")
   
    var isError = true;

    lUname = "admin";
    lUpass = "admin";
   
    if (oUname.value.length > 20 || oUname.value.length < 6) {
   
     oError.innerHTML = "用户名请输入6-20位字符";
     isError = false;
   
     return;
   
    }
    else if((oUname.value.charCodeAt(0)>=48) && (oUname.value.charCodeAt(0)<=57)){
   
     oError.innerHTML = "首字符必须为字母";
   
     return;
   
    } 
    if (oUpass.value.length > 20 || oUpass.value.length < 6) {
   
     oError.innerHTML = "密码请输入6-20位字符"
   
     isError = false;
   
     return;
   
    }
   
    window.alert("登录成功");
    location.href = "home.html";
   }
   