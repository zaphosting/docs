---
id: vserver-linux-gitlab
title: "Konfiguracja GitLab na serwerze Linux - Hostuj własną platformę DevOps"
description: "Dowiedz się, jak efektywnie zainstalować GitLab na Linuxie, aby usprawnić workflow DevOps i poprawić współpracę zespołu → Sprawdź teraz"
sidebar_label: Instalacja GitLab
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

GitLab to kompleksowa platforma DevOps, która pozwala zespołom współpracować nad kodem, automatyzować procesy i zarządzać pełnym cyklem życia oprogramowania w efektywny sposób. W tym poradniku wyjaśnimy, jak zainstalować GitLab na serwerze Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## Przygotowanie

Poniższe wymagania są rekomendowane przez oficjalny [Zespół GitLab](https://docs.gitlab.com/ee/install/requirements.html) i zdecydowanie warto się do nich stosować, aby uniknąć problemów i niedogodności w przyszłości.

#### Sprzęt

| Komponenty    | Minimum                | Zalecane                  |
| ------------- | ---------------------- | ------------------------- |
| CPU           | 2x 2 GHz               | 4x 2.6+ GHz              |
| RAM           | 4 GB                   | 8 GB                      |
| Dysk          | 10 GB                  | 50+ GB                    |
| Przepustowość | 100 mbit/s (upload & download) | 100 mbit/s (upload & download) |

#### Oprogramowanie

| Platforma       | Opcje                                                      |
| --------------- | ---------------------------------------------------------- |
| System operacyjny | Ubuntu (20.04, 22.04, 24.04), Debian (10, 11, 12), OpenSUSE (15.5) |
| Baza danych     | PostgreSQL 14.9+                                           |
| Serwer WWW      | NGINX (dołączony do GitLab), Puma 6.4.2+                   |
| Inne            | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+             |

:::info
Dla najdokładniejszych i aktualnych informacji o wymaganiach sprzętowych, sprawdź oficjalną dokumentację GitLab [Hardware Requirements](https://docs.gitlab.com/ee/install/requirements.html).
:::

Aby zainstalować GitLab na serwerze Linux, musisz połączyć się przez klienta SSH. Sprawdź nasz [poradnik Pierwszy dostęp (SSH)](vserver-linux-ssh.md), aby dowiedzieć się więcej.

Po nawiązaniu połączenia możesz zacząć instalować niezbędne pakiety wymagane do instalacji GitLab.

## Krok 1: Instalacja zależności

Najpierw musisz zainstalować kilka zależności, aby uruchomić instalator GitLab. Użyj poniższych komend, aby zainstalować wymagane pakiety na swoim serwerze Linux.

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Zaktualizuj listę pakietów do najnowszej wersji i zainstaluj pakiet OpenSSH Server wraz z wymaganymi zależnościami. To właśnie na tym będzie hostowany panel webowy GitLab.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

Możesz też zainstalować Postfix (serwer SMTP), jeśli chcesz wysyłać powiadomienia mailowe z GitLab. To jest **opcjonalne**.

Jeśli chcesz korzystać z powiadomień mailowych, pobierz Postfix poleceniem:
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

Zaktualizuj listę pakietów do najnowszej wersji i zainstaluj pakiet OpenSSH Server wraz z wymaganymi zależnościami. To właśnie na tym będzie hostowany panel webowy GitLab.

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

Możesz też zainstalować Postfix (serwer SMTP), jeśli chcesz wysyłać powiadomienia mailowe z GitLab. To jest **opcjonalne**.

Jeśli chcesz korzystać z powiadomień mailowych, pobierz Postfix poleceniem:
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

Zainstaluj pakiet OpenSSH Server wraz z wymaganymi zależnościami. To właśnie na tym będzie hostowany panel webowy GitLab.

```
sudo zypper install curl openssh perl
```

Następnie upewnij się, że demon OpenSSH jest włączony, wykonując poniższe komendy:
```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

Jeśli używasz `firewalld`, upewnij się, że zapora pozwala na niezbędny dostęp.

Sprawdź, czy używasz `firewalld`, uruchamiając:
```bash
sudo systemctl status firewalld
```

Jeśli tak, otwórz wymagane porty (domyślnie 80 i 443):

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

Możesz też zainstalować Postfix (serwer SMTP), jeśli chcesz wysyłać powiadomienia mailowe z GitLab. To jest **opcjonalne**.

Jeśli chcesz korzystać z powiadomień mailowych, pobierz Postfix poleceniami:
```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
Podczas instalacji Postfix może pojawić się konfigurator. W takim wypadku wybierz 'Internet Site' i zatwierdź enterem. Jako 'mail name' wpisz zewnętrzną domenę Twojego serwera Linux i zatwierdź enterem. Jeśli pojawią się kolejne ekrany, zatwierdzaj domyślne ustawienia enterem.

Jeśli chcesz użyć innego rozwiązania do wysyłki maili, pomiń ten krok i [skonfiguruj zewnętrzny serwer SMTP](https://docs.gitlab.com/omnibus/settings/smtp) po instalacji GitLab, korzystając z poradnika oficjalnego zespołu GitLab.
:::

## Krok 2: Instalacja GitLab

Po pobraniu i zainstalowaniu wszystkich zależności, możesz przystąpić do instalacji GitLab.

W tym poradniku zainstalujemy GitLab bezpośrednio z oficjalnych repozytoriów pakietów.

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
Poniższy skrypt doda repozytoria GitLab do menedżera pakietów apt:

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

Po zakończeniu możesz zainstalować pakiet `gitlab-ee`:

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
Poniższy skrypt doda repozytoria GitLab do menedżera pakietów Zypper:

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

Po zakończeniu możesz zainstalować pakiet `gitlab-ee`:

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

Po zakończeniu tego procesu GitLab powinien być gotowy do działania na Twoim serwerze Linux. Przejdź do kolejnej sekcji, gdzie skonfigurujesz niezbędne ustawienia, aby serwer działał poprawnie.

## Krok 3: Konfiguracja GitLab

Aby wszystko działało poprawnie, musisz wprowadzić kilka zmian w pliku konfiguracyjnym. Zacznij od otwarcia pliku konfiguracyjnego GitLab w ulubionym edytorze tekstu. Jako przykład użyjemy wbudowanego edytora `nano`.
```
sudo nano /etc/gitlab/gitlab.rb
```

Następnie znajdź linię `external_url` i wpisz tam swoją domenę lub adres IP serwera Linux, jeśli nie masz domeny do użycia z GitLab.

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
## GitLab URL
##! URL, pod którym GitLab będzie dostępny.
##! Więcej informacji o konfiguracji external_url znajdziesz pod:
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! Uwaga: Podczas instalacji/aktualizacji wartość zmiennej środowiskowej
##! EXTERNAL_URL będzie używana do wypełnienia/zastąpienia tej wartości.
##! Na instancjach AWS EC2 próbujemy też pobrać publiczną nazwę hosta/adres IP
##! z AWS. Więcej informacji:
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`Twoja domena / adres IPv4 Twojego serwera Linux`'
```

Dodatkowo, zalecamy wpisanie swojego maila w linii `letsencrypt['contact_emails']`. Pozwoli to Let's Encrypt na wysyłanie powiadomień i kontaktowanie się w sprawie automatycznych, darmowych certyfikatów SSL.

:::note
Musisz użyć domeny, jeśli chcesz uzyskać darmowy certyfikat SSL od Let's Encrypt. Nie możesz go wystawić bezpośrednio na adres IP.
:::

<!-- The following code is from the /etc/gitlab/gitlab.rb file  -->
```
################################################################################
# Integracja Let's Encrypt
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`Twój email tutaj`] # Powinno to być tablica adresów email do kontaktu
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# Zobacz https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically dla więcej informacji o tych ustawieniach
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # Powinno być liczbą lub wyrażeniem cron, jeśli określone.
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
Możesz użyć `CTRL+W`, aby wyszukać `letsencrypt['contact_emails']` i zatwierdzić enterem, żeby nie szukać ręcznie w całym pliku.
:::

Gdy skończysz, naciśnij `CTRL+X`, potem `Y` i `Enter`, aby zatwierdzić zmiany.

Na koniec uruchom poniższe polecenie, aby ponownie skonfigurować GitLab z nowymi ustawieniami.
```
sudo gitlab-ctl reconfigure
```

Proces ten może chwilę potrwać, ponieważ GitLab zostanie zainicjalizowany z aktualną konfiguracją, a certyfikaty SSL zostaną automatycznie wystawione, jeśli używasz domeny.

## Krok 4: Dostęp do panelu webowego

Po inicjalizacji serwer powinien być dostępny przez przeglądarkę. Wejdź na swoją stronę, wpisując domenę lub adres IP serwera:
```
https://[twoja_domena] LUB http://[twój_adres_ip]
```

Przy pierwszym wejściu pojawi się ekran logowania.

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

Aby zalogować się jako admin, użyj nazwy użytkownika `root`.

Hasło znajdziesz w pliku na serwerze Linux. Otwórz go poleceniem i znajdź pole `Password`:
```
sudo nano /etc/gitlab/initial_root_password
```

<!-- The following code is from the /etc/gitlab/initial_root_password file -->
```
# UWAGA: Ta wartość jest ważna tylko w następujących warunkach

# 1. Jeśli została podana ręcznie (poprzez zmienną środowiskową `GITLAB_ROOT_PASSWORD` lub ustawienie `gitlab_rails['initial_root_password']` w `gitlab.rb`) przed inicjalizacją bazy danych.

# 2. Hasło nie zostało zmienione ręcznie, ani przez UI, ani przez konsolę.

#

# Jeśli hasło tu pokazane nie działa, musisz zresetować hasło admina zgodnie z https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password.

Password: `[TWOJE_HASŁO_JEST_TUTAJ]`

# UWAGA: Ten plik zostanie automatycznie usunięty przy pierwszym uruchomieniu reconfigure po 24 godzinach.
```

Wpisz nazwę użytkownika i hasło na stronie logowania, aby wejść do panelu GitLab po raz pierwszy. Teraz możesz korzystać z własnego GitLab na swoim serwerze Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

Zalecamy utworzenie nowego użytkownika i/lub zmianę hasła dla `root`. Możesz to zrobić, klikając **Admin** w lewym dolnym rogu, a następnie wybierając **Overview->Users**. Na tej stronie zarządzasz użytkownikami swojej instancji GitLab.

## Opcjonalnie: Konfiguracja zapory sieciowej z ufw

Możesz pominąć ten krok, jeśli nie chcesz konfigurować zapory lub np. już korzystasz z `firewalld` na OpenSUSE.
Upewnij się, że porty 80/443 oraz 22 są otwarte.

### Instalacja ufw

Jeśli masz już zainstalowany `ufw`, możesz pominąć ten krok.

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

### Otwórz wymagane porty

```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

### Włącz zaporę

:::warning
Domyślnie to zablokuje dostęp do wszystkich portów poza tymi dozwolonymi. Upewnij się, że whitelist jest poprawnie skonfigurowany przed uruchomieniem tej komendy.
:::

Aby zapora zaczęła działać, włącz ją poleceniem:

```
sudo ufw enable
```

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś GitLab! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc!

Jeśli chcesz wykonać dodatkową konfigurację, polecamy przeczytać [Oficjalną dokumentację GitLab](https://docs.gitlab.com/ee/install/next_steps.html) z kolejnymi krokami.

<InlineVoucher />