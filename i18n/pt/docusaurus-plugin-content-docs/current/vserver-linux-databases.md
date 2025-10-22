---
id: vserver-linux-databases
title: "VPS: Instalação de Bancos de Dados"
description: "Descubra como instalar e configurar vários bancos de dados no Linux para melhorar desempenho e segurança → Saiba mais agora"
sidebar_label: Instalar Bancos de Dados
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Este guia traz os passos para a instalação de vários tipos de bancos de dados. Para este exemplo, usamos o Ubuntu 20.04 como sistema operacional, porém, também especificamos comandos equivalentes para outras distros Linux que oferecemos no nosso site. Esses comandos devem ser executados via SSH, se você não sabe como conectar ao seu servidor via SSH, dê uma olhada aqui: [Acesso inicial (SSH)](vserver-linux-ssh.md).

<InlineVoucher />

## Preparação

Antes de começar a instalação de um banco de dados, é necessário garantir que o sistema esteja atualizado. Para isso, você precisa atualizar os pacotes do gerenciador de pacotes do seu sistema com o comando abaixo, dependendo do seu sistema operacional:

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

MariaDB é um sistema de gerenciamento de banco de dados relacional open-source, originalmente derivado do MySQL. Ele garante melhor desempenho, segurança e desenvolvimento contínuo. Notavelmente, o MariaDB oferece motores de armazenamento aprimorados e sua arquitetura é totalmente compatível com MySQL. Recomendamos MariaDB em vez de MySQL.

## Instalação do MariaDB

Primeiro, você precisa garantir que a versão mais recente do MariaDB será instalada. Alguns sistemas operacionais antigos como Debian 9 ou Ubuntu 18.04 não trazem por padrão a versão mais recente do MariaDB no gerenciador de pacotes, então executando o comando abaixo você garante que a versão mais atual será obtida.

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Após instalar o repositório, atualize o cache do gerenciador de pacotes seguindo os passos da seção [preparação](#preparação).

:::info
A instalação do repositório MariaDB (passo acima) pode ser ignorada com segurança em sistemas modernos como Ubuntu 22.04 ou Debian 11.
:::

Com o repositório configurado, a instalação do MariaDB pode começar instalando o pacote `mariadb-server`. Dependendo do sistema operacional, execute um dos comandos abaixo:

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

Após a instalação, digite o comando abaixo para iniciar a configuração do servidor:

```
mysql_secure_installation
```

Agora você pode configurar seu servidor MariaDB (MySQL) seguindo as instruções e definindo uma senha para o servidor. Na próxima pergunta, você pode pular a entrada por enquanto pressionando **Enter**.

![](https://screensaver01.zap-hosting.com/index.php/s/S8mibcHmaAcetqJ/preview)

:::info
O usuário root é o principal usuário do seu servidor MariaDB (MySQL)!
:::

Em seguida, será perguntado se você quer definir uma senha para o usuário root, confirme com **y** para sim. Depois, digite a nova senha para o usuário root.

:::note
Enquanto digita a senha, ela não será exibida. Isso é normal e sua senha será armazenada normalmente. Use uma senha segura para o usuário root e guarde-a em um lugar seguro.
:::

Agora será perguntado se você quer remover usuários anônimos do servidor, você deve fazer isso por questões de segurança. Confirme com **y** para sim:

![](https://screensaver01.zap-hosting.com/index.php/s/7q2kGxDXTfWg36m/preview)

Na próxima pergunta, defina se o usuário root pode se conectar ao servidor externamente. Por segurança, desative essa opção e confirme com **y**:

![](https://screensaver01.zap-hosting.com/index.php/s/PcpJ6boNspf2fPo/preview)

No próximo passo, você pode confirmar a remoção do banco de dados de teste fornecido pelo MariaDB (MySQL) com **y**, pois ele não é necessário e pode ser facilmente deletado:

![](https://screensaver01.zap-hosting.com/index.php/s/9HfkcaLjGXjEwK7/preview)

Ao final da configuração, será perguntado se deseja atualizar as permissões do banco de dados. Confirme com **y** para ativar a senha definida para o usuário root:

![](https://screensaver01.zap-hosting.com/index.php/s/QiBNQYFiwJM4CcA/preview)

Seu servidor MariaDB (MySQL) está pronto para uso!

![](https://screensaver01.zap-hosting.com/index.php/s/zkKoTX7GbbKgj2M/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## O que é Redis?

Redis é um armazenamento de estruturas de dados em memória, usado principalmente para armazenar dados em formato chave-valor, embora suporte outros formatos como listas, JSON e mais. É conhecido pela velocidade, respondendo consultas em milissegundos.

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

Após instalar o repositório, atualize o cache do gerenciador de pacotes seguindo os passos da seção [preparação](#preparação).

:::info
Se seu sistema operacional não estiver listado acima, pode pular este passo.
:::

Depois de instalar o repositório correspondente, prossiga com a instalação do pacote Redis Server. Execute o comando que corresponde ao seu sistema operacional:

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

Após a instalação, seu servidor Redis está pronto para uso! Por padrão, ele roda em 127.0.0.1:6379 sem senha.

:::caution 
Para usuários Debian/Ubuntu:
Lembre-se de ativar o serviço `redis-server` após a instalação para garantir que ele inicie automaticamente no boot do servidor. Use o comando:
```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## O que é MongoDB?
MongoDB é um banco de dados NoSQL orientado a documentos, projetado para escalabilidade e agilidade para desenvolvedores. Ele armazena dados em formato BSON, parecido com JSON, permitindo armazenar diversos tipos de dados. Possui suporte a índices para reduzir o tempo de resposta e é caracterizado por não ter um esquema pré-definido como MySQL ou SQLite, oferecendo agilidade e flexibilidade.

## Instalação do MongoDB

Selecione seu sistema operacional nas abas abaixo para ver o guia correspondente.

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Instalação no Ubuntu & Debian

Primeiro, execute o comando abaixo para importar a chave pública GPG do MongoDB:

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Depois, adicione a fonte do MongoDB na lista de fontes do seu sistema operacional com o comando:

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

Agora o gerenciador de pacotes pode instalar o MongoDB Community Edition, mas antes atualize os repositórios com: `sudo apt update`. Por fim, instale o MongoDB com:

```
sudo apt install mongodb-org
```

Sua instalação do MongoDB deve estar funcionando agora!

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### Instalação no CentOS & Fedora

Primeiro, configure o repositório do MongoDB para sistemas Red Hat.

Crie um arquivo chamado `/etc/yum.repos.d/mongodb-org-6.0.repo` e cole o conteúdo abaixo dentro dele:

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

Agora você pode instalar o MongoDB. Há uma pequena diferença no comando de instalação entre CentOS e Fedora, então use o comando adequado abaixo:

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

Sua instalação do MongoDB deve estar funcionando agora, é bem mais simples comparado a outras distros Linux!

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### Instalação no OpenSUSE

Primeiro, importe a chave pública do MongoDB para o repositório com o comando:

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

Depois, para adicionar o repositório do MongoDB, execute:

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

E finalmente, instale a versão mais recente do MongoDB com:

```
sudo zypper -n install mongodb-org
```

Sua instalação do MongoDB deve estar funcionando agora!

</TabItem>
</Tabs>

</TabItem>
</Tabs>


## Conclusão

Parabéns, você instalou e configurou seu banco de dados com sucesso! Se tiver mais dúvidas ou problemas, entre em contato com nosso time de suporte, que está disponível para te ajudar todos os dias!

<InlineVoucher />