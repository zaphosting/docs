---
id: fivem-esx-changejobgarages
title: "FiveM: Garaże z pracą - Dodawanie samochodów"
description: "Dowiedz się, jak dostosować i rozszerzyć garaże z pracą o dodatkowe samochody, aby wzbogacić swoją rozgrywkę → Sprawdź teraz"
sidebar_label: Dodaj samochody do garażu pracy
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Chcesz zmienić lub rozszerzyć dostępne samochody w garażach pracy? Poniżej wyjaśnimy, jak to zrobić i jakie kroki musisz wykonać!

<InlineVoucher />

## Konfiguracja

Dodatkowe samochody dodaje się do garaży pracy przez FTP. Połącz się z serwerem gier przez FTP. Jeśli jeszcze nie wiesz, jak korzystać z FTP, zerknij na nasz [poradnik dostępu FTP](gameserver-ftpaccess.md).

Po połączeniu się przez FTP przejdź do folderu zasobów ESX i otwórz folder esx_addons. Struktura folderów powinna wyglądać tak: `/gXXXXXX/fivem/ESXLegacy_XXXXXX.base/resources/[esx_addons]`

Teraz wybierz na przykład pracę Ambulance lub Police i otwórz plik konfiguracyjny `config.lua` z zasobów.

![img](https://screensaver01.zap-hosting.com/index.php/s/xQYbzYs2xAkb5fp/preview)

W pliku konfiguracyjnym należy dostosować sekcję `Config.AuthorizedVehicles`. Możesz ją znaleźć za pomocą wyszukiwarki, a następnie zmodyfikować lub rozszerzyć według własnych potrzeb:

![img](https://screensaver01.zap-hosting.com/index.php/s/eyK7q78aewrpJtx/preview)

:::warning 
Upewnij się, że po dodaniu nowych pojazdów na końcu poprzedniej linii jest przecinek, inaczej mogą wystąpić problemy.
:::

## Podsumowanie

Jeśli wykonałeś wszystkie kroki, powinieneś teraz mieć pomyślnie dostosowany lub rozszerzony garaż pracy. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />