---
id: terraria-tmodloader-installmod
title: "Terraria: Instalação de mods (tModLoader)"
description: "Descubra como instalar e ativar mods do tModLoader para Terraria de forma fácil e turbinar sua experiência de jogo → Saiba mais agora"
sidebar_label: Instalar mods (tModLoader)
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Instalação de mods via tModLoader

O tModLoader para Terraria é uma modificação essencial que permite carregar mods no seu servidor de jogos Terraria. A instalação é feita via drag & drop e com apenas um ajuste no seu servidor, então é super fácil e rápido, feito em poucos minutos.


## Instalação do tModLoader no seu PC

Se você ainda não instalou o tModLoader, pode baixá-lo direto pelo Steam de graça. É só procurar por tModLoader na Steam Store ou usar o link: [tModLoader na Steam Store](https://store.steampowered.com/app/1281930/tModLoader/)

Depois de baixar e instalar, você pode iniciar o tModLoader direto pelo Steam.

## Adicionando mods no seu PC

No menu principal, abra a pasta de mods clicando em **Mods**, depois em **Manage Mods** e então em **Open Mod Folder**:

![](https://screensaver01.zap-hosting.com/index.php/s/KYXqfC3oaFeti3t/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/sPbWCz9KiY6n9dN/preview)

Na pasta que abrir, que por padrão fica em **C:\Users\UserName\Documents\My Games\Terraria\ModLoader\Mods**, você pode colocar os mods que quiser.
No exemplo, estamos instalando o Calamity-Mod.

![](https://screensaver01.zap-hosting.com/index.php/s/bbXjf6JpMKC6jzq/preview)

:::info
Um mod precisa sempre ter a extensão **.tmod**, senão não vai carregar no servidor!
:::

Depois, feche a pasta, clique em **Back** no jogo e depois em **Mods**: 

![](https://screensaver01.zap-hosting.com/index.php/s/95y5k6AfobCJJed/preview)

Lá você vai ver o mod que adicionou, que pode ativar clicando em **Disabled**:

![](https://screensaver01.zap-hosting.com/index.php/s/dCbgnKbeWkr2JeY/preview)

Pra ativar o mod, clique em **Reload Mods**, depois pode fechar o jogo e partir pra instalar o mod no seu servidor.


## Instalação dos mods no seu servidor

Pra instalar o mod no seu servidor, conecte via FTP. Como fazer isso você confere aqui: [Acesso via FTP](gameserver-ftpaccess.md)

Navegue até o diretório: /g******/terraria/mods/ e coloque o arquivo **.tmod** que você usou antes:

![](https://screensaver01.zap-hosting.com/index.php/s/7NtFqes4g9JfQLW/preview)

:::info
Se não existir o arquivo **enabled.json**, você precisa iniciar o servidor uma vez pra ele ser criado. Ou então pode criar o arquivo manualmente.
:::

Abra o arquivo **enabled.json** com **Clique Direito > Editar** e adicione o nome do seu mod, ficando assim:

![](https://screensaver01.zap-hosting.com/index.php/s/FECRXyNGsNNwadd/preview)

Se quiser adicionar vários mods, faça assim: 

![](https://screensaver01.zap-hosting.com/index.php/s/dtSqazRiH6zBRqD/preview)

:::info
Lembre-se de colocar uma vírgula depois de cada nome de mod, exceto no último!
:::

Agora pode fechar a conexão FTP, iniciar seu servidor e conectar nele com o tModLoader que você baixou pelo Steam.

Apertando **ESC**, depois clicando em **Settings** e em **Mod Configuration**, você vai ver os mods carregados no servidor:

<InlineVoucher />