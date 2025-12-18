---
id: domain-gameserver-srv-link
title: "Domínio: Configurar redirecionamento para servidor de jogos"
description: "Descubra como redirecionar seu domínio ou subdomínio para um servidor de jogos para acesso fácil e melhor conectividade → Saiba mais agora"
sidebar_label: Redirecionamento para servidor de jogos
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Você pode redirecionar seu domínio inteiro ou apenas um subdomínio para o seu servidor de jogos. Isso é útil porque permite que as pessoas se conectem ao seu servidor de jogos via domínio, em vez de precisarem decorar endereços IP complicados compostos só por números. Neste guia, vamos mostrar o processo de configurar um domínio para redirecionar para seu servidor de jogos via registros DNS.

<InlineVoucher />

:::info
Lembre-se que pode levar até 24 horas para que as alterações nos registros DNS entrem em vigor!
:::

## Funcionalidade

Para redirecionar o endereço IP, ou um subdomínio é criado que aponta para o IP do servidor de jogos, ou você redireciona o domínio inteiro sem subdomínio. Isso é suficiente se o servidor de jogos usar a porta padrão do jogo. Se o servidor usar uma porta diferente da padrão, você precisa de um **registro SRV** adicional para redirecionar o subdomínio para o servidor de jogos.

:::info
Nem todos os jogos suportam o redirecionamento de domínio para a porta do jogo via registro SRV, então se informe antes se seu jogo suporta registros SRV.
:::

### Serviço SRV

O nome do serviço depende do jogo e sempre começa com um **underscore**. Por exemplo, o nome do serviço para um servidor de Minecraft é sempre **_minecraft** e para um servidor de FiveM é **_cfx**.

### Protocolo SRV

Como protocolo, especificamos o protocolo de internet usado para a conexão. Aqui estão disponíveis **UDP** e **TCP**. Qual protocolo usar depende do jogo, a especificação do protocolo também sempre começa com um **underscore** e é **_udp** ou **_tcp**.

## Preparação

Para redirecionar seu domínio para um servidor de jogos sem criar um subdomínio, primeiro abra seu domínio no dashboard, depois abra o gerenciamento de DNS no menu à esquerda.

![](https://screensaver01.zap-hosting.com/index.php/s/X8q3jdigEdZrRaB/preview)

Lá você verá todos os registros DNS existentes para seu domínio.

![](https://screensaver01.zap-hosting.com/index.php/s/zRzCnwbqYxaeSiJ/preview)

## Redirecionamento de domínio (Minecraft)

Primeiro você precisa descobrir o IP e a porta do servidor Minecraft para o qual quer redirecionar. Com essa informação, siga os passos abaixo.

No nosso exemplo usamos `testserver-domain.de` como nome do domínio, `123.123.123.123` como IP do servidor e `25500` como PORTA.

### Criar registro A

Para criar um novo registro, use o botão **Nova entrada**.

Isso abre uma janela com quatro campos que devem ser preenchidos:

![](https://screensaver01.zap-hosting.com/index.php/s/BYNiFMMwdwjEHwZ/preview)

O **Nome** é o domínio principal ou subdomínio pelo qual o redirecionamento para o IP vai acontecer, esse nome é livre para escolher. O **Tipo** fica em **A** nessa etapa. No **Valor** deve ser inserido apenas o IP do servidor Minecraft que você descobriu antes. No nosso exemplo fica assim:

![](https://screensaver01.zap-hosting.com/index.php/s/aRYpxgrySQqzton/preview)

Depois de salvar, essa entrada será exibida corretamente:

![](https://screensaver01.zap-hosting.com/index.php/s/eFLm8oqbo4cLtn8/preview)

### Criar registro SRV

Agora você precisa criar um registro SRV, que é usado para redirecionar a porta, necessário se você não usa a porta padrão. Clique novamente no botão **Nova entrada**.

No campo **Nome** você deve inserir o protocolo e o domínio de conexão. O nome do domínio que você colocar aqui será usado depois para conectar ao servidor. Como **Tipo** selecione **SRV** no menu suspenso:

![](https://screensaver01.zap-hosting.com/index.php/s/pH9F5kZins8wHn4/preview)

No campo **Valor** agora devem ser inseridos três valores: primeiro a prioridade, que pode ficar em 0 por padrão, depois a porta do servidor de jogos, no nosso exemplo `25500`, e por último o nome do domínio do registro **A** que você acabou de criar.

No nosso exemplo fica assim:

![](https://screensaver01.zap-hosting.com/index.php/s/Gf8kkc5srHEbC2N/preview)

### Solução de problemas & Resultado

:::important
No final da entrada deve ser colocado um ponto, sem esse ponto o sistema tenta adicionar o domínio automaticamente.
:::

Se essa dica não for seguida, o sistema vai redirecionar `minecraft.testserver-domain.de` para `minecraft.testserver-domain.de.testserver-domain.de` e o redirecionamento vai falhar.

## Redirecionamento de domínio (FiveM)
Primeiro você precisa descobrir o IP e a porta do servidor FiveM para o qual quer redirecionar. Com esses dados, siga os passos abaixo.

No nosso exemplo usamos `testserver-domain.de` como nome do domínio, `123.123.123.123` como IP do servidor e PORTA `30300`.

### Criar registro A
Para criar um novo registro, use o botão **Nova entrada**.

Isso abre uma janela com quatro campos que devem ser preenchidos:

![](https://screensaver01.zap-hosting.com/index.php/s/FigmCXEc3eJYz78/preview)

O **Nome** é o domínio principal ou subdomínio pelo qual o redirecionamento para o IP vai acontecer, esse nome é livre para escolher. O **Tipo** fica em **A** nessa etapa. No **Valor** deve ser inserido apenas o IP do servidor FiveM que você descobriu antes. No nosso exemplo fica assim:

![](https://screensaver01.zap-hosting.com/index.php/s/7dBKaJ4xomTiS9C/preview)

Depois de salvar, essa entrada será exibida corretamente:

![](https://screensaver01.zap-hosting.com/index.php/s/5DppfyXsADTT85t/preview)

### Criar registro SRV
Agora você precisa criar um registro SRV, que é usado para redirecionar a porta, necessário se você não usa a porta padrão. Clique novamente no botão **Nova entrada**.

No campo **Nome** você deve inserir o protocolo e o domínio de conexão. O nome do domínio que você colocar aqui será usado depois para conectar ao servidor. Como **Tipo** selecione **SRV** no menu suspenso:

![](https://screensaver01.zap-hosting.com/index.php/s/Yab6ksJNJFTLAeB/preview)

No campo **Valor** agora devem ser inseridos três valores: primeiro a prioridade, que pode ficar em 0 por padrão, depois a porta do servidor de jogos, no nosso exemplo `30300`, e por último o nome do domínio do registro **A** que você acabou de criar.

No nosso exemplo fica assim:

![](https://screensaver01.zap-hosting.com/index.php/s/te4LJ3yKRpTSi5W/preview)

### Solução de problemas & Resultado

:::important
No final da entrada deve ser colocado um ponto, sem esse ponto o sistema tenta adicionar o domínio automaticamente.
:::

Se essa dica não for seguida, o sistema vai redirecionar `fivem.testserver-domain.de` para `fivem.testserver-domain.de.testserver-domain.de` e o redirecionamento vai falhar.

<InlineVoucher />