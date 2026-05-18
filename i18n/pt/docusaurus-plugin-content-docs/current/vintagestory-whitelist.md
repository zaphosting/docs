---
id: vintagestory-whitelist
title: "Vintage Story: Whitelist"
description: "Informações sobre como colocar seu servidor Vintage Story na whitelist na ZAP-Hosting → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Whitelist é uma lista de acesso que restringe quem pode entrar no seu servidor. Vintage Story oferece um modo whitelist embutido que você pode ativar e depois controlar jogador por jogador.

<InlineVoucher />


## Ativando a Whitelist

Abra o console dentro do jogo e defina o modo whitelist no comando de configuração do servidor. Use o valor 1 para o modo whitelist para permitir apenas jogadores na whitelist.

```text
/serverconfig whitelistmode 1
```

Reinicie o servidor uma vez após ativar o modo para garantir que a configuração seja salva e aplicada corretamente na inicialização.

## Gerenciando Jogadores na Whitelist

Para liberar um jogador, adicione ele na whitelist usando o comando de jogador.

```text
/player PlayerName whitelist on
```

Para remover o acesso, desative a whitelist para esse jogador.

```text
/player PlayerName whitelist off
```

Se precisar conferir a configuração atual do servidor, imprima a configuração atual ou rode o comando whitelistmode sem mudar outros valores e confirme que continua definido como 1.

## Verificando o Funcionamento da Whitelist

Tente conectar com um jogador que não está na whitelist. A conexão deve ser rejeitada. Depois conecte com um jogador para quem você ativou `whitelist on`.

Se todo mundo ainda conseguir entrar, confirme que o `whitelistmode` está definido como 1 e que você executou os comandos no servidor correto.

## Conclusão

Se todos os passos acima foram seguidos certinho, sua whitelist está ativa e você pode controlar exatamente quem pode entrar no servidor. Se o acesso ainda não funcionar como esperado, reinicie o servidor uma vez e confira novamente o arquivo ou saída do comando para garantir que a mudança foi aplicada.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />