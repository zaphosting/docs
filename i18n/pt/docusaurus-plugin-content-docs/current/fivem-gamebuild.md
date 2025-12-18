---
id: fivem-gamebuild
title: "FiveM: Ativar Conteúdo DLC"
description: "Descubra como forçar versões específicas de DLC no seu servidor FiveM para acessar os mapas, veículos e conteúdos mais recentes → Saiba mais agora"
sidebar_label: Ativar build DLC
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Forçar o game build permite que você defina uma versão específica de DLC no seu servidor, permitindo jogar com os mapas, roupas, veículos e muito mais atualizados!

<InlineVoucher />

## Builds Disponíveis

Aqui está uma visão geral de todos os DLCs disponíveis e seus IDs de Build:

| Build ID |        Nome do Build         |
| :------: | :--------------------------: |
|   2060   | Los Santos Summer Special    |
|   2189   |        Cayo Perico           |
|   2372   |         Tuner DLC            |
|   2545   |       The Contract           |
|   2699   | The Criminal Enterprises     |
|   2802   |   Los Santos Drug Wars       |
|   2944   |  San Andreas Mercenaries     |
|   3095   |       The Chop Shop          |
|   3258   |  Bottom Dollar Bounties      |
|   3407   |    Agents of Sabotage        |
|   3570   |        Money Fronts          |



## Como ativar o build

Para usar conteúdos adicionais de DLC como Cayo Perico, o Tuner DLC ou Los Santos Summer Special, você precisa configurar isso no seu servidor. Para definir o build DLC, abra a interface do txAdmin e vá até as configurações do FXServer.

![](https://screensaver01.zap-hosting.com/index.php/s/HxmnfPEdcDJgZLX/preview)

Agora, basta adicionar o build desejado na seção **Additional Arguments** usando o comando set, substituindo `BUILD_ID_CHOICE` por um dos valores da tabela:

```
+set sv_enforceGameBuild BUILD_ID_CHOICE
```



## Conclusão

Depois de escolher seu build, reinicie seu servidor FiveM. Seu servidor agora vai iniciar com o build DLC especificado. Você configurou com sucesso um gamebuild para seu servidor de jogos FiveM. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />