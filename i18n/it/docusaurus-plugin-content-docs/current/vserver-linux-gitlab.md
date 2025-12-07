---
id: vserver-linux-gitlab
title: "VPS: GitLab installieren auf Linux"
description: "Entdecke, wie du GitLab effizient auf Linux installierst, um DevOps-Workflows zu optimieren und die Teamarbeit zu verbessern → Jetzt mehr erfahren"
sidebar_label: GitLab installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

GitLab ist eine umfassende DevOps-Plattform, die Teams ermöglicht, gemeinsam am Code zu arbeiten, Workflows zu automatisieren und den kompletten Softwareentwicklungszyklus effizient zu managen. In diesem Guide zeigen wir dir, wie du GitLab auf einem Linux-Server installierst.

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## Vorbereitung

Die folgenden Anforderungen werden vom offiziellen [GitLab Team](https://docs.gitlab.com/ee/install/requirements.html) empfohlen. Es ist sehr ratsam, diese Voraussetzungen einzuhalten, um spätere Probleme und Ärger zu vermeiden.

#### Hardware

| Komponenten     | Minimum                | Empfohlen                  |
| -------------- | ---------------------- | ------------------------- |
| CPU            | 2x 2 GHz               | 4x 2.6+ GHz               |
| RAM            | 4 GB                   | 8 GB                      |
| Speicher       | 10 GB                  | 50+ GB                    |
| Bandbreite     | 100 Mbit/s (Up & Down) | 100 Mbit/s (Up & Down)    |

#### Software

| Plattform         | Optionen                                                      |
| ---------------- | ------------------------------------------------------------- |
| Betriebssystem   | Ubuntu (20.04, 22.04, 24.04), Debian (10, 11, 12), OpenSUSE (15.5) |
| Datenbank        | PostgreSQL 14.9+                                             |
| Webserver        | NGINX (mit GitLab gebündelt), Puma 6.4.2+                    |
| Sonstiges        | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+               |

:::info
Für die aktuellsten und genauesten Specs schau am besten direkt in die offizielle GitLab [Hardware Requirements](https://docs.gitlab.com/ee/install/requirements.html) Dokumentation.
:::

Um GitLab auf deinem Linux-Server zu installieren, musst du dich per SSH-Client verbinden. Schau dir dazu unseren Guide [Erster Zugriff (SSH)](vserver-linux-ssh.md) an.

Sobald die Verbindung steht, kannst du die nötigen Pakete installieren, die für die GitLab-Installation gebraucht werden.

## Schritt 1: Abhängigkeiten installieren

Zuerst musst du einige Abhängigkeiten installieren, damit der GitLab Installer läuft. Nutze die folgenden Befehle, um die benötigten Pakete auf deinem Linux-Server zu installieren.

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Aktualisiere die Paketliste und installiere den OpenSSH Server sowie die nötigen Voraussetzungen mit diesem Befehl. So wird dein GitLab Webinterface gehostet.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

Optional kannst du Postfix (SMTP Server) installieren, wenn du E-Mail-Benachrichtigungen über GitLab verschicken möchtest.

Falls du E-Mail-Benachrichtigungen willst, installiere Postfix mit:

```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

Aktualisiere die Paketliste und installiere den OpenSSH Server sowie die nötigen Voraussetzungen mit diesem Befehl. So wird dein GitLab Webinterface gehostet.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

Optional kannst du Postfix (SMTP Server) installieren, wenn du E-Mail-Benachrichtigungen über GitLab verschicken möchtest.

Falls du E-Mail-Benachrichtigungen willst, installiere Postfix mit:

```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

Installiere den OpenSSH Server und die nötigen Pakete mit folgendem Befehl. So wird dein GitLab Webinterface gehostet.

```
sudo zypper install curl openssh perl
```

Stelle sicher, dass der OpenSSH-Daemon aktiviert ist:

```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

Falls du `firewalld` nutzt, musst du sicherstellen, dass die nötigen Ports offen sind.

Prüfe, ob `firewalld` läuft:

```bash
sudo systemctl status firewalld
```

Wenn ja, öffne die Standard-Ports 80 und 443:

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

Optional kannst du Postfix (SMTP Server) installieren, wenn du E-Mail-Benachrichtigungen über GitLab verschicken möchtest.

Falls du E-Mail-Benachrichtigungen willst, installiere Postfix und starte den Dienst:

```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
Während der Postfix-Installation erscheint eventuell eine Konfiguration. Wähle hier 'Internet Site' und bestätige mit Enter. Als 'mail name' gibst du den externen DNS deines Linux-Servers ein und bestätigst wieder mit Enter. Falls weitere Screens kommen, einfach mit Enter die Standardwerte übernehmen.

Wenn du eine andere Lösung für E-Mails nutzen willst, überspring diesen Schritt und [konfiguriere einen externen SMTP-Server](https://docs.gitlab.com/omnibus/settings/smtp) nach der GitLab-Installation anhand der offiziellen Anleitung.
:::

## Schritt 2: GitLab installieren

Nachdem alle Abhängigkeiten installiert sind, kannst du GitLab installieren.

Wir installieren GitLab direkt aus den offiziellen Paket-Repositories.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
Führe das folgende Script aus, um die GitLab-Repositories zum apt Paketmanager hinzuzufügen:

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

Danach kannst du das Paket `gitlab-ee` installieren:

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
Führe das folgende Script aus, um die GitLab-Repositories zum Zypper Paketmanager hinzuzufügen:

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

Danach kannst du das Paket `gitlab-ee` installieren:

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

Nach Abschluss sollte GitLab auf deinem Linux-Server bereit sein. Im nächsten Abschnitt konfigurierst du wichtige Einstellungen, damit alles rund läuft.

## Schritt 3: GitLab konfigurieren

Damit alles funktioniert, musst du die Konfigurationsdatei anpassen. Öffne die GitLab-Konfigurationsdatei mit deinem Lieblingseditor. Wir nehmen hier `nano` als Beispiel.

```
sudo nano /etc/gitlab/gitlab.rb
```

Suche die Zeile mit `external_url` und trage entweder deine Domain oder die IP-Adresse deines Linux-Servers ein, falls du keine Domain hast.

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
## GitLab URL
##! URL, unter der GitLab erreichbar sein wird.
##! Für mehr Infos zur external_url siehe:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! Hinweis: Während Installation/Updates wird die Umgebungsvariable
##! EXTERNAL_URL genutzt, um diesen Wert zu setzen/ersetzen.
##! Bei AWS EC2 Instanzen wird versucht, den öffentlichen Hostnamen/IP
##! von AWS abzurufen. Mehr Infos:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`Deine Domain / IPv4-Adresse deines Linux-Servers`'
```

Wir empfehlen außerdem, deine E-Mail in der Zeile `letsencrypt['contact_emails']` einzutragen. So bekommst du Benachrichtigungen von Let's Encrypt zu den kostenlosen SSL-Zertifikaten.

:::note
Für ein kostenloses SSL-Zertifikat von Let's Encrypt brauchst du eine Domain. Ein Zertifikat auf eine IP-Adresse kannst du nicht anfordern.
:::

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
################################################################################
# Let's Encrypt Integration
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`Deine E-Mail hier`] # Array mit Kontakt-E-Mail-Adressen
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# Siehe https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically für mehr Infos
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # Zahl oder Cron-Ausdruck, falls angegeben.
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
Drücke `CTRL+W`, tippe `letsencrypt['contact_emails']` ein und bestätige mit Enter, um die Zeile schnell zu finden.
:::

Speichere die Änderungen mit `CTRL+X`, dann `Y` und Enter.

Zum Schluss wendest du die neue Konfiguration mit folgendem Befehl an:

```
sudo gitlab-ctl reconfigure
```

Das kann eine Weile dauern, da GitLab mit den neuen Einstellungen initialisiert wird. Falls du eine Domain benutzt hast, werden auch die SSL-Zertifikate automatisch ausgestellt.

## Schritt 4: Webinterface aufrufen

Nach der Initialisierung kannst du GitLab im Browser erreichen. Gib dazu deine Domain oder IP-Adresse ein:

```
https://[deine_domain] ODER http://[deine_ip_adresse]
```

Beim ersten Aufruf erscheint die Login-Seite.

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

Für den ersten Admin-Login meldest du dich als Benutzer `root` an.

Das Passwort findest du in einer Datei auf deinem Linux-Server. Öffne sie mit:

```
sudo nano /etc/gitlab/initial_root_password
```

<!-- The following code is from the /etc/gitlab/initial_root_password file -->
```
# WARNUNG: Dieser Wert ist nur gültig, wenn

# 1. Er manuell gesetzt wurde (über `GITLAB_ROOT_PASSWORD` Umgebungsvariable oder `gitlab_rails['initial_root_password']` in `gitlab.rb`) vor der ersten Datenbankbefüllung.

# 2. Das Passwort nicht manuell geändert wurde (UI oder CLI).

#

# Falls das Passwort nicht funktioniert, musst du es zurücksetzen: https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: `[DEIN_PASSWORT_HIER]`

# HINWEIS: Diese Datei wird nach 24 Stunden beim ersten Reconfigure automatisch gelöscht.
```

Gib Benutzername und Passwort auf der Login-Seite ein und du bist im GitLab Dashboard.

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

Wir empfehlen dringend, einen neuen Benutzer anzulegen und/oder das `root` Passwort zu ändern. Das geht über **Admin** unten links → **Übersicht -> Benutzer**. Dort kannst du alle Nutzer für deine GitLab-Instanz verwalten.

## Optional: Firewall mit ufw einrichten

Wenn du keine Firewall konfigurieren willst oder z.B. schon `firewalld` auf OpenSUSE nutzt, kannst du diesen Abschnitt überspringen.

Erlaube die Ports 80/443 und 22.

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

### Ports freigeben

```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

### Firewall aktivieren

:::warning
Standardmäßig blockiert ufw alle Ports außer den erlaubten. Check also unbedingt, dass deine Whitelist komplett ist, bevor du die Firewall aktivierst.
:::

Aktiviere die Firewall mit:

```
sudo ufw enable
```

## Fazit

Glückwunsch, du hast GitLab erfolgreich installiert! Wenn du Fragen hast oder Hilfe brauchst, steht dir unser Support-Team täglich zur Seite.

Für weitere Einstellungen empfehlen wir die [offizielle GitLab Dokumentation](https://docs.gitlab.com/ee/install/next_steps.html).

<InlineVoucher />