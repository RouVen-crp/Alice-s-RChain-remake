const rho_deploy = require('./lib/rho_deploy.js');

//func_deploy_fromfile：从文件中读取Rho代码并进行部署。
rho_deploy.func_deploy_fromfile('./rho/deploy.rho', -1);
