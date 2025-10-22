---
id: vserver-linux-ts6
title: "VPS: Configure o Servidor Teamspeak 6 no seu VPS Linux"
description: "Descubra como configurar e otimizar o Servidor TeamSpeak 6 para hospedagem confiável e desempenho top → Saiba mais agora"
sidebar_label: Instalar Servidor Teamspeak 6
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

No verão de 2025, o TeamSpeak lançou a **versão Beta** do **Servidor TeamSpeak 6**. Agora você pode experimentar a próxima geração do TeamSpeak na prática!

Quer hospedar esse serviço por conta própria? Vamos te guiar passo a passo em como configurar e ajustar tudo, além de tudo que você precisa saber para rodar tranquilo.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)

<InlineVoucher />



## Requisitos

Antes de instalar o **Servidor Teamspeak 6**, certifique-se que seu ambiente de hospedagem atende aos seguintes requisitos para garantir uma instalação suave e desempenho ideal.

| Hardware   | Mínimo      | Recomendação ZAP-Hosting |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 núcleo vCPU | 4 núcleos vCPU           |
| RAM        | 1 GB         | 4 GB                     |
| Espaço em disco | 1 GB     | 25 GB                    |



## Preparação

Antes de configurar o **Servidor TeamSpeak 6**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente e instalar todas as dependências necessárias. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.


### Atualizar Sistema
Para garantir que seu sistema esteja rodando com os softwares e melhorias de segurança mais recentes, sempre faça a atualização do sistema primeiro. Para isso, rode o comando:

```
sudo apt update && sudo apt upgrade -y
```
Isso garante que seu sistema tenha os patches de segurança e versões de software mais atuais antes de continuar.

### Instalar dependências
Depois que o processo de atualização terminar, você pode instalar as dependências. Para uma instalação rápida, fácil e recomendada, sugerimos usar Docker. Para isso, instale o Docker Engine com:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```




## Instalação
Agora que todos os requisitos foram cumpridos e as preparações feitas, você pode seguir para a instalação do aplicativo Servidor Teamspeak 6.

O próximo passo é criar o arquivo Docker Compose `docker-compose.yml` para o Servidor TeamSpeak 6. Você pode escolher qualquer diretório, mas neste exemplo o arquivo será criado em `/opt/containers/ts6/`. Para isso, usamos o arquivo Compose oficial do TeamSpeak:

```
services:
  teamspeak:
    image: teamspeaksystems/teamspeak6-server:latest
    container_name: teamspeak-server
    restart: unless-stopped
    ports:
      - "9987:9987/udp"   # Porta de Voz
      - "30033:30033/tcp" # Transferência de Arquivos
      # - "10080:10080/tcp" # Web Query
    environment:
      - TSSERVER_LICENSE_ACCEPTED=accept
    volumes:
      - teamspeak-data:/var/tsserver/

volumes:
  teamspeak-data:
```

Navegue até o diretório onde o arquivo será criado e crie o arquivo. Para isso, use o comando `nano docker-compose.yml` e cole o conteúdo.

![img](https://screensaver01.zap-hosting.com/index.php/s/yBZTKL8MYgLiJEt/download)


Para iniciar o container Docker e o Servidor TeamSpeak 6, rode o comando Docker Compose:
```
docker compose -f /opt/containers/ts6/docker-compose.yml up
```

Agora o container Docker para o Servidor TeamSpeak 6 vai iniciar. Por padrão, ele ainda não roda de forma persistente. Na primeira inicialização, você verá **informações importantes** sobre a **Conta Admin do Server Query** e a **chave de privilégio**.

![img](https://screensaver01.zap-hosting.com/index.php/s/7nNwWkEdG84yx4y/download)

Guarde essas informações com segurança, pois não serão exibidas novamente nas próximas inicializações. Depois, pare o container usando `CTRL+C`.



## Configuração

Você pode ajustar configurações adicionais do Servidor TeamSpeak 6 usando **variáveis de ambiente** no arquivo Docker Compose. Isso permite configurar o servidor do seu jeito. A lista completa de opções está na documentação oficial do [Servidor TeamSpeak 6](https://github.com/teamspeak/teamspeak6-server/blob/main/CONFIG.md).

Exemplo no `docker-compose.yml`:

```
environment:
  - TS6_SERVER_NAME=MyTS6Server
  - TS6_QUERY_PORT=10022
```



## Operação do servidor

Para manter o Servidor TeamSpeak 6 rodando em segundo plano, inicie o container com o comando:

```
docker compose -f /opt/containers/ts6/docker-compose.yml up -d
```

Para parar o Servidor TeamSpeak 6, pare o container com o comando:

```
docker compose -f /opt/containers/ts6/docker-compose.yml down
```



## Conectando

Quando o Servidor TeamSpeak 6 estiver rodando, você pode se conectar usando o Cliente TeamSpeak 6. Basta usar o endereço IP do seu servidor junto com a porta correta. Insira esses dados no cliente para conectar e começar a testar.

![img](https://screensaver01.zap-hosting.com/index.php/s/4J6HJjQdRddjGFK/preview)



## Conclusão e mais Recursos

Parabéns! Você instalou e configurou com sucesso o Servidor Teamspeak 6 no seu VPS. Também recomendamos dar uma olhada nos recursos abaixo, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [Site Oficial](https://teamspeak.com/en/) - Informações e downloads do TeamSpeak 6
- [Fórum da Comunidade](https://community.teamspeak.com/) - Suporte e discussões entre usuários
- [GitHub Issues](https://github.com/teamspeak/teamspeak6-server/issues) - Reporte bugs e acompanhe problemas abertos

Tem dúvidas específicas que não foram respondidas aqui? Para mais perguntas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂