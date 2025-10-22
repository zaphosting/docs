---
id: dedicated-linux-java
title: "Servidor Dedicado: Instalação do Java"
description: "Aprenda como instalar Java em vários sistemas Linux para rodar aplicações Java de forma tranquila e garantir que seu ambiente esteja configurado corretamente → Saiba mais agora"
sidebar_label: Instalar Java
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Java é uma linguagem de programação super popular usada mundialmente em inúmeros programas e serviços. Para rodar esses programas baseados em Java, é essencial que o Java esteja instalado no sistema. A seguir, você vai aprender como instalar o Java no seu sistema para os sistemas operacionais Linux oferecidos.

<InlineVoucher />

## Preparação

Antes de começar a instalação do Java, é importante garantir que o sistema esteja atualizado. Para isso, conecte-se ao servidor via SSH. Se você não sabe o que é SSH ou como usar, dá uma olhada neste guia: [Acesso inicial (SSH)](vserver-linux-ssh.md)

Uma vez conectado, o sistema pode ser atualizado com o comando abaixo, dependendo do sistema operacional:

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

## Instalação

Depois de finalizar a preparação, a instalação do Java pode começar. Dependendo do sistema operacional, execute os seguintes comandos:

**Debian**

```
sudo apt-get install default-jdk
```

**Ubuntu**

```
sudo apt install default-jdk
```

**CentOS**

```
sudo yum install java-11-openjdk
```

**Fedora**

```
sudo dnf install java-11-openjdk
```

## Verificação da Versão

Você pode conferir se a instalação foi um sucesso com o comando **java --version**. A saída deve ser parecida com esta:

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

Nesse caso, o Java 11 foi instalado com sucesso no seu sistema. Agora você pode rodar suas aplicações Java de boa no seu servidor.

<InlineVoucher />