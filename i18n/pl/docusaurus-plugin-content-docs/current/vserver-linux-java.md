---
id: vserver-linux-java
title: "VPS: Instalacja Java"
description: "Dowiedz się, jak zainstalować i skonfigurować Java na różnych systemach Linux, aby Twoje programy działały płynnie → Sprawdź teraz"
sidebar_label: Instalacja Java
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Java to bardzo popularny język programowania, używany na całym świecie do wielu programów i usług. Aby uruchomić te programy oparte na Javie, konieczne jest, aby Java była zainstalowana na systemie. Poniżej dowiesz się, jak zainstalować Javę na swoim systemie dla oferowanych systemów Linux.

<InlineVoucher />

## Przygotowanie

Przed rozpoczęciem właściwej instalacji Java ważne jest, aby upewnić się, że system jest aktualny. W tym celu łączymy się z serwerem przez SSH. Jeśli nie wiesz, czym jest SSH i jak go używać, zerknij na ten poradnik: [Pierwszy dostęp (SSH)](vserver-linux-ssh.md)

Gdy już się połączysz, system możesz zaktualizować za pomocą poniższych komend, w zależności od systemu operacyjnego:

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## Instalacja

Po zakończeniu przygotowań możesz rozpocząć instalację Java. W zależności od systemu operacyjnego wykonaj następujące polecenia:

**Debian**

```
sudo apt-get install default-jdk
```

**Ubuntu**

```
sudo apt install default-jdk
```

**CentOS**

```
sudo yum install java-11-openjdk
```

**Fedora**

```
sudo dnf install java-11-openjdk
```

## Sprawdzenie wersji

Możesz sprawdzić, czy instalacja przebiegła pomyślnie, wpisując komendę **java --version**. Wyjście powinno wyglądać mniej więcej tak:

```
openjdk 11.0.9.1 2020-11-04
OpenJDK Runtime Environment (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04)
OpenJDK 64-Bit Server VM (build 11.0.9.1+1-Ubuntu-0ubuntu1.20.04, mixed mode)
```

## Podsumowanie

Gratulacje, pomyślnie zainstalowałeś i skonfigurowałeś Javę! Jeśli masz dalsze pytania lub problemy, skontaktuj się z naszym zespołem wsparcia, który jest do Twojej dyspozycji każdego dnia!

<InlineVoucher />