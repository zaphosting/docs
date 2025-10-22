---
id: vserver-windows-speedtest-cli
title: "VPS: Configurar Speedtest CLI no Windows"
description: "Descubra como gerenciar código-fonte de forma eficiente e colaborar usando o Speedtest CLI para um controle de versão tranquilo no desenvolvimento moderno → Saiba mais agora"
sidebar_label: Instalar Speedtest CLI
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Speedtest CLI é um sistema de controle de versão distribuído projetado para o gerenciamento eficiente de código-fonte. Ele permite que desenvolvedores acompanhem mudanças, trabalhem em diferentes branches simultaneamente e colaborem em projetos de forma fluida. Graças à sua flexibilidade e desempenho, o Speedtest CLI se tornou a ferramenta padrão para controle de versão no desenvolvimento de software moderno.

Pensando em hospedar esse serviço você mesmo? Vamos te guiar em cada passo para configurar e ajustar tudo, além de tudo que você precisa saber para manter seu setup tinindo.

<InlineVoucher />

## Preparação

Antes de configurar o **Speedtest CLI**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.

### Atualizar Sistema
Para garantir que seu sistema esteja rodando com as melhorias mais recentes de software e segurança, sempre faça as atualizações do sistema primeiro. Isso assegura que seu sistema tenha os patches de segurança e versões de software mais atuais antes de continuar.

## Instalação

Agora que as preparações necessárias foram feitas, você pode seguir com a instalação do aplicativo Speedtest CLI. Para isso, baixe o Speedtest CLI para Windows (x64) aqui: https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Depois, execute o instalador do arquivo baixado e siga os passos indicados.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)

## Configuração

O speedtest-cli não depende de um arquivo de configuração tradicional, mas pode ser customizado usando opções de linha de comando e variáveis de ambiente. Isso permite que você adapte para um uso consistente e automatizado:

- `--server <ID>`: Seleciona um servidor específico pelo seu ID para resultados de teste mais consistentes e comparáveis.  
- `--bytes`: Exibe velocidades em bytes por segundo ao invés de bits.  
- `--simple`: Mostra apenas ping, download e upload em um formato compacto.  
- `--json` ou `--csv`: Útil para automação e registro, pois os resultados são armazenados em formato legível por máquina.  
- Suporte a proxy: Configure variáveis de ambiente como `http_proxy` ou `https_proxy` para rodar o speedtest-cli atrás de um proxy.  

Para uso repetido com as mesmas opções, é prático criar um alias no shell ou um pequeno script wrapper. Assim, você roda o speedtest-cli rapidinho garantindo saída uniforme.

## Conclusão e mais Recursos

Parabéns! Você instalou e configurou com sucesso o Speedtest CLI no seu vServer. Também recomendamos dar uma olhada nos recursos abaixo, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Site Oficial

Tem dúvidas específicas que não foram abordadas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />