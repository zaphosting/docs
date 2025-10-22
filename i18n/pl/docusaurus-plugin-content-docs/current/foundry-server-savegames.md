---
id: foundry-server-savegames
title: "Foundry: Zarządzanie zapisami Foundry"
description: "Dowiedz się, jak bezpiecznie tworzyć kopie zapasowe i zarządzać zapisami Foundry lokalnie oraz na serwerze, aby zapewnić płynną kontynuację rozgrywki → Sprawdź teraz"
sidebar_label: Zarządzanie zapisami
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

W tym poradniku pokażemy, jak zarządzać zapisami Foundry na Twoim serwerze gier, w tym jak tworzyć kopie zapasowe lokalnych i serwerowych zapisów oraz jak je przesyłać na serwer.

<InlineVoucher />

## Przygotowanie

Aby uzyskać dostęp do plików serwera, potrzebujesz klienta FTP, takiego jak [WinSCP](https://winscp.net/eng/index.php) lub [FileZilla](https://filezilla-project.org/), które są open-source i darmowe do pobrania.

Musisz połączyć się z serwerem przez klienta FTP, używając danych logowania, które znajdziesz w **Narzędzia->Przeglądarka FTP** w panelu głównym Twojego serwera gier. Skorzystaj z naszego [poradnika Dostęp przez FTP](gameserver-ftpaccess.md), jeśli potrzebujesz pomocy przy połączeniu z serwerem.


## Kopia zapasowa zapisu

### Lokalny zapis

Lokalne zapisy to te, które utworzyłeś, hostując grę multiplayer lokalnie na swoim urządzeniu. Znajdziesz je w folderze Windows LocalLow AppData, dokładnie pod ścieżką:
```
../AppData/LocalLow/Channel 3 Entertainment/Foundry/save
```

:::tip
Możesz łatwo dostać się do tej ścieżki, naciskając jednocześnie `CTRL` + `R` i wpisując w oknie uruchamiania następującą ścieżkę: `%userprofile%/appdata/locallow/Channel 3 Entertainment/foundry/save`. Po prostu kliknij **OK**, a zostaniesz przeniesiony do folderu.

![](https://screensaver01.zap-hosting.com/index.php/s/E6rniERFyc5AdS9/preview)
:::

W tym miejscu zobaczysz wszystkie swoje lokalne zapisy.

![](https://screensaver01.zap-hosting.com/index.php/s/LGPj2xZNGeCJpjt/preview)

### Dostęp do zapisu przez FTP

Tworzenie kopii zapasowej zapisu z serwera jest proste. Po połączeniu się z serwerem gier przez klienta FTP, przejdź do następującej ścieżki:
```
../foundry/saves/save
```

W tym miejscu powinieneś zobaczyć foldery, z których każdy to osobny zapis. Kliknij prawym przyciskiem na folder i wybierz **Pobierz**, aby zapisać go lokalnie na swoim urządzeniu.

![](https://screensaver01.zap-hosting.com/index.php/s/X2f3Fo27GCyFe3m/preview)

### Automatyczna kopia zapasowa

Oferujemy również opcję automatycznego tworzenia kopii zapasowych zapisu (oraz pliku konfiguracyjnego) bezpośrednio przez nasz panel główny. Wystarczy, że wejdziesz do panelu głównego swojego serwera gier i przejdziesz do sekcji **Narzędzia->Kopie zapasowe**. Tam możesz ustawić różne opcje harmonogramu automatycznych kopii zapasowych dla swojego serwera. Udostępniamy 10 GB darmowej przestrzeni na kopie zapasowe, gdzie będą one przechowywane. Więcej informacji o kopiach zapasowych znajdziesz w naszym dedykowanym [poradniku Kopie zapasowe](gameserver-backups.md).

## Wgrywanie zapisu

Podobnie jak przy tworzeniu kopii, wgrywanie zapisu jest proste. Najpierw upewnij się, że połączyłeś się z serwerem gier przez klienta FTP. Gdy będziesz gotowy, przejdź do następującej ścieżki:
```
../foundry/saves/save
```

![](https://screensaver01.zap-hosting.com/index.php/s/CobaowD4JLPWte7/preview)

Po prostu przeciągnij i upuść dowolny ze swoich zapisów do tego folderu przez klienta FTP, a zostanie on przesłany na serwer.

:::tip
Warto skopiować nazwę folderu zapisu, który wgrałeś, ponieważ będzie Ci potrzebna, jeśli chcesz go aktywować w kolejnym kroku.
:::

## Aktywacja zapisu

Aby użyć konkretnego zapisu, musisz edytować plik konfiguracyjny. Istnieje kilka sposobów, my omówimy edycję przez panel główny, bo jest najprostsza. Jeśli chcesz poznać inne metody edycji pliku, sprawdź nasz [poradnik Konfiguracja serwera](foundry-configuration.md).

Po prostu przejdź do sekcji **Ustawienia** w panelu głównym swojego serwera gier i znajdź opcję **Savename**.

Zmień tę wartość na nazwę folderu zapisu, który wgrałeś w poprzednim kroku. Gdy skończysz, zapisz zmiany na dole, klikając zielony przycisk **Zapisz**, a następnie zrestartuj serwer.

<InlineVoucher />