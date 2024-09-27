---
id: dedicated-linux-gitlab
title: "Dedicated Server: Installation von GitLab"
description: Informationen zur Einrichtung von GitLab auf deinem Linux Dedicated Server von ZAP-Hosting - ZAP-Hosting.com-Dokumentation
sidebar_label: Installiere GitLab
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

GitLab ist eine umfassende DevOps-Plattform, die es Teams ermöglicht, gemeinsam an Code zu arbeiten, Arbeitsabläufe zu automatisieren und den gesamten Softwareentwicklungszyklus effizient zu verwalten. In dieser Anleitung wird die Installation von GitLab auf einem Linu Dedicated Server erläutert.

![](https://screensaver01.zap-hosting.com/index.php/s/CnL5ab23Kp62LdC/preview)

<InlineVoucher />

## Voraussetzungen

Die folgenden Anforderungen werden vom offiziellen [GitLab-Team](https://docs.gitlab.com/ee/install/requirements.html) empfohlen und es wird dringend empfohlen, die Voraussetzungen zu erfüllen, um spätere Unannehmlichkeiten und Probleme zu vermeiden.

#### Hardware

| Komponenten | Minimum | Empfohlen |
| -------------- | ---------------------- | --------------------------- |
| CPU | 2x 2 GHz | 4x 2,6+ GHz |
| RAM | 4 GB | 8 GB |
| Speicher | 10 GB | 50+ GB |
| Bandbreite | 100 mbit/s (Up- und Download) | 100 mbit/s (Up- und Download) |

#### Software

| Plattform | Optionen |
| ---------------- | ------------------------------------------------------------ |
| Betriebssystem | Ubuntu (20.04, 22.04, 24.04), Debian(10, 11, 12), OpenSUSE (15.5) |
| Datenbank | PostgreSQL 14.9+ |
| Webserver | NGINX (mit GitLab gebündelt), Puma 6.4.2+ |
| Andere | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+ |

:::info
Die genauesten und aktuellsten Spezifikationsinformationen findest du in der offiziellen [Hardware-Anforderungen]-Dokumentation von GitLab (https://docs.gitlab.com/ee/install/requirements.html).
:::

## Vorbereitung

Um GitLab auf deinem Linux-Server zu installieren, muss eine Verbindung über einen SSH-Client hergestellt werden. Weitere Informationen hierzu findest du in unserer Anleitung [Erstzugriff (SSH)](https://zap-hosting.com/guides/de/docs/vserver-linux-ssh).

Sobald die Verbindung hergestellt ist, kannst du mit der Installation der erforderlichen Pakete beginnen, die für die eigentliche Installation von GitLab benötigt werden.

## Schritt 1: Linux-Server aktualisieren

Vor der Installation von Abhängigkeiten müssen einige Updates und Tools installiert werden, um die Abhängigkeiten zu installieren, die für die Installation von GitLab verwendet werden.

Verwende die folgenden Befehle, um die erforderlichen Tools auf deinem Linux-Server zu aktualisieren und zu installieren. Wenn du bereits eine Firewall eingerichtet hast, musst du die Firewall-Befehle nicht verwenden. Stelle sicher, dass du Port 80/443 und Port 22 zulässt.
```
apt update # Neueste Updates abrufen
sudo apt install curl # CURL installieren

# Installiere und aktiviere UFW Firewall
sudo apt install ufw
sudo ufw enable
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

## Schritt 2: Abhängigkeiten installieren

Als Nächstes musst du einige Abhängigkeiten installieren, um den GitLab-Installer ausführen zu können. Verwende die folgenden Befehle, um die erforderlichen Abhängigkeiten auf deinem Linux-Server zu installieren.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Installiere das OpenSSH-Serverpaket zusammen mit den erforderlichen Voraussetzungen mit dem folgenden Befehl. So wird dein Web-Interface-Panel für GitLab gehostet.

```
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

Du kannst auch Postfix (STMP-Server) installieren, wenn du E-Mail-Benachrichtigungen senden möchtest, wenn du GitLab verwendest. Dies ist **optional.

Wenn du E-Mail-Benachrichtigungen verwenden möchtest, lade Postfix herunter, indem du den folgenden Befehl ausführst.
```
sudo apt-get install -y postfix
```
</TabItem>

<TabItem value="debian" label="Debian">

Installiere das OpenSSH-Serverpaket zusammen mit den erforderlichen Voraussetzungen mit dem folgenden Befehl. So wird deine Webschnittstelle für GitLab gehostet.

```
sudo apt-get install -y curl openssh-server ca-certificates perl
```

Du kannst auch Postfix (STMP-Server) installieren, wenn du bei der Verwendung von GitLab E-Mail-Benachrichtigungen senden möchtest. Dies ist **optional.

Wenn du E-Mail-Benachrichtigungen verwenden möchtest, lade Postfix herunter, indem du den folgenden Befehl ausführst.
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

Installiere das OpenSSH-Serverpaket zusammen mit den erforderlichen Voraussetzungen mit dem folgenden Befehl. So wird dein Web-Interface-Panel für GitLab gehostet.

```
sudo zypper install curl openssh perl
```

Als Nächstes stelle sicher, dass der OpenSSH-Daemon über die folgenden Befehle aktiviert ist.
```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

Du solltest sicherstellen, dass die Firewall den erforderlichen Zugriff ermöglicht.
```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

Du kannst auch Postfix (STMP-Server) installieren, wenn du E-Mail-Benachrichtigungen senden möchtest, wenn du GitLab verwendest. Dies ist **optional**.

Wenn du E-Mail-Benachrichtigungen verwenden möchtest, lade Postfix herunter, indem du die folgenden Befehle ausführst.
```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
Während der Installation von Postfix wird möglicherweise eine Konfiguration angezeigt. Wähle in diesem Fall "Internet Site" aus und drücke die Eingabetaste. Verwende den externen DNS deines Linux-Servers für "Mail Name" und drücke die Eingabetaste. Wenn weitere Bildschirme angezeigt werden, drücke weiterhin die Eingabetaste, um die Standardeinstellungen zu akzeptieren.

Wenn du eine andere Lösung zum Senden von E-Mails verwenden möchtest, überspringe bitte diesen Schritt und [konfiguriere einen externen SMTP-Server](https://docs.gitlab.com/omnibus/settings/smtp), nachdem GitLab auf deinem Linux-Server installiert wurde, indem du einer Anleitung des offiziellen GitLab-Teams folgst.
:::

## Schritt 3: GitLab installieren

Nachdem du alle erforderlichen Abhängigkeiten heruntergeladen und installiert hast, kannst du nun GitLab installieren.

Beginne damit, in das Verzeichnis `/tmp` zu wechseln.
```
cd /tmp
```

Lade anschließend das GitLab-Installationsskript herunter und fahre mit dem folgenden Befehl fort.
```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

Um GitLab zu installieren, führe schließlich das folgende Installationsskript basierend auf deiner Linux-Distribution aus, um den Prozess zu starten.
```
apt-get install gitlab-ee # Ubuntu/Debian
zypper install gitlab-ee # OpenSUSE
```

Sobald dieser Prozess abgeschlossen ist, sollte GitLab auf deinem Linux-Server einsatzbereit sein. Fahre mit dem folgenden Abschnitt fort, in dem du einige grundlegende Einstellungen konfigurierst, um sicherzustellen, dass der Server funktionsfähig ist.

## Schritt 4: GitLab konfigurieren

Um sicherzustellen, dass alles funktioniert, musst du einige Änderungen an der Konfigurationsdatei vornehmen. Öffne zunächst die GitLab-Konfigurationsdatei mit deinem bevorzugten Texteditor. Als Beispiel verwenden wir den vorgefertigten `nano`-Editor.
```
sudo nano /etc/gitlab/gitlab.rb
```

Als Nächstes suche nach der Zeile `external_url` und gib entweder deine Domain oder die IP-Adresse deines Linux-Servers ein, falls du keine Domain hast, die du mit GitLab verwenden kannst.

<!-- TDer folgende Code stammt aus der Datei /etc/gitlab/gitlab.rb -->
```
## GitLab URL
##! URL on which GitLab will be reachable.
##! For more details on configuring external_url see:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! Note: During installation/upgrades, the value of the environment variable
##! EXTERNAL_URL will be used to populate/replace this value.
##! On AWS EC2 instances, we also attempt to fetch the public hostname/IP
##! address from AWS. For more details, see:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`Your domain / IPv4 address of your Linux server`'
```

Zusätzlich empfehlen wir, deine E-Mail-Adresse in die Zeile `letsencrypt['contact_emails']` einzugeben. Dadurch kann Let's Encrypt dir Benachrichtigungen senden und dich bezüglich der automatischen und kostenlosen SSL-Zertifikate kontaktieren.

:::note
Du musst eine Domain verwenden, wenn du ein kostenloses SSL-Zertifikat von Let's Encrypt erwerben möchtest. Du kannst kein Zertifikat direkt für deine IP-Adresse anfordern.
:::

<!-- TDer folgende Code stammt aus der Datei /etc/gitlab/gitlab.rb -->
```
################################################################################
# Let's Encrypt integration
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`Your email here`] # This should be an array of email addresses to add as contacts
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# See https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically for more on these settings
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # Should be a number or cron expression, if specified.
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
Du kannst `CTRL+W` verwenden, um nach `letsencrypt['contact_emails']` zu suchen, und die Eingabetaste drücken, damit du nicht die gesamte Datei manuell durchsuchen musst.
:::

Wenn du fertig bist, drücke `CTRL+X`, gefolgt von `Y` und `Enter`, um die vorgenommenen Änderungen zu bestätigen.

Führe abschließend den folgenden Befehl aus, um GitLab mit den neuen Konfigurationsoptionen neu zu konfigurieren.
```
sudo gitlab-ctl reconfigure
```

Dieser Vorgang kann eine Weile dauern, da GitLab mit den aktualisierten Konfigurationsinformationen und automatisierten Prozessen initialisiert wird. Die SSL-Zertifikate werden auch ausgestellt, wenn eine Domain verwendet wurde.

## Schritt 5: Zugriff auf die Webschnittstelle

Nach der Initialisierung sollte der Server nun über einen Webbrowser zugänglich sein. Rufe deine Website auf, indem du deinen Domainnamen oder deine IP-Adresse wie folgt eingibst.
```
https://[deine_domain] OR http://[deine_ip_address]
```

Beim ersten Aufrufen der Webschnittstelle wird eine Anmeldeseite angezeigt.

![](https://screensaver01.zap-hosting.com/index.php/s/2RKCzYXidfA8SnM/preview)

Um bei der ersten Anmeldung Administratorzugriff zu erhalten, melde dich als Root-Benutzer an, indem du `root` als Benutzernamen verwendest.

Das Passwort findest du in einer Datei auf deinem Linux-Server. Rufe die Datei mit dem folgenden Befehl auf und suche das Feld `Password`.
```
sudo nano /etc/gitlab/initial_root_password
```

<!-- TDer folgende Code stammt aus der Datei /etc/gitlab/initial_root_password -->
```
# WARNING: This value is valid only in the following conditions

# 1. If provided manually (either via `GITLAB_ROOT_PASSWORD` environment variable or via `gitlab_rails['initial_root_password']` setting in `gitlab.rb`, it was provided before database was seeded for the firs$

# 2. Password hasn't been changed manually, either via UI or via command line.

#

# If the password shown here doesn't work, you must reset the admin password following https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: `[YOUR_PASSWORD_IS_HERE]`

# NOTE: This file will be automatically deleted in the first reconfigure run after 24 hours.
```

Gib den Benutzernamen und das Passwort auf der Anmeldeseite ein, um dein GitLab-Dashboard zum ersten Mal aufzurufen. Du solltest nun in der Lage sein, auf dein GitLab-Panel auf deinem eigenen Linux-Server zuzugreifen.

![](https://screensaver01.zap-hosting.com/index.php/s/QbkNcp4Kd3Eeon2/preview)

Wir empfehlen dringend, einen neuen Benutzer anzulegen und/oder das Passwort für deinen `root`-Benutzer zu ändern. Dies kann alles über den Zugriff auf **Admin** in der linken unteren Ecke und die Auswahl von **Übersicht->Benutzer** erfolgen. Auf dieser Seite kannst du die Benutzer für deine GitLab-Instanz verwalten.

## Abschluss

Glückwunsch, du hast GitLab erfolgreich installiert und konfiguriert! Solltest du noch weitere Fragen oder Probleme haben, dann wende dich gerne an unser Support-Team, welches dir jeden Tag zur Verfügung steht! 

Wenn du weitere Einstellungen vornehmen möchtest, empfehlen wir dir, die [offizielle GitLab-Dokumentation](https://docs.gitlab.com/ee/install/next_steps.html) für die nächsten Schritte zu lesen.