---
id: vserver-windows-docker
title: "Configurar Docker em um Servidor Windows - Execute e Gerencie Containers na Sua Infraestrutura"
description: "Descubra como implantar e gerenciar aplicações de forma eficiente com containers Docker para escalabilidade e atualizações sem complicações → Saiba mais agora"
sidebar_label: Instalar Docker
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Docker é uma plataforma aberta para desenvolver, distribuir e executar aplicações dentro de containers. Um container empacota uma aplicação com todas as suas dependências em uma unidade padronizada que pode rodar de forma confiável em diferentes ambientes.

Essa abordagem elimina problemas causados por diferenças entre sistemas de desenvolvimento, teste e produção. Com Docker, as aplicações podem ser implantadas rapidamente, escaladas de forma eficiente e atualizadas sem tempo de inatividade.

Pensando em hospedar esse serviço você mesmo? Vamos te guiar em cada passo para configurar e ajustar tudo, além de tudo que você precisa saber para manter seu setup tinindo.

<InlineVoucher />

## Pré-requisitos

Antes de instalar o **Docker**, certifique-se de que seu ambiente de hospedagem atende aos seguintes requisitos para garantir uma instalação tranquila e desempenho ideal.

| Hardware   | Mínimo      | Recomendação ZAP-Hosting  |
| ---------- | ------------ | -------------------------- |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU            |
| RAM        | 4 GB         | 4 GB                      |
| Espaço em disco | 10 GB    | 25 GB                     |

## Instalação

Para configurar o Docker no Windows Server, baixe e execute o script PowerShell `install-docker-ce.ps1`. Ele ativa os recursos do sistema operacional necessários para containers e instala o runtime do Docker. Abra o PowerShell como administrador e execute o comando abaixo:

```powershell
Invoke-WebRequest -UseBasicParsing "https://raw.githubusercontent.com/microsoft/Windows-Containers/Main/helpful_tools/Install-DockerCE/install-docker-ce.ps1" -o install-docker-ce.ps1
.\install-docker-ce.ps1
```

O script ativa os recursos do Windows relacionados a containers, instala o Docker Engine e o Docker CLI, e registra o serviço Docker para iniciar automaticamente.

![img](https://screensaver01.zap-hosting.com/index.php/s/y26fPWy63FAWJGp/download)

O sistema vai reiniciar durante a instalação e deve continuar automaticamente depois. Após o reinício, faça login e execute o mesmo comando novamente se o script pedir, para que o serviço finalize a inicialização. Quando o script terminar, a saída será parecida com isso:

```
Installing Docker... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\docker.exe
Installing Docker daemon... C:\Users\Administrator\DockerDownloads\docker-28.3.3\docker\dockerd.exe
Configuring the docker service...
Waiting for Docker daemon...
Successfully connected to Docker Daemon.
The following images are present on this machine:
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE

Script complete!
```

## Configuração

### Iniciar e parar o Docker

O Docker roda como um serviço no Windows. Depois da instalação, ele inicia automaticamente. Para controlar manualmente:

```
Start-Service docker    # Iniciar o serviço Docker
Stop-Service docker     # Parar o serviço Docker
Restart-Service docker  # Reiniciar o serviço Docker
```

### Iniciar e parar container

Inicie um container com `docker run`. Exemplo: servidor web IIS mapeando a porta 80 do container para a porta 8080 do host:

```
docker run -d --name web -p 8080:80 mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2022
```

### Verificar status do container

Confira o status dos containers com:

```
docker ps        # Containers em execução
docker ps -a     # Todos os containers, incluindo os parados
docker inspect web   # Informações detalhadas
docker logs web      # Logs do container
```

#### Recursos e status

```
docker stats            # Uso ao vivo de CPU/RAM/IO
```

## Conclusão e mais Recursos

Parabéns! Você instalou e configurou o Docker com sucesso no seu VPS/servidor dedicado. Também recomendamos dar uma olhada nos seguintes recursos, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [Docker.com](https://Docker.com/) - Site oficial
- [docs.docker.com](https://docs.docker.com/) - Documentação Docker

Tem dúvidas específicas que não foram abordadas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂