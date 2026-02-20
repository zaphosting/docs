---
id: dedicated-linux-databases
title: "Configurar Bancos de Dados em um Servidor Linux - Implantar e Gerenciar Serviços de Banco de Dados"
description: "Descubra como instalar e configurar vários bancos de dados no Ubuntu e outras distros Linux para melhor desempenho e segurança → Saiba mais agora"
sidebar_label: Instalar Bancos de Dados
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Este guia traz os passos para a instalação de vários tipos de bancos de dados. Para este exemplo, usamos o Ubuntu 20.04 como sistema operacional, mas também indicamos comandos equivalentes para outras distros Linux que oferecemos no nosso site. Esses comandos devem ser executados via SSH; se você não sabe como se conectar ao seu servidor via SSH, dá uma olhada aqui: [Acesso inicial (SSH)](vserver-linux-ssh.md).

## Preparação

Antes de começar a instalar um banco de dados, é essencial garantir que o sistema esteja atualizado. Para isso, atualize os pacotes do gerenciador de pacotes do seu sistema com o comando abaixo, dependendo do seu sistema operacional:

```
// Ubuntu & Debian
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## Tipos de banco de dados

Dependendo do serviço de banco de dados que você quer instalar, siga o guia correspondente:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## O que é MariaDB?

MariaDB é um sistema de gerenciamento de banco de dados relacional open-source, originalmente derivado do MySQL. Ele garante melhor desempenho, segurança e desenvolvimento contínuo. Destaca-se por oferecer motores de armazenamento aprimorados e uma arquitetura totalmente compatível com MySQL. Recomendamos MariaDB em vez do MySQL.

## Instalação do MariaDB

Primeiro, certifique-se de que a versão mais recente do MariaDB será instalada. Alguns sistemas antigos como Debian 9 ou Ubuntu 18.04 não trazem a versão mais atual do MariaDB no gerenciador de pacotes, então executando o comando abaixo você garante que a última versão será obtida.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Depois de instalar o repositório, atualize o cache do gerenciador de pacotes seguindo os passos da seção de preparação.

:::info
A instalação do repositório MariaDB (passo acima) pode ser ignorada com segurança em sistemas modernos como Ubuntu 22.04 ou Debian 11.
:::

Com o repositório configurado, agora você pode instalar o MariaDB com o pacote `mariadb-server`. Execute o comando correspondente ao seu sistema:

```
// Ubuntu & Debian
sudo apt install mariadb-server

// CentOS
sudo yum install mariadb-server

// OpenSUSE
sudo zypper install mariadb

// Fedora
sudo dnf install mariadb-server
```

## Configuração do MariaDB

Após a instalação, rode o comando abaixo para iniciar a configuração do servidor:

```
mysql_secure_installation
```

Agora você pode configurar seu servidor MariaDB (MySQL) seguindo as instruções e definindo uma senha para o servidor. Na próxima pergunta, você pode pular pressionando **Enter**.

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
O usuário root é o principal usuário do seu servidor MariaDB (MySQL)!
:::

Depois, será perguntado se você quer definir uma senha para o usuário root, confirme com **y** para sim. Em seguida, digite a nova senha para o usuário root.

:::note
Enquanto digita a senha, ela não aparecerá na tela. Isso é normal e a senha será armazenada normalmente. Use uma senha segura para o usuário root e guarde-a em um lugar seguro.
:::

Agora será perguntado se deseja remover usuários anônimos do servidor, faça isso por questões de segurança. Confirme com **y** para sim:

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

Na próxima pergunta, defina se o usuário root pode se conectar ao servidor remotamente. Por segurança, desative essa opção e confirme com **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

No passo seguinte, confirme para remover o banco de dados de teste fornecido pelo MariaDB (MySQL) com **y**, pois ele não é necessário e pode ser facilmente deletado:

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

Ao final da configuração, será perguntado se deseja atualizar as permissões do banco. Confirme com **y** para ativar a senha que você definiu para o usuário root:

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

Seu servidor MariaDB (MySQL) está pronto para uso!

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## O que é Redis?

Redis é um armazenamento de estruturas de dados em memória, usado principalmente para guardar dados em formato chave-valor, embora suporte outros formatos como listas, JSON e mais. É conhecido pela velocidade, respondendo consultas em milissegundos.

## Instalação do Redis

Primeiro, você deve adicionar um repositório que permita instalar o Redis. Esse passo não é necessário para todas as distribuições Linux, apenas para as listadas abaixo. Execute o comando que corresponde ao seu sistema operacional e versão:

```
// Ubuntu (qualquer versão) e Debian (apenas Debian 10)
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS (apenas CentOS 7)
sudo yum install epel-release

// CentOS (apenas CentOS 8)
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

Depois de adicionar o repositório, atualize o cache do gerenciador de pacotes seguindo os passos da seção de preparação.

:::info
Se seu sistema operacional não estiver listado acima, pode pular essa etapa.
:::

Após adicionar o repositório, instale o pacote do Redis Server. Rode o comando que corresponde ao seu sistema:

```
// Ubuntu e Debian
sudo apt install redis-server

// CentOS
sudo yum install redis

// OpenSUSE
sudo zypper install redis

// Fedora
sudo dnf install redis
```

Depois da instalação, seu servidor Redis está pronto para uso! Por padrão, ele roda em 127.0.0.1:6379 sem senha.

:::caution 
Para usuários Debian/Ubuntu:
Lembre-se de ativar o serviço `redis-server` após a instalação para garantir que ele inicie automaticamente ao ligar o servidor. Use o comando:
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## O que é MongoDB?
MongoDB é um banco de dados NoSQL orientado a documentos, projetado para escalabilidade e agilidade para desenvolvedores. Ele armazena dados em formato BSON, parecido com JSON, permitindo guardar diversos tipos de dados. Possui suporte a índices para reduzir o tempo de resposta e não tem esquema pré-definido como MySQL ou SQLite, oferecendo agilidade e flexibilidade.

## Instalação do MongoDB

Selecione seu sistema operacional nas abas abaixo para ver o guia correspondente.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Instalação no Ubuntu & Debian

Primeiro, importe a chave pública GPG do MongoDB com o comando:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Depois, adicione a fonte do MongoDB na lista de fontes do seu sistema com:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Agora atualize os repositórios com `sudo apt update` e instale o MongoDB com:

```
sudo apt install mongodb-org
```

Sua instalação do MongoDB já deve estar funcionando!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Instalação no CentOS & Fedora

Primeiro, configure o repositório do MongoDB para sistemas Red Hat.

Crie o arquivo `/etc/yum.repos.d/mongodb-org-6.0.repo` e cole o conteúdo abaixo:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Agora você pode instalar o MongoDB. O comando varia entre CentOS e Fedora, use o apropriado:

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

Sua instalação do MongoDB já deve estar funcionando, é bem mais simples comparado a outras distros Linux!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Instalação no OpenSUSE

Primeiro, importe a chave pública do MongoDB com:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Depois, adicione o repositório do MongoDB com:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

Por fim, instale a versão mais recente do MongoDB com:

```
sudo zypper -n install mongodb-org
```

Sua instalação do MongoDB já deve estar funcionando!

</TabItem>
</Tabs>

</TabItem>
</Tabs>