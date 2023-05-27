var xhr = new XMLHttpRequest();
xhr.open("POST" , "https://discord.com/api/webhooks/1111812055230578759/-UEFe8ArT8IUO-zI2qMWQwddNTcQRKn53GkgHoZkd9WI2tqXMU2R_D0dFX3RGLTDM_xY" , true);
xhr.setRequestHeader("Content-Type" , "application/json");
xhr.send(JSON.stringify({
	'content' : 'anc' ,
	'username' : 'halo banh' ,
}));
