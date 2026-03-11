---
id: starrupture-mods
title: "StarRupture: Instalar Mods"
description: "Aprenda como instalar mods no seu servidor e cliente StarRupture para turbinar o gameplay → Saiba mais agora"
sidebar_label: Instalar Mods
services:
- gameserver-starrupture
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Mods permitem expandir o gameplay do StarRupture adicionando novas mecânicas, conteúdo, melhorias de qualidade de vida ou ajustes no gameplay criados pela comunidade. Muitos mods de StarRupture são distribuídos por plataformas comunitárias como o NexusMods e podem ser instalados tanto no servidor quanto localmente no cliente.

Instalar mods no seu servidor garante que o ambiente do servidor carregue o conteúdo modificado, enquanto instalar localmente permite que seu cliente do jogo use os mesmos arquivos ao conectar em servidores com mods.

<InlineVoucher />

## Instalando mods no servidor

Para instalar mods no seu servidor StarRupture, primeiro baixe o arquivo do mod desejado de uma fonte confiável como o **NexusMods**.

![img](https://screensaver01.zap-hosting.com/index.php/s/rM4WR4gW2KLyzxz/preview)

Antes de enviar o mod, certifique-se de que seu servidor está parado para evitar conflitos de arquivos durante a instalação. Depois, conecte-se ao seu servidor via [FTP](gameserver-ftpaccess.md) usando um cliente FTP. Uma vez conectado, navegue até o seguinte diretório no seu servidor:

```
/home/container/StarRupture/Content/Paks
```
Envie o arquivo `.zip` do mod baixado para essa pasta. Após o upload ser concluído, extraia o conteúdo do arquivo diretamente dentro do diretório `Paks`. Depois que os arquivos forem extraídos, volte ao painel de controle do seu servidor e inicie o servidor novamente.

Durante a inicialização, o servidor vai detectar e carregar automaticamente os mods instalados.

## Instalando mods no cliente

Alguns mods de StarRupture também precisam ser instalados localmente no cliente. A maioria dos mods instalados localmente permanece ativa ao conectar em servidores. Primeiro, baixe o mod desejado de uma fonte confiável como o NexusMods.

Depois, abra sua **Biblioteca Steam**, clique com o botão direito em **StarRupture**, passe o mouse sobre **Gerenciar** e selecione **Procurar arquivos locais**. Dentro do diretório de instalação do jogo, localize o seguinte caminho:

```
StarRupture/StarRupture/Content/Paks
```

Transfira o arquivo `.zip` do mod baixado para essa pasta. Após copiar o arquivo, extraia o conteúdo do arquivo diretamente na pasta `Paks`. Depois de extraído, o mod será carregado automaticamente na próxima vez que você iniciar o jogo.

## Conclusão

Parabéns! Você instalou com sucesso mods para StarRupture tanto no servidor quanto no cliente. Com os mods instalados, você pode ampliar a experiência de jogo com novas funcionalidades, mecânicas e melhorias criadas pela comunidade.

Se tiver mais dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />