---
id: satisfactory-connect
title: "Satisfactory: Conecte-se ao Servidor"
description: "Descubra como conectar e gerenciar seu servidor de jogos Satisfactory de forma eficaz para uma experiência de jogo sem interrupções → Saiba mais agora"
sidebar_label: Conectar ao Servidor
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

<YouTube videoId="EC4FXT5Mwb8" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/2tJwRJe9dbfgLBE/preview" title="Como criar um servidor de Satisfactory na ZAP e fazer upload do seu próprio save-game" description="Prefere entender melhor vendo as coisas em ação? A gente te entende! Mergulhe no nosso vídeo que explica tudo pra você. Seja porque está com pressa ou porque curte aprender da forma mais divertida possível!"/>

:::info
Se você já usa um layout de teclado QWERTY, não precisa fazer esses passos, apenas pressione CTRL + SHIFT + L e abra o Console com ~
:::

Para conectar ao seu servidor de jogos Satisfactory, é necessário abrir o console do jogo, existem duas formas de fazer isso.

<InlineVoucher />

## Abrir o Console

### Mudando o layout do teclado
Você pode trocar o layout do seu teclado em poucos passos.
Inicie seu jogo Satisfactory até chegar no menu principal.
Agora pressione `CTRL + Shift` e o layout do seu teclado deve mudar para `EN`.
Você pode conferir se funcionou, vá para a área de trabalho e veja se no canto inferior direito da barra de tarefas aparece `EN`.

![](https://screensaver01.zap-hosting.com/index.php/s/bq9baKmtrA34LXx/preview)

Se a troca foi bem-sucedida, volte para o jogo, agora pressione `CTRL + SHIFT + L`
Depois pressione `^` no seu teclado, isso deve abrir o console.

### Alterando a tecla que abre o Console
Pressione `Tecla Windows + R` ou procure no menu iniciar por `Executar`
Cole este caminho:

:::info
%LOCALAPPDATA%\FactoryGame\Saved\Config\WindowsNoEditor\ 
:::

e pressione Enter.

Agora abra o arquivo Input.ini com um editor de sua preferência (exemplo: bloco de notas)

:::info
Se o arquivo ainda não existir, crie ele.
:::

Adicione este texto no arquivo:

`[/script/engine.inputsettings]
ConsoleKey=F6`

![](https://screensaver01.zap-hosting.com/index.php/s/MkcZMMpmzZHaYcy/preview)

Salve e reinicie o jogo - agora você pode abrir o console com `F6`

## Conecte-se ao seu servidor de jogos Satisfactory
Copie o endereço IP do seu dashboard do servidor:

![](https://screensaver01.zap-hosting.com/index.php/s/7KJPTHTx4NJ8B3M/preview)

Abra o console no jogo, conforme os passos anteriores

Digite agora `open Endereço-IP-do-seu-servidor`.

![](https://screensaver01.zap-hosting.com/index.php/s/8dY8WTsS9ewQSGJ/preview)

e pressione Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/4isZiiDJrDwC7wE/preview)

Você está entrando no seu servidor de jogos Satisfactory!

## O HUB
O HUB já está colocado no mundo, você pode destruí-lo se quiser pressionando `F` e reposicioná-lo em outro local.
Você vai encontrar o HUB facilmente seguindo a marcação.

![](https://screensaver01.zap-hosting.com/index.php/s/EfmqDj78SiTeNtf/preview)

## Autosave
O servidor salva seu progresso a cada 5 minutos, você pode ver esses saves no gerenciador de savegames no dashboard do seu servidor.
Ele sempre mantém os últimos 6 saves (30 minutos) de progresso.

<InlineVoucher />