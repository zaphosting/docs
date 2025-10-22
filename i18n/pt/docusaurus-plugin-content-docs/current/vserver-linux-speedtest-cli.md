---
id: vserver-linux-speedtest-cli
title: "VPS: Configurar Speedtest-Cli no Linux"
description: "Descubra como configurar e usar o Speedtest-Cli para testes de rede confiáveis e automação → Saiba mais agora"
sidebar_label: Instalar Speedtest-Cli
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Speedtest-Cli é tanto uma ferramenta gratuita de linha de comando quanto uma biblioteca de software (libSpeedtest-Cli) para transferência de dados usando URLs. Ele suporta uma ampla variedade de protocolos — incluindo HTTP(S), FTP, SMTP, LDAP, MQTT e mais — e é comumente usado para tarefas como baixar arquivos, testar APIs e automatizar operações de rede.

Pensando em hospedar esse serviço você mesmo? Vamos te guiar em cada passo para configurar e ajustar, além de tudo que você precisa saber para manter tudo funcionando.

<InlineVoucher />

## Preparação

Antes de configurar o **Speedtest-Cli**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.

### Atualizar Sistema
Para garantir que seu sistema esteja rodando com as versões mais recentes de software e melhorias de segurança, você deve sempre fazer as atualizações do sistema primeiro. Para isso, execute o seguinte comando:

```
sudo apt update && sudo apt upgrade -y
```
Isso garante que seu sistema tenha os patches de segurança e versões de software mais recentes antes de continuar.

## Instalação

Agora que as preparações necessárias foram feitas, você pode prosseguir com a instalação do aplicativo Speedtest-Cli. Para isso, execute o seguinte comando:

```console
sudo apt install speedtest-cli
```

## Configuração

O speedtest-cli não depende de um arquivo de configuração tradicional, mas pode ser personalizado usando opções de linha de comando e variáveis de ambiente. Isso permite que você adapte para uso consistente e automatizado:

- `--server <ID>`: Seleciona um servidor específico pelo seu ID para resultados de teste mais consistentes e comparáveis.  
- `--bytes`: Exibe velocidades em bytes por segundo ao invés de bits.  
- `--simple`: Mostra apenas ping, download e upload em um formato compacto.  
- `--json` ou `--csv`: Útil para automação e registro, pois os resultados são armazenados em formato legível por máquina.  
- Suporte a proxy: Configure variáveis de ambiente como `http_proxy` ou `https_proxy` para rodar o speedtest-cli atrás de um proxy.  

Para uso repetido com as mesmas opções, é prático criar um alias no shell ou um pequeno script wrapper. Assim, você pode rodar o speedtest-cli rápido e garantir uma saída uniforme.

## Conclusão e mais Recursos

Parabéns! Você instalou e configurou com sucesso o Speedtest-Cli no seu VPS. Também recomendamos dar uma olhada nos seguintes recursos, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Site Oficial

Tem dúvidas específicas que não foram abordadas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />