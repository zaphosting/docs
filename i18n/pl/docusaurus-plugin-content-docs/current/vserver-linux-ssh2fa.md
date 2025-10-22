---
id: vserver-linux-ssh2fa
title: "VPS: Dwuskładnikowe uwierzytelnianie SSH"
description: "Dowiedz się, jak zwiększyć bezpieczeństwo SSH dzięki 2FA Google Authenticator, aby bezpieczniej korzystać z serwera i chronić swoje środowisko Linux → Sprawdź teraz"
sidebar_label: 2FA (SSH)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Dwuskładnikowe uwierzytelnianie SSH Google, znane jako **Google Authenticator SSH**, podnosi poziom bezpieczeństwa dostępu SSH (Secure Shell) poprzez dodanie drugiej warstwy uwierzytelniania. Choć SSH już zapewnia bezpieczne połączenie szyfrowane zdalnie z serwerem, integracja 2FA zwiększa ochronę, wymagając od użytkowników nie tylko hasła, ale także jednorazowego kodu weryfikacyjnego generowanego przez Google Authenticator. W tym poradniku pokażemy, jak zainstalować i skonfigurować usługę **Google Authenticator SSH** na serwerze Linux.

<InlineVoucher />

## Instalacja

Najpierw musisz zainstalować Google Authenticator na swoim VPS z Linuxem. Wykonaj następujące polecenie:

```
sudo apt install libpam-google-authenticator
```

Zostaniesz poproszony o wpisanie "Y", aby potwierdzić instalację pakietu — wpisz to, naciśnij Enter i Google Authenticator zostanie zainstalowany!

![](https://screensaver01.zap-hosting.com/index.php/s/AnKdPXEzKdB5xWS/preview)

Uruchom Google Authenticator, wpisując 'google-authenticator'. Upewnij się, że okno terminala jest wystarczająco duże, aby wyświetlić kod QR, w przeciwnym razie naciśnij "CTRL+C" i wpisz polecenie ponownie.

![](https://screensaver01.zap-hosting.com/index.php/s/8w9aDz5ZbSmNPZ9/preview)

Zostaniesz ponownie zapytany, czy chcesz kontynuować — wpisz "Y", aby zaakceptować. Pojawi się kod QR. Otwórz aplikację Authenticator na smartfonie i zeskanuj kod QR. W tym przykładzie używamy Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/J5CL6mjzPRMSiap/preview)

Pamiętaj, aby skopiować kody zapasowe — każdy z nich można użyć jednokrotnie, gdybyś stracił dostęp do aplikacji.

![](https://screensaver01.zap-hosting.com/index.php/s/itdjPyGrFb7Wq39/preview)

Aplikacja pokaże Ci teraz kody potrzebne do logowania. Wygląda to mniej więcej tak:

![](https://screensaver01.zap-hosting.com/index.php/s/TW24xBe26TbgCqE/preview)

Pojawią się teraz następujące pytania:

1. Czy chcesz zapisać konfigurację Google Authenticator?
2. Czy chcesz mieć tylko jedno logowanie co 30 sekund?
3. Czy czas ważności kodu ma zostać wydłużony?
4. Czy ma być możliwe tylko trzy logowania co 30 sekund? (Ochrona przed atakami Brute Force)

Dla bezpieczeństwa zalecamy potwierdzić wszystkie odpowiedzi "Yes".

![](https://screensaver01.zap-hosting.com/index.php/s/bdYRncwk7ssQyYJ/preview)

## Konfiguracja

Teraz musimy dostosować Google Authenticator, aby był używany podczas logowania. Wymaga to dwóch zmian.

### /etc/ssh/sshd_config

Aktywuj wymagane moduły w pliku `/etc/ssh/sshd_config`. Otwórz go poleceniem:
```
sudo nano /etc/ssh/sshd_config
```

Jesteś teraz w edytorze tekstu. Poruszaj się strzałkami, swobodnie usuwaj i wpisuj tekst. Aby zapisać plik, naciśnij 'CTRL + X', potem 'Y', a na końcu 'Enter'.

Upewnij się, że dwie linie 'UsePAM' oraz 'ChallengeResponseAuthentication' są ustawione na 'yes', tak jak tutaj:

![](https://screensaver01.zap-hosting.com/index.php/s/n8MzX8724T2GFAF/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/zLk98HrkF4jk4Jf/preview)

Zapisz plik i zrestartuj SSH poleceniem:
```
sudo systemctl restart ssh
```

### /etc/pam.d/sshd

Teraz dodajemy Google Authenticator do procesu logowania w pliku `/etc/pam.d/sshd`. Otwórz go poleceniem:
```
sudo nano /etc/pam.d/sshd
```
Przewiń na koniec pliku i dodaj linię:
```
auth required pam_google_authenticator.so
```

![](https://screensaver01.zap-hosting.com/index.php/s/xwodXzPifANsQAM/preview)

Zapisz plik (CTRL + X, Y, Enter).

## Testowanie dostępu

Czas na pierwsze logowanie z 2FA. Po wykonaniu powyższych kroków wystarczy, że ponownie połączysz się przez SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/cN3x3aFbtfxdi7M/preview)

Wpisz swoje hasło jak zwykle. Następnie zostaniesz poproszony o kod — wpisz aktualny kod 2FA z aplikacji.

![](https://screensaver01.zap-hosting.com/index.php/s/y3dgYXezL8sDbJe/preview)

I gotowe — jesteś zalogowany!

## Podsumowanie

Gratulacje, pomyślnie włączyłeś i skonfigurowałeś 2FA dla SSH! Jeśli masz pytania lub problemy, skontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie!

<InlineVoucher />