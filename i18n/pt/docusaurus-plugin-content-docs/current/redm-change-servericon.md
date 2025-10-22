---
id: redm-change-servericon
title: "RedM:  Mude o ícone da lista de servidores"
description: "Descubra como personalizar o ícone do seu servidor RedM com uma imagem PNG perfeita de 96x96 para um visual único → Saiba mais agora"
sidebar_label: Mudar ícone do servidor
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Quer personalizar seu servidor e definir seu próprio ícone customizado? Isso é super fácil! Neste guia você vai aprender como preparar uma imagem e configurá-la como o novo ícone customizado do seu servidor.

<InlineVoucher />

## Preparação
Para definir um ícone customizado para seu servidor RedM, você precisa primeiro preparar um arquivo de imagem com tamanho de 96x96 pixels e no formato PNG (`.png`). Recomendamos usar um programa de edição de imagem como o GIMP, ou simplesmente usar uma ferramenta online para redimensionar e converter sua imagem atual. Depois de preparar a imagem seguindo esses parâmetros, você estará pronto para fazer o upload e configurá-la na configuração do seu servidor.

## Instalação

### Enviando arquivos

O próximo passo é enviar sua imagem pronta para o seu servidor de jogos RedM, o que é feito via FTP. Se você não está familiarizado com FTP, recomendamos dar uma olhada no nosso [guia de acesso FTP](gameserver-ftpaccess.md).

Depois de logar no FTP, navegue até `gXXXXXX/redm-txadmin/SEU_FRAMEWORK/` e envie o arquivo do ícone do servidor para essa pasta. O template padrão CFX é usado neste exemplo. Faça o upload para a pasta do seu próprio framework. Não esqueça o nome do arquivo.

![img](https://screensaver01.zap-hosting.com/index.php/s/XyxtsR2FbmjD6SM/download)

### Ativação

Para garantir que o ícone seja carregado na inicialização do servidor, você deve configurá-lo no arquivo `server.cfg` do seu servidor, no parâmetro `load_server_icon`. Por exemplo, se você nomeou seu ícone como `zaphosting96x96`, o comando será:

```
# Carregando um ícone de servidor (arquivo PNG 96x96)
load_server_icon zaphosting96x96.png
```

:::info
Certifique-se de que o nome do arquivo da imagem no comando seja exatamente igual ao que você enviou, incluindo diferenciação entre maiúsculas e minúsculas.
:::

## Conclusão

Se você seguiu todos os passos, seu novo ícone do servidor deve aparecer na próxima vez que reiniciar o servidor. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />