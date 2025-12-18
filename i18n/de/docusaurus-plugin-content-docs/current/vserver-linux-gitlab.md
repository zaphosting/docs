---
id: vserver-linux-gitlab
title: "vServer: GitLab auf Linux installieren"
description: "Entdecke, wie du GitLab effizient auf Linux einrichtest, um DevOps-Workflows zu optimieren und die Teamzusammenarbeit zu verbessern → Jetzt mehr erfahren"
sidebar_label: GitLab installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

GitLab ist eine umfassende DevOps-Plattform, die Teams ermöglicht, gemeinsam am Code zu arbeiten, Workflows zu automatisieren und den gesamten Softwareentwicklungszyklus effizient zu verwalten. In dieser Anleitung wird erklärt, wie du GitLab auf einem Linux-Server installierst.

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## Vorbereitung

Die folgenden Anforderungen werden vom offiziellen [GitLab Team](https://docs.gitlab.com/ee/install/requirements.html) empfohlen. Es ist sehr ratsam, diese Voraussetzungen einzuhalten, um spätere Probleme und Unannehmlichkeiten zu vermeiden.

#### Hardware

| Komponenten     | Minimum                | Empfohlen                  |
| -------------- | ---------------------- | -------------------------- |
| CPU            | 2x 2 GHz               | 4x 2,6+ GHz                |
| RAM            | 4 GB                   | 8 GB                       |
| Speicher       | 10 GB                  | 50+ GB                     |
| Bandbreite     | 100 Mbit/s (Up & Down) | 100 Mbit/s (Up & Down)     |

#### Software

| Plattform         | Optionen                                                      |
| ---------------- | ------------------------------------------------------------- |
| Betriebssystem   | Ubuntu (20.04, 22.04, 24.04), Debian (10, 11, 12), OpenSUSE (15.5) |
| Datenbank        | PostgreSQL 14.9+                                              |
| Webserver        | NGINX (mit GitLab gebündelt), Puma 6.4.2+                    |
| Sonstiges        | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+               |

:::info
Für die genauesten und aktuellsten Spezifikationen schaue bitte in die offizielle [Hardware Requirements](https://docs.gitlab.com/ee/install/requirements.html) Dokumentation von GitLab.
:::

Um GitLab auf deinem Linux-Server zu installieren, musst du dich über einen SSH-Client verbinden. Schau dir dazu unsere [Erstzugriff (SSH)](vserver-linux-ssh.md) Anleitung an, um mehr zu erfahren.

Sobald die Verbindung steht, kannst du die notwendigen Pakete installieren, die für die eigentliche GitLab-Installation benötigt werden.

## Schritt 1: Abhängigkeiten installieren

Zuerst musst du einige Abhängigkeiten installieren, damit der GitLab-Installer läuft. Nutze die folgenden Befehle, um die erforderlichen Pakete auf deinem Linux-Server zu installieren.

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Aktualisiere die Paketliste auf die neueste Version und installiere das OpenSSH-Server-Paket sowie die benötigten Voraussetzungen mit folgendem Befehl. So wird dein Webinterface für GitLab gehostet.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

Optional kannst du Postfix (SMTP-Server) installieren, wenn du E-Mail-Benachrichtigungen über GitLab versenden möchtest.

Falls du E-Mail-Benachrichtigungen nutzen willst, installiere Postfix mit:

```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

Aktualisiere die Paketliste auf die neueste Version und installiere das OpenSSH-Server-Paket sowie die benötigten Voraussetzungen mit folgendem Befehl. So wird dein Webinterface für GitLab gehostet.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

Optional kannst du Postfix (SMTP-Server) installieren, wenn du E-Mail-Benachrichtigungen über GitLab versenden möchtest.

Falls du E-Mail-Benachrichtigungen nutzen willst, installiere Postfix mit:

```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

Installiere das OpenSSH-Server-Paket sowie die benötigten Voraussetzungen mit folgendem Befehl. So wird dein Webinterface für GitLab gehostet.

```
sudo zypper install curl openssh perl
```

Stelle sicher, dass der OpenSSH-Daemon aktiviert ist, mit diesen Befehlen:

```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

Falls du `firewalld` nutzt, stelle sicher, dass die Firewall den nötigen Zugriff erlaubt.

Prüfe, ob `firewalld` aktiv ist mit:

```bash
sudo systemctl status firewalld
```

Falls ja, öffne die benötigten Ports (standardmäßig 80 und 443):

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

Optional kannst du Postfix (SMTP-Server) installieren, wenn du E-Mail-Benachrichtigungen über GitLab versenden möchtest.

Falls du E-Mail-Benachrichtigungen nutzen willst, installiere Postfix mit:

```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
Während der Postfix-Installation kann eine Konfiguration erscheinen. Wähle hier 'Internet Site' und bestätige mit Enter. Gib als 'mail name' die externe DNS deines Linux-Servers ein und bestätige mit Enter. Falls weitere Bildschirme erscheinen, bestätige jeweils mit Enter, um die Standardwerte zu übernehmen.

Wenn du eine andere Lösung für den E-Mail-Versand nutzen möchtest, überspringe diesen Schritt und [konfiguriere einen externen SMTP-Server](https://docs.gitlab.com/omnibus/settings/smtp) nach der GitLab-Installation anhand der offiziellen Anleitung.
:::

## Schritt 2: GitLab installieren

Nachdem alle Abhängigkeiten installiert sind, kannst du GitLab installieren.

In dieser Anleitung installieren wir GitLab direkt aus den offiziellen Paket-Repositories.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
Das folgende Skript fügt die GitLab-Repositories zum apt-Paketmanager hinzu:

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

Danach kannst du das Paket `gitlab-ee` installieren:

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
Das folgende Skript fügt die GitLab-Repositories zum Zypper-Paketmanager hinzu:

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

Danach kannst du das Paket `gitlab-ee` installieren:

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

Nach Abschluss dieses Prozesses sollte GitLab auf deinem Linux-Server einsatzbereit sein. Im nächsten Abschnitt konfigurierst du wichtige Einstellungen, damit der Server voll funktionsfähig ist.

## Schritt 3: GitLab konfigurieren

Damit alles funktioniert, musst du einige Änderungen an der Konfigurationsdatei vornehmen. Öffne die GitLab-Konfigurationsdatei mit deinem bevorzugten Texteditor. Wir nutzen hier als Beispiel den vorinstallierten `nano` Editor.

```
sudo nano /etc/gitlab/gitlab.rb
```

Suche die Zeile `external_url` und trage entweder deine Domain oder die IP-Adresse deines Linux-Servers ein, falls du keine Domain für GitLab hast.

<!-- Der folgende Code stammt aus der /etc/gitlab/gitlab.rb Datei -->
```
## GitLab URL
##! URL, unter der GitLab erreichbar sein wird.
##! Für mehr Details zur Konfiguration von external_url siehe:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! Hinweis: Während Installation/Updates wird der Wert der Umgebungsvariable
##! EXTERNAL_URL verwendet, um diesen Wert zu setzen/ersetzen.
##! Bei AWS EC2 Instanzen wird versucht, den öffentlichen Hostnamen/IP
##! von AWS abzurufen. Mehr Infos:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`Deine Domain / IPv4-Adresse deines Linux Servers`'
```

Wir empfehlen außerdem, deine E-Mail in der Zeile `letsencrypt['contact_emails']` einzutragen. So kann Let's Encrypt dich über automatische und kostenlose SSL-Zertifikate informieren und kontaktieren.

:::note
Für ein kostenloses SSL-Zertifikat von Let's Encrypt benötigst du eine Domain. Ein Zertifikat kann nicht direkt für eine IP-Adresse ausgestellt werden.
:::

<!-- Der folgende Code stammt aus der /etc/gitlab/gitlab.rb Datei -->
```
################################################################################
# Let's Encrypt Integration
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`Deine E-Mail hier`] # Das sollte ein Array mit E-Mail-Adressen sein
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# Siehe https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically für mehr Infos zu diesen Einstellungen
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # Sollte eine Zahl oder Cron-Ausdruck sein, falls angegeben.
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
Du kannst `CTRL+W` drücken, um nach `letsencrypt['contact_emails']` zu suchen und Enter drücken, damit du nicht die ganze Datei manuell durchsuchen musst.
:::

Wenn du fertig bist, drücke `CTRL+X`, dann `Y` und Enter, um die Änderungen zu speichern.

Führe abschließend folgenden Befehl aus, um GitLab mit den neuen Einstellungen neu zu konfigurieren:

```
sudo gitlab-ctl reconfigure
```

Dieser Vorgang kann einige Zeit dauern, da GitLab mit den aktualisierten Konfigurationsdaten initialisiert wird. Falls eine Domain verwendet wurde, werden auch die SSL-Zertifikate automatisch ausgestellt.

## Schritt 4: Zugriff auf das Webinterface

Nach der Initialisierung sollte der Server nun über einen Webbrowser erreichbar sein. Rufe deine Seite auf, indem du deine Domain oder IP-Adresse eingibst:

```
https://[deine_domain] ODER http://[deine_ip_adresse]
```

Beim ersten Aufruf des Webinterfaces wirst du mit einer Login-Seite begrüßt.

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

Für den ersten Login benötigst du Admin-Zugang. Melde dich als `root` Benutzer an.

Das Passwort findest du in einer Datei auf deinem Linux-Server. Öffne die Datei mit folgendem Befehl und suche das Feld `Password`:

```
sudo nano /etc/gitlab/initial_root_password
```

<!-- Der folgende Code stammt aus der /etc/gitlab/initial_root_password Datei -->
```
# WARNUNG: Dieser Wert ist nur gültig unter folgenden Bedingungen

# 1. Wenn er manuell gesetzt wurde (entweder über die Umgebungsvariable `GITLAB_ROOT_PASSWORD` oder über die Einstellung `gitlab_rails['initial_root_password']` in `gitlab.rb` vor der ersten Datenbankbefüllung).

# 2. Das Passwort wurde nicht manuell geändert, weder über UI noch Kommandozeile.

#

# Falls das hier angezeigte Passwort nicht funktioniert, musst du das Admin-Passwort zurücksetzen: https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: `[DEIN_PASSWORT_HIER]`

# HINWEIS: Diese Datei wird beim ersten Reconfigure-Lauf nach 24 Stunden automatisch gelöscht.
```

Gib Benutzername und Passwort auf der Login-Seite ein, um dein GitLab-Dashboard zum ersten Mal zu betreten. Du solltest jetzt Zugriff auf dein GitLab-Panel auf deinem eigenen Linux-Server haben.

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

Wir empfehlen dringend, einen neuen Benutzer anzulegen und/oder das Passwort für den `root` Benutzer zu ändern. Das kannst du über **Admin** unten links und dann **Übersicht -> Benutzer** machen. Dort kannst du alle Nutzer deiner GitLab-Instanz verwalten.

## Optional: Firewall mit ufw einrichten

Diesen Schritt kannst du überspringen, wenn du keine Firewall konfigurieren möchtest oder z.B. bereits `firewalld` auf OpenSUSE nutzt. Stelle sicher, dass die Ports 80/443 und 22 freigegeben sind.

### ufw installieren

Falls `ufw` bereits installiert ist, kannst du diesen Schritt überspringen.

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

### Benötigte Ports freigeben

```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

### Firewall aktivieren

:::warning
Standardmäßig blockiert ufw dann alle anderen Ports außer den freigegebenen. Stelle sicher, dass deine Whitelist korrekt eingerichtet ist, bevor du diesen Befehl ausführst.
:::

Aktiviere die Firewall mit:

```
sudo ufw enable
```

## Fazit

Glückwunsch, du hast GitLab erfolgreich installiert! Falls du weitere Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

Wenn du weitere Einstellungen vornehmen möchtest, empfehlen wir dir, die [offizielle GitLab-Dokumentation](https://docs.gitlab.com/ee/install/next_steps.html) für die nächsten Schritte zu lesen.

<InlineVoucher />