#!/usr/bin/env node
require('child_process')
  .spawn('npm', ['start'], { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
