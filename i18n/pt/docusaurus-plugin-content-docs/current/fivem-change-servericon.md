---
id: fivem-change-servericon
title: "FiveM: Mude o ícone da lista de servidores"
description: "Descubra como personalizar seu servidor FiveM com um ícone PNG único de 96x96 para destacar a identidade do seu servidor → Saiba mais agora"
sidebar_label: Mudar ícone do servidor
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Quer personalizar seu servidor e definir um ícone customizado para ele? Isso é super fácil! Neste guia, você vai aprender como preparar uma imagem e configurá-la como o novo ícone customizado do seu servidor.

<InlineVoucher />

## Preparação
Para definir um ícone customizado no seu servidor FiveM, você precisa primeiro preparar um arquivo de imagem com tamanho de 96x96 pixels e no formato PNG (`.png`). Recomendamos usar um programa de edição de imagem como o GIMP, ou simplesmente usar uma ferramenta online para redimensionar e converter sua imagem atual. Depois de preparar a imagem seguindo esses parâmetros, você já pode fazer o upload e configurar ela na sua configuração do servidor.

## Instalação

### Enviando arquivos

O próximo passo é enviar sua imagem pronta para o seu servidor de jogos FiveM, o que é feito via FTP. Se você não está familiarizado com FTP, recomendamos dar uma olhada no nosso [guia de acesso FTP](gameserver-ftpaccess.md).

Depois de logar no FTP, navegue até `gXXXXXX/fivem/SEU_FRAMEWORK/` e envie o arquivo do ícone do servidor para essa pasta. No exemplo usamos o template padrão CFX. Faça o upload para a pasta do seu framework. Não esqueça o nome do arquivo!

![img](https://screensaver01.zap-hosting.com/index.php/s/BffobqB7CmdK2Wb/download)

### Ativação

Para garantir que o ícone seja carregado na inicialização do servidor, você precisa configurá-lo no arquivo `server.cfg` do seu servidor, no parâmetro `load_server_icon`. Por exemplo, se o nome do seu ícone for `zaphosting96x96`, o comando será:

```
# Carregando um ícone de servidor (arquivo PNG 96x96)
load_server_icon zaphosting96x96.png
```

:::info
Certifique-se de que o nome do arquivo da imagem no comando seja exatamente igual ao que você enviou, incluindo maiúsculas e minúsculas.
:::

## Conclusão

Se você seguiu todos os passos, seu novo ícone do servidor vai aparecer na próxima vez que reiniciar o servidor. Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />