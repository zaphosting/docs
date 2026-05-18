---
id: server-linux-swush
title: "Konfiguracja Swush na serwerze Linux – Stwórz własną prywatną skrytkę na media i pliki"
description: "Dowiedz się, jak zainstalować i uruchomić Swush na swoim Linux VPS, aby stworzyć samodzielnie hostowaną platformę do zarządzania mediami, plikami i treściami → Sprawdź teraz"
sidebar_label: Instalacja Swush
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Wprowadzenie

[Swush](https://github.com/imthatdev/swush) to samodzielnie hostowana cyfrowa skrytka i platforma do zarządzania treściami, zaprojektowana, by pomóc Ci zorganizować pliki, media i dane osobiste w jednym, centralnym panelu głównym. Aplikacja łączy przechowywanie plików, narzędzia do udostępniania, streaming mediów oraz funkcje zarządzania wiedzą w jednym, webowym interfejsie.

Dzięki Swush możesz przesyłać i zarządzać plikami, organizować zawartość za pomocą folderów i tagów, generować linki do udostępniania, a nawet streamować media bezpośrednio z serwera. Ponieważ jest to w pełni samodzielnie hostowane rozwiązanie, masz pełną kontrolę nad swoimi danymi i infrastrukturą, co czyni je świetną alternatywą dla chmurowych platform do przechowywania.

Aplikacja została zbudowana z użyciem nowoczesnych technologii takich jak Next.js, TypeScript i TailwindCSS, oferując szybki i responsywny interfejs, a jednocześnie pozostając łatwą do wdrożenia na VPS lub serwerze dedykowanym. Ten poradnik przeprowadzi Cię przez instalację i uruchomienie Swush na serwerze Linux.

![img](https://screensaver01.zap-hosting.com/index.php/s/tRRZ8MM6iWfF3kM/preview)

<InlineVoucher />

## Zastosowania Swush

Swush został zaprojektowany jako centralny hub dla Twoich cyfrowych treści i workflowów. Możesz go używać w wielu różnych scenariuszach:

- Zarządzanie i organizacja plików, obrazów i dokumentów
- Tworzenie osobistego serwera mediów do streamingu przesłanych treści
- Generowanie bezpiecznych linków do udostępniania plików i mediów
- Organizacja wiedzy, takiej jak notatki, zakładki czy fragmenty tekstu
- Hostowanie prywatnego panelu głównego dla osobistych workflowów
- Automatyzacja przesyłania plików i integracji przez API Swush

Platforma łączy wiele narzędzi w jednym środowisku, pomagając ograniczyć zależność od rozproszonych usług chmurowych.

## Wymagania wstępne

Przed instalacją Swush upewnij się, że Twój serwer spełnia następujące wymagania.

| Sprzęt | Minimum | Zalecane |
|--------|---------|----------|
| CPU | 1 rdzeń | 4 rdzenie |
| RAM | 2 GB | 4 GB |
| Miejsce na dysku | 20 GB | 50 GB |

Wymagane oprogramowanie:

- środowisko uruchomieniowe Bun
- baza danych PostgreSQL
- Git

Upewnij się, że system jest zaktualizowany przed rozpoczęciem instalacji.

<InlineServiceLink />

## Przygotowanie

Najpierw stwórz katalog na instalację Swush.
```
mkdir swush
cd swush
```
Następnie sklonuj repozytorium Swush.
```
git clone https://github.com/imthatdev/swush.git .
```
Zainstaluj zależności projektu za pomocą Bun.
```
bun install
```
## Konfiguracja

Przed uruchomieniem aplikacji utwórz plik konfiguracyjny środowiska.
```
cp example.env .env
```
Otwórz plik `.env` i skonfiguruj wymagane wartości:
```
APP_NAME=Swush
APP_URL=http://twoj-adres-ip-serwera:3000
SUPPORT_NAME=Support
SUPPORT_EMAIL=support@example.com
DATABASE_URL=postgresql://username:password@localhost:5432/swush
```
Możesz także skonfigurować dodatkowe ustawienia, takie jak:

- backend przechowywania (lokalny lub S3)
- katalog do uploadów
- ustawienia SMTP do powiadomień e-mail
- sekrety uwierzytelniania

Swush obsługuje zarówno **lokalne przechowywanie, jak i systemy kompatybilne z S3**, co pozwala skalować przestrzeń na pliki w zależności od środowiska.

## Instalacja

Po skonfigurowaniu zmiennych środowiskowych zainicjuj schemat bazy danych.
```
bun run push:db
```
Następnie zbuduj aplikację.
```
bun run build
```
Uruchom serwer Swush.
```
bun start
```
Aplikacja uruchomi się i będzie nasłuchiwać na porcie **3000**.

## Dostęp do Swush

Gdy serwer działa, otwórz przeglądarkę i przejdź pod adres:
```
http://TWOJ_ADRES_IP_SERWERA:3000
```
Zamień `TWOJ_ADRES_IP_SERWERA` na adres IP Twojego VPS-a lub serwera dedykowanego. Przy pierwszym dostępie do panelu głównego przejdziesz przez kreatora konfiguracji, gdzie stworzysz pierwsze konto i ustawisz parametry przechowywania.

Po zakończeniu konfiguracji możesz zacząć przesyłać pliki, organizować media i zarządzać swoimi cyfrowymi zasobami z poziomu panelu Swush.

## Podsumowanie

Gratulacje! Pomyślnie zainstalowałeś **Swush** na swoim serwerze Linux. Twoja samodzielnie hostowana cyfrowa skrytka jest gotowa do zarządzania plikami, udostępniania mediów i organizowania osobistych treści z jednego, centralnego panelu głównego.

Hostując Swush samodzielnie, zyskujesz pełną kontrolę nad swoimi danymi, korzystając jednocześnie z nowoczesnej, nastawionej na prywatność platformy do zarządzania treściami.

W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />