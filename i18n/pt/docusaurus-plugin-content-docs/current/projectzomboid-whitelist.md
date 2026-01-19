---
id: projectzomboid-whitelist
title: "Project Zomboid: Whitelist"
description: "Informações sobre como colocar seu servidor de jogos Project Zomboid na whitelist com a ZAP-Hosting → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver-projectzomboid
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Whitelist é um modo de controle de acesso que exige que você crie contas de usuário explicitamente antes que eles possam entrar. No Project Zomboid, isso é normalmente feito desativando o registro aberto na configuração do servidor e depois adicionando usuários via comandos no console.

<InlineVoucher />


## Ativando a Whitelist

Conecte-se ao seu servidor via FTP e abra o arquivo de configurações do servidor. Normalmente ele fica em `Zomboid/Server/` e tem o nome do seu servidor, por exemplo `servertest.ini` ou `<ServerName>.ini`. Localize a configuração `Open` e defina como false.

```ini
Open=false
```

Salve o arquivo e reinicie o servidor. Com o registro aberto desativado, somente as contas que você criar poderão entrar.

## Gerenciando Jogadores na Whitelist

Abra o Console ao Vivo no gerenciamento do servidor de jogos da ZAP-Hosting e crie contas para os jogadores permitidos. Use o comando adduser com um nome de usuário e senha.

```text
/adduser "username" "password"
```

Para remover o acesso de um usuário, retire-o da whitelist com o comando dedicado.

```text
/removeuserfromwhitelist "username"
```

Se você permitia registro aberto antes e quer converter as contas já conectadas em entradas na whitelist, use o comando que adiciona todos os usuários conectados atualmente à whitelist.

```text
/addalltowhitelist
```

## Verificando o Funcionamento da Whitelist

Depois que `Open=false` estiver ativo, um novo usuário que não foi adicionado com `/adduser` não deve conseguir entrar. Teste com uma conta na whitelist para confirmar o acesso.

Se usuários não listados ainda conseguirem entrar, confirme que você editou o arquivo `<ServerName>.ini` ativo e reiniciou o servidor.

## Conclusão

Se todas as etapas acima foram seguidas corretamente, sua whitelist está ativa e você pode controlar exatamente quem tem permissão para entrar no servidor. Se o acesso ainda não funcionar como esperado, reinicie o servidor mais uma vez e verifique o arquivo ou a saída dos comandos para confirmar que a mudança foi aplicada.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />