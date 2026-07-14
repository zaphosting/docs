---
id: palworld-host-character-transfer
title: "Palworld: Transferência de Personagem Host"
description: "Aprenda como transferir seu personagem host de Palworld de um save solo ou cooperativo para um servidor dedicado usando o Palworld Save Tools e os arquivos de save corretos. -> Saiba mais agora"
sidebar_label: Palworld: Transferência de Personagem Host
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

A transferência de personagem host em Palworld permite migrar o personagem de um host solo ou cooperativo para um save de servidor dedicado. Neste guia, você vai preparar os arquivos de save necessários, usar a ferramenta de migração suportada e enviar os dados atualizados do personagem de volta para seu servidor.

:::danger Aviso de Transferência Experimental de Personagem
Este procedimento é considerado experimental e modifica os dados de save manualmente. Atualizações do Palworld podem alterar a estrutura dos saves, o que pode fazer com que as ferramentas ou etapas de migração parem de funcionar corretamente.
:::

## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld e a um sistema Windows local onde possa executar a ferramenta de migração de save necessária.

### Requisitos

Você precisa do seguinte:

| Requisito | Propósito |
| --- | --- |
| Acesso ao seu servidor Palworld da ZAP-Hosting | Para baixar e enviar os arquivos de save necessários |
| Um local de backup local | Para manter uma cópia segura dos seus dados originais de save |
| [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools) | Para realizar a migração do personagem host |
| Um personagem recém-criado no servidor | Os dados do personagem host serão migrados para este personagem do servidor dedicado |

:::caution Faça um Backup Primeiro
Antes de alterar qualquer arquivo de save, baixe e armazene um backup completo do seu save atual do servidor. Se a transferência falhar ou gerar dados corrompidos do personagem, você precisará dos arquivos originais para restaurar o servidor.
:::

### Notas Importantes Sobre Arquivos de Configuração

Esta transferência **não** é feita editando um arquivo de configuração do Palworld dentro da pasta `Configs`. Com base na documentação da ferramenta disponível e nas orientações da comunidade, a transferência do personagem host é realizada substituindo arquivos de dados de save.

Os arquivos relevantes estão localizados no diretório de save do seu servidor, não no arquivo de configuração normal do gameplay como `PalWorldSettings.ini`.

## Entenda Quais Arquivos São Usados

Antes de iniciar a transferência, você deve identificar os arquivos envolvidos.

### Arquivos de Save Necessários para a Transferência

A migração do personagem host usa os seguintes dados de save:

| Arquivo ou Pasta | Localização | Propósito |
| --- | --- | --- |
| `Level.sav` | `Pal/Saved/SaveGames/0/[seu_id_de_pasta_de_save]/Level.sav` | Contém dados de save do mundo usados pela ferramenta de migração |
| `Players/` | `Pal/Saved/SaveGames/0/[seu_id_de_pasta_de_save]/Players/` | Contém arquivos de save dos jogadores, incluindo o novo personagem do servidor dedicado |
| `00000001.sav` | Dentro de `Players/` do save solo ou cooperativo enviado | Normalmente representa o personagem host original em saves cooperativos |

`[seu_id_de_pasta_de_save]` é o nome longo da pasta usado pelo seu save do mundo Palworld. Esse valor é diferente para cada save.

### Onde Encontrar os Arquivos na Interface da ZAP

Você pode acessar os arquivos de save necessários pelo gerenciador de arquivos da administração do seu servidor de jogos.

Navegue até:

```text
Pal/Saved/SaveGames/0/[seu_id_de_pasta_de_save]/
```

Dentro dessa pasta, você deve encontrar pelo menos:

- `Level.sav`
- `LevelMeta.sav`
- `Players/`

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Prepare o Personagem do Servidor Dedicado

Antes de migrar o personagem host, o servidor dedicado deve conter um save de jogador recém-gerado para sua conta.

### Crie um Novo Personagem no Servidor

Entre normalmente no seu servidor dedicado Palworld e crie um novo personagem. Depois, jogue até que o personagem alcance pelo menos o nível `2`.

Esta etapa é necessária porque a ferramenta de transferência precisa de um arquivo de personagem existente no servidor dedicado como destino da migração.

### Force ou Aguarde um Save

Após criar o novo personagem, você precisa garantir que o servidor tenha gravado os dados do novo jogador no disco.

Você pode:

- esperar o intervalo automático de save, que normalmente é cerca de `4` minutos, ou
- executar o comando `save` no console do servidor

| Comando | Onde executar | Propósito |
| --- | --- | --- |
| `save` | Console do servidor | Força o servidor a gravar os dados atuais do mundo e dos jogadores no disco |

:::info Requisito do Comando Save
Se usar o comando `save`, execute-o antes de parar o servidor. Isso ajuda a garantir que o arquivo do novo personagem do servidor dedicado exista na pasta `Players/`.
:::

### Pare o Servidor

Quando o save estiver completo, pare o servidor Palworld pela administração do seu servidor.

Não continue enquanto o servidor estiver rodando, pois gravações ativas podem sobrescrever ou conflitar com os arquivos que você está prestes a substituir.

## Baixe os Dados de Save Necessários

Agora que o novo personagem existe no servidor dedicado, você pode baixar os arquivos necessários para a migração.

### Abra o Diretório de Save

No gerenciador de arquivos da ZAP-Hosting, vá para:

```text
Pal/Saved/SaveGames/0/[seu_id_de_pasta_de_save]/
```

### Baixe os Arquivos

Baixe os seguintes itens para seu computador local:

| Item | Necessário |
| --- | --- |
| `Level.sav` | Sim |
| Pasta `Players/` | Sim |

Armazene ambos no mesmo diretório local de trabalho para que a ferramenta de migração possa processá-los corretamente.

:::tip Mantenha os Arquivos Juntos
Coloque `Level.sav` e a pasta `Players/` lado a lado na mesma pasta local. Isso corresponde ao fluxo de trabalho esperado pelo Palworld Save Tools.
:::

## Migre o Personagem Host

Depois de baixar os dados de save, você pode realizar a transferência real do personagem host.

### Inicie o Palworld Save Tools

Baixe e extraia o [Palworld Save Tools](https://github.com/deafdudecomputers/PalWorldSaveTools), depois abra o `PalworldSaveTools.exe`.

No aplicativo, escolha:

```text
Fix Host Save
```

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Selecione os Arquivos Corretos

Dentro da ferramenta de migração:

1. Selecione seu `Level.sav` baixado
2. No campo de seleção à esquerda, escolha `00000001.sav`
3. No campo de seleção à direita, escolha o novo personagem que você criou no servidor dedicado
4. Inicie a migração selecionando `Migrate`

| Campo da Ferramenta | Valor a selecionar |
| --- | --- |
| `Path to Level.sav` | Seu `Level.sav` baixado |
| Campo de personagem esquerdo | `00000001.sav` |
| Campo de personagem direito | Seu personagem recém-criado no servidor dedicado |
| Ação | `Migrate` |

### O Que a Migração Faz

O processo de migração reatribui os dados do personagem host original do save solo ou cooperativo para a entrada do personagem do servidor dedicado que você criou anteriormente.

Por isso, você deve primeiro entrar no servidor e gerar um save de jogador novo antes de usar a ferramenta.

:::caution Verifique o Personagem Destino
Certifique-se de selecionar o personagem correto do servidor novo no lado direito. Escolher o alvo errado pode sobrescrever os dados de save de outro jogador.
:::

## Envie os Arquivos de Save Atualizados

Após a migração ser concluída com sucesso, você precisa enviar os arquivos modificados de volta para seu servidor.

### Substitua os Dados de Save Existentes

Volte para o mesmo diretório do servidor no gerenciador de arquivos da ZAP-Hosting:

```text
Pal/Saved/SaveGames/0/[seu_id_de_pasta_de_save]/
```

Envie e substitua:

- o `Level.sav` atualizado
- a pasta `Players/` atualizada

Se o gerenciador de arquivos pedir para sobrescrever arquivos existentes, confirme a substituição.

### Alterações em Arquivos de Configuração

Para esta transferência específica do personagem host, atualmente não há necessidade verificada de editar um arquivo de configuração do Palworld como o `PalWorldSettings.ini`.

| Item | Necessário para transferência host |
| --- | --- |
| Editar `PalWorldSettings.ini` | Não |
| Editar arquivos em `Configs` | Nenhuma necessidade verificada |
| Substituir `Level.sav` | Sim |
| Substituir `Players/` | Sim |

:::note Nenhuma Entrada de Configuração Adicional Necessária
Com base na documentação da ferramenta disponível e nas instruções de migração, não são necessárias entradas extras de configuração ou alterações manuais em `.ini` para a transferência em si.
:::

## Inicie o Servidor e Teste o Personagem

Depois de enviar os arquivos atualizados, inicie seu servidor Palworld novamente.

### Reentre no Servidor

Conecte-se ao servidor usando a mesma conta que criou o novo personagem do servidor dedicado. Se a migração foi bem-sucedida, você deverá carregar o personagem host transferido em vez do temporário novo.

### Verifique Dados Importantes do Personagem

Após entrar, verifique se os seguintes dados aparecem corretamente:

- nível do personagem
- inventário
- pals
- propriedade da base
- dados de progressão

Se algo estiver faltando ou incorreto, pare o servidor imediatamente e restaure seu backup antes de tentar novamente.

:::danger Restaure o Backup se os Dados Estiverem Incorretos
Se os dados do seu personagem, inventário ou propriedade do mundo parecerem corrompidos após a migração, não continue jogando. Restaure primeiro o backup original de `Level.sav` e `Players/` para evitar salvar alterações indesejadas.
:::

## Resumo de Referência

### Caminhos, Arquivos e Ações Necessárias

| Tipo | Valor |
| --- | --- |
| Caminho do save | `Pal/Saved/SaveGames/0/[seu_id_de_pasta_de_save]/` |
| Arquivo necessário | `Level.sav` |
| Pasta necessária | `Players/` |
| Arquivo de save host geralmente selecionado | `00000001.sav` |
| Comando do servidor | `save` |
| Reinício do servidor necessário | Sim |
| Edição de arquivo de configuração necessária | Nenhuma necessidade verificada |

## Conclusão

Parabéns, você transferiu com sucesso seu personagem host de Palworld para um servidor dedicado. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂