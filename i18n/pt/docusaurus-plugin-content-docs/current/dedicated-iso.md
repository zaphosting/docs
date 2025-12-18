---
id: dedicated-iso
title: "Servidor Dedicado: ISO Próprio"
description: "Descubra como montar arquivos ISO facilmente usando iLO ou console remoto para inicializar seu servidor de forma eficiente → Saiba mais agora"
sidebar_label: ISO Próprio
services:
  - dedicated
---



import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Quer montar um ISO? Talvez um dos nossos ou prefere usar o seu próprio? Sem problema. Oferecemos uma grande seleção de arquivos ISO e também disponibilizamos outras opções.

:::danger Seleção e uso de arquivos ISO
Ao usar seu próprio ISO (SO), que não oferecemos ativamente, não podemos garantir a funcionalidade em caso de possíveis problemas.
:::



## Opções disponíveis para montagem
Existem duas formas de montar seu próprio arquivo ISO. É sempre necessário reiniciar o servidor para carregar o arquivo. Em geral, não há restrições para montar um arquivo, o importante é que o arquivo ISO seja bootável.

## Montagem via iLO
Abra sua Interface de Gerenciamento iLO e acesse "Virtual" Media
![](https://screensaver01.zap-hosting.com/index.php/s/myWMSi3GgyLBHXR/preview)

* Insira a URL que aponta para o arquivo ISO que você quer usar. Certifique-se de que o link termine com .iso
* Agora clique em "Insert Media"
* Clique em "Server Reset" para que seu sistema reinicie.

Seu arquivo ISO será carregado.

## Montagem via console remoto

**Console HTML5**
Você pode montar o arquivo diretamente no console remoto:
![](https://screensaver01.zap-hosting.com/index.php/s/x4EDgLZ3e3B6MMC/preview)

* Clique no ícone do disco
* Escolha "CD/DVD"
* Selecione entre "Scripted media URL" ou "Local .iso File"

A diferença entre "Scripted media URL" e "Local .iso File" é que você pode montar um arquivo ISO que está hospedado em um servidor/hospedagem de sites ou escolher diretamente com "Local *.iso File" um arquivo do seu computador, sem precisar fazer upload.

Após escolher seu arquivo ISO, é necessário reiniciar o servidor.


**Console Java**
Assim como no console HTML5, o arquivo ISO também é montado diretamente na aplicação.
![](https://screensaver01.zap-hosting.com/index.php/s/2CdR5d5AcsG7YdH/preview)

* Abra "Virtual Drives"

A diferença entre "Image File CD/DVD-ROM" e "URL CD/DVD-ROM" é que você pode montar um arquivo ISO que está hospedado em um servidor/hospedagem de sites ou escolher diretamente com "Image File CD/DVD-ROM" um arquivo do seu computador, sem precisar fazer upload.

Depois de injetar o arquivo ISO desejado, é necessário reiniciar o servidor.


## Conclusão
Parabéns, você selecionou e montou seu arquivo ISO com sucesso. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂