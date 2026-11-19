const {app,BrowserWindow}=require('electron');
app.whenReady().then(()=>{const w=new BrowserWindow({width:470,height:840,autoHideMenuBar:true,webPreferences:{webSecurity:false}});w.loadFile('www/index.html')});
app.on('window-all-closed',()=>app.quit());
