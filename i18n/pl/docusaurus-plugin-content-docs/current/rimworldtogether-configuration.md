---
id: rimworldtogether-configuration
title: "RimWorld Together: Konfiguracja Serwera"
description: "Poznaj ustawienia serwera RimWorld Together, aby dostosować rozgrywkę i zarządzać dostępem dla spersonalizowanego multiplayera → Dowiedz się więcej już teraz"
sidebar_label: Konfiguracja Serwera
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Serwery RimWorld Together oferują szeroki zakres parametrów konfiguracyjnych, które możesz dostosować do swoich potrzeb. W tym poradniku przeanalizujemy wszystkie dostępne obecnie opcje konfiguracji i wyjaśnimy je szczegółowo.

<InlineVoucher />

## Dostęp do Pliku Konfiguracyjnego

Na początek musisz uzyskać dostęp do pliku konfiguracyjnego, aby móc edytować parametry. Obecnie jedynym sposobem na edycję tych plików jest dostęp do serwera przez FTP. Jeśli nie znasz FTP, polecamy zapoznać się z poradnikiem [Dostęp przez FTP](gameserver-ftpaccess.md).

:::note
Serwer musi być zatrzymany przed edycją jakichkolwiek konfiguracji, edytowanie pliku i ponowne uruchomienie serwera spowoduje cofnięcie zmian.
:::

Mając gotowego klienta FTP, przejdź do następującego katalogu:
```
../rimworld-together/Core
```

W tym folderze znajdziesz różnorodne pliki konfiguracyjne `.json` dla swojego serwera RimWorld Together.

![](https://screensaver01.zap-hosting.com/index.php/s/76g3TcY9TCLyFsH/preview)

## Opcje Konfiguracji Serwera

W poniższych sekcjach znajdziesz informacje, jak dostosować kilka popularnych i często używanych opcji konfiguracyjnych dla swojego serwera RimWorld Together. Więcej szczegółów o każdym pliku znajdziesz w [oficjalnym poradniku RimWorld Together](https://rimworldtogether.github.io/Guide/selfhosting/getting-started.html#core), który omawia opcje konfiguracji.

:::tip
Nie zalecamy zmiany ustawień Portu ani Adresu IP w pliku **ServerConfig.json**, ponieważ są one automatycznie konfigurowane przez serwer gier. Zmiana tych wartości może spowodować problemy z działaniem serwera!
:::

#### Biała Lista Serwera

Włączanie lub wyłączanie białej listy serwera jest proste. Otwórz plik konfiguracyjny **Whitelist.json** i ustaw parametr `UseWhitelist` na true.

Następnie dostosuj parametr `WhitelistedUsers`, dodając nazwy użytkowników z gry, których chcesz dodać do listy. Każdy, kto nie będzie na tej liście, nie będzie mógł się połączyć.

#### Ustawienia Rozgrywki

Możesz dostosować wiele parametrów trudności dla swojego serwera RimWorld Together za pomocą pliku **DifficultyValues.json**.

Zmiany ustawień zapisu gry są również możliwe przez plik **WorldConfig.json**. Zalecamy, aby nie edytować go podczas zaawansowanej rozgrywki, ponieważ może to zepsuć doświadczenie.

<InlineVoucher />