const electron = require('electron');
const {app, BrowserWindow, Tray, Menu, globalShortcut } = require('electron');



function createWindow() {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: __dirname + '/img/starwars_PNG28.png',
        transparent: true,
        frame: false
       
       
    })

    win.loadFile('index.html')


    let appIcon = new Tray(__dirname + '/img/starwars_PNG28.png')
    let contextMenu = Menu.buildFromTemplate([
        { label: 'Развернуть', click:  function(){
            win.show();
        } },
        { label: 'Закрыть', click:  function(){
            app.isQuiting = true;
            app.quit();
        } }
    ])
    globalShortcut.register('Ctrl+p', () => {
        win.show();
    })

    appIcon.setContextMenu(contextMenu)
    
    win.on('close', function (event) {
        win = null
    })

    win.on('minimize', function (event) {
        event.preventDefault()
        win.hide()
    })

    // win.webContents.openDevTools()
    win.setPosition(1000, 350);
    globalShortcut.register('Ctrl+o', () => {
        win.hide()
        
    })

}


app.on('ready', function(){
    createWindow();
    
    
})

app.on('activate', function(){
    if (win=null){
        createWindow();
    }
})