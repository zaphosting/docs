---
id: spaceengineers-whitelist
title: "Space Engineers: Whitelist"
description: Informações sobre como colocar seu servidor de Space Engineers na whitelist da ZAP-Hosting → Saiba mais agora"
sidebar_label: Whitelist
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Uma whitelist é uma lista de acesso que restringe quem pode entrar no seu servidor. Space Engineers geralmente usa uma whitelist baseada em grupo do Steam, onde somente membros de um grupo específico do Steam podem se conectar.

<InlineVoucher />

## Ativando a Whitelist

Crie um grupo no Steam para o seu servidor e adicione os jogadores que você quer permitir. Depois, conecte-se ao seu servidor via FTP e abra o arquivo `SpaceEngineers-Dedicated.cfg`.

Garanta que o servidor esteja configurado no modo privado e defina o ID do grupo no final da configuração.

```xml
<ServerType>PRIVATE</ServerType>
<GroupID>XXXXXXXXXXXXXXXXXX</GroupID>
```

Substitua o ID do grupo pelo ID do seu grupo do Steam. Salve o arquivo e reinicie o servidor.

## Gerenciando Jogadores na Whitelist

Para adicionar alguém à whitelist, convide essa pessoa para o grupo do Steam e certifique-se de que ela tenha entrado no grupo. Ela poderá se conectar assim que for membro do grupo.

Para remover alguém, retire essa pessoa do grupo do Steam. Depois que ela não for mais membro, não poderá mais se conectar. Se quiser trocar a whitelist para outro grupo, altere o valor de `<GroupID>` e reinicie o servidor.

## Verificando o Funcionamento da Whitelist

Após o reinício, tente conectar com uma conta Steam que não esteja no grupo do Steam. O servidor deve rejeitar a conexão. Depois, tente com uma conta que seja membro do grupo.

Se o acesso ainda estiver aberto, confirme que o servidor está rodando no modo privado e que a entrada `<GroupID>` está presente no arquivo ativo `SpaceEngineers-Dedicated.cfg`.

## Conclusão

Se todas as etapas acima foram seguidas corretamente, sua whitelist está ativa e você pode controlar exatamente quem pode entrar no servidor. Se o acesso ainda não funcionar como esperado, reinicie o servidor mais uma vez e verifique o arquivo ou a saída do comando para confirmar que a alteração foi aplicada.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />