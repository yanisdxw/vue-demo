module.exports = {
    devServer: {
      host: 'localhost',
      port: 8090, //设置本地默认端口 选填
      proxy: { //设置代理，必须填
        "/api": { //设置拦截器 拦截器格式 斜杠+拦截器名字，名字可以自己定
            target: "https://app165.acapp.acwing.com.cn", //代理的目标地址,后端跑的地址，用y总的可以填https://app165.acapp.acwing.com.cn
            changeOrigin: true,
            ws: true
        },
        "/myspace": { 
            target: "https://app165.acapp.acwing.com.cn", 
            changeOrigin: true,
            ws: true
        }
      }
  }
}