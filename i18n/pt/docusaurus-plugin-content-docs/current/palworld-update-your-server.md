---
id: palworld-update-your-server
title: "Palworld: Atualize Seu Servidor"
description: "Aprenda como atualizar seu servidor Palworld, acionar uma atualização de versão e verificar a build mais recente do jogo Palworld na ZAP-Hosting -> Saiba mais agora"
sidebar_label: Palworld: Atualize Seu Servidor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Atualizações do servidor Palworld são necessárias para manter seu servidor compatível com a versão mais recente do jogo Palworld e a atualização do cliente. Neste guia, você vai aprender como atualizar seu servidor Palworld na ZAP-Hosting, onde verificar as configurações relevantes e o que fazer se a atualização não for aplicada corretamente.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting e permissão para reiniciar ou reinstalar o servidor, se necessário.

:::info Requisito de Acesso ao Servidor
Você precisa ter acesso à administração do seu servidor de jogos, incluindo as seções **Configs**, **Console** e os controles de energia no painel da ZAP-Hosting.
:::

:::note Sobre Arquivos de Configuração
Para atualizações do Palworld, normalmente não existe um arquivo de configuração de gameplay que você precise editar para instalar uma nova versão do jogo. O processo de atualização geralmente é gerenciado pela própria instalação do servidor. Ainda assim, você deve verificar as configurações do seu servidor no painel caso gerencie o comportamento da atualização manualmente.
:::

## Como Funcionam as Atualizações do Servidor Palworld na ZAP-Hosting

Servidores dedicados Palworld em plataformas de aluguel de servidores geralmente atualizam quando a instalação do servidor verifica uma build mais recente durante a inicialização. Com base nas informações disponíveis, os servidores da ZAP-Hosting normalmente realizam essa verificação automaticamente ao iniciar ou reiniciar o servidor.

Se seu servidor já estiver configurado para atualizações automáticas, geralmente basta reiniciá-lo após um novo lançamento do Palworld. Se a atualização automática estiver desativada nas configurações do seu serviço, você precisará reiniciar o servidor manualmente após cada patch para que a verificação de atualização seja executada.

:::caution Disponibilidade da Atualização Automática
O nome exato e a disponibilidade dos controles de atualização automática podem variar dependendo da interface atual do servidor de jogos da ZAP-Hosting e da configuração do produto. Se você não encontrar uma opção relacionada à atualização nas configurações do servidor, não presuma que ela está permanentemente ausente; a opção pode variar conforme a versão do produto ou ser gerenciada automaticamente em segundo plano.
:::

## Verifique as Configurações Relevantes do Servidor

Para começar, abra seu servidor Palworld na interface web da ZAP-Hosting e revise as configurações disponíveis relacionadas a atualizações e comportamento na inicialização.

### Abra a Administração do Seu Servidor

1. Faça login na interface web da ZAP-Hosting.
2. Abra seu servidor de jogos **Palworld**.
3. Revise as seções disponíveis, como **Configs**, **Console** e os controles de energia do servidor.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Verifique se um Arquivo de Configuração Precisa Ser Editado

Para o processo de atualização do Palworld em si, não há um arquivo de configuração confirmado que altere manualmente a versão do jogo na operação padrão do servidor. Os arquivos de configuração de gameplay relevantes do Palworld em **Configs** são geralmente usados para configurações do servidor, como regras de gameplay, e não para baixar uma nova build do servidor.

O arquivo de configurações mais usado do Palworld é:

| Arquivo | Propósito típico | Onde encontrar |
| --- | --- | --- |
| `PalWorldSettings.ini` | Configurações de gameplay e comportamento do servidor | Administração do servidor de jogos em **Configs** |

:::note Sem Entrada Manual de Versão
Não existe uma chave verificada em `PalWorldSettings.ini` para forçar uma atualização específica da versão do servidor Palworld em uma configuração padrão da ZAP-Hosting. Se seu objetivo é apenas atualizar o software do servidor, normalmente não é necessário editar o `PalWorldSettings.ini`.
:::

## Atualize o Servidor

Depois de confirmar seu acesso ao servidor e verificar as configurações disponíveis, você pode acionar o processo de atualização.

### Reinicie o Servidor para Acionar a Verificação de Atualização

O método principal é reiniciar o servidor. Em muitos servidores Palworld hospedados, a inicialização aciona uma verificação por atualizações disponíveis do jogo.

1. Pare ou reinicie seu servidor Palworld pela interface web da ZAP-Hosting.
2. Aguarde até que o servidor tenha sido completamente desligado.
3. Inicie o servidor novamente.
4. Aguarde alguns minutos para que o processo de inicialização e atualização seja concluído.

Se o comportamento de atualização automática da ZAP-Hosting estiver ativo para seu serviço, essa reinicialização deve acionar o servidor para baixar e aplicar a atualização Palworld mais recente disponível.

### Se as Atualizações Automáticas Estiverem Desativadas

Se seu serviço estiver configurado para não atualizar automaticamente, você precisará reiniciar o servidor manualmente após cada patch ou atualização de versão do Palworld ser lançada.

Use o mesmo processo:

1. Pare o servidor.
2. Inicie o servidor novamente.
3. Aguarde o servidor completar a inicialização.

:::tip Melhor Prática Após um Lançamento do Palworld
Após o anúncio da data de lançamento ou implantação de um patch do Palworld, reinicie seu servidor em um período de baixa atividade. Isso ajuda a evitar problemas de conexão dos jogadores causados por incompatibilidade entre as versões do cliente e do servidor.
:::

## Verifique se a Atualização Foi Aplicada

Depois que o servidor iniciar novamente, você deve confirmar que a nova versão está ativa.

### Verifique a Saída do Console

Abra o **Console** na administração do seu servidor de jogos e revise o log de inicialização. Procure sinais de que o servidor completou a inicialização normalmente e não encontrou erros de atualização ou validação de arquivos.

Como as linhas exatas do log podem variar conforme a build do servidor, foque em verificar se o servidor inicia com sucesso e aceita conexões de clientes na versão mais recente do jogo Palworld.

### Use o Comando `info`

Se o console do seu servidor suportar, execute o seguinte comando:

```text
info
```

Esse comando pode ser usado para verificar informações do servidor após a inicialização.

| Comando | Propósito |
| --- | --- |
| `info` | Exibe informações do servidor para verificação após a atualização |

:::note Disponibilidade do Comando
O suporte a comandos no console pode variar dependendo da implementação atual do servidor dedicado Palworld e da forma como o host expõe o acesso ao console. Se o `info` não retornar uma saída útil no seu ambiente, use o log de inicialização e um teste de conexão a partir de um cliente de jogo atualizado.
:::

## Solução de Problemas em Caso de Falha na Atualização

Se a reinicialização não atualizar o servidor, você deve usar as opções de recuperação disponíveis no painel da ZAP-Hosting.

### Reinstale ou Verifique os Arquivos do Servidor

Se o servidor ainda parecer rodar uma versão antiga após a reinicialização:

1. Pare o servidor completamente.
2. Abra a opção de reinstalação ou recuperação na administração do seu servidor de jogos na ZAP-Hosting.
3. Se disponível, use a opção **Verificar integridade** ou similar para checar os arquivos.
4. Inicie o servidor novamente após o processo ser concluído.

Esse processo revalida ou rebaixa os arquivos do servidor Palworld e pode resolver atualizações incompletas ou falhas.

:::caution Precaução com Dados Salvos
Antes de usar funções relacionadas à reinstalação, certifique-se de entender se a opção selecionada afeta apenas os arquivos do jogo ou também os dados do mundo. Se o painel não explicar isso claramente, faça um backup primeiro ou entre em contato com o suporte antes de prosseguir.
:::

### Confirme a Compatibilidade entre Versão do Cliente e Servidor

Às vezes o servidor é atualizado corretamente, mas os jogadores ainda não conseguem entrar porque o cliente local do jogo está em uma versão diferente.

Verifique o seguinte:

| Verificação | Por que é importante |
| --- | --- |
| Servidor reiniciado após o patch | A inicialização geralmente aciona a atualização |
| Última atualização do cliente instalada | Jogadores precisam da mesma versão do jogo |
| Sem erros de inicialização no console | Erros podem impedir a conclusão da atualização |
| Verificação de arquivos concluída | Arquivos corrompidos podem bloquear atualizações |

## O Que Você Precisa Editar em Configs

Como este guia cobre especificamente um processo manual e a tarefa menciona **Configs**, é importante esclarecer o escopo:

- Os arquivos de configuração do Palworld em **Configs** são usados para configurações do servidor.
- Não existe uma entrada verificada no `PalWorldSettings.ini` que baixe ou aplique manualmente uma atualização do software do servidor.
- Para uma atualização normal de versão, geralmente você **não** precisa alterar nenhum valor no arquivo de configuração.
- A ação necessária normalmente é um **reinício do servidor**, seguido por uma **verificação de arquivos ou reinstalação** somente se a atualização falhar.

Se a ZAP-Hosting futuramente disponibilizar uma opção dedicada de atualização ou parâmetro de inicialização no painel, você deve usar o nome exato mostrado na sua interface em vez de adicionar entradas não suportadas no arquivo de configuração.

:::danger Não Adicione Chaves de Configuração Não Verificadas
Não cole comandos de atualização aleatórios, parâmetros SteamCMD ou chaves não documentadas em `PalWorldSettings.ini` ou outros arquivos em **Configs** a menos que estejam explicitamente documentados para seu serviço Palworld atual na ZAP-Hosting. Entradas não suportadas não atualizarão o servidor de forma confiável e podem causar problemas de configuração.
:::

## Após a Atualização

Depois que a atualização for aplicada com sucesso:

1. Certifique-se de que o servidor está rodando normalmente.
2. Revise o console para erros.
3. Teste a entrada no servidor com um cliente Palworld atualizado.
4. Execute `info` no console, se suportado.

Neste ponto, seu servidor deve estar pronto para os jogadores na versão mais recente.

## Conclusão

Parabéns, você atualizou seu servidor Palworld com sucesso. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂