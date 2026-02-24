---
id: vserver-linux-gitlab
title: "Installera GitLab på en Linux-server - Hosta din egen DevOps-plattform"
description: "Upptäck hur du effektivt installerar GitLab på Linux för att förenkla DevOps-arbetsflöden och förbättra teamets samarbete → Läs mer nu"
sidebar_label: Installera GitLab
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

GitLab är en komplett DevOps-plattform som låter team samarbeta kring kod, automatisera arbetsflöden och hantera hela mjukvaruutvecklingscykeln på ett smidigt sätt. I den här guiden går vi igenom hur du installerar GitLab på en Linux-server.

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## Förberedelser

Följande krav rekommenderas av det officiella [GitLab-teamet](https://docs.gitlab.com/ee/install/requirements.html) och det är starkt rekommenderat att följa dessa förutsättningar för att undvika problem och krångel längre fram.

#### Hårdvara

| Komponenter    | Minsta krav            | Rekommenderat             |
| -------------- | ---------------------- | ------------------------- |
| CPU            | 2x 2 GHz               | 4x 2.6+ GHz              |
| RAM            | 4 GB                   | 8 GB                     |
| Lagring        | 10 GB                  | 50+ GB                   |
| Bandbredd      | 100 mbit/s (upp & ner) | 100 mbit/s (upp & ner)   |

#### Mjukvara

| Plattform       | Alternativ                                                   |
| --------------- | ------------------------------------------------------------ |
| Operativsystem  | Ubuntu (20.04, 22.04, 24.04), Debian (10, 11, 12), OpenSUSE (15.5) |
| Databas         | PostgreSQL 14.9+                                            |
| Webbserver      | NGINX (medföljer GitLab), Puma 6.4.2+                       |
| Övrigt          | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+              |

:::info
För den mest exakta och uppdaterade specifikationen, kolla in GitLabs officiella [Hårdvarukrav](https://docs.gitlab.com/ee/install/requirements.html).
:::

För att installera GitLab på din Linux-server behöver du ansluta via en SSH-klient. Kolla in vår guide för [Initial åtkomst (SSH)](vserver-linux-ssh.md) för mer info.

När du är ansluten kan du börja installera de paket som krävs för själva GitLab-installationen.

## Steg 1: Installera beroenden

Först måste du installera några beroenden för att kunna köra GitLab-installationen. Använd följande kommandon för att installera nödvändiga paket på din Linux-server.

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Uppdatera paketlistan till senaste version och installera OpenSSH Server-paketet tillsammans med nödvändiga förutsättningar med följande kommando. Det är så din webbpanel för GitLab kommer att hostas.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

Du kan även installera Postfix (SMTP-server) om du vill kunna skicka e-postnotiser via GitLab. Detta är **valfritt**.

Vill du använda e-postnotiser, installera Postfix med:

```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

Uppdatera paketlistan till senaste version och installera OpenSSH Server-paketet tillsammans med nödvändiga förutsättningar med följande kommando. Det är så din webbpanel för GitLab kommer att hostas.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

Du kan även installera Postfix (SMTP-server) om du vill kunna skicka e-postnotiser via GitLab. Detta är **valfritt**.

Vill du använda e-postnotiser, installera Postfix med:

```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

Installera OpenSSH Server-paketet tillsammans med nödvändiga förutsättningar med följande kommando. Det är så din webbpanel för GitLab kommer att hostas.

```
sudo zypper install curl openssh perl
```

Se sedan till att OpenSSH-daemonen är aktiverad med följande kommandon:

```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

Om du använder `firewalld` bör du se till att brandväggen tillåter nödvändig trafik.

Kolla om du använder `firewalld` med:

```bash
sudo systemctl status firewalld
```

Om du gör det, öppna nödvändiga portar (80 och 443 som standard):

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

Du kan även installera Postfix (SMTP-server) om du vill kunna skicka e-postnotiser via GitLab. Detta är **valfritt**.

Vill du använda e-postnotiser, installera Postfix med:

```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
Under installationen av Postfix kan en konfigurationsruta dyka upp. Välj då 'Internet Site' och tryck enter. Använd din Linux-servers externa DNS som 'mail name' och tryck enter. Om fler skärmar visas, tryck enter för att acceptera standardinställningarna.

Vill du använda en annan lösning för e-post, hoppa över detta steg och [konfigurera en extern SMTP-server](https://docs.gitlab.com/omnibus/settings/smtp) efter att GitLab är installerat enligt GitLabs officiella guide.
:::

## Steg 2: Installera GitLab

När alla beroenden är installerade är du redo att installera GitLab.

I den här guiden installerar vi GitLab direkt från de officiella paketarkiven.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
Följande script lägger till GitLabs arkiv till apt-pakethanteraren:

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

När det är klart kan `gitlab-ee`-paketet installeras:

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
Följande script lägger till GitLabs arkiv till Zypper-pakethanteraren:

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

När det är klart kan `gitlab-ee`-paketet installeras:

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

När processen är klar ska GitLab vara redo att användas på din Linux-server. Gå vidare till nästa avsnitt där du konfigurerar viktiga inställningar för att få servern fullt fungerande.

## Steg 3: Konfigurera GitLab

För att allt ska fungera måste du göra några ändringar i konfigurationsfilen. Börja med att öppna GitLabs konfigurationsfil med din favorittextredigerare. Här använder vi `nano` som exempel.

```
sudo nano /etc/gitlab/gitlab.rb
```

Sök sedan upp raden `external_url` och skriv in din domän eller IP-adressen till din Linux-server om du inte har en domän att använda med GitLab.

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
## GitLab URL
##! URL där GitLab kommer vara tillgängligt.
##! För mer info om external_url, se:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! Obs: Under installation/uppdateringar används värdet i miljövariabeln
##! EXTERNAL_URL för att fylla i/ersätta detta värde.
##! På AWS EC2 försöker vi även hämta publik hostname/IP
##! från AWS. Mer info:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`Din domän / IPv4-adress till din Linux-server`'
```

Vi rekommenderar även att du fyller i din e-postadress på raden `letsencrypt['contact_emails']`. Detta gör att Let's Encrypt kan skicka notiser och kontakta dig angående automatiska och kostnadsfria SSL-certifikat.

:::note
Du måste använda en domän för att få ett gratis SSL-certifikat från Let's Encrypt. Du kan inte begära ett certifikat direkt till din IP-adress.
:::

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
################################################################################
# Let's Encrypt-integration
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`Din e-post här`] # En array med e-postadresser som kontakt
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# Se https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically för mer info
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # Kan vara ett nummer eller cron-uttryck.
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
Använd `CTRL+W` för att söka efter `letsencrypt['contact_emails']` och tryck enter så slipper du leta manuellt i hela filen.
:::

När du är klar, tryck `CTRL+X` följt av `Y` och `Enter` för att spara ändringarna.

Slutligen kör du följande kommando för att konfigurera om GitLab med de nya inställningarna.

```
sudo gitlab-ctl reconfigure
```

Detta kan ta en stund då GitLab initieras med den uppdaterade konfigurationen och automatiska processer körs. SSL-certifikaten utfärdas också om du angett en domän.

## Steg 4: Komma åt webbgränssnittet

När initieringen är klar ska servern vara åtkomlig via webbläsare. Gå till din domän eller IP-adress så här:

```
https://[din_domän] ELLER http://[din_ip-adress]
```

Vid första inloggningen möts du av en inloggningssida.

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

För att få adminåtkomst vid första inloggningen, logga in som root-användare med användarnamn `root`.

Lösenordet hittar du i en fil på din Linux-server. Öppna filen med följande kommando och leta upp fältet `Password`.

```
sudo nano /etc/gitlab/initial_root_password
```

<!-- The following code is from the /etc/gitlab/initial_root_password file -->
```
# VARNING: Detta värde gäller endast under följande förutsättningar

# 1. Om det angavs manuellt (via `GITLAB_ROOT_PASSWORD` miljövariabel eller `gitlab_rails['initial_root_password']` i `gitlab.rb`) innan databasen skapades första gången.

# 2. Lösenordet har inte ändrats manuellt via UI eller kommandorad.

#

# Om lösenordet inte fungerar måste du återställa adminlösenordet enligt https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: `[DITT_LÖSENORD_HÄR]`

# OBS: Denna fil tas automatiskt bort vid första omkonfigureringen efter 24 timmar.
```

Ange användarnamn och lösenord på inloggningssidan för att komma in i din GitLab-panel första gången. Nu kan du börja använda GitLab på din egen Linux-server.

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

Vi rekommenderar starkt att du skapar en ny användare och/eller byter lösenord för `root`-användaren. Det gör du enkelt via **Admin** nere i vänstra hörnet och välj **Översikt->Användare**. Där kan du hantera användare för din GitLab-instans.

## Valfritt: Sätt upp brandvägg med ufw

Hoppa över detta om du inte vill konfigurera brandvägg eller redan använder t.ex. `firewalld` på OpenSUSE. Se till att port 80/443 och port 22 är tillåtna.

### Installera ufw

Om du redan har `ufw` installerat kan du hoppa över detta steg.

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

### Öppna nödvändiga portar

```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

### Aktivera brandvägg

:::warning
Detta blockerar som standard all trafik utom de tillåtna portarna. Se till att vitlistan är korrekt innan du kör detta kommando.
:::

Aktivera brandväggen med:

```
sudo ufw enable
```

## Avslutning

Grattis, du har nu installerat GitLab! Har du fler frågor eller problem, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig!

Vill du göra fler inställningar rekommenderar vi att du läser [Officiell GitLab-dokumentation](https://docs.gitlab.com/ee/install/next_steps.html) för nästa steg.

<InlineVoucher />