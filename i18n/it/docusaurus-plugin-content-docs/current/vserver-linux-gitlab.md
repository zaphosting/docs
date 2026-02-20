---
id: vserver-linux-gitlab
title: "Configura GitLab su un Server Linux - Ospita la tua piattaforma DevOps"
description: "Scopri come configurare GitLab su Linux in modo efficiente per ottimizzare i flussi DevOps e migliorare la collaborazione del team → Scopri di più ora"
sidebar_label: Installa GitLab
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

GitLab è una piattaforma DevOps completa che permette ai team di collaborare sul codice, automatizzare i flussi di lavoro e gestire l'intero ciclo di vita dello sviluppo software in modo efficiente. In questa guida vedremo come installare GitLab su un server Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## Preparazione

I seguenti requisiti sono consigliati dal team ufficiale di [GitLab](https://docs.gitlab.com/ee/install/requirements.html) ed è altamente raccomandato seguirli per evitare problemi o inconvenienti in futuro.

#### Hardware

| Componenti    | Minimo                 | Consigliato                |
| ------------- | ---------------------- | ------------------------- |
| CPU           | 2x 2 GHz               | 4x 2.6+ GHz               |
| RAM           | 4 GB                   | 8 GB                      |
| Storage       | 10 GB                  | 50+ GB                    |
| Banda         | 100 mbit/s (up & down) | 100 mbit/s (up & down)    |

#### Software

| Piattaforma       | Opzioni                                                      |
| ----------------- | ------------------------------------------------------------ |
| Sistema Operativo | Ubuntu (20.04, 22.04, 24.04), Debian (10, 11, 12), OpenSUSE (15.5) |
| Database          | PostgreSQL 14.9+                                             |
| Web server        | NGINX (incluso con GitLab), Puma 6.4.2+                      |
| Altri             | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+               |

:::info
Per le specifiche più precise e aggiornate, consulta la documentazione ufficiale di GitLab su [Requisiti Hardware](https://docs.gitlab.com/ee/install/requirements.html).
:::

Per installare GitLab sul tuo server Linux, devi connetterti tramite un client SSH. Dai un’occhiata alla nostra guida [Accesso iniziale (SSH)](vserver-linux-ssh.md) per maggiori dettagli.

Una volta stabilita la connessione, puoi iniziare a installare i pacchetti necessari per l’installazione di GitLab.

## Step 1: Installazione delle Dipendenze

Per prima cosa, devi installare alcune dipendenze per far partire l’installer di GitLab. Usa i comandi qui sotto per installare le dipendenze richieste sul tuo server Linux.

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Aggiorna la lista dei pacchetti all’ultima versione e installa il pacchetto OpenSSH Server insieme alle dipendenze richieste con questo comando. È così che verrà ospitato il pannello web di GitLab.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

Puoi anche installare Postfix (server SMTP) se vuoi ricevere notifiche email da GitLab. È **opzionale**.

Se vuoi usare le notifiche email, installa Postfix con questo comando:
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

Aggiorna la lista dei pacchetti all’ultima versione e installa il pacchetto OpenSSH Server insieme alle dipendenze richieste con questo comando. È così che verrà ospitato il pannello web di GitLab.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

Puoi anche installare Postfix (server SMTP) se vuoi ricevere notifiche email da GitLab. È **opzionale**.

Se vuoi usare le notifiche email, installa Postfix con questo comando:
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

Installa il pacchetto OpenSSH Server insieme alle dipendenze richieste con questo comando. È così che verrà ospitato il pannello web di GitLab.

```
sudo zypper install curl openssh perl
```

Poi assicurati che il demone OpenSSH sia abilitato con questi comandi:
```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

Se usi `firewalld`, assicurati che il firewall permetta l’accesso necessario.

Per verificare se usi `firewalld`, esegui prima questo comando:

```bash
sudo systemctl status firewalld
```

Se è attivo, apri le porte richieste (80 e 443 di default):

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

Puoi anche installare Postfix (server SMTP) se vuoi ricevere notifiche email da GitLab. È **opzionale**.

Se vuoi usare le notifiche email, installa Postfix con questi comandi:
```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
Durante l’installazione di Postfix potrebbe apparire una schermata di configurazione. In questo caso, seleziona 'Internet Site' e premi invio. Usa il DNS esterno del tuo server Linux come 'mail name' e premi invio. Se compaiono altre schermate, continua a premere invio per accettare le impostazioni di default.

Se vuoi usare un’altra soluzione per inviare email, salta questo step e [configura un server SMTP esterno](https://docs.gitlab.com/omnibus/settings/smtp) dopo aver installato GitLab seguendo la guida ufficiale.
:::

## Step 2: Installazione di GitLab

Dopo aver scaricato e installato tutte le dipendenze necessarie, sei pronto per installare GitLab.

In questa guida installeremo GitLab direttamente dai repository ufficiali.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
Lo script seguente aggiungerà i repository di GitLab al gestore pacchetti apt:

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

Una volta fatto, puoi installare il pacchetto `gitlab-ee`:

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
Lo script seguente aggiungerà i repository di GitLab al gestore pacchetti Zypper:

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

Una volta fatto, puoi installare il pacchetto `gitlab-ee`:

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

Quando il processo è completo, GitLab sarà pronto sul tuo server Linux. Prosegui con la sezione successiva per configurare alcune impostazioni essenziali e assicurarti che il server funzioni correttamente.

## Step 3: Configurazione di GitLab

Per assicurarti che tutto funzioni, devi modificare alcune impostazioni nel file di configurazione. Apri il file di configurazione di GitLab con il tuo editor di testo preferito. Qui useremo `nano` come esempio.
```
sudo nano /etc/gitlab/gitlab.rb
```

Cerca la riga `external_url` e inserisci il tuo dominio oppure l’indirizzo IP del server Linux se non hai un dominio da usare con GitLab.

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
## GitLab URL
##! URL su cui GitLab sarà raggiungibile.
##! Per maggiori dettagli sulla configurazione di external_url vedi:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! Nota: Durante installazioni/aggiornamenti, il valore della variabile d’ambiente
##! EXTERNAL_URL sarà usato per popolare/sostituire questo valore.
##! Su istanze AWS EC2, si tenta anche di recuperare hostname/IP pubblico
##! da AWS. Per maggiori dettagli, vedi:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`Il tuo dominio / indirizzo IPv4 del server Linux`'
```

Inoltre, ti consigliamo di inserire la tua email nella riga `letsencrypt['contact_emails']`. Questo permetterà a Let's Encrypt di inviarti notifiche e contattarti riguardo ai certificati SSL automatici e gratuiti.

:::note
Per ottenere un certificato SSL gratuito da Let's Encrypt devi usare un dominio. Non puoi richiederlo direttamente per un indirizzo IP.
:::

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
################################################################################
# Integrazione Let's Encrypt
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`La tua email qui`] # Deve essere un array di indirizzi email da contattare
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# Vedi https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically per maggiori info su queste impostazioni
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # Deve essere un numero o espressione cron, se specificato.
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
Puoi usare `CTRL+W` per cercare `letsencrypt['contact_emails']` e premere invio così non devi scorrere tutto il file manualmente.
:::

Quando hai finito, premi `CTRL+X` seguito da `Y` e `Invio` per salvare le modifiche.

Infine, esegui questo comando per riconfigurare GitLab con le nuove impostazioni.
```
sudo gitlab-ctl reconfigure
```

Questo processo potrebbe richiedere un po’ di tempo perché inizializza GitLab con la nuova configurazione. I certificati SSL saranno emessi automaticamente se hai usato un dominio.

## Step 4: Accesso all’Interfaccia Web

Dopo l’inizializzazione, il server sarà accessibile via browser. Vai sul tuo sito inserendo il dominio o l’indirizzo IP così:
```
https://[tuo_dominio] OR http://[tuo_indirizzo_ip]
```

Alla prima apertura dell’interfaccia web, ti verrà mostrata la pagina di login.

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

Per accedere come admin al primo login, usa `root` come username.

La password la trovi in un file sul server Linux. Apri il file con questo comando e cerca il campo `Password`.
```
sudo nano /etc/gitlab/initial_root_password
```

<!-- The following code is from the /etc/gitlab/initial_root_password file -->
```
# ATTENZIONE: Questo valore è valido solo nelle seguenti condizioni

# 1. Se fornito manualmente (tramite variabile d’ambiente `GITLAB_ROOT_PASSWORD` o tramite impostazione `gitlab_rails['initial_root_password']` in `gitlab.rb` prima che il database sia stato inizializzato)

# 2. La password non è stata cambiata manualmente, né via UI né da linea di comando.

#

# Se la password qui mostrata non funziona, devi resettare la password admin seguendo https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: `[LA_TUA_PASSWORD_È_QUI]`

# NOTA: Questo file sarà cancellato automaticamente alla prima esecuzione di reconfigure dopo 24 ore.
```

Inserisci username e password nella pagina di login per entrare nella dashboard di GitLab per la prima volta. Ora puoi accedere al tuo pannello GitLab sul tuo server Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

Ti consigliamo vivamente di creare un nuovo utente e/o cambiare la password dell’utente `root`. Puoi farlo accedendo a **Admin** in basso a sinistra e selezionando **Overview->Users**. Qui puoi gestire gli utenti della tua istanza GitLab.

## Opzionale: Configura un firewall con ufw

Puoi saltare questo step se non vuoi configurare un firewall o se, ad esempio, usi già `firewalld` su OpenSUSE.
Assicurati di permettere le porte 80/443 e la porta 22.

### Installa ufw

Se hai già `ufw` installato, puoi saltare questo step.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt-get install -y ufw
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
```bash
sudo zypper install ufw
```
</TabItem>

</Tabs>

### Apri le porte richieste

```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

### Abilita il firewall

:::warning
Di default questo bloccherà tutte le porte tranne quelle permesse. Assicurati che la whitelist sia configurata correttamente prima di abilitare il firewall.
:::

Per attivare il firewall, esegui:

```
sudo ufw enable
```

## Conclusione

Congratulazioni, hai installato GitLab con successo! Se hai domande o problemi, il nostro supporto è sempre pronto ad aiutarti ogni giorno!

Se vuoi fare configurazioni avanzate, ti consigliamo di leggere la [Documentazione Ufficiale di GitLab](https://docs.gitlab.com/ee/install/next_steps.html) per i prossimi passi.

<InlineVoucher />