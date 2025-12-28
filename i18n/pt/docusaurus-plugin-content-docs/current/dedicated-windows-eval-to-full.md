---
id: dedicated-windows-eval-to-full
title: "Servidor Dedicado: Converter Windows Server Evaluation para Versão Completa"
description: "Descubra como converter Windows Server Evaluation para Versão Completa → Saiba mais agora"
sidebar_label: Converter Eval para Completo
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

As edições Windows Server Evaluation são feitas para testes e têm tempo limitado. Para continuar usando a mesma instalação em produção, a edição de avaliação pode ser convertida para uma versão totalmente licenciada sem precisar reinstalar o sistema operacional.

A Microsoft oferece suporte para essa conversão direta usando a ferramenta DISM, desde que você tenha uma chave de produto válida para a edição desejada.

<InlineVoucher />



## Pré-requisitos

Antes de começar a conversão, certifique-se de ter uma chave de produto válida para a edição do Windows Server que deseja usar, como Standard ou Datacenter. A chave deve corresponder exatamente à edição alvo.



## Obtendo a edição atual

Para verificar qual edição está instalada, abra o Prompt de Comando ou PowerShell com privilégios elevados e execute o comando:

```powershell
DISM /Online /Get-CurrentEdition
```

O resultado mostrará o identificador da edição ativa. Instalações de avaliação geralmente aparecem como `ServerStandardEval` ou `ServerDatacenterEval`.



## Verificando edições alvo suportadas

Nem toda edição pode ser convertida para qualquer outra. Para ver quais edições licenciadas são suportadas para sua instalação atual, rode o comando:

```
DISM /Online /Get-TargetEditions
```

As edições listadas são os alvos válidos para a conversão.



## Atualizando da versão Evaluation para Completa

Com a edição alvo definida e a chave de produto válida em mãos, você pode iniciar a atualização. O valor `<TargetEdition>` deve ser uma das edições suportadas listadas pelo comando anterior.

Edições alvo comuns incluem:
- `ServerStandard`
- `ServerDatacenter`

Use o comando abaixo para iniciar a conversão. Substitua `<TargetEdition>` pela edição desejada e `<ProductKey>` pela sua chave de produto do Windows Server com 25 caracteres:


```
DISM /Online /Set-Edition:<TargetEdition> /ProductKey:<ProductKey> /AcceptEula
```

| Edição do sistema operacional | Chave Genérica de Licença por Volume |
| ----------------------------- | ----------------------------------- |
| Windows Server 2025 Standard   | TVRH6-WHNXV-R9WG3-9XRFY-MY832      |
| Windows Server 2025 Datacenter | D764K-2NDRG-47T6Q-P8T8W-YP6DF      |
| Windows Server 2022 Standard   | VDYBN-27WPP-V4HQT-9VMD4-VMK7H      |
| Windows Server 2022 Datacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33      |

Durante o processo, pode parecer que o progresso parou por um momento. Isso é normal. Após a conversão, será necessário reiniciar para finalizar a troca da edição.



## Verificando a versão do Windows Server

Depois do reinício, abra o Prompt de Comando ou PowerShell com privilégios elevados e execute:

```powershell
DISM /Online /Get-CurrentEdition
```

O resultado deve mostrar a edição licenciada, como `ServerStandard` ou `ServerDatacenter`, confirmando que a conversão da avaliação foi feita com sucesso.

Neste ponto, você verá a marca d’água **Ativar o Windows** no canto inferior direito da tela. Agora você pode usar sua licença comprada do Windows Server para ativar a edição Standard ou Datacenter.



## Conclusão

Parabéns! Você acabou de converter seu Windows Server de EVAL para Versão Completa. Se tiver dúvidas ou precisar de ajuda, nosso time de suporte está disponível diariamente para te ajudar! 🙂



<InlineVoucher />