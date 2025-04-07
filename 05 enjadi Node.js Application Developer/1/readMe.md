1. check syntax node -c valid.js / invalid.js 
2. evaluasi node --eval "console.log(require('crypto').randomBytes(32).toString('hex'));" pada terminal
3. print node -p "require('crypto').randomBytes(32).toString('hex')" pada terminal
4. Preloading CommonJS Module node -r ./env-setup.js app.js , on terminal