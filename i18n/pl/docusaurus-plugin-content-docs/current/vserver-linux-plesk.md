---
id: vserver-linux-plesk
title: "Konfiguracja Plesk na serwerze Linux - Zarządzaj stronami z potężnym panelem administracyjnym"
description: "Dowiedz się, jak efektywnie zarządzać stronami i serwerami z Plesk – dla początkujących i zaawansowanych → Sprawdź teraz"
sidebar_label: Instalacja Plesk
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Plesk to kompleksowa platforma do zarządzania hostingiem i serwerami, która pozwala użytkownikom zarządzać stronami internetowymi, serwerami, kontami e-mail i wieloma innymi rzeczami przez przyjazny interfejs. To wszechstronne rozwiązanie, które sprawdzi się zarówno dla początkujących, jak i doświadczonych web developerów oraz administratorów systemów.

<InlineVoucher />

## Instalacja Plesk

:::info
Przed instalacją wykonaj `apt update` i `apt upgrade`, aby na serwerze znalazły się najnowsze pakiety.
:::
Plesk można obecnie zainstalować tylko na Debian 9 (Stretch), Debian 10 (Buster), Ubuntu 18.04 (Bionic Beaver), Ubuntu 20.04 (Focal Fossa), CentOS 7/8, Red Hat Enterprise Linux 7.x/8.x, CloudLinux 7.1+/8, AlmaLinux OS, Rocky Linux 8.x oraz Virtuozzo Linux 7. Architektura musi być 64-bitowa.

Połączenie z serwerem można nawiązać np. przez Putty.


## Rozpoczęcie instalacji

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="One-Click Installation" label="Instalacja jednym kliknięciem" default>

Aby Plesk zainstalował się całkowicie automatycznie z domyślnymi komponentami i funkcjami używanymi przez większość użytkowników Plesk, wystarczy jedno polecenie:

>Instalator Plesk zawsze instaluje najnowszą/dostępną wersję Plesk. Może się zdarzyć, że grafiki/zrzuty ekranu tutaj nie pokazują najnowszej wersji Plesk.

```
sh <(curl https://autoinstall.plesk.com/one-click-installer || wget -O - https://autoinstall.plesk.com/one-click-installer)
```

:::info
Jeśli pojawi się błąd: "-bash: curl: command not found", musisz doinstalować pakiet poleceniem `apt install curl`.
:::

Po wykonaniu tego polecenia instalacja Plesk zwykle trwa od 15 do 60 minut.

:::info
Sesja SSH nie może zostać zamknięta, dopóki instalator działa. W przeciwnym razie instalacja zostanie przerwana.
:::
W takim wypadku serwer trzeba będzie przeinstalować, aby ponownie uruchomić instalator. 
Jeśli instalator zostanie uruchomiony ponownie bez reinstalacji serwera, mogą wystąpić problemy z niedziałającymi funkcjami podczas instalacji lub w samym panelu Plesk.

:::info
Może się wydawać, że instalator „zawiesił się”, ale w 99% przypadków po kilku minutach kontynuuje działanie, bo musi jeszcze skonfigurować pakiety i ustawienia.
:::


Instalacja jest zakończona, gdy pojawi się taki ekran:

![](https://screensaver01.zap-hosting.com/index.php/s/9o6bEzBr8rCAWzf/preview)

</TabItem>
<TabItem value="Web Installation" label="Instalacja przez przeglądarkę">

Do instalacji Plesk przez przeglądarkę potrzebne są tylko kilka poleceń.

:::info
Instalator Plesk zawsze instaluje najnowszą/dostępną wersję Plesk. Może się zdarzyć, że grafiki/zrzuty ekranu tutaj nie pokazują najnowszej wersji Plesk.
:::

Pobierz instalator Plesk:
```
wget https://autoinstall.plesk.com/plesk-installer
```

Nadaj odpowiednie uprawnienia:

```
chmod +x plesk-installer
```

Uruchom instalator:

```
./plesk-installer --web-interface
```

</TabItem>
<TabItem value="Konsolen Installation" label="Instalacja przez konsolę">

Do instalacji Plesk przez konsolę potrzebne są tylko kilka poleceń.

:::info
Instalator Plesk zawsze instaluje najnowszą/dostępną wersję Plesk. Może się zdarzyć, że grafiki/zrzuty ekranu tutaj nie pokazują najnowszej wersji Plesk.
:::

Pobierz instalator:

```
wget https://autoinstall.plesk.com/plesk-installer
```

Nadaj odpowiednie uprawnienia:

```
chmod +x plesk-installer
```

Uruchom instalator:

```
./plesk-installer
```

Po wykonaniu tych trzech poleceń startowych, licencję trzeba zatwierdzić klawiszem "F":

![](https://screensaver01.zap-hosting.com/index.php/s/XrCa3WYALoDx6H3/preview)

Po zatwierdzeniu system zapyta, którą wersję Plesk chcesz zainstalować – Plesk Obsidian lub Plesk Onyx. Wskaże też, która jest bardziej stabilna. Zazwyczaj do produkcji wybiera się wersję „stable”. Ponieważ domyślne opcje wskazują już na wersję stabilną, potwierdź to ponownie klawiszem "F".

Pytanie, czy Plesk może zbierać dane do ulepszania produktu, możesz odpowiedzieć "Y" (tak) lub "n" (nie).

Następnie system zapyta, jaki typ wybranej wersji Plesk chcesz zainstalować. Zazwyczaj wystarczy domyślny typ „Recommended”. Moduły, które nie zostaną zainstalowane teraz, ale będą potrzebne, można doinstalować później w panelu Plesk.

Kolejne pytanie, czy pakiety mogą być instalowane/aktualizowane, potwierdź klawiszem "F".

Teraz instalator rozpocznie instalację.

:::info
Sesja SSH nie może zostać zamknięta, dopóki instalator działa. W przeciwnym razie instalacja zostanie przerwana i serwer trzeba będzie przeinstalować, aby ponownie uruchomić instalator.
:::
Może się wydawać, że instalator „zawiesił się”, ale w 99% przypadków po kilku minutach kontynuuje działanie, bo musi jeszcze skonfigurować pakiety i ustawienia.

Instalacja jest zakończona, gdy pojawi się taki ekran:

![](https://screensaver01.zap-hosting.com/index.php/s/8K5p6RHapwYDfZY/preview)

</TabItem>
</Tabs>

## Otwórz instalator webowy

Po uruchomieniu instalatora instalacja odbywa się w przeglądarce. Stronę instalacyjną znajdziesz pod adresem https://IP:8447 lub https://Domena.xx:8447.

## Panel webowy Plesk

:::info
Przy pierwszym wejściu do panelu webowego może pojawić się komunikat: "This is not a secure connection". Trzeba go potwierdzić, wtedy strona się otworzy.
:::

Interfejs webowy jest dostępny pod https://IP:8443 lub https://Domena.xx:8443 serwera. Dane do logowania to root/admin oraz aktualne hasło root. Alternatywnie możesz użyć jednego z wyświetlanych adresów URL. Jeśli nie działają, możesz wygenerować nowe poleceniem ``plesk login``.

### Konfiguracja

Po pomyślnym logowaniu trzeba ustawić konto administratora. Wprowadź nazwę kontaktową, e-mail i hasło. Jeśli masz już licencję Plesk, możesz ją od razu wpisać. Alternatywnie możesz poprosić o 15-dniową licencję testową od Plesk. Na koniec zaakceptuj umowę użytkownika. 
Teraz możesz korzystać z Plesk.

### Ustaw język

Po instalacji panel Plesk jest po angielsku, ale możesz ustawić język niemiecki w Narzędzia i ustawienia ➡️ Wygląd Plesk ➡️ Języki. Tam wybierz "de-DE". Następnie kliknij "Ustaw jako domyślny", aby język był na stałe dla wszystkich.
Po wylogowaniu i ponownym zalogowaniu panel Plesk będzie po niemiecku.

![](https://screensaver01.zap-hosting.com/index.php/s/6Wo8Qz3oMXGzn3t/preview)

### Dodaj domenę

Aby dodać pierwszą domenę, kliknij niebieski przycisk "Dodaj domenę".

![](https://screensaver01.zap-hosting.com/index.php/s/2S4mgRPctffS452/preview)

Teraz wpisz swoją domenę. Musisz też zdefiniować IP oraz nazwę użytkownika i hasło do hostingu domeny. Jeśli subdomena "www" jest już wpisana w DNS domeny, możesz od razu wygenerować certyfikat SSL od Let's Encrypt. Opcję tę wybierz po wpisaniu adresu e-mail i potwierdź niebieskim przyciskiem "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/SLSBz5TRH2mDBB8/preview)


:::info
Domena musi wskazywać na IP hostingu. Jeśli domena jest u ZAP-Hosting, możesz ją łatwo przekierować na hosting przez EasyDNS. Jeśli jest zewnętrzna, musisz ustawić rekord A na IP oraz subdomeny "www" i "webmail" również na IP. Rekord MX powinien wskazywać na IP hostingu.

Zmiany w DNS mogą się propagować do 24 godzin.
:::

## Szyfrowanie SSL

Podczas rejestracji domeny/tworzenia hostingu certyfikat SSL od Let's Encrypt został już wygenerowany. Możesz go teraz wybrać w "Ustawienia hostingu" domeny. Potwierdź kliknięciem "Zastosuj".

:::info
Aby wymusić stałe przekierowanie na HTTPS (SSL) podczas odwiedzania strony, zaznacz opcję "Stałe, SEO-friendly przekierowanie 301 z HTTP na HTTPS".
:::

![](https://screensaver01.zap-hosting.com/index.php/s/HL4tcnTqJtX7be9/preview)

Po otwarciu domeny w przeglądarce zobaczysz, że jest szyfrowana.

![](https://screensaver01.zap-hosting.com/index.php/s/xcqwAQWK77X3yip/preview)

:::info
Instalacja i konfiguracja pierwszej domeny z szyfrowaniem jest teraz w pełni zakończona.
:::


## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować Plesk! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />