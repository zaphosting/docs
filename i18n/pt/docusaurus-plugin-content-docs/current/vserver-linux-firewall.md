---
id: vserver-linux-firewall
title: "VPS: Gerenciando Firewall no Linux"
description: "Aprenda a configurar um firewall para proteger seu servidor e permitir conexões externas necessárias → Saiba mais agora"
sidebar_label: Redirecionamento de Portas (Firewall)
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Para muitos serviços e programas, você precisa permitir conexões externas. Isso é possível configurando um firewall.  
Neste guia, você vai aprender como configurar um firewall e liberar essas conexões.

<InlineVoucher />

## Preparação

Para instalar o firewall, você precisa se conectar ao seu servidor via SSH. Se não souber como, pode conferir nosso [guia de acesso inicial](vserver-linux-ssh.md).  
Depois de conectado, atualize o servidor usando `apt update` e `apt upgrade`.

## Usando UFW (Fácil)

Existem vários programas de firewall para Linux, este guia vai focar nos 2 mais populares: UFW e IPTables.  
Vamos começar pelo UFW, que é mais fácil de configurar e gerenciar.

### Instalando o UFW

Você pode instalar o UFW facilmente via APT com `sudo apt install ufw`.  
Para não perder a conexão via SSH, não ative ele ainda, primeiro configure tudo.

### Configurando o UFW

Recomendamos usar as seguintes políticas por padrão:

`sudo ufw default deny incoming`  
e  
`sudo ufw default allow outgoing`

Agora você deve liberar a conexão SSH e qualquer outra porta que queira abrir agora:

`sudo ufw allow 22` para SSH

`sudo ufw allow 80` exemplo para HTTP

`sudo ufw allow 25565` exemplo para um servidor Minecraft

Para ativar o UFW, rode `sudo ufw enable`. Você pode abrir mais portas depois, se precisar, usando `sudo ufw allow PORTA`

### Adicionando Redirecionamento de Portas

Para liberar uma porta, use esse comando:

Para portas TCP:

`sudo ufw allow PORTA/tcp` substituindo PORTA pela porta que quer liberar.

Exemplo: `sudo ufw allow 25565/tcp` para servidor Minecraft

Para portas UDP:

`sudo ufw allow PORTA/udp` substituindo PORTA pela porta que quer liberar.

Exemplo: `sudo ufw allow 9987/udp` para servidor TeamSpeak 3

### Listar e remover redirecionamentos de portas

Para mostrar todas as regras de portas, rode `sudo ufw status numbered`. Se quiser remover uma regra, use `sudo ufw delete NÚMERO`, usando o número da regra na lista.

## Instalando IPTables (Avançado)

A maioria dos sistemas já inclui IPTables por padrão, mas para garantir, você pode rodar `sudo apt install iptables`.

### Configurando IPTables

Primeiro, defina as políticas e configurações padrão:

`sudo iptables -P INPUT DROP` para bloquear todas as conexões de entrada

`sudo iptables -P FORWARD DROP` para bloquear todos os redirecionamentos

`sudo iptables -P OUTPUT ACCEPT` para aceitar todas as conexões de saída

`sudo iptables -A INPUT -i lo -j ACCEPT` para liberar o loopback

`sudo iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT` para liberar todas as conexões já estabelecidas

Agora libere a conexão SSH e qualquer outra porta que queira abrir:

`sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` para SSH

`sudo iptables -A INPUT -p tcp --dport 80 -j ACCEPT` exemplo para HTTP

`sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` exemplo para servidor Minecraft

Depois, você precisa tornar as regras persistentes, para que continuem ativas após reiniciar o servidor. Instale o pacote IPTables persistent com `sudo apt install iptables-persistent`. Depois aplique com `sudo netfilter-persistent save`. E adicione no autostart com `sudo systemctl enable netfilter-persistent`.

### Adicionando Redirecionamento de Portas

Para liberar uma porta, use esse comando:

Para portas TCP:

`sudo iptables -A INPUT -p tcp --dport PORTA -j ACCEPT` substituindo PORTA pela porta que quer liberar.

Exemplo: `sudo iptables -A INPUT -p tcp --dport 25565 -j ACCEPT` para servidor Minecraft

Para portas UDP:

`sudo iptables -A INPUT -p udp --dport PORTA -j ACCEPT` substituindo PORTA pela porta que quer liberar.

Exemplo: `sudo iptables -A INPUT -p udp --dport 9987 -j ACCEPT` para servidor TeamSpeak 3

### Listar e remover redirecionamentos de portas

Você pode listar todas as regras com: `sudo iptables -L --line-numbers`. Para remover uma regra, use `sudo iptables -D INPUT NÚMERO` substituindo `NÚMERO` pelo número da regra que quer remover.

## Conclusão

Você instalou com sucesso um firewall no seu servidor Linux e criou suas próprias regras de portas. Pode usar esse guia também para liberar mais portas.  
Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, que está disponível todos os dias para te ajudar! 🙂

<InlineVoucher />