---
id: palworld-supply-drop-settings
title: "Palworld: Impostazioni Supply Drop"
description: "Scopri come modificare la frequenza dei supply drop in Palworld sul tuo server di gioco Palworld modificando manualmente l'impostazione SupplyDropSpan. -> Scopri di più ora"
sidebar_label: Palworld: Impostazioni Supply Drop
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Palworld include supply drop che appaiono a intervalli regolari e possono fornire risorse utili durante il gioco. In questa guida, imparerai come modificare manualmente la frequenza dei supply drop sul tuo server di gioco Palworld di ZAP-Hosting modificando il file di configurazione corretto.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparazione

Prima di iniziare, assicurati di avere accesso al tuo server di gioco Palworld nell’interfaccia web di ZAP-Hosting e i permessi per modificare i file di configurazione del server.

:::info Configurazione Manuale Necessaria
Questa configurazione va effettuata manualmente tramite l’amministrazione del server sotto la sezione **Configs**. Dopo aver modificato l’impostazione, è necessario riavviare il server affinché Palworld carichi la configurazione aggiornata.
:::

## Individua il file di configurazione corretto

Per modificare l’intervallo dei supply drop, devi modificare il file `PalWorldSettings.ini`.

Nell’interfaccia web di ZAP-Hosting:

1. Apri l’amministrazione del tuo server di gioco Palworld.
2. Vai su **Configs**.
3. Apri il file `PalWorldSettings.ini`.

Questo file contiene i valori principali di configurazione del gameplay per il tuo server Palworld, inclusa l’impostazione del timer dei supply drop.

## Modifica l’impostazione dei supply drop

All’interno di `PalWorldSettings.ini`, cerca la sezione `OptionSettings` e individua la voce `SupplyDropSpan`.

La chiave di configurazione rilevante è mostrata qui sotto:

| Impostazione | Descrizione | Esempio |
| --- | --- | --- |
| `SupplyDropSpan` | Definisce l’intervallo tra i supply drop in minuti | `180` |

Se la voce esiste già, modifica il suo valore con l’intervallo che preferisci.

### Valori di esempio

Puoi usare i seguenti valori come riferimento:

| Valore | Risultato |
| --- | --- |
| `30` | Supply drop molto frequenti |
| `60` | Supply drop ogni 1 ora |
| `180` | Impostazione predefinita, ogni 3 ore |
| `360` | Supply drop ogni 6 ore |

### Configurazione di esempio

A seconda del contenuto attuale del file, l’impostazione apparirà come parte della riga più ampia `OptionSettings`. Per esempio:

```ini
OptionSettings=(SupplyDropSpan=180)
```

Se il tuo file contiene già molte impostazioni nello stesso blocco `OptionSettings=(...)`, modifica solo il valore di `SupplyDropSpan` lasciando inalterate le altre voci esistenti.

Per esempio:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,SupplyDropSpan=60)
```

:::caution Mantieni le Impostazioni Esistenti
Non rimuovere altri valori dal blocco `OptionSettings` quando modifichi `SupplyDropSpan`. Se elimini accidentalmente virgole, parentesi o altre voci, la configurazione di Palworld potrebbe non caricarsi correttamente.
:::

## Salva e applica le modifiche

Una volta aggiornato il valore di `SupplyDropSpan`:

1. Salva le modifiche in `PalWorldSettings.ini`.
2. Riavvia il tuo server Palworld dall’amministrazione server di ZAP-Hosting.

Il riavvio è necessario perché Palworld non applica questa impostazione in tempo reale mentre il server è in esecuzione.

:::note Nessun Comando Aggiuntivo Necessario
Normalmente non serve alcun comando in-game o da console per questa modifica. Il riavvio del server è il passaggio necessario per applicare il nuovo intervallo dei supply drop.
:::

## Verifica il nuovo intervallo dei supply drop

Dopo il riavvio, il tuo server utilizzerà il nuovo valore `SupplyDropSpan`. Puoi verificare la modifica monitorando il tempo tra gli eventi di supply drop durante il gioco.

Se la modifica non sembra applicata, controlla quanto segue:

| Controllo | Cosa verificare |
| --- | --- |
| File corretto | Hai modificato `PalWorldSettings.ini` |
| Posizione corretta | Il file è stato aperto tramite **Configs** nell’amministrazione server |
| Sintassi corretta | `SupplyDropSpan` è scritto correttamente e rimane all’interno del blocco `OptionSettings` |
| Riavvio server | Il server è stato riavviato completamente dopo il salvataggio |

:::tip Scegli un Valore Bilanciato
Valori troppo bassi possono far apparire i supply drop molto più spesso del previsto nel gameplay normale di Palworld. Se vuoi eventi più frequenti senza esagerare, `60` è di solito un buon punto di partenza.
:::

## Conclusione

Congratulazioni, hai modificato con successo la frequenza dei supply drop sul tuo server Palworld. Per ulteriori domande o assistenza, non esitare a contattare il nostro team di supporto, disponibile ogni giorno per aiutarti! 🙂