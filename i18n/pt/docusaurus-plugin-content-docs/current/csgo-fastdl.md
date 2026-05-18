---
id: csgo-fastdl
title: "CS:GO: Configurando o FastDL"
description: "Descubra como otimizar a entrega de conteúdo do jogo com FastDL para acelerar downloads e reduzir a carga do servidor para jogadores de CS:GO → Saiba mais agora"
sidebar_label: FastDL
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introdução

FastDL (Fast Download) é um método para entregar conteúdo personalizado, como mapas, sons ou modelos, via um servidor web externo em vez do próprio servidor de jogos. Isso melhora a velocidade de download para os jogadores e reduz a carga no servidor.

Para usar o FastDL, você precisa de acesso a um servidor HTTP público. Uma ótima opção para isso é um **pacote de hospedagem de sites ZAP-Hosting**, que é perfeito para entregar conteúdo de jogos. Este guia explica como configurar o FastDL usando a hospedagem de sites ZAP.

<InlineVoucher />

## Requisitos

Você vai precisar de um servidor de jogos CS:GO ativo hospedado pela ZAP-Hosting e um pacote adicional de hospedagem de sites. O acesso FTP ou acesso ao Gerenciador de Arquivos deve estar disponível tanto para o servidor de jogos quanto para a hospedagem de sites.

No lado do jogo, os arquivos que você quer distribuir (como mapas `.bsp`, arquivos de som ou modelos) já devem estar organizados corretamente. A mesma estrutura será necessária na hospedagem de sites para permitir a entrega bem-sucedida do FastDL.

## Preparando a Hospedagem de Sites

Para gerenciar e enviar seus arquivos FastDL, recomendamos usar o **Gerenciador de Arquivos** disponível na interface da hospedagem ZAP. Ele pode ser acessado diretamente pelo painel web em **Hospedagem de Sites > Gerenciador de Arquivos**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

No diretório raiz da sua hospedagem, crie uma pasta chamada `fastdl`. Dentro dessa pasta, crie subpastas como `maps`, `sound` ou `models`, dependendo do conteúdo que você pretende servir. A estrutura de pastas deve espelhar exatamente a usada pelo seu servidor de jogos CS:GO.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Antes de enviar seus arquivos, certifique-se de que eles estejam **comprimidos no formato `.bz2`** (bzip2). A maioria dos motores baseados em Source exige que os arquivos sejam entregues nesse formato. Por exemplo, um arquivo de mapa `custom_map.bsp` deve ser enviado como `custom_map.bsp.bz2`.

:::info Comprimindo com 7-Zip
Para preparar seus arquivos para o FastDL, você pode usar ferramentas como o **7-Zip** para compactá-los no formato `.bz2`. Basta clicar com o botão direito no arquivo, escolher **7-Zip > Adicionar ao arquivo...**, selecionar `bzip2` como formato do arquivo e confirmar.
:::

Depois de enviar os arquivos comprimidos para as pastas corretas, certifique-se de que **todos os diretórios e arquivos tenham permissões de leitura corretas** para que possam ser acessados publicamente. O Gerenciador de Arquivos permite ajustar as permissões de pastas e arquivos.

Assim que seus arquivos estiverem enviados e com as permissões corretas, o conteúdo FastDL estará disponível via a seguinte URL pública:

```
https://[seu-nome-de-domínio].zap.cloud/fastdl/
```

Você pode testar abrindo essa URL no seu navegador e verificando se os arquivos estão acessíveis.

## Configurando o Servidor de Jogos

Na interface ZAP, dentro da administração do servidor de jogos, abra o arquivo `server.cfg` pela página **Configs** e insira as seguintes linhas:

```cfg
sv_downloadurl "https://[seu-nome-de-domínio].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Garanta que a URL do FastDL corresponda exatamente à estrutura usada na sua hospedagem de sites. Após salvar o arquivo, reinicie seu servidor de jogos para aplicar a configuração.

## Conclusão

O FastDL pode ser configurado de forma rápida e confiável usando sua própria hospedagem de sites ZAP. Isso permite uma entrega rápida e eficiente de conteúdo personalizado e melhora a experiência para todos os jogadores do seu servidor CS:GO.

Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂

<InlineVoucher />