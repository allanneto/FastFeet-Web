Iremos instalar 2 bibliotecas para utilizar o root import!

yarn add customize-cra react-app-rewired 

depois disso criar o arquivo config-overrides na pasta raiz do projeto pois o o react-app-rewired ira consumir esse arquivo

agora os imports poderemos referencias a pasta raiz que foi informado no arquivo com um '~'

para que isso funcione, va no package.json e altere os scripts start, build e test para react-app-rewired, e para o eslint nao da problema execute o seguinte codigo:
yarn add eslint-import-resolver-babel-plugin-root-import -
apos isso fazer as configurações do resolver no eslint

o CTRL+click na importação do arquivo para acessa-lo nao ira funcionar e para isso temos que criar um arquivo jsocnfig.json

Para trabalharmos com o formularios podemos utilizar a lib @rocketseat/unform que facilita a manipulação de arquivos de formularios

Instalar as libs do redux e sagas
"yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer"

Iremos utilizar o redux persist para persistir os dados no local storafe, quando der f5 ele nao perde os dados(ele nao vai deslogar quando der f5!)