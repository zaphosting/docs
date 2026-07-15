---
id: palworld-enable-global-palbox
title: "Palworld: Ativar Global Palbox"
description: "Aprenda como ativar a configuração global do palbox no Palworld para importação e exportação global no seu servidor dedicado. -> Saiba mais agora"
sidebar_label: Palworld: Ativar Global Palbox
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O *Global Palbox* no Palworld permite que jogadores transfiram Pals entre servidores usando o sistema global de armazenamento em nuvem do Palworld. Neste guia, você vai aprender como ativar a importação e exportação do Global Palbox no seu servidor de jogos Palworld da ZAP-Hosting editando o arquivo de configuração correto manualmente.



## Preparação

Antes de começar, certifique-se de que:

- você tem acesso ao seu servidor de jogos Palworld na interface web da ZAP-Hosting
- seu servidor está parado no momento ou pode ser reiniciado após as alterações
- você consegue acessar a seção `Configs` na administração do seu servidor de jogos

:::info Acesso ao Arquivo de Configuração
Para servidores Palworld da ZAP-Hosting, as configurações relevantes podem ser editadas diretamente pela administração do servidor na seção `Configs`. Você não precisa de acesso externo a arquivos se o editor de configuração estiver disponível lá.
:::

## Abrir o Arquivo de Configuração do Palworld

Para ativar o recurso Global Palbox, você precisa editar o arquivo `PalWorldSettings.ini`.

### Encontrar o Arquivo de Configuração na Interface ZAP

1. Faça login no [site da ZAP-Hosting](https://zap-hosting.com).
2. Abra a administração do seu servidor de jogos Palworld.
3. Navegue até a seção `Configs`.
4. Abra o arquivo chamado `PalWorldSettings.ini`.

Este arquivo contém as principais configurações do servidor usadas pelo Palworld, incluindo as opções do Global Palbox.

:::note Configuração Manual Necessária
A configuração do Global Palbox é feita manualmente pelo arquivo de configuração do servidor. Se você não encontrar uma opção separada para esse recurso na interface, editar o `PalWorldSettings.ini` diretamente é o método correto.
:::

## Ativar Importação e Exportação do Global Palbox

Depois de abrir o `PalWorldSettings.ini`, localize a lista de opções do servidor e ajuste as entradas do Global Palbox.

### Chaves de Configuração Necessárias

As seguintes configurações controlam o comportamento do Global Palbox:

| Chave de Configuração | Valor | Função |
| --- | --- | --- |
| `bAllowGlobalPalboxImport` | `True` ou `False` | Permite que jogadores importem Pals do Global Palbox |
| `bAllowGlobalPalboxExport` | `True` ou `False` | Permite que jogadores exportem Pals para o Global Palbox |

Segundo material de referência de terceiros, `bAllowGlobalPalboxImport` vem desativado por padrão com `False`, enquanto `bAllowGlobalPalboxExport` vem ativado por padrão com `True`. Se seu arquivo já contiver esses valores, basta ajustá-los conforme necessário.

### Definir os Valores

Para ativar completamente as transferências do Global Palbox entre servidores, defina ambos os valores como `True`.

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Se essas opções já existirem no arquivo, substitua os valores atuais. Se não estiverem presentes, adicione-as na seção de configurações do servidor em `PalWorldSettings.ini`.

:::caution Mantenha a Sintaxe Existente Intacta
Os arquivos de configuração do Palworld são sensíveis à formatação. Altere apenas os valores necessários e evite remover vírgulas, colchetes ou outras entradas existentes se essas opções fizerem parte de uma linha maior de configurações no seu arquivo.
:::

## Salvar as Alterações

Após editar o arquivo:

1. Salve as alterações no editor do `PalWorldSettings.ini`.
2. Confirme que ambos os valores do Global Palbox estão presentes e configurados corretamente.

Se o painel do seu servidor oferecer apenas um botão de salvar, use-o antes de reiniciar o servidor na próxima etapa.

## Reiniciar o Servidor

Depois de alterar as configurações do Global Palbox, você precisa reiniciar o servidor Palworld para que a nova configuração seja carregada.

### Aplicar as Novas Configurações

Reinicie seu servidor pela administração do servidor de jogos após salvar o arquivo.

| Ação | Necessário |
| --- | --- |
| Salvar `PalWorldSettings.ini` | Sim |
| Reiniciar o servidor | Sim |
| Executar comandos adicionais no console | Não |

Nenhum comando adicional é necessário após editar o arquivo de configuração. Um reinício normal do servidor é suficiente para aplicar a nova configuração do Global Palbox do Palworld.

:::tip Verifique o Recurso Dentro do Jogo
Após o reinício, entre no seu servidor e teste se os jogadores conseguem importar e exportar Pals pelo Global Palbox. Essa é a forma mais fácil de confirmar que a configuração foi aplicada com sucesso.
:::

## Solução de Problemas

Se o Global Palbox não funcionar após o reinício, verifique os seguintes pontos.

### Confirme se os Valores Foram Salvos Corretamente

Abra o `PalWorldSettings.ini` novamente e verifique se estes valores ainda estão presentes:

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

Se os valores voltaram ao padrão, o arquivo pode não ter sido salvo corretamente.

### Verifique Problemas de Formatação

Se você inseriu os valores em um bloco de configurações existente, certifique-se de que a sintaxe ao redor continua válida. Formatação incorreta no `PalWorldSettings.ini` pode fazer o Palworld ignorar as configurações ou falhar ao carregá-las corretamente.

### Reinicie o Servidor Novamente

Se você salvou o arquivo enquanto o servidor estava rodando, faça outro reinício completo para garantir que a nova configuração seja aplicada.

:::danger Disponibilidade do Recurso Depende da Versão do Jogo
O Global Palbox é um recurso do próprio Palworld. Se a configuração não funcionar mesmo estando correta, o recurso pode depender da versão atual do servidor Palworld ou de limitações temporárias do jogo. Nesse caso, verifique se seu servidor está totalmente atualizado.
:::

## Conclusão

Parabéns, você ativou com sucesso a importação e exportação do Global Palbox no seu servidor Palworld. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂