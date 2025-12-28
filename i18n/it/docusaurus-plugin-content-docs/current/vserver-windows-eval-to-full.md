---
id: vserver-windows-eval-to-full
title: "VPS: Converti Windows Server Evaluation in Versione Completa"
description: "Scopri come convertire Windows Server Evaluation in Versione Completa → Scopri di più ora"
sidebar_label: Converti Eval in Full
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Le edizioni Windows Server Evaluation sono pensate per test e hanno una durata limitata. Per continuare a usare la stessa installazione in produzione, puoi convertire l’edizione di valutazione in una versione completamente licenziata senza reinstallare il sistema operativo.

Microsoft supporta questa conversione in-place tramite lo strumento DISM, a patto che tu abbia una product key valida per l’edizione di destinazione.

<InlineVoucher />



## Prerequisiti

Prima di iniziare la conversione, assicurati di avere una product key valida per l’edizione di Windows Server a cui vuoi passare, come Standard o Datacenter. La product key deve corrispondere esattamente all’edizione di destinazione.



## Verifica edizione attuale

Per controllare quale edizione è installata, apri un Prompt dei comandi o PowerShell con privilegi elevati ed esegui questo comando:

```powershell
DISM /Online /Get-CurrentEdition
```

L’output mostrerà l’identificativo dell’edizione attiva. Le installazioni di valutazione di solito appaiono come `ServerStandardEval` o `ServerDatacenterEval`.



## Controllo edizioni di destinazione supportate

Non tutte le edizioni possono essere convertite in tutte le altre. Per vedere quali edizioni licenziate sono supportate per la tua installazione attuale, esegui:

```
DISM /Online /Get-TargetEditions
```

Le edizioni elencate sono i target validi per la conversione.



## Aggiorna da Evaluation a Versione Completa

Una volta identificata l’edizione di destinazione e avendo a disposizione una product key valida, puoi avviare l’upgrade. Il valore `<TargetEdition>` deve corrispondere a una delle edizioni supportate restituite dal comando di controllo.

Le edizioni target più comuni sono:
- `ServerStandard`
- `ServerDatacenter`

Usa questo comando per avviare la conversione. Sostituisci `<TargetEdition>` con l’edizione desiderata e `<ProductKey>` con la tua product key Windows Server da 25 caratteri:


```
DISM /Online /Set-Edition:<TargetEdition> /ProductKey:<ProductKey> /AcceptEula
```

| Edizione sistema operativo       | Product Key Volume License Generica |
| ------------------------------ | ---------------------------------- |
| Windows Server 2025 Standard   | TVRH6-WHNXV-R9WG3-9XRFY-MY832     |
| Windows Server 2025 Datacenter | D764K-2NDRG-47T6Q-P8T8W-YP6DF     |
| Windows Server 2022 Standard   | VDYBN-27WPP-V4HQT-9VMD4-VMK7H     |
| Windows Server 2022 Datacenter | WX4NM-KYWYW-QJJR4-XV3QB-6VM33     |

Durante il processo, la barra di avanzamento potrebbe sembrare bloccata per un attimo. È normale. Al termine della conversione, sarà necessario riavviare il server per completare il cambio di edizione.



## Verifica versione di Windows Server

Dopo il riavvio, apri di nuovo un Prompt dei comandi o PowerShell con privilegi elevati e lancia:

```powershell
DISM /Online /Get-CurrentEdition
```

L’output dovrebbe mostrare ora l’edizione licenziata, tipo `ServerStandard` o `ServerDatacenter`, confermando che la conversione da Evaluation è andata a buon fine.

A questo punto vedrai il watermark **Attiva Windows** in basso a destra. Ora puoi usare la tua licenza Windows Server acquistata per attivare l’edizione Standard o Datacenter.



## Conclusione

Congratulazioni! Hai convertito con successo la tua versione di Windows Server da EVAL a Full. Per qualsiasi domanda o supporto, il nostro team è sempre a disposizione ogni giorno per aiutarti! 🙂



<InlineVoucher />