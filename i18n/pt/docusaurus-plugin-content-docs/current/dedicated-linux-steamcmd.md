---
id: dedicated-linux-steamcmd
title: "Servidor Dedicado: Configuração SteamCMD Linux"
description: "Descubra como configurar o SteamCMD em servidores Linux para instalar servidores de jogos dedicados de forma eficiente → Saiba mais agora"
sidebar_label: Configurar SteamCMD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

SteamCMD é uma ferramenta essencial para instalar servidores dedicados de uma grande variedade de jogos, incluindo Palworld, Enshrouded e muito mais. Neste guia, vamos explorar o processo de configuração inicial para instalar o SteamCMD no seu servidor Linux. Usaremos o Ubuntu nos exemplos, mas o processo deve ser bem parecido para outras distribuições.

## Preparação

Para começar, conecte-se ao seu servidor dedicado via SSH. Use nosso [guia de Acesso Inicial SSH](vserver-linux-ssh.md) se precisar de ajuda para fazer isso.

## Instalando o SteamCMD

Depois de acessar seu servidor, você precisará configurar o **SteamCMD** para poder baixar os arquivos necessários do servidor dedicado. SteamCMD é a versão **linha de comando (CLI)** do cliente Steam e é a ferramenta que permite baixar facilmente uma variedade de arquivos da Steam Workshop e servidores dedicados.

Como de costume no Linux, é melhor primeiro atualizar o sistema, rodando o comando correspondente à sua distro:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

Agora você precisará instalar alguns pacotes. Eles são divididos da seguinte forma:

- O pacote **software-properties-common** facilita o gerenciamento da sua distro e fontes de software independentes.
- SteamCMD é uma ferramenta 32-bit, então a arquitetura **i386** deve ser adicionada para que o software apropriado seja instalado no seu sistema para suportar isso.
- Como SteamCMD é proprietário, isso também significa que você precisa do pacote **multiverse** ou **non-free**, dependendo da sua distro Linux, pois esses geralmente não estão incluídos no repositório padrão.

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian & Outras Distros Não-Debian
sudo apt-add-repository non-free
```

Agora rode o comando de atualização para garantir que as mudanças nos pacotes sejam lidas e instaladas no seu sistema:

```
sudo apt update
```

Por fim, você pode instalar o SteamCMD rodando o seguinte. Pode aparecer um prompt de acordo de licença, que você pode simplesmente aceitar para continuar.

```
sudo apt install steamcmd
```

:::tip
Você pode verificar se a instalação do SteamCMD foi bem-sucedida simplesmente rodando `steamcmd`. Quando carregar, o prompt deve mostrar `Steam>`. Você pode rodar `quit` para sair depois.
:::

Com tudo preparado e instalado, você pode seguir para o próximo passo, que envolve instalar o servidor dedicado usando o SteamCMD.

## Criando Usuário

Recomendamos muito criar um usuário separado para usar o SteamCMD. Rodar como root, como na maioria dos casos, não é recomendado por vários motivos.

Use o comando abaixo para criar um usuário chamado `steam` com uma senha opcional de sua escolha.

```
sudo useradd -m steam
sudo passwd steam # Senha Opcional
```

Depois que o usuário for criado, você precisará ajustar o arquivo `.bashrc` para dar acesso ao caminho `/usr/games` onde o SteamCMD está localizado. Isso é feito adicionando uma variável de ambiente de caminho extra.

Abra o arquivo usando o editor nano rodando:

```
sudo nano /home/steam/.bashrc
```

Agora desça até o final do arquivo usando as setas e adicione a seguinte variável de ambiente PATH:

```
export PATH="/usr/games/:$PATH"
```

Salve o arquivo e saia do nano usando `CTRL + X`, depois `Y` para confirmar e por fim `ENTER`.

## Conclusão

Você configurou com sucesso a funcionalidade principal do SteamCMD no seu servidor Linux. Agora pode prosseguir instalando conteúdo Steam através do usuário `steam`.

Recomendamos conferir os outros guias desta seção, que cobrem a instalação de jogos específicos usando o SteamCMD que você acabou de configurar.