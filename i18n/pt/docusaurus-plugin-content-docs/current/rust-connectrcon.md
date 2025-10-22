---
id: rust-connectrcon
title: "Rust: Conectando ao servidor via RCON"
description: "Descubra como gerenciar seu servidor remotamente usando RCON para execução eficiente de comandos e controle → Saiba mais agora"
sidebar_label: Conectar via RCON
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## O que é RCON?

RCON é um protocolo para executar comandos no servidor sem precisar de acesso direto ao console.

<InlineVoucher />

### Ativar WebRCON

Antes de conectar, você precisa garantir que o Web RCON está ativado.  
Para ativar, vá até a aba **Configurações**.

![](https://screensaver01.zap-hosting.com/index.php/s/RqpZcnBcEHY3gN2/preview)

Depois, ative diretamente nessa página.  
![](https://screensaver01.zap-hosting.com/index.php/s/wJ5psnbAneZ6rMD/preview)

:::info
Será necessário reiniciar o servidor para que a alteração tenha efeito.  
:::

### Instalar programa RCON

Você vai precisar se conectar usando um programa RCON. Existem vários disponíveis para usar.  
Para este exemplo, e como recomendação, você pode baixar o [RustAdmin](https://www.rustadmin.com/).

Você pode instalar direto pelo botão no site deles.  
![](https://screensaver01.zap-hosting.com/index.php/s/zNtESocaQPFwzCg/preview)

## Conectar via RCON

Depois de abrir o WebAdmin, clique em **Servidor** no topo. Depois clique em **Conectar**.

:::info
Seu servidor precisa estar totalmente ONLINE para ser acessível via RCON.  
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bHLwGDCqH52Bye8/preview)

Você será redirecionado para a página de Configuração.  
Aqui você deve inserir as informações do seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/qmQFd7S79EpYWTE/preview)

:::info
DICA: A Porta RCON e a Senha RCON estão na aba **Configurações** onde você ativou o WebRCON.  
:::

Depois de inserir os dados, salve a configuração.

![](https://screensaver01.zap-hosting.com/index.php/s/FDMqdsfAHrbiTpt/preview)

Então clique em Servidor -> Conectar.

![](https://screensaver01.zap-hosting.com/index.php/s/4DLGZiQ5X6WJrzA/preview)

Se conectar com sucesso, aparecerá **Conectado** em letras verdes na parte inferior.

![](https://screensaver01.zap-hosting.com/index.php/s/qzq68ENHzXGK69T/preview)

Agora você pode usar o RCON para gerenciar seu servidor! :) 


<InlineVoucher />