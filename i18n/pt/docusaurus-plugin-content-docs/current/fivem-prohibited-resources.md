---
id: fivem-prohibited-resources
title: "FiveM: 'Resource contains prohibited logic?'"
description: "Descubra como proteger seu servidor de jogos FiveM contra recursos maliciosos e garantir uma jogabilidade segura e de alta performance → Saiba mais agora"
sidebar_label: Recurso contém lógica proibida
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Os desenvolvedores de recursos para FiveM têm se esforçado muito nos últimos anos para proteger seu código-fonte usando técnicas como ofuscação, bloqueio por IP, carregamento remoto de código e outros métodos. Infelizmente, essas medidas frequentemente causam problemas, que muitos já conhecem. Algumas dessas ferramentas não só desaceleram significativamente o desempenho do código, como também introduzem várias preocupações de segurança.

Por isso, a Cfx.re começou a bloquear recursos maliciosos que contêm códigos projetados para infectar servidores e outros recursos. Esses recursos às vezes tentam "espalhar" seu código para outros recursos, dando a terceiros acesso a scripts e bancos de dados. É importante destacar que esses recursos podem ser comparados a vírus e, portanto, representam uma ameaça séria.

<InlineVoucher />

## O que significa

Nosso sistema verifica todos os recursos antes do processo de inicialização por motivos de segurança mencionados acima e desativa todos os recursos reconhecidos como perigosos. Essa etapa é absolutamente necessária, por isso infelizmente não há espaço para exceções aqui. A segurança vem em primeiro lugar!

Caso algum dos seus recursos enviados seja afetado, o console do servidor fornecerá informações adicionais sobre ele. O conteúdo dessas informações pode ser algo parecido com o seguinte:

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)

## Como proceder

Como primeiro e mais importante passo, recomendamos remover imediatamente todos os recursos maliciosos. Além disso, você deve instalar apenas recursos obtidos de fontes confiáveis. Um bom ponto de partida é, por exemplo, o site oficial ou o [Fórum](https://forum.cfx.re/c/development/releases/7) do FiveM. Lá você encontra uma ampla seleção de recursos.

Como desenvolvedor ou alguém em contato com o desenvolvedor, recomendamos consultar o **sistema FiveM Asset Escrow**, desenvolvido pela Cfx.re em parceria com a **Tebex**. Mais detalhes podem ser encontrados no post oficial do [Fórum Cfx.re](https://forum.cfx.re/t/introducing-asset-escrow-for-your-resources/4777151).

## Recursos Proibidos

Infelizmente, não existe uma lista oficial de recursos que podem gerar essa mensagem. Em princípio, você não deve usar recursos que utilizem outros métodos de ofuscação ou que não sejam baseados no sistema FiveM Asset Escrow.

## Conclusão

Para manter um ambiente de servidor seguro e estável, é essencial usar apenas recursos confiáveis e remover imediatamente qualquer recurso sinalizado. Seguindo essas diretrizes e utilizando o sistema FiveM Asset Escrow, você ajuda a garantir tanto a segurança quanto a conformidade dentro do ecossistema FiveM. Para dúvidas ou suporte, não hesite em contatar nossa equipe de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />