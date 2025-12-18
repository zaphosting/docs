---
id: fivem-notlisted
title: "FiveM: Servidor não aparece na lista de servidores"
description: "Descubra como resolver problemas de listagem do servidor e garantir que seu servidor apareça corretamente na lista → Saiba mais agora"
sidebar_label: Servidor não na lista
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Se o servidor não aparece na lista de servidores, isso pode acontecer por vários motivos. Se este guia não resolver o problema, pedimos que entre em contato com nosso [Suporte](https://zap-hosting.com/en/customer/support/).

<InlineVoucher />

## Erro de configuração

Frequentemente, erros simples de configuração causam esse problema. Primeiro, devemos verificar se o nosso servidor desativou a listagem, para isso confira a linha `sv_master1`:

![](https://screensaver01.zap-hosting.com/index.php/s/KBH8deTbXxfrWtB/preview)

:::info
Essa linha deve **sempre** estar comentada com um #, se não estiver, o servidor não será listado.
:::


Também é importante verificar o nome do servidor (`sv_hostname`):

![](https://screensaver01.zap-hosting.com/index.php/s/9KyEj4tNQWRYxdB/preview)


Nesse caso, está faltando a aspas no final da linha. Alguns nomes de servidor podem apresentar problemas por causa da formatação, recomendamos remover caracteres especiais, como [DE], ou letras como ä, ü, ö.

## Recursos problemáticos

Também é possível que recursos estejam impedindo o servidor de ser listado. Nesse caso, recomendamos remover os recursos instalados por último e deixar o servidor online por cerca de 1 hora. Na maioria dos casos, ele deve voltar a aparecer.

## Reinstalação

Se nada disso ajudar, recomendamos uma instalação limpa, que vai resetar todos os arquivos do servidor para o padrão.

:::info
Não esqueça de fazer um backup antes de reinstalar, caso contrário os dados do servidor serão perdidos.
:::

<InlineVoucher />