---
id: ets2-server-modding
title: "ETS2: Instalando Mods/DLCs no seu servidor ETS2"
description: "Descubra como turbinar sua experiência no Euro Truck Simulator 2 adicionando mods e DLCs para um gameplay mais imersivo → Saiba mais agora"
sidebar_label: Instalar Mods/DLCs
services:
  - gameserver-factorio-ets2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O Euro Truck Simulator 2 tem suporte nativo para mods via Steam Workshop integrado ao jogo, permitindo que você adicione uma variedade enorme de mods tanto no seu jogo quanto no seu servidor, além dos DLCs comprados. Neste guia, vamos mostrar o processo de instalação dos mods no seu cliente e depois no seu servidor ETS2.

<InlineVoucher />

## Adicionando Mods & DLCs

Para começar, você precisa encontrar e selecionar os mods e DLCs que quer usar. Você pode fazer isso dentro do jogo acessando as opções **Gerenciador de Mods** e **Navegador de DLC** no menu principal.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

Você acessa os Mods pela opção **Gerenciador de Mods** no menu principal, que facilita encontrar mods direto pelo Steam Workshop.

Depois de instalar alguns mods, certifique-se de movê-los para a lista de **Mods Ativos** usando as setas ao lado de cada mod.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Por fim, confirme as mudanças e entre no jogo, no modo single player.

### DLCs

Você pode acessar os DLCs que comprou na sua conta pela opção **Navegador de DLC** no menu principal.

Nessa página, você vê todos os DLCs que possui e que estão instalados no seu cliente.

## Exportando Pacotes para o Servidor

Agora que você ativou os mods e está pronto no jogo, precisa exportar seus mods como pacotes para o servidor. Para isso, é necessário abrir o console dentro do jogo, que por padrão vem desativado.

Para ativar, vá até o seguinte diretório e abra o arquivo `config.cfg`:
```
C:/Users/[seu_usuario]/Documents/Euro Truck Simulator 2
```

Nesse arquivo, encontre a linha `uset g_developer "0"` e troque para `uset g_developer "1"` para ativar. Da mesma forma, encontre a linha `uset g_console "0"` e troque para `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

Reinicie o jogo, e agora você poderá abrir o console usando uma das seguintes teclas, dependendo do layout do seu teclado:
```
` OU ~ OU \
```

Com tudo pronto, no console digite o comando para exportar os pacotes do servidor:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

Dois arquivos serão exportados para a pasta `Documents/Euro Truck Simulator 2`: os arquivos `server_packages.dat` e `server_packages.sii`, que contêm as informações dos DLCs/mods e serão usados na próxima etapa.

## Enviando os Pacotes para o Servidor

Com os pacotes exportados, você precisa enviá-los para o seu servidor ETS2 via FTP. Use nosso [guia de Acesso FTP](gameserver-ftpaccess.md) para te ajudar a conectar no servidor.

Depois de conectado, vá até o diretório raiz principal **Euro Truck Simulator 2**. Faça o upload dos dois arquivos dos pacotes do servidor para essa pasta. Se os arquivos já existirem, apenas substitua-os.

![](https://screensaver01.zap-hosting.com/index.php/s/9xaDPw7sptsN3FH/preview)

:::tip
Na hora de moddar, os mods precisam estar sincronizados entre o cliente e o servidor. Isso significa que, se você entrar em um servidor com mods que não tem, será solicitado que baixe os mods que estão faltando.
:::

Por fim, reinicie seu servidor para ativar e instalar os mods automaticamente. Pronto, você instalou mods no seu servidor ETS2 com sucesso.

<InlineVoucher />