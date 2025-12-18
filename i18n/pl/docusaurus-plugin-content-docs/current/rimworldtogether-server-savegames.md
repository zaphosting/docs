---
id: rimworldtogether-server-savegames
title: "Rimworld Together: Zarządzanie zapisami gry Rimworld Together"
description: "Dowiedz się, jak zarządzać i tworzyć kopie zapasowe zapisów gry Rimworld Together, aby cieszyć się płynną rozgrywką multiplayer → Sprawdź teraz"
sidebar_label: Zarządzanie zapisami
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W tym poradniku pokażemy, jak zarządzać zapisami gry Rimworld Together na Twoim serwerze gier, w tym jak tworzyć kopie zapasowe lokalnych i serwerowych zapisów oraz jak je przesyłać na serwer.

:::info
Pamiętaj, że przeniesienie istniejącej gry vanilla na serwer Rimworld Together z modami prawdopodobnie spowoduje problemy z rozgrywką. Szczególnie dotyczy to przenoszenia światów między serwerami z różnymi modami.
:::

<InlineVoucher />

## Przygotowanie

Aby uzyskać dostęp do plików serwera, potrzebujesz klienta FTP, takiego jak [WinSCP](https://winscp.net/eng/index.php) lub [FileZilla](https://filezilla-project.org/), które są open-source i darmowe.

Musisz połączyć się z serwerem przez klienta FTP, używając danych logowania dostępnych w **Narzędzia->Przeglądarka FTP** w panelu administracyjnym Twojego serwera gier. Skorzystaj z naszego [poradnika Dostęp przez FTP](gameserver-ftpaccess.md), aby uzyskać więcej wskazówek, jak połączyć się z serwerem.


## Tworzenie kopii zapasowej zapisu gry

### Lokalny zapis gry

Lokalne zapisy to te, które stworzyłeś, hostując grę multiplayer lokalnie na swoim urządzeniu. Znajdziesz je w folderze Windows LocalLow AppData, dokładnie pod ścieżką:
```
../AppData/LocalLow/Ludeon Studios/RimWorld by Ludeon Studios/Saves
```

:::tip
Możesz łatwo dostać się do tego folderu, naciskając jednocześnie `CTRL` + `R` i wpisując w oknie uruchamiania następującą ścieżkę: `%userprofile%/appdata/locallow/Ludeon Studios/RimWorld by Ludeon Studios/Saves`. Po prostu kliknij **OK**, a zostaniesz przeniesiony do folderu.

![](https://screensaver01.zap-hosting.com/index.php/s/LZ6Ljo2DfBoH45s/preview)
:::

W tym miejscu zobaczysz wszystkie swoje lokalne zapisy gry.

### Dostęp do zapisu gry przez FTP

Tworzenie kopii zapasowej zapisu z serwera jest proste. Po połączeniu się z serwerem gier przez klienta FTP, przejdź do następującej ścieżki:
```
../rimworld-together/Saves
```

W tym folderze powinieneś zobaczyć katalogi, z których każdy to osobny zapis gry. Kliknij prawym przyciskiem na folder i wybierz **Pobierz**, aby zapisać go lokalnie na swoim urządzeniu.

![](https://screensaver01.zap-hosting.com/index.php/s/yjYXnDSHs7g5eCH/preview)

### Automatyczna kopia zapasowa

Oferujemy też opcję automatycznego tworzenia kopii zapasowej zapisu gry (oraz pliku konfiguracyjnego) bezpośrednio przez panel administracyjny. Wystarczy, że wejdziesz do panelu swojego serwera gier i przejdziesz do sekcji **Narzędzia->Kopie zapasowe**. Tam możesz ustawić różne opcje harmonogramu automatycznych backupów. Udostępniamy Ci 10 GB darmowej przestrzeni na kopie zapasowe, gdzie będą one przechowywane. Więcej informacji o backupach znajdziesz w naszym dedykowanym [poradniku Kopie zapasowe](gameserver-backups.md).

## Wgrywanie zapisu gry

Podobnie jak przy tworzeniu kopii zapasowej, wgrywanie zapisu jest proste. Najpierw połącz się z serwerem gier przez klienta FTP. Następnie przejdź do ścieżki:
```
../rimworld-together/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/s4zakSdKniMdGmT/preview)

Po prostu przeciągnij i upuść dowolny ze swoich zapisów do tego folderu przez klienta FTP, a zostanie on przesłany na serwer.

:::info
Jak wspomniano na początku poradnika, przenoszenie światów między serwerami z różnymi modami może powodować problemy z rozgrywką.
:::

<InlineVoucher />