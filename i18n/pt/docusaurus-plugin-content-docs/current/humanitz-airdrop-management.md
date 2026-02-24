---
id: humanitz-airdrop-management
title: "HumanitZ: Gerenciamento de Airdrop"
description: "Aprenda como ativar, desativar e configurar airdrops no seu servidor HumanitZ → Saiba mais agora"
sidebar_label: "Gerenciamento de Airdrop"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

Os airdrops no HumanitZ oferecem loot valioso e podem influenciar muito o movimento dos jogadores, zonas de conflito e a dinâmica geral do servidor. Dependendo do estilo de jogo do seu servidor, você pode querer quedas de suprimentos frequentes para aumentar a ação ou desativá-las completamente para uma experiência de sobrevivência com recursos mais escassos.

<InlineVoucher />

## Configuração

As configurações de airdrop são controladas no arquivo `GameServerSettings.ini`. Você pode acessar esse arquivo no painel de controle do seu servidor, na seção **Configs**. Dentro do arquivo de configuração, localize os seguintes parâmetros:

```
; Define se os airdrops estão ativados ou não
AirDrop=true
; Quantos dias de jogo entre cada AirDrop
AirDropInterval=1
```

A configuração funciona assim:

- `AirDrop=true` – Ativa os airdrops  
- `AirDrop=false` – Desativa os airdrops completamente  
- `AirDropInterval` – Define quantos dias no jogo passam entre cada airdrop  

Por exemplo, se você quiser que os airdrops ocorram a cada três dias no jogo:

```
AirDrop=true
AirDropInterval=3
```

Se quiser desativar os airdrops completamente:

```
AirDrop=false
```

Depois de editar o arquivo, salve as alterações e reinicie o servidor para que as novas configurações entrem em vigor.

## Conclusão

Parabéns! Modificando os valores `AirDrop` e `AirDropInterval` no `GameServerSettings.ini`, você configurou com sucesso o comportamento dos airdrops no seu servidor HumanitZ. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />