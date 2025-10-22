---
id: dedicated-windows-python
title: 'Servidor Dedicado: Instalação do Python'
description: "Aprenda como instalar e configurar o runtime do Python em servidores Windows para rodar seus programas Python de forma eficiente → Saiba mais agora"
sidebar_label: Instalar Python
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Este guia traz os passos para a instalação do runtime do Python no Windows. Os passos abaixo devem ser executados via RDP. Se você não sabe como conectar ao seu servidor via RDP, dê uma olhada no nosso [Acesso Inicial (RDP)](vserver-windows-userdp.md).

<InlineVoucher />

## Instalação

### Passo 1: Baixando os arquivos
Abra o navegador que preferir (vou usar o Chrome para este guia) e acesse [https://www.python.org/downloads/](https://www.python.org/downloads/)

![](https://screensaver01.zap-hosting.com/index.php/s/WAET5RFn6yBfNzC/preview)

Agora clique no botão `Download Python [versão]` e espere o download terminar.

![](https://screensaver01.zap-hosting.com/index.php/s/b8j6ZbfGWoBjpep/preview)

### Passo 2: Instalando o Python
Execute o instalador clicando nele. Agora você será solicitado a configurar algumas opções para a instalação. Certifique-se de que a caixa `Add python.exe to PATH` no rodapé esteja marcada (isso facilita rodar arquivos Python depois) e clique no botão `Install Now`.

![](https://screensaver01.zap-hosting.com/index.php/s/Z57KiQwHqP3RpPy/preview)

### Passo 3: Finalizando a instalação
Espere todos os arquivos serem instalados. Tenha paciência, pode levar um tempinho. :)

![](https://screensaver01.zap-hosting.com/index.php/s/XA2Y3DGezb84Ek9/preview)

Quando terminar, basta clicar em `Close` e você já pode começar a usar o Python no seu servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/t7xPKRtsJ7kGRxw/preview)

## Rodando código

Agora que você instalou o Python no seu servidor, pode começar a rodar seus programas Python.

### Modo interpretador

Rodar o comando `python` dentro do Prompt de Comando ou PowerShell vai iniciar o interpretador Python. Você pode digitar qualquer código Python válido após o prefixo `>>>` e ele será executado ao pressionar `Enter`. Para sair do interpretador, rode `exit()` no console ou simplesmente feche o prompt.

![](https://screensaver01.zap-hosting.com/index.php/s/DskKi5Ac28ERY38/preview)

### Rodando arquivos .py

Para rodar arquivos Python `.py`, use o comando `python3 [nome_do_arquivo].py`, substituindo `[nome_do_arquivo]` pelo caminho do arquivo que quer executar. Isso também é feito via Prompt de Comando ou PowerShell.

:::tip
A maioria dos programas que você encontra online pode ser rodado com `python3 main.py` porque `main.py` é o ponto de partida comum da maioria dos programas Python.
:::

Você também pode rodar arquivos Python (.py) abrindo-os diretamente ou clicando com o botão direito e selecionando Python no Windows.

## Ambientes virtuais

Ao escrever um programa Python, pode ser que você precise instalar pacotes externos via pip. Eles podem ser instalados globalmente, ficando acessíveis para todos os scripts `.py`, ou você pode criar um ambiente virtual (venv).

### Criando o venv

Primeiro, navegue até a pasta onde quer criar seu venv usando o explorador de arquivos e, quando estiver lá, rode `python -m venv .` para instalar os arquivos necessários no local atual.

### Ativando & desativando

Para rodar comandos como `pip install` dentro do seu venv, você precisa ativá-lo rodando `.\Scripts\activate`. Agora seu console vai rodar só dentro do venv e os scripts terão acesso apenas aos pacotes instalados localmente.

Quando terminar de trabalhar no venv, volte ao ambiente normal rodando o comando `deactivate`.

![](https://screensaver01.zap-hosting.com/index.php/s/Ws5BosJzJ78s7Y9/preview)

## Conclusão

Parabéns, você instalou o Python com sucesso! Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />