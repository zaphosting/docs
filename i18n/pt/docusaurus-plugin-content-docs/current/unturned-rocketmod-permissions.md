---
id: unturned-rocketmod-permissions
title: "Unturned: Ajustando permissões do servidor"
description: "Entenda como gerenciar e personalizar as permissões do servidor de jogos de forma eficaz para melhor controle e segurança → Saiba mais agora"
sidebar_label: Ajustar Permissões
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Preparativos
Para que os arquivos de configuração necessários sejam gerados pelo servidor, ele precisa ser iniciado primeiro.  
Se o servidor estiver online, você pode pará-lo novamente.  
Pois todos os arquivos necessários que nós ou o servidor precisávamos já terão sido criados.

## Abrir a Configuração
As permissões ficam armazenadas no arquivo "Permissions.config.xml".  
Você pode visualizar e editar esse arquivo facilmente pela nossa interface.  
Basta clicar na aba "Configs" na interface do seu servidor:

![](https://screensaver01.zap-hosting.com/index.php/s/cGyn9Ry3jaekEdQ/preview)

A configuração se chama "Rocket Permissions" e pode ser aberta clicando na caneta azul para editar:

![](https://screensaver01.zap-hosting.com/index.php/s/nLd2dHiPLn9eirH/preview)

## Entendendo a Configuração
A configuração parece complicada e complexa à primeira vista.  
Mas a gente te ajuda a entender!  
O arquivo é dividido em diferentes grupos.  
Os grupos são todos exibidos e listados na categoria <groups> </groups>.  
Começa com "<groups>" e termina com "</groups>":

Início:

![](https://screensaver01.zap-hosting.com/index.php/s/jzKgXwCa3zkxNds/preview)

Fim:

![](https://screensaver01.zap-hosting.com/index.php/s/apkYpiJjosJ4FCJ/preview)

Os grupos ficam listados entre esses marcadores.  
Por exemplo, todo esse bloco representa um grupo:

![](https://screensaver01.zap-hosting.com/index.php/s/ZKMeMb3twTBWrrx/preview)

No qual todos os parâmetros necessários são atribuídos ao grupo.

## Ajustando as permissões
Dentro do grupo você também vai encontrar a categoria "Permissions".  
Como você pode ver nesse print:

![](https://screensaver01.zap-hosting.com/index.php/s/9cT46tzXYWp6Hrk/preview)

Aqui podemos ajustar as permissões do grupo.  
Além de definir o tempo de espera para o comando poder ser usado novamente.  
Suponha que queremos dar ao grupo o direito de banir usuários.  
Então podemos colocar o seguinte:

![](https://screensaver01.zap-hosting.com/index.php/s/LDgWZxJ2YyCc6ac/preview)

Isso significa que o grupo agora pode banir pessoas no jogo, e como o "cool down" foi definido para 0 segundos, isso pode ser feito sem limite.

Se quisermos dar ao grupo o direito de se curar, pode ser configurado assim:

![](https://screensaver01.zap-hosting.com/index.php/s/yjSDbMM9sn7236m/preview)

Porém, o usuário só poderá usar o comando a cada 3600 segundos.  
O procedimento é o mesmo para outras permissões.  
Mas para algumas permissões, plugins correspondentes são necessários.

## Adicionando usuários ao grupo
Os grupos já foram criados com as permissões desejadas.  
Mas agora é preciso atribuir usuários ao grupo.  
Para isso, é necessário o Steam64ID dos usuários.  
Você pode descobrir isso clicando no link:  
https://steamid.io/

Depois de obter o Steam64ID, você pode inseri-lo na Configuração.  
Isso é feito com o parâmetro Member:

![](https://screensaver01.zap-hosting.com/index.php/s/WX2CxgZoQBCa4Lr/preview)

Um exemplo ficaria assim:

![](https://screensaver01.zap-hosting.com/index.php/s/RqkCrB5gM4jHT2t/preview)

Sempre crie uma nova linha para cada novo usuário que deve ser atribuído ao grupo.  
Depois de inserir todos os usuários desejados, salve a config clicando no botão "Save".  
Então, inicie o servidor e você estará no grupo dentro do jogo!

<InlineVoucher />