---
id: source-metamod-plugins
title: Instalando plugins
description: "Descubra como gerenciar e solucionar problemas de plugins Sourcemod de forma eficaz para melhorar o desempenho do servidor → Saiba mais agora"
sidebar_label: Plugins
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Instalação de Plugins

A seguir explicamos como instalar plugins. Para poder usar plugins, você precisa do Sourcemod / Metamod. Instruções de como instalar estão aqui: [Instalação](source-metamod-installation.md)



Para instalar plugins, você precisa enviá-los via FTP. Os arquivos do plugin devem ser enviados para o diretório **Plugins** dentro de **../addons/sourcemod/**. Dependendo da complexidade do plugin, pode ser que já existam arquivos de configuração e tradução disponíveis. Se for o caso, eles devem ser enviados para as pastas **configs** e **translations**.



## Desativar / remover plugins

No diretório **Plugins** você encontrará uma subpasta chamada **disabled**. Lá você pode colocar os plugins que não quer que sejam carregados temporariamente. Basta mover o arquivo **.smx** correspondente.



Se quiser desativar um plugin permanentemente, é necessário deletar os arquivos do plugin correspondentes. O plugin será desativado após uma troca de mapa ou reinício do servidor.



## Problemas comuns


**Por que meu plugin instalado não funciona?**

Soluções:

- Certifique-se de que todos os pré-requisitos foram atendidos durante a configuração do plugin. Alguns plugins precisam de um banco de dados para funcionar corretamente. Nesse caso, você precisa fazer ajustes adicionais no arquivo **database.cfg** localizado no diretório de configuração.
- Mudanças no engine Source acontecem regularmente. Portanto, um plugin lançado há muito tempo e que não foi mantido pode não ser mais compatível. Nesse caso, a única opção é visitar o Fórum Alliedmodders para encontrar uma versão corrigida não oficial ou usar um plugin alternativo.
- Se nenhuma das opções acima funcionar, é recomendado dar uma olhada no Console ao vivo ou nos arquivos de log. Normalmente a causa do problema pode ser encontrada lá.

<InlineVoucher />