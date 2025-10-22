---
id: dedicated-linux-ssh-server
title: "Servidor Dedicado: Instalação do SSH"
description: "Descubra como instalar e gerenciar servidores SSH em VPS Linux de forma segura para garantir acesso remoto protegido e maior segurança do servidor → Saiba mais agora"
sidebar_label: Instalar SSH
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Secure Shell (SSH) é um protocolo seguro que permite acesso criptografado e protegido a sistemas remotos. Ele garante a confidencialidade e integridade dos dados transmitidos pela rede.

Neste guia, você vai aprender como instalar ou reinstalar o Servidor SSH em várias distribuições Linux que oferecemos atualmente nos nossos servidores VPS. A maioria das distros Linux disponíveis nos nossos VPS já vem com o Servidor SSH instalado por padrão, o que significa que você pode gerenciá-lo facilmente pelo painel web do produto. Você pode conferir como fazer isso no nosso guia: [Acesso inicial (SSH)](vserver-linux-ssh.md)

Se quiser melhorar ainda mais a segurança do seu servidor, recomendamos muito dar uma olhada no nosso guia [Dicas de Segurança](vserver-linux-security-tips.md), que apresenta várias ferramentas e serviços para proteger seu servidor.

<InlineVoucher />

## Instalação

Para começar a instalação, acesse seu servidor via VNC. Você pode seguir os passos usando o [console VNC](vserver-vnc.md).


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="CentOS" label="CentOS" default>

:::info
Se quiser reinstalar o servidor SSH, primeiro desinstale-o com o comando: `yum remove openssh`.
:::

Antes de instalar o servidor SSH, certifique-se de que seu sistema está atualizado. Rode o comando:
```
yum update
```

Agora instale o servidor SSH com o comando:
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

## Ativando login root

Para ativar o login root, você precisa editar o arquivo de configuração do openssh. Neste guia, usaremos o editor "nano".

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

Altere para a seguinte linha, que habilita o login root remoto:
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
Se quiser reinstalar o servidor SSH, primeiro desinstale-o com o comando: `apt remove openssh`.
:::

Antes de instalar o servidor SSH, certifique-se de que seu sistema está atualizado. Rode o comando:
```
apt update
```

Agora instale o servidor SSH com o comando:
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

## Ativando login root

Para ativar o login root, você precisa editar o arquivo de configuração do openssh. Neste guia, usaremos o editor "nano".

:::info
Se você ainda não tem o "nano" instalado, instale-o com o comando: `apt install nano`
:::

Abra o arquivo de configuração com:
```
nano /etc/ssh/sshd_config 
```

Use as setas para navegar e encontre a linha:
```
#PermitRootLogin prohibit-password
```

Altere para a seguinte linha, que habilita o login root remoto:
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
Se quiser reinstalar o servidor SSH, primeiro desinstale-o com o comando: `apt remove openssh`.
:::

Antes de instalar o servidor SSH, certifique-se de que seu sistema está atualizado. Rode o comando:
```
apt update
```

Agora instale o servidor SSH com o comando:
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

## Ativando login root

Para ativar o login root, você precisa editar o arquivo de configuração do openssh. Neste guia, usaremos o editor "nano".

:::info
Se você ainda não tem o "nano" instalado, instale-o com o comando: `apt install nano`
:::

Abra o arquivo de configuração com:
```
nano /etc/ssh/sshd_config 
```

Use as setas para navegar e encontre a linha:
```
#PermitRootLogin prohibit-password
```

Altere para a seguinte linha, que habilita o login root remoto:
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
Se quiser reinstalar o servidor SSH, primeiro desinstale-o com o comando: `dnf remove openssh`.
:::

Antes de instalar o servidor SSH, certifique-se de que seu sistema está atualizado. Rode o comando:
```
dnf update
```

Agora instale o servidor SSH com o comando:
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

## Ativando login root

Para ativar o login root, você precisa editar o arquivo de configuração do openssh. Neste guia, usaremos o editor "nano".

:::info
Se você ainda não tem o "nano" instalado, instale-o com o comando: `dnf install nano`
:::

Abra o arquivo de configuração com:
```
sudo nano /etc/ssh/sshd_config 
```

Use as setas para navegar e encontre a linha:
```
#PermitRootLogin prohibit-password
```

Altere para a seguinte linha, que habilita o login root remoto:
```
PermitRootLogin yes
```

Por fim, reinicie o Servidor SSH para aplicar a nova configuração com o comando:
```
systemctl restart sshd
```
</TabItem>
</Tabs>

Você instalou com sucesso o serviço SSH no seu servidor e agora pode acessá-lo via SSH.


<InlineVoucher />