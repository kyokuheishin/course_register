const electron = require('electron');
const webdriver = require('selenium-webdriver');

const{
    app,
    BrowserWindow,
} = electron;

let mainWindow;

// var driver = new webdriver.Builder()
//     .usingServer('http://localhost:9515')
//     .forBrowser('chrome')
//     .build();

// function getpage(username,password) {
//     driver.get("https://cmate2.apu.ac.jp/campusapu/top.do");
//     var username_input = driver.findElement(By.name("userId"));
//     username_input.sendKeys(username);
//     var password_input = driver.findElement(By.name("password"));
//     password_input.sendKeys(password);
//     var login_button = driver.findElement(By.id("login"));
//     login_button.click();
// }

function createWindow(){
    mainWindow = new BrowserWindow({width:800,height:600});

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.webContents.openDevTools();

    // noinspection JSAnnotator
    mainWindow.on('closed',() => {
        mainWindow = null;
    });
}

app.on('ready',createWindow);

app.on('window-all-closed',() =>{
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () =>{
    if (mainWindow === null){
        createWindow();
    }
});