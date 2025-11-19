---
id: dedicated-linux-wine
title: "Servidor Dedicado: Configuração do Wine no Linux"
description: "Descubra como configurar o Wine no Linux para rodar servidores de jogos Windows de forma tranquila no Ubuntu e sistemas similares → Saiba mais agora"
sidebar_label: Configurar Camada de Compatibilidade Wine
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Wine é uma camada de compatibilidade open-source para Linux que permite rodar softwares originalmente desenvolvidos para Windows em sistemas Linux. Isso é especialmente importante para servidores dedicados de jogos que só oferecem arquivos de servidor para Windows e pode ser um pré-requisito para nossos outros guias de servidores dedicados Linux. Neste guia, vamos explorar o processo de configuração inicial para instalar o Wine no seu servidor Linux. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

## Preparação

Para começar, conecte-se ao seu servidor dedicado via SSH. Use nosso [guia de Acesso Inicial SSH](vserver-linux-ssh.md) se precisar de ajuda para isso.

## Instalando o Wine

Comece o processo de instalação garantindo que o diretório `/etc/apt/keyrings/` exista, pois ele é necessário para o Wine.
```
sudo mkdir -pm755 /etc/apt/keyrings
```

Em seguida, baixe e armazene a chave GPG do Wine nesse diretório, que verifica a autenticidade do pacote.
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

Você também precisará salvar a lista de fontes do WineHQ, o que pode ser feito com o seguinte comando pré-escrito:
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

Execute o comando de atualização para garantir que as mudanças nos pacotes sejam lidas e instaladas.
```
sudo apt update
```

Agora você pode seguir para o passo principal de baixar a versão mais recente do Wine. Isso pode levar um tempo para completar.
```
sudo apt install --install-recommends winehq-staging
```

Por fim, você precisa instalar alguns pacotes extras para garantir que o Wine funcione bem com servidores dedicados de jogos, rodando o seguinte comando:
```
sudo apt install cabextract winbind screen xvfb
```

## Conclusão

Você configurou com sucesso a camada de compatibilidade Wine, que vai permitir rodar programas Windows no seu servidor Linux. Com esse pré-requisito importante instalado, agora você pode instalar servidores dedicados de jogos mesmo que sejam feitos para Windows.

Recomendamos conferir os outros guias desta seção, que cobrem a instalação de jogos específicos usando SteamCMD e possivelmente Wine para arquivos de servidores dedicados baseados em Windows.