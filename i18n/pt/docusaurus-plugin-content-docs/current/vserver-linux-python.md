---
id: vserver-linux-python
title: "Configurar Python em um Servidor Linux - Ative Desenvolvimento e Automação"
description: "Aprenda como instalar e atualizar o runtime Python em várias distribuições Linux para garantir um ambiente seguro e atualizado → Saiba mais agora"
sidebar_label: Instalar Python
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Este guia traz os passos para a instalação do runtime Python e do venv. Esses comandos devem ser executados via SSH, se você não sabe como conectar ao seu servidor via SSH, use nosso [Acesso Inicial (SSH)](vserver-linux-ssh.md) para aprender mais.

<InlineVoucher />

## Preparação

Antes de instalar qualquer coisa no servidor, é recomendado rodar o comando de atualização correspondente ao seu sistema operacional para manter seu servidor seguro.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Instalação

A maioria das distribuições Linux já vem com Python pré-instalado, porém a versão pode não estar atualizada ou o sistema pode ter sido instalado sem alguns pacotes. Você pode verificar se o Python está instalado (`python3 --version`) e rodar os comandos abaixo para atualizar ou instalar o runtime.

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  // Verificar versão
  python3 --version

  // Atualizar / instalar o runtime
  sudo apt install python3
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  // Verificar versão
  python3 --version

  // Atualizar o runtime
  sudo yum install python3
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  // Verificar versão
  python3 --version

  // Atualizar o runtime
  sudo zypper install python3
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  // Verificar versão
  python3 --version

  // Atualizar o runtime
  sudo dnf install python3
```

</TabItem>
</Tabs>

## Rodando código

Agora que você tem o Python instalado no seu servidor, pode começar a rodar seus programas em Python.

### Modo interpretador

Rodar o comando `python3` vai iniciar o interpretador Python. Você pode começar a escrever qualquer código Python válido após o prefixo `>>>` e ele será executado ao pressionar `Enter`. Para sair do interpretador, rode `exit()` no console.

### Rodando arquivos .py

Para rodar arquivos Python `.py`, basta usar o comando `python3 [nome_do_arquivo].py`, substituindo `[nome_do_arquivo]` pelo caminho do arquivo que você quer executar.

:::tip
A maioria dos programas que você encontra online pode ser rodado com `python3 main.py` porque `main.py` é o ponto de partida comum da maioria dos programas Python.
:::

## Ambientes virtuais

Ao escrever um programa Python, você pode precisar instalar pacotes externos via pip. Eles podem ser instalados globalmente e assim ficar acessíveis para todos os scripts `.py`, ou você pode criar um ambiente virtual (venv).

### Criando o venv

Primeiro, navegue até a pasta onde quer criar seu venv usando `cd` e, quando estiver pronto, rode `python3 -m venv .` que vai instalar os arquivos necessários na pasta atual.

### Ativando & desativando

Para rodar comandos como `pip install` dentro do seu venv, você precisa ativá-lo rodando `source /bin/activate`. Agora seu console vai rodar só dentro do venv e os scripts terão acesso apenas aos pacotes instalados localmente.

Quando terminar de trabalhar no venv, você pode sair dele rodando o comando `deactivate`.


## Conclusão

Parabéns, você instalou e configurou o Python com sucesso! Se tiver mais dúvidas ou problemas, fale com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />