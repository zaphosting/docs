---
id: dedicated-linux-bitwarden
title: "Serwer dedykowany: Instalacja Bitwarden na Linux"
description: "Dowiedz się, jak bezpiecznie zarządzać hasłami z Bitwarden, korzystając z szyfrowania end-to-end dla chmury lub własnego hostingu → Sprawdź teraz"
sidebar_label: Instalacja Bitwarden
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Bitwarden to open source menedżer haseł i kluczy dostępu, który wykorzystuje zero knowledge i szyfrowanie end-to-end, aby chronić Twoje dane. Możesz korzystać z niego jako usługi w chmurze lub hostować samodzielnie, z funkcjami generowania, przechowywania i automatycznego wypełniania silnych danych logowania.

![img](https://screensaver01.zap-hosting.com/index.php/s/RwKmstAct5kNQwB/preview)

Myślisz o samodzielnym hostingu tej usługi? Przeprowadzimy Cię przez każdy krok konfiguracji i ustawień oraz podpowiemy, na co zwrócić uwagę.



## Wymagania wstępne

Przed instalacją **Bitwarden** upewnij się, że Twoje środowisko hostingowe spełnia poniższe wymagania, aby instalacja przebiegła bezproblemowo, a wydajność była optymalna.

| Sprzęt    | Minimum    | Rekomendacje ZAP-Hosting |
| --------- | ----------| ------------------------ |
| CPU       | 1 rdzeń CPU | 4 rdzenie CPU           |
| RAM       | 2 GB       | 4 GB                    |
| Miejsce na dysku | 12 GB | 25 GB                   |

Oprogramowanie wymaga zainstalowania wszystkich niezbędnych zależności oraz działania na wspieranym systemie operacyjnym. Upewnij się, że Twój serwer spełnia poniższe wymagania przed rozpoczęciem instalacji:

**Zależności:** `Docker (Engine 26+ i Compose)`

**System operacyjny:** Najnowsza wersja Ubuntu/Debian wspierająca Docker 26+

Sprawdź, czy wszystkie zależności są zainstalowane, a system operacyjny jest aktualny, aby uniknąć problemów z kompatybilnością podczas instalacji Bitwarden.



## Przygotowanie

Przed konfiguracją **Bitwarden** musisz przygotować swój system. Obejmuje to aktualizację systemu operacyjnego do najnowszej wersji oraz instalację wszystkich wymaganych zależności. To zapewni stabilne środowisko i pomoże uniknąć problemów podczas lub po instalacji.


### Aktualizacja systemu
Aby mieć pewność, że Twój system działa na najnowszym oprogramowaniu i ma aktualizacje bezpieczeństwa, zawsze zacznij od aktualizacji systemu. Wykonaj polecenie:

```
sudo apt update && sudo apt upgrade -y
```
To zapewni, że system ma najnowsze poprawki bezpieczeństwa i wersje oprogramowania przed dalszymi krokami.

### Instalacja zależności
Po zakończeniu aktualizacji możesz przejść do instalacji zależności. Bitwarden będzie uruchamiany na Twoim serwerze w kontenerach Docker, więc najpierw musisz zainstalować Dockera. Wykonaj polecenia:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Pełny poradnik instalacji i korzystania z Dockera znajdziesz w naszym [poradniku Docker](dedicated-linux-docker.md).



### Utwórz użytkownika i katalog

Zalecamy skonfigurowanie serwera Linux z dedykowanym kontem serwisowym `bitwarden`, z którego będzie uruchamiany Bitwarden. Dzięki temu instancja Bitwarden będzie odizolowana od innych aplikacji na serwerze.

Utwórz użytkownika bitwarden i ustaw dla niego silne, unikalne hasło:

```
sudo adduser bitwarden
sudo passwd bitwarden
```

Utwórz grupę docker, jeśli jeszcze nie istnieje, i dodaj użytkownika bitwarden do grupy docker:

```
sudo groupadd docker
sudo usermod -aG docker bitwarden
```

Utwórz katalog roboczy, ustaw uprawnienia i przypisz właściciela bitwarden:

```
sudo mkdir /opt/bitwarden
sudo chmod -R 700 /opt/bitwarden
sudo chown -R bitwarden:bitwarden /opt/bitwarden
```



### Konfiguracja domeny

Domyślnie Bitwarden działa na hoście na portach 80 (HTTP) i 443 (HTTPS). Skonfiguruj domenę z rekordami DNS wskazującymi na hosta, np. server.example.com, szczególnie jeśli serwer ma być dostępny w internecie. Unikaj umieszczania „bitwarden” w nazwie hosta, aby nie ujawniać roli serwera lub używanego oprogramowania.




## Instalacja
Gdy spełnisz wszystkie wymagania i przygotowania, możesz przejść do instalacji Bitwarden.

Pobierz skrypt instalacyjny Bitwarden na swój serwer i uruchom go. W katalogu, w którym znajduje się `bitwarden.sh`, zostanie utworzony katalog `./bwdata`.

```
curl -Lso bitwarden.sh "https://func.bitwarden.com/api/dl/?app=self-host&platform=linux" && chmod 700 bitwarden.sh
./bitwarden.sh install
```

W instalatorze najpierw wpisujesz nazwę domeny swojej instancji Bitwarden, zwykle skonfigurowany rekord DNS. Następnie wybierasz, czy Let’s Encrypt ma wygenerować darmowy, zaufany certyfikat SSL. Jeśli tak, podajesz adres e-mail do powiadomień o wygaśnięciu certyfikatu. Jeśli nie, pojawią się pytania o certyfikat.

Wprowadź swój Installation ID i Installation Key, które pobierzesz na [Bitwarden](https://bitwarden.com/host). Następnie wybierz region US lub EU, co ma znaczenie tylko, jeśli łączysz self-host z płatną subskrypcją.

Jeśli nie korzystasz z Let’s Encrypt, możesz użyć istniejącego certyfikatu, umieszczając pliki w `./bwdata/ssl/your.domain` i określając, czy jest zaufany. Alternatywnie możesz wygenerować certyfikat samopodpisany, co zalecamy tylko do testów. Jeśli nie wybierzesz certyfikatu, musisz postawić proxy HTTPS przed instalacją, inaczej Bitwarden nie będzie działać.



## Konfiguracja

Po instalacji dokończ podstawową konfigurację, edytując dwa pliki. Najpierw zmodyfikuj plik środowiskowy `./bwdata/env/global.override.env`. Ustaw tam dane serwera SMTP, takie jak host, port, SSL, nazwa użytkownika i hasło, aby Bitwarden mógł wysyłać maile weryfikacyjne i zaproszenia do organizacji. Jeśli potrzebujesz dostępu do Portalu Administratora Systemu, dodaj adres e-mail administratora do `adminSettings__admins`.

```
...
globalSettings__mail__smtp__host=<placeholder>
globalSettings__mail__smtp__port=<placeholder>
globalSettings__mail__smtp__ssl=<placeholder>
globalSettings__mail__smtp__username=<placeholder>
globalSettings__mail__smtp__password=<placeholder>
...
adminSettings__admins=
...
```

Sprawdź konfigurację SMTP poleceniem `./bitwarden.sh checksmtp`. Poprawna konfiguracja wyświetli sukces; w przeciwnym razie zobaczysz komunikaty o brakującym OpenSSL lub błędnych wartościach. Zastosuj zmiany poleceniem `./bitwarden.sh restart`.

Następnie przejrzyj parametry instalacji w `./bwdata/config.yml`. Ten plik kontroluje generowane zasoby i trzeba go dostosować w specjalnych środowiskach, np. przy pracy za proxy lub użyciu niestandardowych portów. Zmiany zastosuj poleceniem `./bitwarden.sh rebuild`.

Na koniec uruchom instancję poleceniem `./bitwarden.sh start`. Pierwsze uruchomienie może potrwać, bo Docker pobiera obrazy. Sprawdź stan kontenerów poleceniem `docker ps`. Potem otwórz web vault pod swoją domeną i zarejestruj konto, jeśli trzeba. Weryfikacja mailowa wymaga poprawnej konfiguracji SMTP.

## Podsumowanie i dodatkowe zasoby

Gratulacje! Właśnie zainstalowałeś i skonfigurowałeś Bitwarden na swoim serwerze dedykowanym. Polecamy też zajrzeć do poniższych źródeł, które mogą pomóc Ci w dalszej konfiguracji serwera:

- [bitwarden.com](https://bitwarden.com/) - Oficjalna strona
- https://bitwarden.com/help/ - Centrum pomocy Bitwarden (dokumentacja)

Masz pytania, których tu nie ma? Jeśli potrzebujesz wsparcia lub pomocy, śmiało kontaktuj się z naszym zespołem supportu, który jest dostępny codziennie, by Ci pomóc! 🙂