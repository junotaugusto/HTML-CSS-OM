  let x = 10;
  let y = 20;
  function myFunction(callback){
    // soma o valor de duas variáveis
    var result = x + y;
    // exibe a mensagem
    console.log('O resultado é');
    // chama a função de retorno de chamada
    callback(result);
  }
  
  // chame a função myFunction e passe uma função de retorno de chamada
  myFunction(function(result){
    console.log(result, result);
  });