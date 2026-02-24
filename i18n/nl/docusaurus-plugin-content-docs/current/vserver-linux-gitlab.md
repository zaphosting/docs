---
id: vserver-linux-gitlab
title: "GitLab installeren op een Linux Server - Host je eigen DevOps Platform"
description: "Ontdek hoe je GitLab efficiënt installeert op Linux om DevOps workflows te stroomlijnen en team samenwerking te verbeteren → Leer het nu"
sidebar_label: GitLab Installeren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

GitLab is een complete DevOps-platform waarmee teams kunnen samenwerken aan code, workflows automatiseren en de volledige softwareontwikkelingscyclus efficiënt beheren. In deze gids leggen we uit hoe je GitLab installeert op een Linux-server.

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## Voorbereiding

De volgende vereisten worden aanbevolen door het officiële [GitLab Team](https://docs.gitlab.com/ee/install/requirements.html) en het is sterk aan te raden deze vooraf te volgen om later problemen en ongemakken te voorkomen.

#### Hardware

| Componenten    | Minimaal               | Aanbevolen                 |
| -------------- | ---------------------- | -------------------------- |
| CPU            | 2x 2 GHz               | 4x 2.6+ GHz                |
| RAM            | 4 GB                   | 8 GB                       |
| Opslag         | 10 GB                  | 50+ GB                     |
| Bandbreedte    | 100 Mbit/s (up & down) | 100 Mbit/s (up & down)     |

#### Software

| Platform         | Opties                                                      |
| ---------------- | ----------------------------------------------------------- |
| Besturingssysteem| Ubuntu (20.04, 22.04, 24.04), Debian (10, 11, 12), OpenSUSE (15.5) |
| Database         | PostgreSQL 14.9+                                            |
| Webserver        | NGINX (meegeleverd met GitLab), Puma 6.4.2+                 |
| Overig           | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+              |

:::info
Voor de meest accurate en actuele specificaties, raadpleeg de officiële [Hardware Requirements](https://docs.gitlab.com/ee/install/requirements.html) van GitLab.
:::

Je moet via een SSH-client verbinding maken om GitLab op je Linux-server te installeren. Bekijk onze [Eerste toegang (SSH)](vserver-linux-ssh.md) gids voor meer info.

Zodra de verbinding staat, kun je de benodigde pakketten installeren die nodig zijn voor de daadwerkelijke GitLab-installatie.

## Stap 1: Dependencies installeren

Eerst moet je een aantal dependencies installeren om de GitLab installer te kunnen draaien. Gebruik de volgende commando’s om de vereiste dependencies op je Linux-server te installeren.

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Update de pakketlijst naar de nieuwste versie en installeer de OpenSSH Server samen met de benodigde prerequisites met het volgende commando. Hiermee wordt je webinterface voor GitLab gehost.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

Je kunt ook Postfix (SMTP-server) installeren als je e-mailnotificaties wilt ontvangen via GitLab. Dit is **optioneel**.

Wil je e-mailnotificaties gebruiken, installeer dan Postfix met:

```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

Update de pakketlijst naar de nieuwste versie en installeer de OpenSSH Server samen met de benodigde prerequisites met het volgende commando. Hiermee wordt je webinterface voor GitLab gehost.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

Je kunt ook Postfix (SMTP-server) installeren als je e-mailnotificaties wilt ontvangen via GitLab. Dit is **optioneel**.

Wil je e-mailnotificaties gebruiken, installeer dan Postfix met:

```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

Installeer de OpenSSH Server samen met de benodigde prerequisites met het volgende commando. Hiermee wordt je webinterface voor GitLab gehost.

```
sudo zypper install curl openssh perl
```

Zorg er daarna voor dat de OpenSSH daemon is ingeschakeld met de volgende commando’s:

```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

Controleer of de firewall de benodigde toegang toestaat, als je `firewalld` gebruikt.

Check eerst of je `firewalld` gebruikt met:

```bash
sudo systemctl status firewalld
```

Als dat zo is, open dan de benodigde poorten (standaard 80 en 443):

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

Je kunt ook Postfix (SMTP-server) installeren als je e-mailnotificaties wilt ontvangen via GitLab. Dit is **optioneel**.

Wil je e-mailnotificaties gebruiken, installeer dan Postfix met:

```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
Tijdens de installatie van Postfix kan een configuratiescherm verschijnen. Kies hier 'Internet Site' en druk op enter. Gebruik de externe DNS van je Linux-server als 'mail name' en druk op enter. Als er meer schermen verschijnen, druk dan steeds op enter om de standaardinstellingen te accepteren.

Wil je een andere oplossing gebruiken voor e-mail, sla deze stap dan over en [configureer een externe SMTP-server](https://docs.gitlab.com/omnibus/settings/smtp) nadat GitLab is geïnstalleerd, volgens de officiële GitLab gids.
:::

## Stap 2: GitLab installeren

Na het downloaden en installeren van alle vereiste dependencies ben je klaar om GitLab te installeren.

In deze gids installeren we GitLab direct vanuit de officiële pakketbronnen.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
Het volgende script voegt de GitLab repositories toe aan de apt package manager:

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

Daarna kan het `gitlab-ee` pakket geïnstalleerd worden:

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
Het volgende script voegt de GitLab repositories toe aan de Zypper package manager:

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

Daarna kan het `gitlab-ee` pakket geïnstalleerd worden:

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

Als dit proces klaar is, zou GitLab klaar moeten staan op je Linux-server. Ga door naar de volgende sectie om essentiële instellingen te configureren zodat de server goed functioneert.

## Stap 3: GitLab configureren

Om alles goed te laten werken, moet je een paar aanpassingen doen in het configuratiebestand. Open het GitLab configuratiebestand met je favoriete teksteditor. We gebruiken hier `nano` als voorbeeld.

```
sudo nano /etc/gitlab/gitlab.rb
```

Zoek vervolgens de regel `external_url` en vul hier je domein in, of het IP-adres van je Linux-server als je geen domein hebt.

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
## GitLab URL
##! URL waarop GitLab bereikbaar zal zijn.
##! Voor meer details over het configureren van external_url, zie:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! Let op: Tijdens installatie/upgrades wordt de waarde van de omgevingsvariabele
##! EXTERNAL_URL gebruikt om deze waarde in te vullen/vervangen.
##! Op AWS EC2-instanties proberen we ook de publieke hostname/IP
##! van AWS op te halen. Voor meer info, zie:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`Jouw domein / IPv4-adres van je Linux server`'
```

We raden ook aan je e-mailadres in te vullen bij `letsencrypt['contact_emails']`. Zo kan Let's Encrypt je notificaties sturen en contact opnemen over de automatische en gratis SSL-certificaten.

:::note
Je hebt een domein nodig als je een gratis SSL-certificaat van Let's Encrypt wilt krijgen. Je kunt er geen aanvragen direct op een IP-adres.
:::

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
################################################################################
# Let's Encrypt integratie
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`Jouw e-mail hier`] # Dit moet een array zijn van e-mailadressen als contactpersonen
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# Zie https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically voor meer info over deze instellingen
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # Moet een nummer of cron-expressie zijn, als opgegeven.
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
Je kunt `CTRL+W` gebruiken om te zoeken naar `letsencrypt['contact_emails']` en op enter drukken, zodat je niet handmatig door het hele bestand hoeft te zoeken.
:::

Als je klaar bent, druk op `CTRL+X`, daarna `Y` en `Enter` om je wijzigingen op te slaan.

Voer daarna het volgende commando uit om GitLab te herconfigureren met de nieuwe instellingen:

```
sudo gitlab-ctl reconfigure
```

Dit kan even duren omdat GitLab wordt geïnitieerd met de nieuwe configuratie. De SSL-certificaten worden ook uitgegeven als je een domein hebt gebruikt.

## Stap 4: Toegang tot de webinterface

Na de initialisatie is de server via een webbrowser bereikbaar. Ga naar je website door je domeinnaam of IP-adres in te voeren:

```
https://[jouw_domein] OF http://[jouw_ip_adres]
```

Bij de eerste keer inloggen krijg je een loginpagina te zien.

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

Voor admin toegang bij je eerste login, log in als root gebruiker met `root` als gebruikersnaam.

Het wachtwoord vind je in een bestand op je Linux-server. Open het bestand met:

```
sudo nano /etc/gitlab/initial_root_password
```

<!-- The following code is from the /etc/gitlab/initial_root_password file -->
```
# WAARSCHUWING: Deze waarde is alleen geldig onder de volgende voorwaarden

# 1. Als deze handmatig is opgegeven (via `GITLAB_ROOT_PASSWORD` omgevingsvariabele of via `gitlab_rails['initial_root_password']` instelling in `gitlab.rb`), vóór het aanmaken van de database.

# 2. Het wachtwoord is niet handmatig gewijzigd via UI of command line.

#

# Als het wachtwoord hier niet werkt, moet je het admin wachtwoord resetten via https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: `[JOUW_WACHTWOORD_HIER]`

# LET OP: Dit bestand wordt automatisch verwijderd bij de eerste reconfigure run na 24 uur.
```

Voer de gebruikersnaam en het wachtwoord in op de loginpagina om voor het eerst in je GitLab dashboard te komen. Je hebt nu toegang tot je eigen GitLab panel op je Linux-server.

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

We raden sterk aan om een nieuwe gebruiker aan te maken en/of het wachtwoord van de `root` gebruiker te wijzigen. Dit doe je via **Admin** linksonder en dan **Overview->Users**. Hier beheer je de gebruikers van je GitLab installatie.

## Optioneel: Firewall instellen met ufw

Je kunt deze stap overslaan als je geen firewall wilt configureren of bijvoorbeeld al `firewalld` gebruikt op OpenSUSE. Zorg dat poorten 80/443 en 22 openstaan.

### ufw installeren

Als je `ufw` al hebt geïnstalleerd, sla deze stap dan over.

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

### Vereiste poorten openen

```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

### Firewall inschakelen

:::warning
Dit blokkeert standaard alle poorten behalve de toegestane. Zorg dat je whitelist goed staat voordat je dit commando uitvoert.
:::

Activeer de firewall met:

```
sudo ufw enable
```

## Conclusie

Gefeliciteerd, je hebt GitLab succesvol geïnstalleerd! Heb je nog vragen of problemen? Neem gerust contact op met onze support, die elke dag voor je klaarstaat!

Wil je nog meer instellen? Check dan de [Officiële GitLab Documentatie](https://docs.gitlab.com/ee/install/next_steps.html) voor de volgende stappen.

<InlineVoucher />