---
id: palworld-install-mods
title: "Palworld: Instalar Mods"
description: "Aprenda como instalar mods de Palworld, incluindo UE4SS Palworld, mods Lua e mods .pak, no seu servidor dedicado. -> Saiba mais agora"
sidebar_label: Palworld: Instalar Mods
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld suporta vários tipos de mods para servidor, sendo os mais comuns os mods `UE4SS`, `.lua` e `.pak`. Neste guia, você vai aprender como preparar seu servidor, identificar o tipo correto de mod, enviar os arquivos necessários e reiniciar seu servidor para que os mods carreguem corretamente.



## Preparação

Antes de instalar qualquer mod, você deve garantir que seu servidor e o mod escolhido são compatíveis.

:::danger Faça Backup do Seu Mundo Primeiro
Você deve sempre criar um backup dos seus dados salvos do Palworld antes de instalar mods. Se um mod for incompatível ou causar problemas na inicialização, pode ser necessário restaurar o estado anterior do seu mundo.
:::

Você deve verificar o seguinte primeiro:

| Requisito | Detalhes |
| --- | --- |
| Edição do servidor | Servidores dedicados de Palworld usam a versão **Steam**. Mods destinados apenas para a versão **Game Pass** não devem ser usados. |
| Compatibilidade do mod | Confirme que o autor do mod declara explicitamente que o mod funciona em servidor dedicado. |
| Tipo de mod | Verifique se o mod é um mod `UE4SS`, `.lua` ou `.pak`. |
| Requisito do cliente | Alguns mods precisam ser instalados tanto no **servidor** quanto em todos os **clientes dos jogadores**. |
| Versão do servidor | Verifique a versão atual do seu servidor antes de instalar um mod. |

### Verifique a versão do seu servidor

Para confirmar a versão atual do seu servidor Palworld, abra o console do servidor na administração do seu servidor de jogos ZAP-Hosting e execute:

```text
info
```

Isso exibirá informações de versão que você pode comparar com os requisitos do mod.

:::tip Instale Um Mod Por Vez
Você deve instalar apenas um mod por vez e testá-lo antes de adicionar outro. Isso facilita muito a solução de problemas caso o servidor não inicie ou um mod não funcione corretamente.
:::

## Entenda qual tipo de mod você está instalando

Mods de Palworld não são todos instalados da mesma forma. Você precisa identificar o tipo de mod antes de enviar os arquivos.

| Tipo de mod | Conteúdo típico | Caminho comum de instalação | Observações |
| --- | --- | --- | --- |
| Mod `UE4SS` / `.lua` | Pasta contendo scripts como `main.lua` | `Pal/Binaries/Win64/ue4ss/Mods/` | Geralmente requer o framework `UE4SS` |
| Mod `.pak` | Um ou mais arquivos `.pak`, às vezes com arquivos adicionais | `Pal/Content/Paks/~mods/` | Alguns mods podem usar `Pal/Content/Paks/LogicMods/` |
| Mod do lado do cliente | Varia | Nem sempre instalável no servidor | Deve ser usado apenas se o autor do mod confirmar suporte no servidor |

:::caution Siga o Caminho do Autor do Mod
Os caminhos neste guia são os locais mais comuns atualmente usados para mods de Palworld. No entanto, alguns mods exigem uma estrutura de pastas diferente. Você deve sempre seguir as instruções fornecidas pelo autor do mod se forem diferentes.
:::

## Acesse os arquivos do seu servidor na interface ZAP

Você precisará usar as áreas de gerenciamento de arquivos na administração do seu servidor de jogos ZAP-Hosting.

### Abra a seção Configs

Os arquivos de configuração relevantes podem ser acessados na administração do seu servidor de jogos em **Configs**. Essa área é útil para verificar e editar arquivos de configuração disponíveis para seu servidor Palworld.

:::note Configs vs. Arquivos de Mod
A instalação de mods em Palworld geralmente não é concluída apenas alterando uma configuração de gameplay em um único arquivo config. Na maioria dos casos, você deve enviar os arquivos reais do mod para os diretórios corretos do servidor, e alguns mods podem exigir alterações adicionais em arquivos disponíveis em **Configs**.
:::

### Abra o gerenciador de arquivos

Para enviar arquivos de mod como arquivos `.pak` ou pastas de scripts `UE4SS`, você também precisa acessar os arquivos do seu servidor pelo gerenciador de arquivos na interface ZAP.

Se um mod incluir seu próprio arquivo de configuração, você deve enviá-lo exatamente como fornecido pelo autor do mod e só editá-lo se o autor documentar valores suportados.

## Instale o framework UE4SS se necessário

`UE4SS` é um framework de modding usado por muitos mods Lua e baseados em scripts de Palworld. Você só precisa dele se o mod escolhido depender dele.

### Confirme que seu servidor usa Windows

`UE4SS` para Palworld é geralmente usado com a versão do servidor Windows. Se seu servidor não estiver usando um ambiente de servidor Palworld Windows, mods baseados em `UE4SS` podem não funcionar como esperado.

:::info Requisito UE4SS
Se o mod escolhido for um mod `UE4SS` ou `.lua`, você deve confirmar que o framework já está presente antes de enviar o mod em si.
:::

### Verifique o caminho de instalação do UE4SS

Se o `UE4SS` estiver instalado, o diretório relevante normalmente é:

```text
Pal/Binaries/Win64/ue4ss/
```

A pasta de mods usada pela maioria dos mods `UE4SS` e Lua é:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Se seu produto ZAP-Hosting oferecer uma opção integrada de modding ou `UE4SS` na administração do servidor, você pode usar essa opção se disponível. Se essa opção não estiver visível na sua interface, não presuma que ela exista para seu produto ou tipo de servidor.

## Envie e instale mods Lua ou UE4SS

Mods Lua e outros mods baseados em `UE4SS` para Palworld geralmente são distribuídos como pastas, não como um único arquivo `.pak`.

### Extraia o mod no seu dispositivo local

Baixe o arquivo do mod na página oficial de lançamento do autor do mod e extraia-o no seu computador primeiro. Você não deve enviar o arquivo `.zip` ou `.rar` a menos que o autor instrua explicitamente a fazer isso.

### Envie a pasta do mod para o caminho correto

Para a maioria dos mods Lua ou `UE4SS`, envie a pasta extraída do mod para:

```text
Pal/Binaries/Win64/ue4ss/Mods/
```

Uma estrutura típica de mod Lua se parece com isto:

```text
Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua
```

Substitua `UploadedMod` pelo nome real da pasta fornecido pelo autor do mod.

### Estrutura de exemplo

| Item | Caminho de exemplo |
| --- | --- |
| Pasta do mod | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/` |
| Arquivo de script | `Pal/Binaries/Win64/ue4ss/Mods/UploadedMod/scripts/main.lua` |

:::caution Não Renomeie Arquivos Arbitrariamente
Você não deve renomear a pasta do mod, arquivos de script ou a estrutura interna de diretórios a menos que o autor do mod instrua explicitamente a fazer isso. Muitos mods `UE4SS` dependem da estrutura original para carregar corretamente.
:::

## Envie e instale mods .pak

Mods `.pak` são instalados de forma diferente dos mods Lua ou baseados em scripts `UE4SS`.

### Envie o arquivo `.pak`

Para a maioria dos mods `.pak` de Palworld, envie o arquivo para:

```text
Pal/Content/Paks/~mods/
```

Exemplo:

```text
Pal/Content/Paks/~mods/UploadedMod.pak
```

Alguns mods podem instruir você a usar:

```text
Pal/Content/Paks/LogicMods/
```

### Verifique arquivos adicionais se incluídos

Alguns mods `.pak` podem incluir mais de um arquivo, como metadados ou arquivos acompanhantes. Se o arquivo do mod contiver vários arquivos necessários, envie todos exatamente como descrito pelo autor do mod.

| Local comum para `.pak` | Caso de uso |
| --- | --- |
| `Pal/Content/Paks/~mods/` | Local mais comum para mods `.pak` gerais |
| `Pal/Content/Paks/LogicMods/` | Usado por alguns mods conforme instruções do autor |

## Edite arquivos de configuração do mod se o mod exigir

Alguns mods de Palworld incluem seus próprios arquivos de configuração que devem ser editados após o envio. Essas configurações não são universais, então o nome exato do arquivo e os valores dependem do mod selecionado.

### Onde encontrar o arquivo de configuração

Se o mod fornecer um arquivo config, ele pode aparecer em um destes locais após o envio:

| Tipo de mod | Local possível do config |
| --- | --- |
| Mod `UE4SS` / `.lua` | Dentro da pasta do mod em `Pal/Binaries/Win64/ue4ss/Mods/[seu_nome_do_mod]/` |
| Mod `.pak` | Às vezes não inclui config editável; verifique a documentação do mod |
| Integração com config do servidor | Em alguns casos, configurações adicionais podem ser editadas via **Configs** na administração do seu servidor ZAP |

### O que alterar

Você deve alterar apenas valores explicitamente documentados pelo autor do mod. Exemplos típicos incluem:

- ativar ou desativar recursos do mod
- definir multiplicadores ou limites
- definir comportamento exclusivo para admins
- alterar nomes de chaves ou opções internas usadas pelo mod

Como mods de Palworld não usam um formato único padronizado de config, não existe uma entrada universal de configuração que se aplique a todos os mods.

:::info Nenhuma Entrada Universal de Configuração para Mods Palworld
Atualmente não existe um único arquivo de configuração do servidor Palworld ou seção de config integrada que habilite todos os mods globalmente. Na prática, a instalação de mods é feita colocando os arquivos corretos nos diretórios corretos e depois editando quaisquer arquivos de config específicos do mod somente se o mod os incluir.
:::

## Reinicie o servidor e teste o mod

Após enviar os arquivos do mod e fazer as alterações de configuração necessárias, você precisa reiniciar seu servidor Palworld.

### Reinicie o servidor

Use a função de reinício na administração do seu servidor de jogos ZAP-Hosting para reiniciar completamente o serviço.

Essa etapa é necessária porque Palworld normalmente não carrega mods de servidor recém-enviados até que o servidor seja iniciado novamente.

### Teste a funcionalidade

Após o reinício:

1. Entre no servidor.
2. Teste a funcionalidade do mod no jogo.
3. Verifique o console do servidor para erros se o mod não funcionar.
4. Remova os arquivos do mod recém-adicionado se o servidor não iniciar ou apresentar comportamento inesperado.

:::tip Solução de Problemas com Mods que Falham
Se um mod causar problemas, remova primeiro apenas os arquivos do mod instalado mais recentemente e reinicie o servidor novamente. Essa é a forma mais rápida de confirmar se aquele mod é a causa.
:::

## Referência rápida

| Tarefa | Ação |
| --- | --- |
| Verificar versão do servidor | Execute `info` no console do servidor |
| Caminho base UE4SS | `Pal/Binaries/Win64/ue4ss/` |
| Caminho mod UE4SS/Lua | `Pal/Binaries/Win64/ue4ss/Mods/` |
| Arquivo comum de script Lua | `scripts/main.lua` |
| Caminho comum para mod `.pak` | `Pal/Content/Paks/~mods/` |
| Caminho alternativo para `.pak` | `Pal/Content/Paks/LogicMods/` |
| Acesso a arquivos de config | Abra **Configs** na administração do servidor de jogos ZAP |
| Passo final | Reinicie o servidor |

## Conclusão

Parabéns, você instalou mods com sucesso no seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂