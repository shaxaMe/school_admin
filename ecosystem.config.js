module.exports = {
  apps: [
    {
      name: 'NuxtADMIN',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './node_modules/nuxt/bin/nuxt.js',
      args:'start'
    }
  ]
}
