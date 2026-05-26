---
id: subnautica-2-mods
title: "Subnautica 2: Instalar Mods"
description: "Aprenda como instalar mods de Subnautica 2 no seu servidor de jogos adicionando mods Lua ou C++ na pasta correta, para que seu servidor Subnautica carregue-os automaticamente na inicialização. -> Saiba mais agora"
sidebar_label: "Instalar Mods"
services:
 - gameserver-subnautica-2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Mods permitem que você personalize e melhore a experiência no seu servidor de jogos Subnautica 2 adicionando novas funcionalidades, melhorando mecânicas ou introduzindo conteúdo novo. Neste guia, você vai aprender como instalar mods de Subnautica 2 no seu servidor de jogos ZAP-Hosting, enviando mods Lua ou C++ suportados para a pasta correta para que sejam carregados automaticamente na inicialização do servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, você precisa ter acesso aos arquivos do seu servidor de jogos Subnautica 2 através da interface web da ZAP-Hosting ou outro método disponível de gerenciamento de arquivos.

:::info Tipo de Mod Necessário
Use apenas mods Lua ou C++ que sejam feitos especificamente para Subnautica 2. Se um mod for para outro jogo, como Subnautica 1 ou Subnautica Below Zero, a compatibilidade não pode ser garantida.
:::

:::note Fontes para Download de Mods
Mods de Subnautica 2 podem ser encontrados em plataformas da comunidade como [Nexus Mods](https://www.nexusmods.com/games/subnautica2). Como páginas de mods de terceiros podem mudar a qualquer momento, sempre revise a descrição do mod e as instruções de instalação antes de enviar os arquivos.
:::

## Baixar Mods Compatíveis

Primeiro, baixe os mods que deseja usar no seu servidor. Certifique-se de que o mod é especificamente para **Subnautica 2** e verifique se o autor fornece requisitos extras.

### Verificar o Conteúdo do Mod

Após baixar o arquivo do mod, extraia-o no seu computador e revise os arquivos incluídos.

Itens comuns a procurar:

- Arquivos de script Lua
- Arquivos de mod C++
- Estrutura de pastas fornecida pelo autor do mod
- Arquivo `README`, nota de instalação ou lista de dependências

:::caution Verifique a Compatibilidade
Nem todos os mods para jogos são compatíveis com servidores. Alguns mods são feitos apenas para o cliente e podem não funcionar em um servidor dedicado Subnautica 2. Se o autor do mod não mencionar suporte para servidor, teste cuidadosamente antes de usar em produção.
:::

## Acessar os Arquivos do Seu Servidor de Jogos

Agora, abra o sistema de arquivos do seu servidor de jogos Subnautica 2 e localize o diretório principal do servidor.

Se estiver usando a interface web da ZAP-Hosting, abra o gerenciador de arquivos do seu servidor de jogos e navegue até o diretório raiz da instalação do servidor.

### Localizar a Pasta de Mods

Dentro do diretório principal do servidor de jogos, encontre a pasta `mods`.

O destino da instalação é:

```text
[main_gameserver_directory]/mods
```

Substitua `[main_gameserver_directory]` pelo diretório base dos arquivos do seu servidor Subnautica 2.

:::info Carregamento Automático de Mods
O servidor verifica a pasta `mods` durante a inicialização. Se um mod Lua ou C++ suportado estiver corretamente colocado lá, ele será carregado automaticamente na próxima inicialização do servidor.
:::

## Enviar e Instalar Mods

Com os arquivos corretos do mod e a pasta `mods` aberta, você pode enviar o conteúdo do mod.

### Copiar os Arquivos do Mod

Envie ou mova os arquivos extraídos do mod Lua ou C++ para a pasta `mods` no diretório principal do servidor de jogos.

Dependendo do mod, isso pode significar:

- enviar um único arquivo diretamente para `mods`
- enviar uma pasta completa do mod para `mods`
- preservar exatamente a estrutura de pastas fornecida pelo autor do mod

### Manter a Estrutura Original

Se o arquivo baixado já contém uma pasta do mod, não reorganize os arquivos internos a menos que o autor instrua explicitamente.

| Item | O que fazer |
| --- | --- |
| Arquivo único de mod Lua | Enviar para a pasta `mods` |
| Arquivo único de mod C++ | Enviar para a pasta `mods` |
| Mod baseado em pasta | Enviar a pasta completa para `mods` |
| Arquivo compactado como `.zip` | Extraia primeiro, depois envie o conteúdo se necessário |

:::caution Não Envie Arquivos Compactados a Menos que Seja Suportado
Se você enviar apenas um arquivo `.zip` ou outro arquivo compactado sem extrair, o servidor pode não detectar o mod. A menos que o autor do mod diga o contrário, envie os arquivos ou pastas extraídos.
:::

## Reiniciar o Servidor

Depois de enviar os mods, reinicie seu servidor de jogos Subnautica 2.

Isso é necessário porque o servidor carrega os mods na inicialização. Se o servidor já estiver rodando, os arquivos enviados normalmente só serão aplicados na próxima inicialização.

### Confirmar o Carregamento do Mod

Após o reinício, verifique se o mod está ativo no jogo ou através de logs ou saídas disponíveis para seu servidor.

Como o comportamento dos mods pode variar, a confirmação pode incluir:

- mudanças no comportamento do jogo
- novos comandos ou funcionalidades
- entradas visíveis nos logs do mod
- inicialização bem-sucedida do servidor sem erros

:::tip Instale Mods Um a Um
Se quiser usar vários mods, instale e teste um de cada vez. Isso facilita identificar qual mod causa problemas caso o servidor não inicie corretamente.
:::

## Solução de Problemas

Se seus mods de Subnautica 2 não funcionarem, verifique algumas causas comuns.

### Problemas Comuns

| Problema | Possível causa | Solução |
| --- | --- | --- |
| Mod não carrega | Arquivos enviados para o diretório errado | Certifique-se que os arquivos estão dentro da pasta `mods` no diretório principal do servidor |
| Servidor inicia mas mod não tem efeito | Mod é só para cliente ou incompatível | Revise a página do mod e confirme suporte para servidor dedicado |
| Servidor não inicia | Arquivos do mod corrompidos ou versão incompatível | Remova o último mod instalado e reinicie o servidor |
| Arquivos do mod estão presentes mas ignorados | Arquivo compactado enviado em vez dos arquivos extraídos | Extraia o download e envie os arquivos reais do mod |
| Conflito entre vários mods | Dois mods modificam o mesmo comportamento | Teste cada mod separadamente e mantenha só combinações compatíveis |

### Remover um Mod Problemático

Se um mod recém-instalado causar problemas, exclua o arquivo ou pasta do mod correspondente da pasta `mods` e reinicie o servidor.

```text
[main_gameserver_directory]/mods
```

:::danger Use Fontes de Mods Confiáveis
Baixe mods apenas de fontes confiáveis. Arquivos de terceiros podem conter conteúdo corrompido, desatualizado ou malicioso. Revise a página do mod cuidadosamente e evite downloads desconhecidos que não forneçam informações claras de instalação ou compatibilidade.
:::

## Melhores Práticas

Para manter seu servidor estável, gerencie os mods com cuidado em vez de instalar muitos de uma vez.

### Fluxo de Trabalho Recomendado

1. Baixe um mod compatível para Subnautica 2.
2. Extraia os arquivos localmente.
3. Envie os arquivos ou pasta para o diretório `mods` do servidor.
4. Reinicie o servidor.
5. Teste a funcionalidade.
6. Repita para o próximo mod.

### Mantenha um Backup Local

Antes de alterar sua configuração ativa de mods, mantenha um backup de:

- seus arquivos atuais de mods
- quaisquer arquivos de configuração relacionados
- uma lista dos mods instalados e suas versões

Isso ajuda a restaurar rapidamente uma configuração funcional se um novo mod causar problemas.

## Conclusão

Parabéns, você instalou mods com sucesso no seu servidor de jogos Subnautica 2. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂