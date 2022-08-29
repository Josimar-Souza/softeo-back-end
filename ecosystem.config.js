module.exports = {
  apps: [{
    name: 'Softeo-back-end',
    script: './server/server.js',
    instances: 4,
    exec_mode: 'cluster',
    max_memory_restart: '100M',
  }],
};
