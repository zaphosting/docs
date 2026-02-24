---
id: dedicated-windows-ftpserver
title: "Konfiguracja FTP na serwerze Windows - Hostuj bezpieczną usługę transferu plików"
description: "Dowiedz się, jak skonfigurować i zarządzać serwerem FTP FileZilla na Windows, aby bezpiecznie przesyłać pliki i kontrolować dostęp użytkowników → Sprawdź teraz"
sidebar_label: Instalacja FTP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

**FTP (File Transfer Protocol)** to protokół sieciowy służący do przesyłania plików przez sieć TCP/IP. Protokół został stworzony, aby umożliwić łatwą wymianę plików między systemami.

Dzięki **FileZilla Server** możesz postawić taki serwer FTP na systemie Windows. FileZilla Server jest prosty w instalacji i konfiguracji, oferując wiele funkcji, takich jak tworzenie kont użytkowników, zarządzanie prawami dostępu oraz transfer plików.



## Przygotowanie

### Pobieranie

Do uruchomienia serwera FTP potrzebne jest odpowiednie oprogramowanie. Jako rozwiązanie dla systemu Windows możesz użyć serwera FileZilla. Opcję pobrania znajdziesz tutaj: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### Instalacja

Po pobraniu pliku instalacyjnego, uruchom go. Kliknij na wcześniej pobrany plik. Powinno pojawić się takie okno: ![](https://screensaver01.zap-hosting.com/index.php/s/a2DEpaR5jD28X23/preview)



Możesz tam wybrać pakiety do instalacji. Wystarczy jednak, że zostawisz domyślnie wybrane pakiety i klikniesz **Next**, a następnie wybierzesz ścieżkę instalacji:

![](https://screensaver01.zap-hosting.com/index.php/s/cN7K9Cte9tXFrF2/preview)

W tym przykładzie FileZilla Server zostanie zainstalowany w **C:\Program Files (x86)\FileZilla Server**. Możesz jednak wybrać własną ścieżkę. Po wyborze ścieżki musisz określić, w jakiej formie serwer FTP ma być zainstalowany i uruchamiany. Możesz też ustawić port oraz hasło administratora.



![](https://screensaver01.zap-hosting.com/index.php/s/WopFXcW3teFAyJK/preview)

Następnie kliknij **Next**, a w kolejnym kroku na koniec kliknij **Install**, aby rozpocząć instalację. Teraz otworzy się panel administracyjny serwera FTP FileZilla. Kliknij przycisk **Connect to FileZilla FTP Server**.

Pojawi się okno z polami Host, Port i Password. Możesz zostawić pierwsze dwa pola bez zmian i wpisać ustalone wcześniej hasło administratora serwera FTP. Po tym kliknij **Ok**, aby nawiązać połączenie.



## Konfiguracja

### Tworzenie użytkownika

Aby połączyć się z serwerem przez FTP, musisz utworzyć użytkownika. 
Kliknij w menu na **Server**, a następnie na **Configure**.

![](https://screensaver01.zap-hosting.com/index.php/s/C5WLC8Lp8CjTjQg/preview)

W menu Users możesz dodać nowego użytkownika, klikając po prostu **Add**:

![](https://screensaver01.zap-hosting.com/index.php/s/dbCS5yJfwqry8Dq/preview)

W tym przykładzie nazwa użytkownika to **YourUserName**. Oczywiście możesz wybrać własną nazwę.



### Hasło i uprawnienia

Po utworzeniu użytkownika musisz skonfigurować dostęp i uprawnienia. Aktywuj użytkownika i ustaw opcje hasła w zakładce **General** w sekcji **Credentials**. Zdecydowanie zalecamy ustawienie hasła dla bezpieczeństwa. Wybierz **Require a password to log in** i wpisz swoje hasło.

![](https://screensaver01.zap-hosting.com/index.php/s/z78wpcFbYEAJYeB/preview)

Aby użytkownik miał odpowiednie uprawnienia, musisz określić, do których katalogów ma dostęp, klikając **Add** przy mount points. Musisz podać ścieżkę wirtualną i natywną. W naszym przykładzie definiujemy, że dysk C jest dostępny pod \.

![](https://screensaver01.zap-hosting.com/index.php/s/iqQrjGByHpkBcJF/preview)

Po prawej znajdziesz opcję **Permissions**, gdzie ustawisz prawa dostępu do wskazanej ścieżki. Jeśli chcesz, aby użytkownik mógł czytać i edytować dane, zalecamy ustawienie **Read+Write**.

::: danger
Ze względów bezpieczeństwa udostępniaj użytkownikowi dostęp tylko do wybranych folderów.
:::

Zmiany zatwierdź klikając **Apply**.



## Wyjątki w zaporze Windows

Aby umożliwić połączenie z serwerem FTP, musisz zezwolić na korzystanie z serwera FTP w zaporze Windows. Otwórz ustawienia zapory w **Panel sterowania\System i zabezpieczenia\Zapora systemu Windows Defender** i kliknij **Zezwól aplikacji lub funkcji na dostęp przez Zaporę systemu Windows Defender**.
W kolejnym oknie wybierz aplikację, którą chcesz dopuścić:

![](https://screensaver01.zap-hosting.com/index.php/s/xHwQzCKokHTn424/preview)

W tym przykładzie ścieżka to **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/Laz3HFb7GrLBY9w/preview)

Na koniec kliknij **OK**, aby zamknąć okno. Połączenie z Twoim serwerem FTP jest teraz możliwe.



## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś serwer FTP. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, aby Ci pomóc! 🙂