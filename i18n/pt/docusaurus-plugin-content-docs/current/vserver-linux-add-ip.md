---
id: vserver-linux-add-ip
title: "VPS: Configurar endereço(s) IP"
description: "Aprenda a configurar e gerenciar endereços IP primários e adicionais em sistemas Debian e Ubuntu para uma configuração de rede otimizada → Saiba mais agora"
sidebar_label: Configurar endereço(s) IP
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Quer configurar sua rede e definir endereços IP?

<InlineVoucher />

## Configurando endereço IP

Esta seção explica como definir e determinar o endereço IP principal.

<Tabs>
  <TabItem value="debian" label="Debian" default>

A configuração de rede no Debian é feita via interfaces de rede. Execute o comando `sudo nano /etc/network/interfaces` para abrir a configuração de rede. Por padrão, o conteúdo da configuração deve ser assim:

```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

Se ainda não estiver assim, o conteúdo deve ficar como mostrado. Substitua o placeholder do endereço IP (XXX.XXX.XXX.XXX) pelo IP do seu servidor, que aparece na administração do servidor no dashboard. Use `255.255.255.0` (rede classe C) como máscara de sub-rede e certifique-se que o último octeto do gateway seja apenas 1.

Salve as alterações pressionando CTRL+X e confirme com Enter. Agora é preciso reiniciar o módulo de rede para ativar o novo endereço IPv4, faça isso com o comando:

```
sudo service networking restart
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

```
[Match]
Name = eth0

[Network]
Description = Interface eth0 autoconfigurada pelo PVE
Address = 185.223.31.234/24
Gateway = 185.223.31.1
DHCP = no
IPv6AcceptRA = false
```

 </TabItem>
</Tabs>

## Configurando endereços IP adicionais
<Tabs>
  <TabItem value="debian" label="Debian" default>

```
allow-hotplug eth0:1
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

   Placeholder

</TabItem>
</Tabs>

## Testando a configuração
Para verificar se o endereço IP configurado está correto e funcionando, você pode fazer um teste de ping. Por exemplo, no seu próprio computador, abra o prompt de comando (cmd.exe) e execute:

```
ping <seu_ip_do_servidor>
```

Se a configuração estiver correta, o resultado deve ser parecido com isso:

```
Pinging XXX.XXX.XXX.XX with 32 bytes of data:
Reply from XXX.XXX.XXX.XX: bytes=32 time=25ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=23ms TTL=56

Ping statistics for XXX.XXX.XXX.XX:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 22ms, Maximum = 25ms, Average = 23ms
```

## Conclusão

Parabéns, você configurou sua rede com sucesso! Se tiver dúvidas ou precisar de ajuda, nosso time de suporte está disponível todos os dias para te dar aquela força! 🙂

<InlineVoucher />