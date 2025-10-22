---
id: minecraft-addop
title: "Minecraft: Como Dar Direitos OP no Servidor"
description: "Descubra como dar direitos OP para jogadores e gerenciar permissões do servidor de forma eficaz para ter mais controle no jogo → Saiba mais agora"
sidebar_label: Permissões OP
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Dar direitos OP

Para poder dar direitos OP para você mesmo ou para outros jogadores, primeiro você precisa abrir o console, caso nenhum outro jogador tenha direitos OP suficientes até agora, para que a atribuição seja possível dentro do próprio jogo.

Para abrir o console, o servidor respectivo deve ser acessado primeiro via **Dashboard**. Na interface do servidor, você vai encontrar a opção "Live Console" no lado esquerdo da lista, na aba "INFORMAÇÕES".

![](https://screensaver01.zap-hosting.com/index.php/s/PAaZQPXF75aW4Bi/preview)

Agora você deve ver uma janela escura representando o console do servidor. Abaixo dela, tem um campo de entrada onde qualquer comando pode ser enviado para o console. Para dar os direitos OP, o comando "op player" (sem o "/") deve ser digitado no campo e depois clicar no botão verde "Enviar comando" para enviar o comando para o console.

![](https://screensaver01.zap-hosting.com/index.php/s/myba237CL5XMfKi/preview)

Depois de alguns segundos, o comando enviado deve aparecer no console, seguido pela mensagem "Made player a server operator", que indica que a ação foi bem-sucedida. Agora o jogador respectivo tem todos os direitos OP e pode, por exemplo, mudar o modo de jogo.

:::info
A distribuição dos direitos OP também pode ser feita diretamente no jogo agora, então você deve ajustar o nível de permissões conforme explicado no próximo passo, caso queira.
:::

## Nível de permissões

Os direitos OP são divididos em quatro níveis, sendo que o nível 4 é sempre o padrão. Cada nível contém permissões diferentes, para que os direitos possam ser distribuídos de forma geral entre os jogadores. As permissões de cada nível são as seguintes:

| Nível | Descrição | Permissões |
| :-----: |:-------------:| :-----:|
| 1 | Moderador | Pode fazer alterações na área protegida do spawn. |
| 2 | Gamemaster | Pode colocar e editar blocos de comando, além de executar vários comandos de cheat (ex: /gamemode). |
| 3 | Admin | Pode expulsar e banir jogadores, além de outros comandos que fazem parte da administração geral do servidor. Pode também nomear outros operadores. |
| 4 | Dono | Sem restrições. |

:::info
Instalando um plugin de permissões como o LuckPerms no seu servidor Bukkit/Spigot, você pode configurar permissões de forma muito mais específica e detalhada. Também é possível criar vários grupos, o que facilita a distribuição dos direitos.
:::

## Ajustar nível de permissões

Para ajustar o nível de um jogador, ele primeiro precisa ser nomeado como Operador, conforme explicado em "Dar direitos OP". Para ajustar o nível, o arquivo "ops.json" deve ser editado via conexão FTP.

Assim que a conexão com o servidor for estabelecida via FTP, você deve navegar até o diretório do servidor. No nosso caso, no FileZilla, clique com o botão direito no arquivo e selecione "Visualizar/Editar" no menu que aparecer.

![](https://screensaver01.zap-hosting.com/index.php/s/TTeL8WqnQfrdEDq/preview)

Agora o valor de "level" deve ser ajustado para o nível desejado para o jogador desejado, e o arquivo deve ser salvo com **CTRL+S**.

![](https://screensaver01.zap-hosting.com/index.php/s/WKQkAR3oALsSNAc/preview)

Para que as mudanças tenham efeito, o servidor precisa ser reiniciado, o que pode ser feito segurando o botão vermelho Parar na interface do servidor.

<InlineVoucher />