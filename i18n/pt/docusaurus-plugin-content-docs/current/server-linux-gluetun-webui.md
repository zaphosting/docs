---
id: server-linux-gluetun-webui
title: "Configure o Gluetun WebUI em um Servidor Linux - Gerencie seu container VPN facilmente"
description: "Aprenda como instalar e rodar o Gluetun WebUI no seu VPS Linux para monitorar e gerenciar seu container VPN Gluetun → Saiba mais agora"
sidebar_label: Instalar Gluetun WebUI
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introdução

[Gluetun WebUI](https://github.com/Sir-Scuzza/gluetun-webui) é uma interface web leve criada para simplificar o gerenciamento do container VPN Gluetun. O Gluetun em si é um container Docker popular usado para rotear outras aplicações através de uma conexão VPN segura.

O WebUI adiciona um dashboard prático que permite monitorar o status da VPN, gerenciar conexões e controlar o comportamento do container sem precisar mexer manualmente em comandos Docker ou arquivos de configuração.

![img](https://screensaver01.zap-hosting.com/index.php/s/PL3rDEKy2xA36CP/preview)

Hospedar o Gluetun WebUI no seu próprio servidor oferece uma interface centralizada para gerenciar sua configuração VPN, sendo especialmente útil quando você roda múltiplos containers que dependem de uma conexão VPN Gluetun.

Quer rodar o Gluetun WebUI no seu VPS? Este guia te leva passo a passo pela instalação e configuração.

<InlineVoucher />



## Casos de uso do Gluetun WebUI

O Gluetun WebUI é útil para quem roda aplicações containerizadas atrás de uma VPN. Exemplos comuns incluem:

- Monitorar o status da conexão VPN em tempo real
- Gerenciar containers que roteiam tráfego via VPN Gluetun
- Simplificar a configuração e resolução de problemas do container VPN
- Controlar serviços VPN sem usar comandos Docker complexos
- Rodar uma interface centralizada de gerenciamento VPN em ambientes self-hosted

O WebUI é especialmente útil em homelabs ou setups VPS onde várias aplicações dependem de um container VPN.



## Pré-requisitos

Antes de instalar o Gluetun WebUI, certifique-se que seu servidor atende aos seguintes requisitos.

| Hardware | Mínimo | Recomendado |
|----------|---------|-------------|
| CPU | 1 núcleo | 2 núcleos |
| RAM | 1 GB | 4 GB |
| Espaço em disco | 5 GB | 10 GB |

Software necessário:

- Docker
- Docker Compose

Se o Docker ainda não estiver instalado, siga nosso guia para instalar Docker antes de continuar.

<InlineServiceLink />

## Preparação

Antes de instalar o Gluetun WebUI, verifique se Docker e Docker Compose estão disponíveis no seu servidor. Rode os comandos abaixo para confirmar que o Docker está instalado e pronto para uso:

```
docker --version
docker compose version
```
Agora crie um diretório para a instalação do Gluetun WebUI.
```
mkdir gluetun-webui
cd gluetun-webui
```
Este diretório vai conter a configuração Docker Compose usada para rodar a interface web.

## Instalação

Crie um arquivo Docker Compose para o Gluetun WebUI.
```
nano compose.yaml
```
Insira a seguinte configuração:

```yaml
services:
  gluetun-webui:
    image: ghcr.io/sir-scuzza/gluetun-webui:latest
    container_name: gluetun-webui
    restart: unless-stopped
    ports:
      - "8000:8000"
    environment:
      - GLUETUN_API_URL=http://gluetun:8000
    volumes:
      - ./data:/app/data
```

Essa configuração vai:

- Implantar o container Gluetun WebUI
- Conectá-lo à API do Gluetun
- Expor o WebUI pela porta 8000
- Armazenar dados de configuração persistentes na pasta `data`

Salve o arquivo e saia do editor.

## Iniciar o Gluetun WebUI

Inicie o container usando Docker Compose.

```
docker compose up -d
```

O Docker vai baixar a imagem necessária e iniciar o container WebUI. Para verificar se o container está rodando, use:

```
docker ps
```

## Acessando a Interface Web

Com o container rodando, abra o WebUI no seu navegador.

```
http://SEU_ENDERECO_IP:8000
```

Substitua `SEU_ENDERECO_IP` pelo endereço IP do seu VPS. Depois de abrir a interface, você poderá:

- Monitorar o status da conexão VPN
- Gerenciar o comportamento do container Gluetun
- Visualizar detalhes da configuração VPN
- Controlar serviços roteados pelo container VPN



## Conclusão

Parabéns! Você instalou com sucesso o **Gluetun WebUI** no seu servidor Linux. A interface web agora permite que você monitore e gerencie facilmente seu container VPN Gluetun sem precisar usar comandos Docker manualmente.

Rodar o Gluetun WebUI junto com seu container VPN simplifica o gerenciamento e te dá uma visão clara do status e configuração da sua conexão VPN.

Se tiver dúvidas ou precisar de ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />