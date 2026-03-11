import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // 加载Vite开发服务器地址
  mainWindow.loadURL('http://localhost:5173/');

  // 打开开发者工具
  // mainWindow.webContents.openDevTools();
}

// 当Electron完成初始化并准备创建浏览器窗口时调用
app.whenReady().then(() => {
  createWindow();

  // 在macOS上，点击dock图标重新创建窗口
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 关闭所有窗口时退出应用
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
