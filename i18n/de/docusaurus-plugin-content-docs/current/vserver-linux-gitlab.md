---
id: vserver-linux-gitlab
title: "GitLab auf einem Linux Server einrichten – Hoste deine eigene DevOps Plattform"
description: "Entdecke, wie du GitLab effizient auf Linux installierst, um DevOps-Workflows zu optimieren und die Teamarbeit zu verbessern → Jetzt mehr erfahren"
sidebar_label: GitLab installieren
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

GitLab ist eine umfassende DevOps-Plattform, die Teams ermöglicht, gemeinsam am Code zu arbeiten, Workflows zu automatisieren und den kompletten Softwareentwicklungszyklus effizient zu managen. In dieser Anleitung erklären wir, wie du GitLab auf einem Linux Server installierst.

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## Vorbereitung

Die folgenden Anforderungen werden vom offiziellen [GitLab Team](https://docs.gitlab.com/ee/install/requirements.html) empfohlen. Es ist sehr ratsam, diese Voraussetzungen einzuhalten, um spätere Probleme und Unannehmlichkeiten zu vermeiden.

#### Hardware

| Komponenten     | Minimum                | Empfohlen                  |
| -------------- | ---------------------- | ------------------------- |
| CPU            | 2x 2 GHz               | 4x 2,6+ GHz               |
| RAM            | 4 GB                   | 8 GB                      |
| Speicher       | 10 GB                  | 50+ GB                    |
| Bandbreite     | 100 Mbit/s (Up & Down) | 100 Mbit/s (Up & Down)    |

#### Software

| Plattform         | Optionen                                                      |
| ---------------- | ------------------------------------------------------------- |
| Betriebssystem   | Ubuntu (20.04, 22.04, 24.04), Debian (10, 11, 12), OpenSUSE (15.5) |
| Datenbank        | PostgreSQL 14.9+                                              |
| Webserver        | NGINX (mit GitLab gebündelt), Puma 6.4.2+                    |
| Sonstiges        | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+                |

:::info
Für die aktuellsten und genauesten Spezifikationen schau bitte in die offizielle [Hardware Requirements](https://docs.gitlab.com/ee/install/requirements.html) Dokumentation von GitLab.
:::

Um GitLab auf deinem Linux Server zu installieren, musst du dich per SSH-Client verbinden. Schau dir dazu unsere [Erstzugang (SSH)](vserver-linux-ssh.md) Anleitung an.

Sobald die Verbindung steht, kannst du die notwendigen Pakete installieren, die für die GitLab-Installation gebraucht werden.

## Schritt 1: Abhängigkeiten installieren

Zuerst musst du einige Abhängigkeiten installieren, damit der GitLab Installer läuft. Nutze die folgenden Befehle, um die benötigten Pakete auf deinem Linux Server zu installieren.

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Aktualisiere die Paketliste und installiere den OpenSSH Server sowie die nötigen Voraussetzungen mit folgendem Befehl. So wird dein Webinterface für GitLab gehostet.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

Optional kannst du Postfix (SMTP Server) installieren, wenn du E-Mail-Benachrichtigungen über GitLab versenden möchtest.

Falls du E-Mail-Benachrichtigungen nutzen willst, installiere Postfix mit:

```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

Aktualisiere die Paketliste und installiere den OpenSSH Server sowie die nötigen Voraussetzungen mit folgendem Befehl. So wird dein Webinterface für GitLab gehostet.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

Optional kannst du Postfix (SMTP Server) installieren, wenn du E-Mail-Benachrichtigungen über GitLab versenden möchtest.

Falls du E-Mail-Benachrichtigungen nutzen willst, installiere Postfix mit:

```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

Installiere den OpenSSH Server sowie die nötigen Voraussetzungen mit folgendem Befehl. So wird dein Webinterface für GitLab gehostet.

```
sudo zypper install curl openssh perl
```

Stelle sicher, dass der OpenSSH Daemon aktiviert ist:

```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

Falls du `firewalld` nutzt, stelle sicher, dass die nötigen Ports freigegeben sind.

Prüfe, ob `firewalld` aktiv ist mit:

```bash
sudo systemctl status firewalld
```

Falls ja, öffne die Standardports (80 und 443):

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

Optional kannst du Postfix (SMTP Server) installieren, wenn du E-Mail-Benachrichtigungen über GitLab versenden möchtest.

Falls du E-Mail-Benachrichtigungen nutzen willst, installiere Postfix mit:

```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
Während der Postfix-Installation kann eine Konfiguration erscheinen. Wähle hier „Internet Site“ und bestätige mit Enter. Gib als „mail name“ die externe DNS deines Linux Servers ein und bestätige. Falls weitere Bildschirme erscheinen, bestätige einfach mit Enter, um die Standardwerte zu übernehmen.

Wenn du eine andere Lösung für den E-Mail-Versand nutzen möchtest, überspringe diesen Schritt und [konfiguriere einen externen SMTP-Server](https://docs.gitlab.com/omnibus/settings/smtp) nach der GitLab-Installation gemäß der offiziellen Anleitung.
:::

## Schritt 2: GitLab installieren

Nachdem alle Abhängigkeiten installiert sind, kannst du GitLab installieren.

In dieser Anleitung installieren wir GitLab direkt aus den offiziellen Paket-Repositories.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
Führe folgendes Skript aus, um die GitLab-Repositories zum apt Paketmanager hinzuzufügen:

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

Danach kannst du das Paket `gitlab-ee` installieren:

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
Führe folgendes Skript aus, um die GitLab-Repositories zum Zypper Paketmanager hinzuzufügen:

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

Danach kannst du das Paket `gitlab-ee` installieren:

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

Nach Abschluss dieses Prozesses sollte GitLab auf deinem Linux Server einsatzbereit sein. Im nächsten Abschnitt konfigurierst du wichtige Einstellungen, damit der Server reibungslos läuft.

## Schritt 3: GitLab konfigurieren

Damit alles funktioniert, musst du einige Änderungen an der Konfigurationsdatei vornehmen. Öffne die GitLab-Konfigurationsdatei mit deinem bevorzugten Texteditor. Wir nutzen hier als Beispiel den vorinstallierten `nano` Editor.

```
sudo nano /etc/gitlab/gitlab.rb
```

Suche die Zeile mit `external_url` und trage entweder deine Domain oder die IP-Adresse deines Linux Servers ein, falls du keine Domain für GitLab hast.

<!-- Der folgende Code stammt aus der /etc/gitlab/gitlab.rb Datei -->
```
## GitLab URL
##! URL, unter der GitLab erreichbar sein wird.
##! Für mehr Details zur Konfiguration von external_url siehe:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! Hinweis: Während Installation/Updates wird der Wert der Umgebungsvariable
##! EXTERNAL_URL verwendet, um diesen Wert zu setzen/ersetzen.
##! Auf AWS EC2 Instanzen wird versucht, den öffentlichen Hostnamen/IP
##! von AWS abzurufen. Mehr Infos:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`Deine Domain / IPv4 Adresse deines Linux Servers`'
```

Wir empfehlen außerdem, deine E-Mail in der Zeile `letsencrypt['contact_emails']` einzutragen. So kann Let's Encrypt dich bezüglich der automatischen und kostenlosen SSL-Zertifikate kontaktieren.

:::note
Für ein kostenloses SSL-Zertifikat von Let's Encrypt benötigst du eine Domain. Ein Zertifikat direkt für eine IP-Adresse kannst du nicht anfordern.
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
# Siehe https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically für mehr Infos
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # Sollte eine Zahl oder Cron-Ausdruck sein, falls angegeben.
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
Du kannst mit `CTRL+W` nach `letsencrypt['contact_emails']` suchen, um die Stelle schnell zu finden.
:::

Speichere die Änderungen mit `CTRL+X`, dann `Y` und bestätige mit `Enter`.

Führe abschließend folgenden Befehl aus, um GitLab mit den neuen Einstellungen zu konfigurieren:

```
sudo gitlab-ctl reconfigure
```

Das kann eine Weile dauern, da GitLab mit den aktualisierten Einstellungen initialisiert wird. Falls eine Domain verwendet wurde, werden auch die SSL-Zertifikate automatisch ausgestellt.

## Schritt 4: Zugriff auf das Webinterface

Nach der Initialisierung solltest du GitLab jetzt über deinen Browser erreichen können. Gib dazu deine Domain oder IP-Adresse wie folgt ein:

```
https://[deine_domain] ODER http://[deine_ip_adresse]
```

Beim ersten Aufruf erscheint die Login-Seite.

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

Für den ersten Login nutzt du den Benutzer `root`.

Das Passwort findest du in einer Datei auf deinem Linux Server. Öffne sie mit:

```
sudo nano /etc/gitlab/initial_root_password
```

<!-- Der folgende Code stammt aus der /etc/gitlab/initial_root_password Datei -->
```
# WARNUNG: Dieser Wert ist nur gültig unter folgenden Bedingungen

# 1. Wenn er manuell gesetzt wurde (entweder via `GITLAB_ROOT_PASSWORD` Umgebungsvariable oder `gitlab_rails['initial_root_password']` Einstellung in `gitlab.rb` vor der ersten Datenbankbefüllung).

# 2. Das Passwort wurde nicht manuell geändert, weder über UI noch Kommandozeile.

#

# Falls das hier angezeigte Passwort nicht funktioniert, musst du das Admin-Passwort zurücksetzen: https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: `[DEIN_PASSWORT_HIER]`

# HINWEIS: Diese Datei wird automatisch beim ersten Reconfigure-Lauf nach 24 Stunden gelöscht.
```

Gib Benutzername und Passwort auf der Login-Seite ein, um dein GitLab Dashboard zu öffnen. Jetzt kannst du dein GitLab Panel auf deinem eigenen Linux Server nutzen.

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

Wir empfehlen dringend, einen neuen Benutzer anzulegen und/oder das Passwort des `root` Users zu ändern. Das kannst du unter **Admin** unten links im Menü machen, dann **Übersicht -> Benutzer**. Dort kannst du alle Nutzer deiner GitLab Instanz verwalten.

## Optional: Firewall mit ufw einrichten

Diesen Schritt kannst du überspringen, wenn du keine Firewall konfigurieren möchtest oder z.B. schon `firewalld` auf OpenSUSE nutzt. Erlaube auf jeden Fall die Ports 80/443 und 22.

### ufw installieren

Falls `ufw` schon installiert ist, kannst du diesen Schritt überspringen.

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
Standardmäßig blockiert ufw alle Ports außer den erlaubten. Stelle sicher, dass deine Whitelist vollständig ist, bevor du die Firewall aktivierst.
:::

Aktiviere die Firewall mit:

```
sudo ufw enable
```

## Fazit

Glückwunsch, du hast GitLab erfolgreich installiert! Falls du noch Fragen oder Probleme hast, steht dir unser Support-Team täglich zur Verfügung und hilft dir gerne weiter!

Für weitere Einrichtungsschritte empfehlen wir die [offizielle GitLab Dokumentation](https://docs.gitlab.com/ee/install/next_steps.html).

<InlineVoucher />