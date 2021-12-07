Comandos executados

#Instala todos as dependência necessarios para a aplicação rodar
    - run: npm install
    
#Inicia a execução dos testes     
    - run: npm run cy:run
      continue-on-error: true

#Comandos para geração do relatorio 
    - run: npm run report:merge
    - run: npm run report:mocha

