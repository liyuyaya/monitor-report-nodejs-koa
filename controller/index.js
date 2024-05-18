const fs = require("fs");
const path = require("path")

const importController = (app) => {
  const dirs = fs.readdirSync(__dirname).filter(file => /\.js$/.test(file) && file !== 'index.js') // 假设你不在 index.js 中做这个操作  
  dirs.forEach(dir => {
    const moduleName = path.basename(dir, '.js');
    try {
      if (moduleName) {
        const p = "./" + moduleName
        const m = require(p)
        app.use(m.routes(), m.allowedMethods())
      }
    } catch (error) {
      console.error(`Error importing module ${moduleName}:`, error);
    }
  })
}

module.exports = importController;