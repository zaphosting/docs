---
id: redm-prohibited-resources
title: "RedM: 'Recurso contém lógica proibida?'"
description: "Entenda como proteger seu servidor de jogos contra recursos maliciosos do RedM e garantir uma jogabilidade segura e de alta performance → Saiba mais agora"
sidebar_label: Recurso contém lógica proibida
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Os desenvolvedores de recursos para RedM têm se esforçado muito nos últimos anos para proteger seu código-fonte usando técnicas como ofuscação, bloqueio por IP, carregamento remoto de código e outros métodos. Infelizmente, essas medidas muitas vezes causam problemas, que muita gente já conhece. Algumas dessas ferramentas não só desaceleram significativamente o desempenho do código, como também introduzem várias preocupações de segurança.

Por isso, a Cfx.re começou a bloquear recursos maliciosos que contêm códigos projetados para infectar servidores e outros recursos. Esses recursos às vezes tentam "espalhar" seu código para outros recursos, dando acesso a terceiros a scripts e bancos de dados. É importante destacar que esses recursos podem ser comparados a vírus e, portanto, representam uma ameaça séria.

<InlineVoucher />



## O que significa

Nosso sistema verifica todos os recursos antes do processo de inicialização por motivos de segurança mencionados acima e desativa todos os recursos reconhecidos como perigosos. Essa etapa é absolutamente necessária, por isso infelizmente não há espaço para exceções aqui. A segurança vem em primeiro lugar!

Caso algum dos seus recursos enviados seja afetado, o console do servidor fornecerá informações adicionais sobre ele. O conteúdo dessas informações pode ser, por exemplo, parecido com o seguinte:

![image-20230109185341047](https://screensaver01.zap-hosting.com/index.php/s/WdCGZweo6Z5QNnz/preview)



## Como proceder

Como primeiro e mais importante passo, recomendamos remover imediatamente todos os recursos maliciosos. Além disso, você deve instalar apenas recursos obtidos de fontes confiáveis. Um bom ponto de partida é, por exemplo, o site oficial ou o [Fórum](https://forum.cfx.re/c/development/releases/7) do RedM. Lá você encontra uma grande variedade de recursos.

Se você é desenvolvedor ou está em contato com um, recomendamos consultar o **sistema RedM Asset Escrow**, desenvolvido pela Cfx.re em parceria com a **Tebex**. Mais detalhes podem ser encontrados no post oficial do [Fórum Cfx.re](https://forum.cfx.re/t/introducing-redm-asset-escrow/5303450).



## Recursos Proibidos

Infelizmente, não existe uma lista oficial de recursos que podem gerar essa mensagem. Em princípio, você não deve usar recursos que utilizem outros métodos de ofuscação ou que não estejam baseados no sistema RedM Asset Escrow.



## Conclusão
Para manter um ambiente de servidor seguro e estável, é essencial usar apenas recursos confiáveis e remover imediatamente qualquer recurso sinalizado. Seguindo essas diretrizes e utilizando o sistema RedM Asset Escrow, você ajuda a garantir tanto a segurança quanto a conformidade dentro do ecossistema RedM. Para dúvidas ou suporte, não hesite em contatar nossa equipe de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />