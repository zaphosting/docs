---
id: minecraft-pluginuploader
title: "Minecraft: Servidor Usando o Plugin Uploader da ZAP-Hosting"
description: "Descubra como gerenciar plugins do servidor de jogos Minecraft facilmente para servidores Spigot ou Bukkit e melhore sua experiência de jogo → Saiba mais agora"
sidebar_label: Plugin Uploader
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Plugin Uploader

Clique no seu servidor de jogos Minecraft na visão geral dos servidores. Depois selecione a aba Plugins, que fica no subitem Configurações.

:::info
Certifique-se de que seu jogo atual é Spigot ou Bukkit. O plugin uploader está disponível somente nesses.
:::

## Instalar/Enviar Plugins

Existem duas formas diferentes de instalar um plugin no seu servidor de jogos Minecraft.

- Você pode instalar seu plugin a partir de uma das nossas seleções pré-feitas (se disponível)
- Você pode enviar seus próprios plugins usando drag'n drop

### Plugins da Lista

Selecione o plugin desejado na lista "Todos os plugins" e clique no botão verde "Instalar". A instalação pode levar um momento dependendo do tamanho do plugin.

![](https://screensaver01.zap-hosting.com/index.php/s/dxrtY8pQwmtfEP9/preview)

### Envie seu próprio Plugin

Arraste o arquivo .jar do plugin desejado para a caixa marcada na imagem. Também é possível arrastar e instalar vários plugins nessa área ao mesmo tempo.

![](https://screensaver01.zap-hosting.com/index.php/s/fM2a4AeyspaQzYd/preview)

Depois de arrastar o plugin para o campo de upload, leva um momento até o plugin estar no servidor.

Para poder usar o plugin, você precisa recarregar seu servidor com o comando `/rl` ou `/reload` via console do seu servidor de jogos (ou reiniciar o servidor inteiro).

:::info
Em casos raros, o servidor precisa ser reiniciado para que o plugin funcione perfeitamente.
:::


## Desinstalar Plugin

![](https://screensaver01.zap-hosting.com/index.php/s/dKaeJr8M3jzgMBS/preview)

Para desinstalar um plugin, clique na lixeira vermelha ao lado da entrada.

## Desativar Plugin

Para isso, clique no botão verde com o cadeado atrás de um plugin instalado. Se o botão mudar de verde para laranja, você desativou seu plugin. O contrário ativa o plugin novamente. O arquivo do plugin ainda fica no servidor após a desativação, mas não é mais carregado pelo servidor de jogos.

:::info
Depois de desativar seu plugin, você precisa recarregar o servidor para que as mudanças tenham efeito. Use um dos dois comandos no console do servidor de jogos ou no jogo: `/rl` ou `/reload`
:::

## Problemas Comuns

**Meu plugin não pode ser enviado via área de "Drag'n Drop".**

Soluções sugeridas:

- Seu plugin pode ser maior que 5 MB e, por isso, não é possível enviar via interface web. Como alternativa, use um cliente FTP.
- Os direitos FTP podem estar causando problemas. Para resolver, clique na aba navegador FTP na interface web e clique no botão Resetar direitos FTP. Depois disso, você deve conseguir enviar plugins novamente.
- Seu plugin pode ser inválido e não conter um plugin.yml válido. Nesse caso, use um cliente FTP como alternativa.
- Às vezes a lista pode não ser recarregada. Basta atualizar a página com F5, etc.

### Meu plugin não pode mais ser deletado.

:::info
Nesse caso, entre em contato com o suporte.
:::

### Meu plugin não pode ser desativado / ativado.

Soluções sugeridas:

- Seu plugin ainda está no servidor? Verifique clicando no botão Atualizar na borda da tabela. Isso vai re-sincronizar a lista exibida com os plugins no servidor. Agora só aparecem os plugins que realmente estão no servidor.

### Plugins estão faltando na seção Todos os Plugins.

Soluções sugeridas:

- Pode não haver uma versão atual desse plugin para a versão do seu servidor de jogos instalada. Para solicitar um plugin, use o botão azul Plugin faltando?.

![](https://screensaver01.zap-hosting.com/index.php/s/DeMjH2s74geaLPq/preview)

### O Desinstalar/Instalar na lista pré-feita não parece funcionar.

Soluções sugeridas:

- Recarregue a página para resolver o problema.

### Um plugin aparece listado que nem está no servidor.

Soluções sugeridas:

- Nesse caso, você pode simplesmente remover a entrada do plugin clicando no botão desinstalar.
- Como alternativa, tente clicar no botão Sincronizar.

<InlineVoucher />