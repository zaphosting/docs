---
id: dedicated-linux-ssh2fa
title: "Serwer dedykowany: Dwuskładnikowe uwierzytelnianie SSH"
description: "Dowiedz się, jak zwiększyć bezpieczeństwo SSH dzięki 2FA Google Authenticator, aby bezpieczniej korzystać z serwera i chronić swój Linux VPS → Sprawdź teraz"
sidebar_label: 2FA (SSH)
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Dwuskładnikowe uwierzytelnianie SSH Google, znane jako **Google Authenticator SSH**, podnosi poziom bezpieczeństwa dostępu SSH (Secure Shell) poprzez dodanie drugiej warstwy uwierzytelniania. Choć SSH już zapewnia bezpieczne połączenie szyfrowane zdalnie z serwerem, integracja 2FA zwiększa ochronę, wymagając od użytkowników nie tylko hasła, ale także jednorazowego kodu weryfikacyjnego generowanego przez Google Authenticator. W tym poradniku pokażemy, jak zainstalować i skonfigurować usługę **Google Authenticator SSH** na serwerze Linux.

<InlineVoucher />

## Instalacja

Najpierw musisz zainstalować Google Authenticator na swoim Linux VPS. Wykonaj następujące polecenie:

```
sudo apt install libpam-google-authenticator
```

Zostaniesz poproszony o wpisanie "Y", aby potwierdzić instalację pakietu — wpisz to, naciśnij Enter, a Google Authenticator zostanie zainstalowany!

![](https://screensaver01.zap-hosting.com/index.php/s/mtqePXTr5KdoHkm/preview)

Uruchom Google Authenticator, wpisując 'google-authenticator'. Upewnij się, że okno terminala jest wystarczająco duże, aby wyświetlić kod QR, w przeciwnym razie naciśnij "CTRL+C" i wpisz polecenie ponownie.

![](https://screensaver01.zap-hosting.com/index.php/s/agW9EHjs5Aimc43/preview)

Zostaniesz ponownie zapytany, czy chcesz kontynuować — wpisz "Y", aby zaakceptować. Pojawi się kod QR. Otwórz aplikację Authenticator na smartfonie i zeskanuj kod QR. W tym przykładzie używamy Google Authenticator:

![](https://screensaver01.zap-hosting.com/index.php/s/CmQERELXNotsgZB/preview)

Pamiętaj, aby skopiować kody zapasowe — każdy z nich możesz użyć jednokrotnie, jeśli stracisz dostęp do aplikacji.

![](https://screensaver01.zap-hosting.com/index.php/s/pkKM2SANJbEejFD/preview)

Teraz aplikacja pokaże Ci kody potrzebne do logowania. Wygląda to mniej więcej tak:

![](https://screensaver01.zap-hosting.com/index.php/s/QnBxLbR8Grf2GL4/preview)

Pojawią się teraz następujące pytania:

1. Czy chcesz zapisać konfigurację Google Authenticator?
2. Czy chcesz mieć tylko jedno logowanie co 30 sekund?
3. Czy czas ważności kodu ma zostać wydłużony?
4. Czy ma być możliwe tylko trzy logowania co 30 sekund? (Ochrona przed atakami Brute Force)

Dla bezpieczeństwa zalecamy potwierdzić wszystkie odpowiedzi jako Tak.

![](https://screensaver01.zap-hosting.com/index.php/s/A9RmFA6nWgKzSF6/preview)

## Konfiguracja

Teraz musimy dostosować Google Authenticator, aby był używany podczas logowania. Wymaga to dwóch zmian.

### /etc/ssh/sshd_config

Aktywuj wymagane moduły w pliku `/etc/ssh/sshd_config`. Otwórz go, wpisując:
```
sudo nano /etc/ssh/sshd_config
```

Jesteś teraz w edytorze tekstu. Poruszaj się strzałkami, swobodnie usuwaj i wpisuj tekst. Aby zapisać plik, naciśnij 'CTRL + X', potem 'Y', a na końcu 'Enter'.

Upewnij się, że dwie linie 'UsePAM' oraz 'ChallengeResponseAuthentication' mają wartość 'yes'. Powinno to wyglądać tak:

![](https://screensaver01.zap-hosting.com/index.php/s/f5a9G5Wif9HcwQq/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/qdf4JCqLgZ85nia/preview)

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

![](https://screensaver01.zap-hosting.com/index.php/s/Mgw8tJJtTbkg7T3/preview)

Zapisz plik (CTRL + X, potem Y i Enter).

## Testowanie dostępu

Czas na pierwsze logowanie z 2FA. Po wykonaniu powyższych kroków wystarczy, że ponownie połączysz się przez SSH.

![](https://screensaver01.zap-hosting.com/index.php/s/RwaymAzjGjMgbYL/preview)

Najpierw wpisz swoje hasło jak zwykle. Następnie zostaniesz poproszony o kod — wpisz aktualny kod 2FA z aplikacji.

![](https://screensaver01.zap-hosting.com/index.php/s/w7BFMMTMdcwXj2x/preview)

I gotowe — jesteś zalogowany!

## Podsumowanie

Gratulacje, pomyślnie skonfigurowałeś 2FA dla dostępu SSH. W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest do Twojej dyspozycji codziennie! 🙂

<InlineVoucher />