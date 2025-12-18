---
id: dedicated-linux-ssh-server
title: "Servidor Dedicado: Instalação do SSH"
description: "Descubra como instalar e gerenciar servidores SSH com segurança em VPS Linux para garantir acesso remoto seguro e proteção reforçada do servidor → Saiba mais agora"
sidebar_label: Instalar SSH
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Secure Shell (SSH) é um protocolo seguro que permite acesso seguro e criptografado a sistemas remotos. Ele garante a confidencialidade e integridade dos dados transmitidos pela rede.

Neste guia, você vai entender como instalar ou reinstalar o Servidor SSH para várias distribuições Linux que oferecemos atualmente em nossos servidores VPS. A maioria das distros Linux oferecidas nos nossos VPS já vem com um Servidor SSH por padrão, o que significa que você pode gerenciá-lo facilmente pelo painel web do produto. Você pode conferir como fazer isso no nosso guia: [Acesso inicial (SSH)](vserver-linux-ssh.md)

Se quiser aprender mais sobre como melhorar a segurança do seu servidor, recomendamos muito dar uma olhada no nosso guia [Dicas de Segurança](vserver-linux-security-tips.md), que apresenta várias ferramentas e serviços para deixar seu servidor ainda mais seguro.



## Instalação

Para começar o processo de instalação, acesse seu servidor via VNC. Você pode seguir esses passos usando o [console VNC](vserver-vnc.md).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Se quiser reinstalar o servidor SSH, certifique-se de desinstalá-lo primeiro. Você pode fazer isso com o comando: `yum remove openssh`.
:::

Antes de instalar o servidor SSH, garanta que seu sistema está atualizado. Rode o comando:
```
yum update
```

Agora, instale o servidor SSH com o comando:
```
yum install openssh-server
```

Quando a instalação terminar, inicie o serviço do servidor SSH com o comando:
```
systemctl start sshd
```

Garanta que o serviço seja iniciado automaticamente no boot do sistema com o comando:
```
systemctl enable sshd
```

## Habilitando login root

Para habilitar o login root, você precisa editar o arquivo de configuração do openssh. Neste guia, usaremos o "nano" como editor.

:::info
Se o "nano" não estiver instalado, instale-o primeiro com o comando: `yum install nano`
:::

Abra o arquivo de configuração com:
```
nano /etc/ssh/sshd_config 
```

Use as setas para navegar e encontre a linha:
```
#PermitRootLogin prohibit-password
```

Altere para o seguinte, que habilita o login root remoto:
```
PermitRootLogin yes
```

Por fim, reinicie o Servidor SSH para aplicar a nova configuração com o comando:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Debian" label="Debian">

:::info
Se quiser reinstalar o servidor SSH, certifique-se de desinstalá-lo primeiro. Você pode fazer isso com o comando: `apt remove openssh`.
:::

Antes de instalar o servidor SSH, garanta que seu sistema está atualizado. Rode o comando:
```
apt update
```

Agora, instale o servidor SSH com o comando:
```
apt install openssh-server
```

Quando a instalação terminar, inicie o serviço do servidor SSH com o comando:
```
systemctl start sshd
```

Garanta que o serviço seja iniciado automaticamente no boot do sistema com o comando:
```
systemctl enable sshd
```

## Habilitando login root

Para habilitar o login root, você precisa editar o arquivo de configuração do openssh. Neste guia, usaremos o "nano" como editor.

:::info
Se o "nano" não estiver instalado, instale-o com o comando: `apt install nano`
:::

Abra o arquivo de configuração com:
```
nano /etc/ssh/sshd_config 
```

Use as setas para navegar e encontre a linha:
```
#PermitRootLogin prohibit-password
```

Altere para o seguinte, que habilita o login root remoto:
```
PermitRootLogin yes
```

Por fim, reinicie o Servidor SSH para aplicar a nova configuração com o comando:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Ubuntu" label="Ubuntu">

:::info
Se quiser reinstalar o servidor SSH, certifique-se de desinstalá-lo primeiro. Você pode fazer isso com o comando: `apt remove openssh`.
:::

Antes de instalar o servidor SSH, garanta que seu sistema está atualizado. Rode o comando:
```
apt update
```

Agora, instale o servidor SSH com o comando:
```
apt install openssh-server
```

Quando a instalação terminar, inicie o serviço do servidor SSH com o comando:
```
systemctl start sshd
```

Garanta que o serviço seja iniciado automaticamente no boot do sistema com o comando:
```
systemctl enable sshd
```

## Habilitando login root

Para habilitar o login root, você precisa editar o arquivo de configuração do openssh. Neste guia, usaremos o "nano" como editor.

:::info
Se o "nano" não estiver instalado, instale-o com o comando: `apt install nano`
:::

Abra o arquivo de configuração com:
```
nano /etc/ssh/sshd_config 
```

Use as setas para navegar e encontre a linha:
```
#PermitRootLogin prohibit-password
```

Altere para o seguinte, que habilita o login root remoto:
```
PermitRootLogin yes
```

Por fim, reinicie o Servidor SSH para aplicar a nova configuração com o comando:
```
systemctl restart sshd
```
</TabItem>

<TabItem value="Fedora" label="Fedora">

:::info
Se quiser reinstalar o servidor SSH, certifique-se de desinstalá-lo primeiro. Você pode fazer isso com o comando: `dnf remove openssh`.
:::

Antes de instalar o servidor SSH, garanta que seu sistema está atualizado. Rode o comando:
```
dnf update
```

Agora, instale o servidor SSH com o comando:
```
dnf install openssh-server
```

Quando a instalação terminar, inicie o serviço do servidor SSH com o comando:
```
systemctl start sshd
```

Garanta que o serviço seja iniciado automaticamente no boot do sistema com o comando:
```
systemctl enable sshd
```

## Habilitando login root

Para habilitar o login root, você precisa editar o arquivo de configuração do openssh. Neste guia, usaremos o "nano" como editor.

:::info
Se o "nano" não estiver instalado, instale-o com o comando: `dnf install nano`
:::

Abra o arquivo de configuração com:
```
sudo nano /etc/ssh/sshd_config 
```

Use as setas para navegar e encontre a linha:
```
#PermitRootLogin prohibit-password
```

Altere para o seguinte, que habilita o login root remoto:
```
PermitRootLogin yes
```

Por fim, reinicie o Servidor SSH para aplicar a nova configuração com o comando:
```
systemctl restart sshd
```
</TabItem>
</Tabs>

Você instalou com sucesso o Serviço SSH no seu servidor e agora pode acessá-lo via SSH.