

# 说明

## windows需要编译环境 
```bash
# npm i 报错内容
gyp ERR! find VS msvs_version not set from command line or npm config
gyp ERR! find VS VCINSTALLDIR not set, not running in VS Command Prompt
gyp ERR! find VS could not use PowerShell to find Visual Studio 2017 or newer
gyp ERR! find VS looking for Visual Studio 2015
gyp ERR! find VS - not found
gyp ERR! find VS not looking for VS2013 as it is only supported up to Node.js 8
gyp ERR! find VS
gyp ERR! find VS **************************************************************
gyp ERR! find VS You need to install the latest version of Visual Studio
gyp ERR! find VS including the “Desktop development with C++” workload.
gyp ERR! find VS For more information consult the documentation at:
gyp ERR! find VS https://github.com/nodejs/node-gyp#on-windows
gyp ERR! find VS **************************************************************
gyp ERR! find VS
gyp ERR! configure error
gyp ERR! stack Error: Could not find any Visual Studio installation to use


#  需要安装 python 2.7，以下命令已包含  使用PowerShell 管理员模式执行此命令
$ npm install --global --production windows-build-tools
```





