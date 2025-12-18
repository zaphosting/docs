---
id: unturned-becomeadmin
title: "Unturned: Torne-se admin do servidor"
description: "Descubra como atribuir permissões de administrador para controle total do servidor e gerenciamento avançado no jogo → Saiba mais agora"
sidebar_label: Tornar-se admin
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A atribuição de permissões de administrador permite uma administração simples e completa com controle total do seu servidor. Como administrador, você pode usar todas as opções e funções disponíveis no jogo diretamente dentro do próprio jogo. Todos os passos necessários para atribuir permissões de administrador ao seu servidor serão descritos abaixo.  
<InlineVoucher />

## Preparativos

Para poder adicionar admins em um servidor, é preciso editar um arquivo de configuração. Para evitar problemas na aplicação das mudanças, certifique-se de que seu servidor esteja desligado antes!

Além disso, é necessário o respectivo Steam ID (64) para que o servidor consiga identificar o jogador. Esta [ferramenta](https://steamidfinder.com/) pode ser usada como exemplo.  
Ao acessar o site da ferramenta, a informação necessária geralmente pode ser obtida ao digitar o nome do jogador.

![](https://screensaver01.zap-hosting.com/index.php/s/72YkRLBXE77NJQ5/preview)

## Abrir arquivos de configuração

Existem duas formas de editar os arquivos no servidor.  
Uma delas é usando o [acesso via FTP](gameserver-ftpaccess.md).

A outra forma é usando o Editor de Configurações diretamente na interface web.  
Neste caso, usamos o editor embutido da interface web. Para isso, abra o item de menu "Configs" na barra lateral esquerda do servidor, dentro da aba "Configurações".  
![](https://screensaver01.zap-hosting.com/index.php/s/x872MGFpMLbTBj2/preview)

O sistema agora carrega todas as configs disponíveis e as lista. É preciso um pouco de paciência, esse processo geralmente leva alguns segundos. Assim que todos os arquivos de configuração forem carregados, o arquivo "commands.dat" deve ser editado. Basta clicar no botão azul "Abrir arquivo", e o arquivo será aberto no editor web.

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)

## Adicionar Admins

Agora é possível nomear admin ou owner na config. Lembre-se que o rank owner só pode ser atribuído uma vez!

Para isso, insira a seguinte linha nova para atribuir o rank de owner:

`owner Steam64IDReplacedHere //<-- Deve ser substituído pelo seu próprio Steam64-ID`

Para adicionar um Administrador, basta substituir "owner" por "admin":

`admin Steam64IDReplacedHere //<-- Deve ser substituído pelo seu próprio Steam64-ID`

![](https://screensaver01.zap-hosting.com/index.php/s/i6PpdsfK6spBECj/preview)

Depois de atribuir todos os ranks na config, salve o arquivo clicando em "Salvar". Agora você pode reiniciar o servidor e todos os jogadores listados na config receberão seu rank automaticamente.

## Conclusão

Parabéns, você configurou com sucesso as permissões de administrador. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />