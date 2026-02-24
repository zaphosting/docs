---
id: dedicated-linux-mastodon
title: "Configure o Mastodon em um Servidor Linux - Lance Sua Própria Plataforma de Rede Social"
description: "Descubra como configurar uma rede social Mastodon autônoma e segura em servidores baseados em Debian para microblogging independente → Saiba mais agora"
sidebar_label: Instalar Mastodon
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Mastodon é um software gratuito e open-source para rodar serviços de redes sociais autogerenciados.

![](https://screensaver01.zap-hosting.com/index.php/s/oNCpfBwLNB5f79P/preview)

Ele tem funcionalidades de microblogging similares ao serviço X (antigo Twitter), oferecidas por uma grande quantidade de nós independentes, conhecidos como instâncias,  
cada uma com seu próprio código de conduta, termos de serviço, política de privacidade, opções de privacidade e políticas de moderação.  
:::info
Este guia foca na instalação em uma distro baseada em Debian. Exemplos são Debian e Ubuntu. O guia varia dependendo do sistema operacional que você estiver usando.
:::

## Requisitos do sistema
Se você quer configurar uma instância Mastodon no seu servidor, precisa atender alguns pré-requisitos:
- Domínio
- Servidor Linux
- Servidor de email

## Preparando seu sistema
Recomendamos que você desative o login por senha no SSH antes, pois usar login por senha em servidores acessíveis pela internet é um risco de segurança.  
Você pode fazer isso no painel web do seu servidor em Informação -> Acesso & Segurança -> Desativar Login por Senha  
![](https://screensaver01.zap-hosting.com/index.php/s/k6bBoxt7HJ4jqnL/preview)  
Depois disso, atualize seus pacotes com o comando:  
```
apt update && apt upgrade -y
```

Agora você precisa instalar as dependências do Mastodon:  
```bash
# Repositórios do sistema
apt install -y curl wget gnupg apt-transport-https lsb-release ca-certificates
# Node.JS
curl -sL https://deb.nodesource.com/setup_16.x | bash -
# PostgreSQL
wget -O /usr/share/keyrings/postgresql.asc https://www.postgresql.org/media/keys/ACCC4CF8.asc
echo "deb [signed-by=/usr/share/keyrings/postgresql.asc] http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/postgresql.list
```

Depois de instalar as dependências do Mastodon, podemos instalar os pacotes necessários do sistema com esses dois comandos:  
```bash
apt update
apt install -y \
  imagemagick ffmpeg libpq-dev libxml2-dev libxslt1-dev file git-core \
  g++ libprotobuf-dev protobuf-compiler pkg-config nodejs gcc autoconf \
  bison build-essential libssl-dev libyaml-dev libreadline6-dev \
  zlib1g-dev libncurses5-dev libffi-dev libgdbm-dev \
  nginx redis-server redis-tools postgresql postgresql-contrib \
  certbot python3-certbot-nginx libidn11-dev libicu-dev libjemalloc-dev
```
Deixe os pacotes instalarem, isso pode levar um tempo. Depois, configure o yarn, que é o gerenciador de pacotes para o Node.JS instalado anteriormente:  
```bash
corepack enable
yarn set version stable
```

## Instalando Ruby
Vamos criar um usuário separado, pois facilita o gerenciamento das versões do Ruby. Primeiro crie um usuário chamado mastodon, com login desativado. Depois, troque para o usuário mastodon com os comandos:  
```bash
# Pode deixar os campos vazios
adduser --disabled-login mastodon
su - mastodon
```

Agora instalamos o gerenciador Ruby `rbenv`, que facilita o gerenciamento das versões do Ruby. Use os comandos:  
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec bash
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
```
Depois disso, instale o Ruby e o bundler com:  
```bash
RUBY_CONFIGURE_OPTS=--with-jemalloc rbenv install 3.0.3
rbenv global 3.0.3
gem install bundler --no-document
```
Isso pode demorar um pouco, então aproveite para pegar um café ou chá enquanto espera. Quando terminar, volte para o usuário root com o comando `exit`.

## Configurando o PostgreSQL
Mastodon usa PostgreSQL como sistema de banco de dados. Configure com:  
```bash
sudo -u postgres psql
```

No prompt do PostgreSQL, digite:  
```sql
CREATE USER mastodon CREATEDB;
\q
```

## Configurando o Mastodon
Agora volte para o usuário mastodon:  
```bash
su - mastodon
```
Use o git para baixar a versão mais recente do Mastodon com esses comandos:  
```bash
git clone https://github.com/tootsuite/mastodon.git live && cd live
git checkout $(git tag -l | grep -v 'rc[0-9]*$' | sort -V | tail -n 1)
```
Agora instale as últimas dependências para Ruby e Javascript:  
```bash
bundle config deployment 'true'
bundle config without 'development test'
bundle install -j$(getconf _NPROCESSORS_ONLN)
yarn install --pure-lockfile
```
Crie o arquivo de configuração do Mastodon com:  
```bash
RAILS_ENV=production bundle exec rake mastodon:setup
```
:::info
Se a configuração do banco de dados falhar, faça login no postgres com `sudo -u postgres psql` e siga esta documentação:  

https://gist.github.com/amolkhanorkar/8706915
:::

Depois, volte para o usuário root com `exit`.

## Configurando o servidor web
Agora vem a parte mais delicada: configurar o servidor web. Primeiro, crie um registro A e/ou AAAA no seu DNS apontando diretamente para seu servidor. Alternativamente, você pode apontar o registro raiz para seu servidor.

Depois, copie e habilite a configuração do servidor web do Mastodon com:  
```bash
cp /home/mastodon/live/dist/nginx.conf /etc/nginx/sites-available/mastodon
ln -s /etc/nginx/sites-available/mastodon /etc/nginx/sites-enabled/mastodon
```

Edite o arquivo `/etc/nginx/sites-available/mastodon` com um editor de texto como vim ou nano e troque example.com pelo seu domínio.  
Agora, adquira um certificado SSL para seu domínio facilmente com:  
```bash
certbot --nginx -d <seu domínio>
```
Digite seu domínio. Você será perguntado sobre algumas credenciais. No final, será perguntado se deseja redirecionar automaticamente requisições http para https — recomendamos ativar essa opção.

## Criando um serviço Mastodon
Por fim, vamos criar um serviço de sistema para o Mastodon. É bem simples.  
Copie a configuração padrão do serviço para o diretório de serviços da sua distribuição:  
```sh
cp /home/mastodon/live/dist/mastodon-*.service /etc/systemd/system/
```

Agora habilite e inicie os novos serviços com:  
```sh
systemctl daemon-reload
systemctl enable --now mastodon-web mastodon-sidekiq mastodon-streaming
```

Depois de um reboot, sua configuração estará pronta. Curta sua instância!