---
id: dayz-becomeadmin
title: "DayZ: Torne-se um Admin"
description: "Descubra como ter controle total do servidor atribuindo direitos de admin e gerenciando as opções do jogo de forma eficaz → Saiba mais agora"
sidebar_label: Torne-se um Admin
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Atribuir direitos de admin permite que você gerencie seu servidor com controle total de forma fácil e completa. Como admin, você tem a oportunidade de aplicar todas as opções e funções disponíveis no jogo diretamente dentro do game. A seguir, explicamos todos os passos necessários para você atribuir direitos de admin ao seu servidor.  
<InlineVoucher />

## Configuração

A configuração dos direitos de admin é feita através do arquivo de configuração do servidor. Você pode acessar os arquivos de configuração do seu servidor de jogos na gestão do servidor, em **Configs**. Lá, você encontrará uma visão geral dos arquivos de configuração disponíveis. Abra o **server.DZ.cfg** clicando no botão azul.

![](https://screensaver01.zap-hosting.com/index.php/s/n6FSdPnYxxWp4Po/preview)

No arquivo de configuração, você deve encontrar a entrada **passwordAdmin**. Aqui, você precisa definir a senha desejada para o acesso. Digite a senha que quiser e clique no botão **Salvar** abaixo.

![](https://screensaver01.zap-hosting.com/index.php/s/H3ndjqRYBPXRgRK/preview)

Para aplicar a mudança, o servidor precisa ser reiniciado. Depois disso, conecte-se ao seu servidor e abra o chat dentro do jogo. Execute o seguinte comando para fazer login como admin:

```
#login senha
```



## Comandos mais usados

Abaixo você encontra uma lista de alguns comandos disponíveis que pode usar com suas permissões de administrador: 

| COMANDO                                     | DESCRIÇÃO                                                  |
| :------------------------------------------ | :----------------------------------------------------------- |
| #login senhaadmin                          | Fazer login como Admin do servidor.                           |
| #logout                                     | Fazer logout do admin.                                       |
| #mission nomearquivo Dificuldade            | Seleciona a missão pelo nome conhecido e define a dificuldade - o parâmetro dificuldade é opcional e, se não definido, mantém a dificuldade atual. |
| #missions                                   | Seleciona uma missão.                                        |
| ##restart                                   | Reinicia uma missão.                                         |
| #reassign                                   | Começa tudo do zero e reatribui os papéis.                  |
| #shutdown                                   | Desliga o servidor.                                          |
| #restartserver                              | Reinicia o servidor.                                         |
| #shutdownserveraftermission                 | Após o fim da missão, o servidor é desligado.               |
| #restartserveraftermission                  | Após o fim da missão, o servidor é reiniciado.              |
| #init                                       | Recarrega o arquivo de configuração do servidor carregado pelas opções -config. |
| #exec ban Nome#exec ban ID#exec ban #Player | Permite banir um jogador.                                    |
| #kick Nome#kick ID#kick #Player             | Permite expulsar um jogador do servidor.                     |
| #monitor (intervalo em segundos)            | Mostra informações de desempenho do servidor. Se o intervalo for 0, o monitoramento para. |
| #monitords (intervalo em segundos)          | Mostra informações de desempenho no console do servidor. Se o intervalo for 0, o monitoramento para. |
| #debug off                                  | Desativa o modo de depuração.                               |
| #debug (intervalo em segundos)              | O intervalo padrão é 10 se nenhum outro for selecionado.    |
| #debug (comando) (param)                    | Existem alguns comandos disponíveis: JIPQueueuserQueuecheckFiletotalSentuserSentuserInfo Você pode desativar cada comando adicionando o parâmetro off após o comando, ex: #totalSent off. A saída varia entre os comandos. Alguns enviam para o arquivo de log, outros para a tela, etc. Atenção: você precisará de um debugger capaz de capturar OutputDebugString rodando na máquina cliente. |
| #debug (comando)                            | Fazer logout do admin.                                       |
| #logout                                     | Existem dois comandos disponíveis: console - Envia o que está no console do servidor para o remetente. von - Saída no logFile definido no server.cfg, ex: o arquivo de log pode se chamar “server_console.log” Você verá uma confirmação desses comandos nos canais de chat. |


## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />