---
id: dedicated-windows-troubleshooting-restore-access
title: "Dedicated Server: Ripristina accesso"
description: "Scopri come riottenere l'accesso al tuo Dedicated Server Windows dopo un blocco password e minimizza i tempi di inattività → Scopri di più ora"
sidebar_label: Ripristina accesso
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Succede in un attimo... Provi ad accedere al tuo Windows Server, ma la password non viene più accettata o semplicemente l’hai dimenticata. All’improvviso sei bloccato fuori e non puoi più accedere a dati e applicazioni importanti. Questa situazione è ovviamente frustrante, ma non è affatto la fine. Seguendo i passaggi qui sotto, puoi riottenere l’accesso al tuo Windows Dedicated Server e continuare a lavorare con il minimo disturbo.



## Preparazione
Il reset dell’accesso dall’account amministratore si fa usando un file ISO di Windows. Quindi, si utilizza lo stesso file ISO che è stato usato originariamente per installare il sistema operativo Windows Server.

Questo passaggio può essere fatto tramite la [**Prima installazione**](dedicated-setup.md) oppure tramite **[ISO](dedicated-iso.md)**. Seleziona o indica il file ISO usato originariamente, a seconda del metodo scelto.

Monta l’ISO e riavvia il sistema. Al prossimo avvio dovrebbe aprirsi di nuovo l’interfaccia di installazione di Windows. Il risultato dovrebbe essere così:

![](https://screensaver01.zap-hosting.com/index.php/s/XGKfQrwdcmcabY6/preview)



## Ripristina accesso

Ora è il momento di resettare l’accesso dell’account amministratore. Per farlo, segui di nuovo i primi passaggi della configurazione. Però, devi arrivare solo fino all’inizio dell’installazione e poi cliccare su **Ripara il tuo computer**.

![](https://screensaver01.zap-hosting.com/index.php/s/qwPgHyqNaQdsqzm/preview)



Si aprono le opzioni avanzate. Clicca su **Risoluzione dei problemi** e poi su **Prompt dei comandi**. Si aprirà il prompt dei comandi (cmd.exe).

![](https://screensaver01.zap-hosting.com/index.php/s/BEan26iNkmzECJ3/download)

Ora devi eseguire uno per uno i comandi elencati qui sotto nel prompt dei comandi:

```
d:
cd Windows
cd System32
move utilman.exe utilman.exe.bak
copy cmd.exe utilman.exe
net user administrator /active:yes
shutdown -r -t 0
```
:::warning

La tastiera della console iLO HTML potrebbe avere una disposizione diversa dalla tua, quindi certi simboli potrebbero trovarsi su tasti differenti. Tienilo a mente per eseguire correttamente i comandi.

:::

Dopo il riavvio del server, nella schermata di login premi la combinazione di tasti **Win+U**. Nella finestra del Prompt dei comandi, digita quanto segue:

```
net user Administrator YourNewPassword
exit
```

![](https://screensaver01.zap-hosting.com/index.php/s/TiKJZPdg2kj5LG3/download)

La tua password è stata cambiata. Però devi annullare le modifiche ai file **Utilman**. Per farlo, riavvia semplicemente il server e ripeti questi passaggi. Nel prompt dei comandi, esegui di nuovo questi comandi:

```
d:
cd Windows
cd System32
del utilman.exe ren utilman.exe.bak utilman.exe
shutdown -r -t 0
```





## Conclusione

Una volta completata la procedura, avrai impostato con successo una nuova password per l’utente amministratore. Ora puoi usarla per accedere di nuovo tramite la connessione desktop remoto. Per qualsiasi domanda o supporto, non esitare a contattare il nostro team di assistenza, disponibile ogni giorno per aiutarti! 🙂