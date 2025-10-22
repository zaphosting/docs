---
id: rust-becomeadmin
title: "Rust: Torne-se admin no seu próprio servidor"
description: "Descubra como atribuir permissões de administrador para controle total do servidor e gerencie seu jogo de forma eficaz → Saiba mais agora"
sidebar_label: Tornar-se admin
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis no jogo diretamente dentro dele. Todos os passos que você precisa seguir para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

## Usando RCON para se tornar Admin

Com o RCON, você pode executar um comando direto para se tornar admin.  
Primeiro, você deve [Conectar via RCON](rust-connectrcon.md).

Depois de conectado, vá até onde você pode executar comandos no console. No nosso exemplo, estamos usando o RustAdmin.

![](https://screensaver01.zap-hosting.com/index.php/s/zpJH32AHCySP8qT/preview)

Aqui você deve rodar o comando respectivo:  
`ownerid Steam64ID`

:::info
Por favor, substitua **Steam64ID** pelo seu Steam64ID real. Você pode encontrar seu Steam64ID usando esta [ferramenta](https://steamid.io/)
:::

Então você será automaticamente promovido a admin.

:::info
Se você estiver no jogo ao executar isso, basta relogar no servidor.
:::

Pronto, agora você é um administrador! :)

## Usando FTP para se tornar Admin

Como alternativa, você pode se tornar admin diretamente via FTP.  
Primeiro, conecte-se usando o [Acesso via FTP](gameserver-ftpaccess.md).

Depois de conectado com sucesso, navegue até o seguinte diretório:

`/g#####/rust/server/<seu_save_do_servidor>/cfg`

Nesta pasta, você precisará **criar** um **novo arquivo** chamado **users.cfg**

Neste arquivo, adicione suas entradas usando o formato:

`<role> <Steam64ID> <motivo/usuário>`

:::info
Por favor, substitua **Steam64ID** pelo seu Steam64ID real. Você pode encontrar seu Steam64ID usando esta [ferramenta](https://steamid.io/)
:::

Um exemplo de entrada:

```
ownerid 76561198114248380 "Você pode escrever qualquer coisa aqui para referência"
moderatorid 76561198114248380 "Pessoa de Teste"
```
:::info
Você precisará reiniciar seu servidor para que as alterações tenham efeito.
:::

## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />