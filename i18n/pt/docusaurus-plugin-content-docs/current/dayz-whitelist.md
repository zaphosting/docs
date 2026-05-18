---
id: dayz-whitelist
title: "DayZ: Whitelist"
description: "Informações sobre como colocar seu servidor de jogos DayZ na whitelist com a ZAP-Hosting → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver-dayz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Uma whitelist é uma lista de acesso que restringe quem pode entrar no seu servidor. O DayZ oferece um modo de whitelist integrado que você pode ativar e depois gerenciar jogador por jogador.

<InlineVoucher />


## Ativando a Whitelist

Conecte-se ao seu servidor via FTP e abra o arquivo principal de configuração `serverDZ.cfg`. Encontre a configuração da whitelist e ative-a.

```cfg
enableWhitelist = 1;
```

Em seguida, localize ou crie o arquivo de whitelist que seu host disponibiliza, geralmente chamado `whitelist.txt` e colocado junto dos arquivos de configuração do servidor. Adicione um SteamID64 por linha.

```txt
XXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXX
```

Salve todos os arquivos e reinicie o servidor para que a whitelist seja aplicada.

## Gerenciando Jogadores na Whitelist

Para adicionar um jogador, acrescente o SteamID64 dele no `whitelist.txt`, salve e reinicie o servidor. Para remover um jogador, apague a linha dele no `whitelist.txt`, salve e reinicie o servidor.

Mantenha o arquivo limpo, com um ID por linha. Comentários não são suportados universalmente, então evite texto extra na mesma linha, a menos que tenha certeza que seu servidor aceita.

## Verificando o Funcionamento da Whitelist

Após o reinício, tente conectar com uma conta que não esteja listada no `whitelist.txt`. O acesso deve ser negado. Depois, conecte com uma conta listada para confirmar que funciona.

Se jogadores listados não conseguirem entrar, verifique se você usou valores SteamID64 e se o servidor está carregando o mesmo `whitelist.txt` que você editou.

## Conclusão

Se todos os passos acima foram seguidos corretamente, sua whitelist está ativa e você pode controlar exatamente quem pode entrar no servidor. Se o acesso ainda não funcionar como esperado, reinicie o servidor mais uma vez e confira o arquivo ou a saída de comandos para confirmar que a alteração foi aplicada.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />