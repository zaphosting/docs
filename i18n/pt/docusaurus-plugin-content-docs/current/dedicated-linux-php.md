---
id: dedicated-linux-php
title: 'Servidor Dedicado: Instalação do PHP'
description: "Descubra como instalar PHP no seu servidor Linux para desenvolvimento web e otimize sua configuração com extensões essenciais → Saiba mais agora"
sidebar_label: Instalar PHP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

PHP é uma linguagem de programação popular e versátil, muito usada no desenvolvimento web. Neste guia, vamos mostrar como instalar o PHP no seu servidor.

## Preparação

Comece conectando ao seu servidor via SSH. Se não souber como fazer isso, dê uma olhada no nosso [guia de Acesso Inicial (SSH)](vserver-linux-ssh.md).

Depois de logar, é recomendado rodar o comando de atualização correspondente ao seu sistema operacional para manter seu servidor seguro e com as últimas novidades.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## Instalação

Existem duas formas principais de instalar PHP no seu servidor Linux: standalone (independente) ou como pacote adicional para Apache. Se você usa seu próprio servidor web que não seja Apache ou para tarefas gerais, recomendamos o método standalone. Caso contrário, para uso com o servidor web Apache, use o método Apache para instalar o PHP como pacote extra.

## Standalone

Use o comando abaixo para instalar a versão mais recente do PHP. Se quiser instalar uma versão específica, use a flag `-y` seguida da versão.
```
# Última versão
sudo apt install php

# Versão específica (ex: php7.4)
sudo apt -y install php[versão]
```

Verifique se a instalação foi bem-sucedida com o comando `php -v`. Pronto, você instalou o PHP no seu servidor! Recomendamos dar uma olhada na seção **Extensões PHP** para garantir que você instale as extensões que precisar.

## Usando Apache

Primeiro, instale o Apache no seu servidor, caso ainda não tenha feito. Use o comando:
```
sudo apt install apache2
```

Depois, configure as regras do firewall para garantir que o servidor web fique acessível pela internet. Neste exemplo, usamos o **firewall UFW**, já que o Apache tem uma aplicação registrada para ele. Se usar outro firewall, certifique-se de liberar a porta 80 (HTTP).
```
sudo ufw allow in "Apache"
```

Agora seu servidor deve estar acessível. Teste abrindo `http://[seu_endereço_ip]` no navegador.

Com o Apache pronto, instale o pacote PHP para Apache com o comando:
```
sudo apt install php libapache2-mod-php
```

Verifique a instalação com `php -v`. Pronto, você instalou o PHP junto com o servidor Apache! Não esqueça de conferir a seção **Extensões PHP** para instalar as extensões que precisar.

## Extensões PHP

O PHP oferece várias extensões opcionais que você pode instalar para ampliar suas funcionalidades. Para ver a lista de extensões disponíveis, rode o comando abaixo, que mostra os resultados paginados com o `less`.

```
apt search php- | less
```

Use as setas para navegar e pressione `Q` para sair. Para instalar uma extensão, use o comando apt install assim. Pode instalar várias extensões de uma vez, separando por espaço para agilizar.

```
sudo apt install [extensão_php] [...]
```

## Conclusão

Você instalou o PHP com sucesso no seu servidor Linux. Se tiver dúvidas ou precisar de ajuda, nosso time de suporte está disponível todos os dias para te ajudar! 🙂