---
id: dedicated-linux-password-change
title: "Servidor Dedicado: Alterar senha root para servidor Linux"
description: "Descubra como alterar e gerenciar sua senha do servidor com segurança via interface web ou console para um controle de acesso aprimorado → Saiba mais agora"
sidebar_label: Alterar Senha
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Interface Web

A senha pode ser alterada através da nossa interface web. Abra a página "Acesso e Segurança", que você encontra no menu à esquerda.

![](https://screensaver01.zap-hosting.com/index.php/s/Kt3B9n4sGpbpn5q/preview)

O campo da senha root está lá, onde você pode definir a senha desejada.

:::info
Lembre-se que a senha deve ter pelo menos 8 caracteres e conter letras maiúsculas e minúsculas (a-z/A-Z), números (1-9) e caracteres especiais (!@=#$%&-?_;:.,). Se não cumprir esses requisitos, a senha não será aplicada no servidor.
:::

Após digitar a senha, aparecerá uma mensagem pop-up que pode ser confirmada clicando em "ok".

![](https://screensaver01.zap-hosting.com/index.php/s/Ckc6PLB3tRY5epR/preview)

Se todos os requisitos forem atendidos, o sistema confirmará que a senha foi alterada com sucesso.


✅ A senha foi alterada com sucesso.


A partir de agora, a senha pode ser visualizada na nossa interface web por 3 horas. Depois disso, ela será apagada por motivos de segurança. Para visualizar a senha, basta clicar no ícone de olho em "Senha".

![](https://screensaver01.zap-hosting.com/index.php/s/XfpFrGg5LyKEiRL/preview)

Em seguida, aparecerá uma janela pop-up exibindo a senha.


## Console do Servidor

A senha também pode ser alterada via Console do Servidor, tanto acessando pelo Putty quanto pelo console serial.

:::info
Importante: Essa opção só pode ser usada se você ainda tiver acesso ao servidor.
:::

Se estiver logado no console, você pode alterar a senha com o comando "passwd". Depois, será necessário digitar a senha novamente para confirmar. Se as senhas coincidirem, o console confirmará a alteração.


Se as senhas não forem iguais, o console interromperá a operação. Nesse caso, você deve executar o comando "passwd" novamente.

:::info
Importante: Se você alterar a senha via Console, ela não poderá ser visualizada por 3 horas na nossa interface web em Acesso e Segurança.
:::


