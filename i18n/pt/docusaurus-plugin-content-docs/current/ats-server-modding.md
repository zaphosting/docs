---
id: ats-server-modding
title: "ATS: Instalando Mods/DLCs no seu servidor ATS"
description: "Descubra como turbinar sua experiência no American Truck Simulator com mods e DLCs tanto no cliente quanto no servidor → Saiba mais agora"
sidebar_label: Instalar Mods/DLCs
services:
  - gameserver-ats
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

American Truck Simulator tem suporte nativo para mods via Steam Workshop integrado ao jogo, permitindo que você adicione uma variedade enorme de mods tanto no seu jogo quanto no seu servidor, além dos DLCs comprados. Neste guia, vamos mostrar o processo de instalação dos mods no seu cliente e, depois, no seu servidor ATS.

<InlineVoucher />

## Adicionando Mods & DLCs

Pra começar, você precisa encontrar e escolher os mods e DLCs que quer usar. Dá pra fazer isso direto no jogo, acessando as opções **Gerenciador de Mods** e **Navegador de DLC** no menu principal.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

Você acessa os Mods pelo **Gerenciador de Mods** no menu principal, que facilita encontrar mods direto pelo Steam Workshop.

Depois de instalar alguns mods, não esqueça de movê-los para a lista de **Mods Ativos** usando as setas ao lado de cada mod.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Por fim, confirme as mudanças e entre no jogo, no modo single player.

### DLCs

Você pode acessar os DLCs que comprou na sua conta pelo **Navegador de DLC** no menu principal.

Nessa página, dá pra ver todos os DLCs que você tem e que estão instalados no seu cliente.

## Exportando Pacotes para o Servidor

Agora que você ativou os mods e está pronto no jogo, precisa exportar seus mods como pacotes para o servidor. Pra isso, tem que abrir o console dentro do jogo, que por padrão vem desativado.

Pra ativar, vá até o seguinte diretório e abra o arquivo `config.cfg`:
```
C:/Users/[seu_usuario]/Documents/American Truck Simulator
```

Nesse arquivo, encontre a linha `uset g_developer "0"` e troque por `uset g_developer "1"` pra ativar. Também ache a linha `uset g_console "0"` e substitua por `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

Reinicie o jogo, e agora você poderá abrir o console apertando uma dessas teclas, dependendo do layout do seu teclado:
```
` OU ~ OU \
```

Com tudo pronto, no console digite o comando abaixo para exportar os pacotes do servidor:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

Dois arquivos serão exportados para a pasta `Documents/American Truck Simulator`: os arquivos `server_packages.dat` e `server_packages.sii`, que contêm as informações dos DLCs/mods e serão usados na próxima etapa.

## Enviando os Pacotes para o Servidor

Com os pacotes do servidor exportados, você precisa enviá-los para o seu servidor ATS via FTP. Use nosso [guia de Acesso FTP](gameserver-ftpaccess.md) para te ajudar a conectar no servidor.

Quando estiver conectado, vá até a pasta raiz principal **American Truck Simulator**. Faça o upload dos dois arquivos dos pacotes do servidor para essa pasta. Se os arquivos já existirem, é só substituir.

![](https://screensaver01.zap-hosting.com/index.php/s/c5cYWL8eQKTzDg9/preview)

:::tip
Na hora de moddar, os mods precisam estar sincronizados entre o cliente e o servidor. Ou seja, se você entrar num servidor com mods que não tem, vai receber um aviso pra baixar os mods que estão faltando.
:::

Por fim, reinicie seu servidor para ativar e instalar os mods automaticamente. Pronto, você instalou mods com sucesso no seu servidor ATS.

<InlineVoucher />