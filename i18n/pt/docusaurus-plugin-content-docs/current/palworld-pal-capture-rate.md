---
id: palworld-pal-capture-rate
title: "Palworld: Taxa de Captura de Pal"
description: "Aprenda como alterar a taxa de captura de Pal no Palworld editando a configuração PalCaptureRate para facilitar as capturas no seu servidor. -> Saiba mais agora"
sidebar_label: "Taxa de Captura de Pal"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld permite que você ajuste a taxa de captura de Pal no seu servidor através da configuração principal do mundo. Neste guia, você vai aprender onde encontrar o arquivo de configuração correto na interface da ZAP-Hosting, qual valor alterar e como aplicar a nova taxa de captura.



## Preparação

Antes de começar, certifique-se de que você tem acesso ao seu servidor de jogos Palworld pela interface web da ZAP-Hosting e que o servidor está configurado e rodando.

:::info Acesso ao Arquivo de Configuração
Para servidores Palworld na ZAP-Hosting, as configurações relevantes podem ser editadas pela administração do servidor de jogos na seção `Configs`.
:::

## Localize o Arquivo de Configuração do Palworld

Para alterar a taxa de captura de Pal, você precisa editar o arquivo `PalWorldSettings.ini`.

### Abra a Seção Configs

Primeiro, faça login na interface web da ZAP-Hosting e abra seu servidor de jogos Palworld. Na administração do servidor, navegue até `Configs`.

Lá, procure pelo arquivo chamado:

```ini
PalWorldSettings.ini
```

### Identifique a Configuração Correta

Dentro do `PalWorldSettings.ini`, o Palworld armazena várias configurações de gameplay na seção `OptionSettings`. A configuração relevante para captura de Pal é:

```ini
PalCaptureRate=[seu_valor]
```

O valor padrão normalmente é:

```ini
PalCaptureRate=1.000000
```

Um valor maior facilita a captura dos Pals, enquanto um valor menor torna as tentativas mais difíceis.

## Edite a Taxa de Captura de Pal

Agora que você abriu o arquivo correto, pode ajustar a taxa de captura para combinar com o equilíbrio de gameplay que preferir.

### Altere o Valor da Configuração

Procure dentro do `PalWorldSettings.ini` pela entrada `PalCaptureRate` e substitua seu valor pelo multiplicador desejado.

Por exemplo:

```ini
PalCaptureRate=2.000000
```

Isso dobraria a taxa de captura em relação à configuração padrão.

### Valores de Exemplo

Use a tabela abaixo como referência geral:

| Valor | Efeito |
| --- | --- |
| `1.000000` | Taxa padrão de captura de Pal |
| `1.500000` | Captura um pouco mais fácil |
| `2.000000` | Captura visivelmente mais fácil |
| `3.000000` | Captura muito mais fácil |

:::tip Configuração Balanceada
Se quiser capturas mais fáceis sem que pareçam garantidas, um valor entre `1.500000` e `2.000000` costuma ser um bom ponto de partida.
:::

## Salve e Aplique as Alterações

Após editar o valor `PalCaptureRate`, salve as alterações no editor de configs da ZAP-Hosting.

### Reinicie o Servidor

O Palworld não aplica essa configuração em tempo real. Depois de salvar o arquivo, você precisa reiniciar seu servidor de jogos pela administração da ZAP-Hosting para que a nova taxa de captura seja carregada.

:::caution Reinicialização Necessária
Se você não reiniciar o servidor após editar o `PalWorldSettings.ini`, a nova taxa de captura não terá efeito.
:::

## Referência da Configuração

A tabela a seguir resume a configuração usada para essa alteração:

| Arquivo | Chave da Config | Valor Padrão | Propósito | Reinicialização Necessária |
| --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | `PalCaptureRate` | `1.000000` | Controla o multiplicador da taxa de captura de Pal | Sim |

## Solução de Problemas

Se a nova taxa de captura não parecer funcionar, verifique os seguintes pontos.

### Verifique o Formato da Configuração

Certifique-se de que a linha está escrita corretamente e usa um valor numérico, por exemplo:

```ini
PalCaptureRate=2.000000
```

Evite adicionar caracteres extras ou alterar entradas não relacionadas no arquivo.

### Confirme se o Arquivo Foi Salvo

Após editar, verifique se as alterações foram realmente salvas no `PalWorldSettings.ini` pela seção `Configs`.

### Reinicie Novamente se Necessário

Se o servidor não foi reiniciado corretamente após a alteração, faça outra reinicialização pela administração do servidor.

:::note Configuração de Gameplay no Servidor
`PalCaptureRate` é uma configuração de gameplay do servidor, então os jogadores só notarão a nova taxa depois que o servidor recarregar a configuração atualizada.
:::

## Conclusão

Parabéns, você alterou com sucesso a taxa de captura de Pal no seu servidor Palworld. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂