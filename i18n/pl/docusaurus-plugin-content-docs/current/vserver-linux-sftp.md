---
id: vserver-linux-sftp
title: "VPS: Nawiąż połączenie przez SFTP"
description: "Dowiedz się, jak bezpiecznie przesyłać pliki za pomocą SFTP i chronić swoje dane dzięki szyfrowanym połączeniom → Sprawdź teraz"
sidebar_label: Połączenie SFTP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';





## Wprowadzenie

SFTP to bezpieczny protokół do przesyłania plików między komputerami przez Internet lub sieć. Oznacza **„SSH File Transfer Protocol”** lub **„Secure File Transfer Protocol”** i opiera się na protokole **SSH (Secure Shell)**.

W przeciwieństwie do FTP (File Transfer Protocol), gdzie dane przesyłane są bez szyfrowania, SFTP zapewnia, że wszystkie dane są zaszyfrowane i tym samym chronione przed nieautoryzowanym dostępem.

<InlineVoucher />



## Nawiązywanie połączenia

Do połączenia przez **SFTP** używamy danych logowania użytkownika root. W tym przykładzie pokazujemy konfigurację połączenia w aplikacji WinSCP. Utwórz **Nową sesję** w WinSCP.

![img](https://screensaver01.zap-hosting.com/index.php/s/HDsMr5mnJpC7FtM/download)

W oknie konfiguracji nowej sesji wybierz `SFTP` jako **protokół transferu**. Następnie wpisz **adres IP** swojego serwera oraz port **22**. Jako nazwę użytkownika i hasło podaj dane logowania użytkownika `root`.

![img](https://screensaver01.zap-hosting.com/index.php/s/Wq59YHDnirKYkDr/download)

:::warning Korzystanie z kluczy SSH
Jeśli zamiast zwykłego hasła używasz klucza SSH, kliknij **Zaawansowane** i przejdź do **SSH -> Uwierzytelnianie**. Tam możesz załadować swój klucz SSH.
:::

Przy pierwszym połączeniu przez SFTP pojawi się ten komunikat, ponieważ Twój komputer jeszcze nie zna serwera. Potwierdź klikając **„Tak”**, jeśli ufasz serwerowi. To zapisze jego klucz bezpieczeństwa i przy kolejnych połączeniach nie będziesz już o to pytany. To normalny krok przy pierwszym połączeniu z nowym serwerem.

![img](https://screensaver01.zap-hosting.com/index.php/s/DxErsePZJnkxyCp/download)





## Podsumowanie

Jeśli wykonałeś wszystkie kroki, pomyślnie nawiązałeś połączenie SFTP ze swoim serwerem. W razie dalszych pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym zespołem wsparcia, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />