---
id: server-linux-prologue
title: "Configure o Prologue em um Servidor Linux - Hospede sua própria plataforma de audiobooks"
description: "Aprenda como instalar e rodar um servidor de audiobooks compatível com Prologue no seu VPS Linux usando Docker ou uma configuração manual → Saiba mais agora"
sidebar_label: Instalar Prologue
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

[Prologue](https://prologue.audio/) é uma plataforma moderna para ouvir audiobooks, feita para funcionar com servidores de jogos de audiobooks self-hosted. Ela permite que você faça streaming, organize e escute sua biblioteca de audiobooks em vários dispositivos como iPhone, iPad, Apple Watch e CarPlay.

Ao invés de depender de plataformas de audiobooks na nuvem, uma configuração self-hosted te dá controle total sobre sua coleção e infraestrutura de streaming. Depois que o servidor estiver configurado, o app móvel Prologue conecta-se a ele e sincroniza o progresso da reprodução, favoritos e histórico de escuta.

Neste guia, você vai aprender como implantar um servidor de audiobooks compatível com Prologue em um VPS Linux usando dois métodos diferentes:

- Instalação manual em um servidor web
- Deploy via Docker para uma gestão containerizada mais fácil

![img](https://screensaver01.zap-hosting.com/index.php/s/ocybWYJaSRrwksD/preview)

<InlineVoucher />



## Casos de uso do Prologue

O Prologue pode ser usado em várias situações onde o usuário quer total propriedade e flexibilidade sobre sua biblioteca de audiobooks.

Casos comuns incluem:

- Hospedar uma plataforma privada de streaming de audiobooks
- Gerenciar grandes coleções de audiobooks em uma interface centralizada
- Sincronizar a reprodução entre vários dispositivos
- Acessar audiobooks remotamente de qualquer lugar
- Criar uma alternativa self-hosted a plataformas comerciais de audiobooks

Uma configuração self-hosted também garante que seus arquivos de mídia fiquem sob seu controle, enquanto permite construir um servidor de audiobooks escalável.



## Requisitos

Antes de instalar o servidor, certifique-se que seu sistema atende aos seguintes requisitos.

| Hardware | Mínimo | Recomendado |
|----------|---------|-------------|
| CPU | 1 vCPU | 2 vCPU |
| RAM | 2 GB | 4 GB |
| Espaço em disco | 20 GB | 50 GB |

<InlineServiceLink />

O software necessário depende do método de instalação:

Configuração manual:

- Servidor Linux
- Servidor web (Apache ou Nginx)
- PHP
- Servidor de banco de dados

Configuração Docker:

- Docker
- Docker Compose





## Preparação

Antes de começar a instalação, atualize os pacotes do sistema.

```
sudo apt update
sudo apt upgrade
```


Verifique se o ambiente de runtime necessário está instalado, dependendo do método escolhido. Para instalações Docker:

```
docker --version
docker compose version
```

Se o Docker ainda não estiver instalado, instale-o antes de continuar.



## Configuração Manual

A configuração manual instala o aplicativo diretamente no seu servidor, sem containers. Esse método é útil para deploys em ambientes tradicionais de hospedagem de sites.



### Baixar o aplicativo

Primeiro crie um diretório para o projeto e baixe os arquivos do aplicativo.

```
mkdir prologue-server
cd prologue-server
```


Em seguida, clone o repositório do projeto:

```
git clone https://github.com/michaelstaake/Prologue.git
```



### Configurar o servidor web

Mova os arquivos do aplicativo para o diretório do seu servidor web. Exemplo para [Apache](dedicated-linux-webserver.md#apache):

```
sudo mv prologue-server /var/www/prologue
```


Crie uma configuração de virtual host apontando para o diretório do aplicativo. Exemplo de configuração Apache:

```<VirtualHost *:80>
ServerName seu-dominio.com
DocumentRoot /var/www/prologue
</VirtualHost>
```


Reinicie o servidor web após a configuração.

```
sudo systemctl restart apache2
```



### Configurar as variáveis de ambiente

Edite o arquivo de configuração e atualize as configurações necessárias, como conexão com banco de dados e URL do servidor.

```
nano config.php
```


Quando a configuração estiver pronta, a interface web estará disponível pelo seu domínio configurado ou endereço IP do servidor.



## Configuração via Docker

O Docker oferece um método de deploy mais simples, rodando o aplicativo dentro de um container.



### Criar diretório do projeto

Crie um diretório para o deploy via Docker.

```
mkdir prologue-docker
cd prologue-docker
```



### Criar configuração Docker Compose

Crie um arquivo Docker Compose usando `nano compose.yaml` e insira a seguinte configuração:

```
services:
  prologue:
    image: ghcr.io/michaelstaake/prologue:latest
    container_name: prologue
    ports:
      - "13378:80"
    volumes:
      - ./data:/data
    restart: unless-stopped
```



### Iniciar o container

Inicie o container usando Docker Compose rodando `docker compose up -d` e verifique se o container está rodando com `docker ps`. O Docker vai baixar automaticamente a imagem necessária e iniciar o servidor de audiobooks.



### Acessando o Servidor

Com o servidor rodando, abra seu navegador e acesse:

```
http://SEU_ENDERECO_IP:13378
```

Substitua SEU_ENDERECO_IP pelo endereço IP do seu VPS. No primeiro acesso, você será solicitado a:

- Criar uma conta de administrador
- Configurar o diretório da sua biblioteca de audiobooks
- Escanear e importar os arquivos de audiobooks


Depois que sua biblioteca estiver configurada, você pode conectar o app móvel Prologue ao servidor e começar a fazer streaming da sua coleção de audiobooks.



## Conclusão

Parabéns! Você configurou com sucesso um servidor de audiobooks compatível com Prologue usando instalação manual ou deploy via Docker.

Ambos os métodos permitem hospedar sua coleção de audiobooks na sua própria infraestrutura e fazer streaming para seus dispositivos pelo app Prologue. O setup via Docker facilita a manutenção e atualizações, enquanto a instalação manual oferece mais controle sobre o ambiente do servidor web.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />