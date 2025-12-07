---
id: vserver-linux-ssh
title: "VPS: Primo accesso con SSH"
description: "Scopri i client SSH più popolari per gestire server Linux via console e come connetterti in modo sicuro usando Putty → Scopri di più ora"
sidebar_label: Primo accesso (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

![](https://screensaver01.zap-hosting.com/index.php/s/TYEHE38gNQoFjBx/download/ssh_connect.gif)

I prodotti server Linux non includono di default un’interfaccia grafica di gestione, perciò la connessione e la gestione avvengono tramite un client SSH (console). Esiste una vasta gamma di client SSH disponibili. Qui sotto trovi una panoramica dei client SSH più conosciuti e usati. 



| SSH-Client | Sistemi operativi supportati | Open-Source |                           Download                           |
| :--------: | :--------------------------: | :---------: | :----------------------------------------------------------: |
|   Putty    |        Windows, Linux        |     Sì      |               [Click](https://www.putty.org/)                |
|   Kitty    |        Windows, Linux        |     Sì      |        [Click](http://www.9bis.net/kitty/)                   |
| MobaXterm  |        Windows, Linux        |     Sì      |           [Click](https://mobaxterm.mobatek.net/)            |
| SecureCRT  |     Windows, Linux, Mac      |     No      | [Click](https://www.vandyke.com/cgi-bin/releases.php?product=securecrt) |
| mRemoteNG  |           Windows            |     Sì      |           [Click](https://mremoteng.org/download)            |


<InlineVoucher />

## Indirizzo IP & accesso

Qui sotto ti spieghiamo come connetterti usando il client SSH Putty. Nella finestra di configurazione, inserisci l’indirizzo IP del server e la porta SSH 22 nel campo **hostname**. Poi puoi avviare la connessione cliccando su **Open**.



![](https://screensaver01.zap-hosting.com/index.php/s/wyfbo8dENbX3T9E/preview)



:::info
Il login SSH tramite password è disabilitato di default. Se vuoi accedere con la password, devi prima attivare l’opzione sotto **Accesso & Sicurezza**.
:::



![](https://screensaver01.zap-hosting.com/index.php/s/N7ZL8MZfe55T7zR/preview)



:::info
Al primo collegamento al server, Putty mostra un messaggio di sicurezza che ti avvisa che non è ancora stata memorizzata nessuna chiave host nel registro. Puoi confermare con **Yes** per non ricevere più questo messaggio ogni volta.
:::

 

Si apre così la console SSH che ti chiede **nome utente** e **password**. Il nome utente è "**root**". La password la trovi nell’interfaccia web sotto "**Accesso & Sicurezza**" oppure puoi impostarla lì.



![](https://screensaver01.zap-hosting.com/index.php/s/X8ykHmkYFa826aM/preview)





## Amministrazione via SSH

Per usare al meglio il client SSH, è fondamentale conoscere i comandi base. Qui sotto trovi una panoramica con tutti i comandi rilevanti e il loro significato:


### Gestione account

| Comando  |                Descrizione                |            Sintassi            |
| :-----: | :----------------------------------------: | :--------------------------: |
| useradd |          Creare un nuovo utente          | useradd [opzioni] [opzioni] |
| usermod |      Modificare un utente esistente       | usermod [opzioni] [opzioni] |
| userdel |        Rimuovere un utente esistente        | userdel [opzioni] [opzioni] |
| passwd  | Cambiare la password di un utente esistente |      passwd [opzioni]       |



### Gestione sistema

| Comando  |                         Descrizione                         | Sintassi                                       |
| :-----: | :----------------------------------------------------------: | -------------------------------------------- |
|   top   | Panoramica carico, processi e altre info (simile a Task Manager di Windows)  | top                                          |
|   df    |            Mostra l’uso dei dischi (partizioni)            | df -h                                        |
|   du    |          Mostra il consumo disco (directory)           | du -sh *                                     |
|  free   | Uso della memoria del sistema, divisa in RAM e SWAP | free                                         |
|  kill   |  Termina il processo con l’ID processo (PID) passato   | kill [ID]                                    |
| killall |        Termina tutti i processi con il nome specificato        | killall [nome]                               |
|   mv    |       Sposta file o directory in un’altra posizione        | mv percorsoOrigine percorsoDestinazione                        |
|  mkdir  |                    Crea una nuova directory                    | mkdir nomeDirectory                          |
| service |    Avvia, ferma, riavvia un servizio e controlla lo stato     | service NomeServizio start/stop/restart/status |
| reboot  |                      Riavvia il sistema                        | reboot                                       |



### Gestione file

| Comando | Descrizione | Sintassi
| ------ | ------------------------------------------ | ---------------------------------------- |
| ls | Mostra file e cartelle nella directory | ls |
| cd | Cambia directory | cd [OPZIONE] DIRECTORY |
| cp | Copia file o directory | cp [OPZIONI] ORIGINE DESTINAZIONE |
| mv | Sposta file o directory | mv [OPZIONE] ORIGINE DESTINAZIONE |
| mkdir | Crea nuova directory | mkdir [OPZIONE] NOME_DIRECTORY |
| rmdir | Rimuove directory esistente | rmdir [OPZIONE] DIRECTORY
| find | Naviga nel filesystem | find [OPZIONI] [DIRECTORY] [AZIONI] |
| grep | Cerca testo nei file | grep [OPZIONI] PATTERN_DI_RICERCA [FILE(S)] |



### Amministrazione rete

| Comando | Descrizione | Sintassi
| -------- | ------------------------------------------------- | ----------------------------------------- |
| ip | Interroga e configura interfacce di rete | ip [OPZIONI] OGGETTO [COMANDO [ARGOMENTI]] |
| netstat | Mostra lo stato delle interfacce di rete | netstat [OPZIONI] |
| nslookup | Interroga informazioni DNS | nslookup |
| ping | Controlla la connessione di rete | ping [OPZIONI] DESTINAZIONE


<InlineVoucher />