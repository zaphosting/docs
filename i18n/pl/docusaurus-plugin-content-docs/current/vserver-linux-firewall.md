---
id: vserver-linux-firewall
title: "VPS: Zarządzanie zaporą sieciową w Linux"
description: "Dowiedz się, jak skonfigurować zaporę sieciową, aby zabezpieczyć swój serwer i umożliwić niezbędne połączenia zewnętrzne → Sprawdź teraz"
sidebar_label: Przekierowanie portów (Zapora sieciowa)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Wprowadzenie

Wiele usług i programów wymaga zezwolenia na połączenia zewnętrzne. Można to zrobić, konfigurując zaporę sieciową.  
W tym poradniku nauczysz się, jak ustawić zaporę i pozwolić na te połączenia.

<InlineVoucher />

## Przygotowanie

Aby zainstalować zaporę, musisz połączyć się z serwerem przez SSH. Jeśli nie wiesz jak, zerknij na nasz [poradnik pierwszego dostępu](vserver-linux-ssh.md).  
Po połączeniu zaktualizuj serwer poleceniami `apt update` i `apt upgrade`.

## Używanie UFW (łatwe)

Na Linuxie jest kilka programów do zapory, ten poradnik skupi się na dwóch najpopularniejszych: UFW i IPTables.  
Zaczniemy od UFW, bo jest prostszy w konfiguracji i obsłudze.

### Instalacja UFW

UFW zainstalujesz łatwo przez APT poleceniem `sudo apt install ufw`.  
Aby nie stracić połączenia SSH, nie włączaj zapory od razu — najpierw ją skonfiguruj.

### Konfiguracja UFW

Zalecamy domyślne polityki:

`sudo ufw default deny incoming`  
oraz  
`sudo ufw default allow outgoing`

Teraz zezwól na połączenie SSH i inne porty, które chcesz otworzyć:

`sudo ufw allow 22` — dla SSH

`sudo ufw allow 80` — przykład dla HTTP

`sudo ufw allow 25565` — przykład dla serwera Minecraft


Aby włączyć UFW, użyj `sudo ufw enable`. W każdej chwili możesz otworzyć kolejne porty poleceniem `sudo ufw allow PORT`.


### Dodawanie przekierowań portów

Aby przekierować port, użyj prostego polecenia:

Dla portów TCP:

`sudo ufw allow PORT/tcp` — zamień PORT na numer portu, który chcesz przekierować.

Przykład: `sudo ufw allow 25565/tcp` dla serwera Minecraft

Dla portów UDP:

`sudo ufw allow PORT/udp` — zamień PORT na numer portu, który chcesz przekierować.

Przykład: `sudo ufw allow 9987/udp` dla serwera TeamSpeak 3

### Wyświetlanie i usuwanie przekierowań portów

Aby zobaczyć wszystkie reguły portów, wpisz `sudo ufw status numbered`.  
Jeśli chcesz usunąć regułę, użyj `sudo ufw delete NUMER`, gdzie NUMER to numer reguły z listy.

## Instalacja IPTables (zaawansowane)

Większość systemów ma IPTables domyślnie, ale dla pewności możesz zainstalować je poleceniem `sudo apt install iptables`.

### Konfiguracja IPTables

Najpierw ustaw domyślne polityki i podstawowe reguły:

`sudo iptables -P INPUT DROP` — blokuj wszystkie przychodzące połączenia

`sudo iptables -P FORWARD DROP` — blokuj wszystkie przekierowania

`sudo iptables -P OUTPUT ACCEPT` — zezwalaj na wszystkie wychodzące połączenia

`sudo iptables -A INPUT -i lo -j ACCEPT` — zezwól na loopback

`sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` — zezwól na istniejące połączenia

Teraz zezwól na połączenie SSH i inne porty, które chcesz otworzyć:

`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` — dla SSH

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` — przykład dla HTTP

`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` — przykład dla serwera Minecraft

Następnie musisz zapisać reguły, aby były aktywne po restarcie serwera.  
Zainstaluj pakiet do trwałego zapisu reguł poleceniem `sudo apt install iptables-persistent`.  
Zapisz reguły poleceniem `sudo netfilter-persistent save`.  
Dodaj usługę do autostartu poleceniem `sudo systemctl enable netfilter-persistent`.

### Dodawanie przekierowań portów

Aby przekierować port, użyj polecenia:

Dla portów TCP:

`sudo iptables -A INPUT -p tcp --dport PORT -j ACCEPT` — zamień PORT na numer portu.

Przykład: `sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` dla serwera Minecraft

Dla portów UDP:

`sudo iptables -A INPUT -p udp --dport PORT -j ACCEPT` — zamień PORT na numer portu.

Przykład: `sudo iptables -A INPUT -p udp --dport 9987 -j ACCEPT` dla serwera TeamSpeak 3


### Wyświetlanie i usuwanie przekierowań portów

Wyświetl wszystkie reguły poleceniem: `sudo iptables -L --line-numbers`.  
Aby usunąć regułę, użyj `sudo iptables -D INPUT NUMER`, gdzie NUMER to numer reguły z listy.

## Podsumowanie

Udało Ci się zainstalować zaporę sieciową na Twoim serwerze Linux i stworzyć własne reguły portów.  
Możesz też korzystać z tego poradnika, aby przekierować więcej portów.  
W razie pytań lub potrzeby pomocy, śmiało kontaktuj się z naszym supportem, który jest dostępny codziennie, by Ci pomóc! 🙂

<InlineVoucher />