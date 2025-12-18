---
id: gameserver-backups
title: 'Servidor de jogos: Criar, baixar e importar backups'
description: "Descubra como criar e restaurar backups manuais ou automáticos para seu servidor de jogos e proteger seus dados → Saiba mais agora"
sidebar_label: Backups
services:
  - gameserver
  - premium-storage
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Oferecemos a possibilidade de criar backups individuais com um clique. Isso permite que você crie backups de forma fácil e sem muito esforço, além de poder importá-los a qualquer momento depois. Disponibilizamos esse recurso tanto para os arquivos do seu servidor de jogos quanto para os bancos de dados associados. Todos os backups são armazenados no seu servidor de armazenamento, que inclui 10GB de espaço gratuito por padrão. Se precisar de mais, você pode fazer upgrade para o Premium Storage.

Além de criar backups manualmente, eles também podem ser gerados de forma totalmente automática. Os backups podem ser feitos diariamente ou semanalmente em um horário especificado. Após restaurar um backup, o servidor estará no estado em que estava no momento da criação do backup.

<YouTube videoId="yUDAcfyDELc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/CTWHD2Lq4QqFWQw/preview" title="Como criar BACKUPS para seu Servidor!" description="Prefere entender melhor vendo as coisas na prática? A gente te ajuda! Mergulhe no nosso vídeo que explica tudo de forma simples. Seja porque está com pressa ou porque curte aprender de um jeito mais dinâmico!"/>

<InlineVoucher />

## Criar backups manualmente

Clique no botão verde **+** ao lado da lista de backups para criar um backup manualmente. O processo de backup começará em seguida.

:::info
O processo de criação do backup pode levar alguns minutos dependendo do tamanho dos arquivos do seu servidor!
:::

## Criar backups automaticamente

Na parte inferior da página, você encontrará mais opções, incluindo as configurações para backups automáticos. A opção **Criar backups automaticamente** precisa estar ativada para que esse recurso funcione. Além disso, é necessário definir o intervalo.

![](https://screensaver01.zap-hosting.com/index.php/s/gB9n6JspdNW73bj/preview)

Dependendo do jogo, geralmente também é uma boa ideia fazer backup do banco de dados, já que dados importantes como pontuações, permissões e muito mais costumam estar armazenados lá.

>⚠️ Ter espaço de armazenamento suficiente é essencial para criar backups regulares. Certifique-se de que sempre tenha espaço disponível.

## Baixar/deletar backups

Se quiser baixar ou deletar backups, você precisa se conectar ao servidor de armazenamento via FTP. Aqui você encontra instruções para usar FTP: [Acesso via FTP](gameserver-ftpaccess.md)
![](https://screensaver01.zap-hosting.com/index.php/s/tfJoBpaELEPKMij/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/q3E8XTX8gRQoasY/preview)

Lá, você pode ver as credenciais de usuário do seu servidor de armazenamento e o espaço de armazenamento atualmente usado. Se estiver conectado via FTP, poderá baixar ou deletar os backups diretamente.

<InlineVoucher />