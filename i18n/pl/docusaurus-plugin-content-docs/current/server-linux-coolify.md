---
id: server-linux-coolify
title: "Konfiguracja Coolify na serwerze Linux - Samodzielnie hostowane aplikacje w chmurze"
description: "Dowiedz się, jak zainstalować i skonfigurować Coolify, aby łatwo samodzielnie hostować własne aplikacje, bazy danych i usługi → Sprawdź teraz"
sidebar_label: Instalacja Coolify
services:
  - vserver-service-coolify
  - dedicated-service-coolify
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

[Coolify](https://coolify.io/) to open-source’owa, samodzielnie hostowana alternatywa dla Heroku i Vercel, która pozwala łatwo zarządzać serwerami, aplikacjami i bazami danych.

![img](https://screensaver01.zap-hosting.com/index.php/s/nrXeZsgjXn43sfw/preview)

Intuicyjny panel główny Coolify sprawia, że samodzielne hostowanie jest proste. Daje Ci pełną kontrolę nad infrastrukturą, automatyczne wdrożenia z GitHub i pomaga utrzymać niskie koszty chmury.

W tym poradniku przeprowadzimy Cię przez każdy krok konfiguracji, wstępnego ustawienia konta administratora oraz wszystkiego, co musisz wiedzieć.

<InlineVoucher />

## Zastosowania Coolify

Coolify sprawdzi się w wielu codziennych scenariuszach i jest idealne dla każdego, kto chce zautomatyzować wdrożenia aplikacji, hostować bazy danych lub uruchamiać background workery. Coolify jest świetne zarówno dla początkujących, jak i ekspertów.

Coolify oferuje wbudowane wsparcie dla wdrażania Static Sites, Node.js, Python, PHP, Rust oraz kontenerów Docker. Ma modne szablony jednym kliknięciem, takie jak WordPress, Ghost, Grafana, Appwrite, Nextcloud i bazy danych PostgreSQL. Automatycznie obsługuje certyfikaty SSL Let's Encrypt oraz routing reverse proxy przez Traefik.

## Przygotowanie

Choć Coolify jest lekkie w podstawie, zużycie zasobów może znacznie wzrosnąć w zależności od liczby wdrożonych aplikacji, budowanych kontenerów Docker i działających baz danych jednocześnie. Zalecamy następujące wymagania sprzętowe do hostowania Coolify na Twoim VPS/serwerze dedykowanym.

| Sprzęt    | Minimum     | Zalecane                 |
| --------- | ----------- | ------------------------ |
| CPU       | 2 rdzenie vCPU | 4 rdzenie vCPU          |
| RAM       | 2 GB        | 4 GB+                    |
| Miejsce na dysku | 30 GB       | 50 GB+                   |

<InlineServiceLink />

Przed instalacją Coolify musisz połączyć się z serwerem i upewnić się, że system operacyjny jest aktualny. Połącz się z serwerem przez SSH z uprawnieniami root. Mamy już poradnik o [pierwszym dostępie przez SSH](vserver-linux-ssh.md), jeśli potrzebujesz pomocy z tym krokiem.

:::tip[Uwierzytelnianie kluczem SSH]
**Gorąco polecamy** skonfigurowanie uwierzytelniania za pomocą klucza SSH zamiast hasła. Jak to zrobić, dowiesz się z naszego poradnika [Konfiguracja klucza SSH](vserver-linux-sshkey.md).
:::

## Instalacja

Po połączeniu się z serwerem, zaktualizuj pakiety systemowe i zainstaluj `curl`, który jest potrzebny do pobrania skryptu instalacyjnego Coolify:

```bash
sudo apt update && sudo apt upgrade -y && sudo apt install curl -y
```



### Przygotuj dane administratora

Coolify wymaga ścisłych zasad bezpieczeństwa dla konta administratora. Przed uruchomieniem skryptu instalacyjnego przygotuj dane użytkownika root zgodnie z poniższymi wymaganiami:

* **Nazwa użytkownika**
  * Minimum 3 znaki
  * Maksimum 255 znaków
  * Może zawierać tylko litery, cyfry, spacje, podkreślenia i myślniki
* **Email**
  * Musi być prawidłowym adresem email
  * Musi mieć poprawny rekord DNS
  * Maksymalnie 255 znaków
* **Hasło**
  * Minimum 8 znaków
  * Musi zawierać duże i małe litery
  * Musi zawierać co najmniej jedną cyfrę
  * Musi zawierać co najmniej jeden znak specjalny
  * Nie może być popularnym ani wyciekłym hasłem



### Uruchom skrypt instalacyjny

Coolify oferuje szybki, zautomatyzowany skrypt instalacyjny. Aby zabezpieczyć instalację, użyjemy zmiennych środowiskowych do zdefiniowania konta administratora root. Zapobiega to nieautoryzowanemu dostępowi podczas konfiguracji.

Uruchom poniższe polecenie, pamiętając, aby podmienić nazwę użytkownika, email i hasło na swoje bezpieczne dane:

```bash
env ROOT_USERNAME=zaphosting ROOT_USER_EMAIL=info@zap-hosting.com ROOT_USER_PASSWORD=zaphosting bash -c 'curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash'
```
:::note[Open Source]
Kod źródłowy skryptu instalacyjnego znajdziesz w [Oficjalnym repozytorium Coolify](https://github.com/coollabsio/coolify/blob/v4.x/scripts/install.sh)
:::

Skrypt automatycznie zainstaluje Dockera, skonfiguruje potrzebne sieci i ustawi kontenery Coolify. Proces może potrwać kilka minut, w zależności od sprzętu serwera.

![img](https://screensaver01.zap-hosting.com/index.php/s/Zx5DXzEH2MmrkrX/preview)



### Dostęp do Coolify

Po zakończeniu instalacji następnym krokiem jest dostęp do panelu głównego przez przeglądarkę. Wpisz adres IP swojego serwera wraz z portem 8000: `http://[twoj_adres_ip]:8000`

Ponieważ podałeś już dane logowania podczas instalacji, zobaczysz od razu ekran logowania, a nie kreatora konfiguracji.

Wpisz email i hasło, których użyłeś w poleceniu, aby zalogować się do panelu.



### Konfiguracja rekordów DNS

Po zalogowaniu się do panelu Coolify, pierwszą rzeczą, którą powinieneś zrobić, jest podpięcie własnej domeny. Dostęp do Coolify przez adres IP (`http://[twoj_adres_ip]:8000`) jest niebezpieczny.

Podpięcie domeny pozwala Coolify automatycznie generować darmowe certyfikaty SSL dla panelu i wszystkich przyszłych aplikacji.

Wejdź do panelu zarządzania DNS u swojego dostawcy domeny i dodaj dwa rekordy `A` wskazujące na Twój serwer. Jeśli masz domenę zarejestrowaną w ZAP-Hosting, możesz skorzystać z naszego poradnika [Rekordy domeny](domain-records.md), aby łatwo dodać te wpisy:

| Nazwa / Host | Typ | Wartość            | TTL           |
| ------------ | --- | ------------------ | ------------- |
| `@`          | A   | `[twoj_adres_ip]`  | Auto / Najniższy |
| `*`          | A   | `[twoj_adres_ip]`  | Auto / Najniższy |

:::info[Routowanie DNS]
*   Rekord `@` pozwala Coolify korzystać z głównej domeny
*   Rekord `*` (wildcard) umożliwia automatyczne kierowanie dowolnej subdomeny (np. `api.[twoja_domena]`) bez konieczności dodawania rekordów DNS dla każdego projektu.
:::



### Konfiguracja domeny instancji

Aby zabezpieczyć instancję Coolify certyfikatem SSL, przypisz do niej domenę. Przejdź do **Ustawienia** w lewym menu i znajdź pole **Instance Domain**. Wpisz tam swoją domenę wraz z prefiksem `https://` (np. `https://coolify.[twoja_domena]`). Kliknij **Zapisz**, aby zakończyć ten krok.

![img](https://screensaver01.zap-hosting.com/index.php/s/jYW63sF9k5sZez3/preview)



## Wdrożenie pierwszej aplikacji

Po tym możesz przejść do zakładki **Projekty** i zacząć wdrażać swoją pierwszą aplikację!

Kliknij **+ Dodaj zasób**, aby dodać publiczne repozytorium lub plik Docker Compose albo wybierz jeden z wielu prekonfigurowanych serwisów z biblioteki szablonów jednym kliknięciem. Twoja instalacja Coolify jest gotowa do działania!

![img](https://screensaver01.zap-hosting.com/index.php/s/nEf9XBDrfypijE7/preview)



## Podsumowanie i dodatkowe materiały

Gratulacje! Udało Ci się zainstalować Coolify na serwerze i możesz od razu zacząć wdrażać swoje projekty. Polecamy też rzucić okiem na poniższe materiały, które mogą pomóc i wesprzeć Cię podczas konfiguracji serwera.

- [coolify.io](https://coolify.io/) - Oficjalna strona
- [coolify.io/docs](https://coolify.io/docs/) - Dokumentacja Coolify

Masz pytania, które nie zostały tu poruszone? Jeśli potrzebujesz pomocy lub wsparcia, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />