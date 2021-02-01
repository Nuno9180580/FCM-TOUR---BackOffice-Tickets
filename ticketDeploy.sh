# build
npm run build
# navegar para a pasta com o conteúdo compilado
cd dist
git init
git add -A 
git commit -m 'deploy'
git push -f https://github.com/BrunoJusta/TicketFCMTOUR.git master
cd ..