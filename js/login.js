// JavaScript Document

//登录账户密码校验
function login(){
	var Uname=document.getElementById("username").value;
	var Pass=document.getElementById("password").value;
	var value1=(Uname=='Truman'||'truman'&&Pass=='aaa111');
	var value2=((Uname=='JMS'||'jms')&&Pass=='111aaa');
		if(value1){
			//alert("登陆成功！");
			document.frmlogin.action="Truman/Truman.html"; 
			}
		else if(value2){
			//alert("登陆成功！");
			document.frmlogin.action="/JiMoo/JiMoo.html"; 
			}
		else{
			alert("请核对账号和密码！");
			}
	}