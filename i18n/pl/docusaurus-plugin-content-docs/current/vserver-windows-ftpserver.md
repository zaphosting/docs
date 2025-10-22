---
id: vserver-windows-ftpserver
title: "VPS: Instalacja FTP"
description: "Dowiedz się, jak skonfigurować i zarządzać serwerem FTP FileZilla na Windows, aby bezpiecznie przesyłać pliki i kontrolować dostęp użytkowników → Sprawdź teraz"
sidebar_label: Instalacja FTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

**FTP (File Transfer Protocol)** to protokół sieciowy służący do przesyłania plików przez sieć TCP/IP. Protokół został stworzony, aby umożliwić łatwą wymianę plików między systemami.

Dzięki **FileZilla Server** możesz postawić taki serwer FTP na systemie Windows. FileZilla Server jest łatwy w instalacji i konfiguracji, oferując wiele funkcji, takich jak tworzenie kont użytkowników, zarządzanie prawami dostępu oraz transfer plików.
<InlineVoucher />


## Przygotowanie

### Pobieranie

Do postawienia serwera FTP potrzebne jest odpowiednie oprogramowanie. Jako rozwiązanie dla systemu Windows możesz użyć serwera FileZilla. Opcję pobrania znajdziesz tutaj: [FileZilla server](https://filezilla-project.org/download.php?type=server).



### Instalacja

Po pobraniu pliku instalacyjnego, uruchom go. Kliknij na wcześniej pobrany plik. Powinno pojawić się takie okno: ![](https://screensaver01.zap-hosting.com/index.php/s/Qi97fYbyoKDdsi3/preview)



Możesz tam wybrać pakiety do instalacji. Wystarczy jednak, że zostawisz domyślnie wybrane pakiety i klikniesz **Next**, a następnie wybierzesz ścieżkę instalacji:

![](https://screensaver01.zap-hosting.com/index.php/s/fsMiKt9Zjas4Rme/preview)

W tym przykładzie FileZilla Server zostanie zainstalowany w **C:\Program Files (x86)\FileZilla Server**. Możesz jednak wybrać własną ścieżkę. Po wyborze ścieżki musisz określić, w jaki sposób serwer FTP ma być zainstalowany i uruchamiany. Możesz też ustawić port oraz hasło administratora.



![](https://screensaver01.zap-hosting.com/index.php/s/gCoGAcGnTtLQ2P6/preview)

Następnie kliknij **Next**, a w kolejnym kroku na końcu kliknij **Install**, aby rozpocząć instalację. Otworzy się panel administracyjny serwera FTP FileZilla. Kliknij przycisk **Connect to FileZilla FTP Server**.

Pojawi się okno z polami Host, Port i Password. Pola Host i Port możesz zostawić bez zmian, a w polu Password wpisz ustalone wcześniej hasło administratora serwera FTP. Po tym kliknij **Ok**, aby nawiązać połączenie.



## Konfiguracja

### Tworzenie użytkownika

Aby połączyć się z serwerem przez FTP, musisz utworzyć użytkownika. 
Kliknij w menu na **Server**, a następnie na **Configure**.

![](https://screensaver01.zap-hosting.com/index.php/s/D7KHSrkGZEErEcH/preview)

W menu Users możesz dodać nowego użytkownika, klikając po prostu **Add**:

![](https://screensaver01.zap-hosting.com/index.php/s/mtdi4oRmR4ZDzyq/preview)

W tym przykładzie nazwa użytkownika to **YourUserName**. Oczywiście możesz wybrać własną nazwę.



### Hasło i uprawnienia

Po utworzeniu użytkownika musisz skonfigurować dostęp i uprawnienia. Aktywuj użytkownika i ustaw opcje hasła w zakładce **General** pod **Credentials**. Zdecydowanie zalecamy ustawienie hasła dla bezpieczeństwa. Wybierz **Require a password to log in** i wpisz swoje hasło.

![](https://screensaver01.zap-hosting.com/index.php/s/gwkkexqXgmfXc2q/preview)

Aby użytkownik miał odpowiednie uprawnienia, musisz określić, do których katalogów ma dostęp, klikając **Add** przy mount points. Musisz podać ścieżkę wirtualną i natywną. W naszym przykładzie definiujemy, że dysk C jest dostępny pod \.

![](https://screensaver01.zap-hosting.com/index.php/s/LE46PteX7eAftjQ/preview)

Po prawej stronie znajdziesz opcję **Permissions**, gdzie ustawisz prawa dostępu do wskazanej ścieżki. Jeśli chcesz, aby użytkownik mógł czytać i edytować dane, zalecamy ustawienie **Read+Write**.

::: danger
Ze względów bezpieczeństwa udostępniaj użytkownikowi dostęp tylko do wybranych folderów.
:::

Zmiany zatwierdź klikając **Apply**.



## Wyjątki w zaporze Windows

Aby umożliwić połączenie z serwerem FTP, musisz zezwolić na korzystanie z serwera FTP w zaporze Windows. Otwórz ustawienia zapory w **Panel sterowania\System i zabezpieczenia\Zapora systemu Windows Defender** i kliknij **Zezwól aplikacji lub funkcji na dostęp przez Zaporę systemu Windows Defender**.
W kolejnym oknie wybierz aplikację, którą chcesz dopuścić:

![](https://screensaver01.zap-hosting.com/index.php/s/aorQ7Y8gQJPSE8e/preview)

W tym przykładzie ścieżka to **C:\Program Files (x86)\FileZilla Server\FileZilla Server.exe**:

![](https://screensaver01.zap-hosting.com/index.php/s/wx7p5GykbQfx8B6/preview)

Na koniec kliknij **OK**. Teraz połączenie z Twoim serwerem FTP jest możliwe.


## Podsumowanie

Gratulacje, udało Ci się zainstalować i skonfigurować serwer FTP na Twoim VPS! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />