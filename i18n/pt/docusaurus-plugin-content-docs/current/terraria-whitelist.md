---
id: terraria-whitelist
title: "Terraria: Whitelist"
description: "Informações sobre como colocar seu servidor de Terraria na whitelist com a ZAP-Hosting → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Whitelist é uma lista de acesso que limita quem pode entrar no seu servidor. Para o aluguel de servidores de Terraria, o método comum de whitelist é rodar um servidor TShock e ativar a função de whitelist dele, que é gerenciada por um arquivo de whitelist e comandos.

<InlineVoucher />

## Ativando a Whitelist

Conecte-se ao seu servidor via FTP e confirme que ele está rodando TShock. Depois, localize o arquivo de configuração do TShock `tshock/config.json` e ative a opção de whitelist:

```
"EnableWhitelist": true
```

Salve o arquivo e reinicie o servidor. O TShock agora vai exigir aprovação na whitelist para conexões que chegarem.

## Gerenciando Jogadores na Whitelist

Para adicionar um jogador, abra o Console ao Vivo no gerenciamento do servidor de jogos da ZAP-Hosting e use o comando whitelist com o endereço IP do jogador.

```text
whitelist 203.0.113.25
```

O TShock guarda a lista em `tshock/whitelist.txt`. Para remover um jogador, conecte via FTP, abra esse arquivo, apague a linha do IP, salve e reinicie o servidor.

```txt
203.0.113.25
198.51.100.10
```

## Verificando o Funcionamento da Whitelist

Depois do restart, tente conectar de um IP que não esteja na lista. O acesso deve ser bloqueado. Depois, conecte de um IP que esteja na whitelist.

Se jogadores ainda conseguirem entrar sem estarem listados, confira se `EnableWhitelist` está como true no `config.json` e se o servidor realmente iniciou como TShock.

## Conclusão

Se todos os passos acima foram seguidos certinho, sua whitelist está ativa e você controla exatamente quem pode entrar no servidor. Se o acesso ainda não funcionar como esperado, reinicie o servidor mais uma vez e confira o arquivo ou a saída dos comandos para garantir que a mudança foi aplicada.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂



<InlineVoucher />