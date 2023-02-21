const { app, dialog } = require('electron')

const initApp = async () => {
    const optionList = JSON.parse(process.env.args)
    const { response: optionIndex } = await dialog.showMessageBox({
        type: 'info',
        title: '提示',
        message: '请选择您要使用的环境配置',
        detail: '默认选中第一项，选中后会读取env目录下对应的文件配置，合并.env后输出',
        defaultId: 0,
        buttons: optionList
    })
    // 退出
    app.quit()
    console.log(optionIndex)
}
app.on('ready', initApp)

