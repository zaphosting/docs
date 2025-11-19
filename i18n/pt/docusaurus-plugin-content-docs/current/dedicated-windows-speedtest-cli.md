---
id: dedicated-windows-speedtest-cli
title: "Servidor Dedicado: Configure o Speedtest CLI no Windows"
description: "Descubra como gerenciar código-fonte de forma eficiente e colaborar sem complicações com o Speedtest CLI para desenvolvimento moderno → Saiba mais agora"
sidebar_label: Instalar Speedtest CLI
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Speedtest CLI é um sistema de controle de versão distribuído, feito para gerenciar código-fonte de forma eficiente. Ele permite que desenvolvedores acompanhem mudanças, trabalhem em diferentes branches ao mesmo tempo e colaborem em projetos sem estresse. Graças à sua flexibilidade e desempenho, o Speedtest CLI virou a ferramenta padrão para controle de versão no desenvolvimento de software moderno.

Quer hospedar esse serviço por conta própria? Vamos te guiar em cada passo para configurar e ajustar tudo, além de te mostrar o que é importante ficar de olho.



## Preparação

Antes de configurar o **Speedtest CLI**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou depois da instalação.


### Atualizar Sistema
Para garantir que seu sistema esteja rodando com as melhorias mais recentes de software e segurança, sempre faça as atualizações do sistema primeiro. Assim, seu sistema terá os patches de segurança e versões de software mais atuais antes de continuar.



## Instalação

Agora que as preparações necessárias foram feitas, você pode seguir com a instalação do Speedtest CLI. Para isso, baixe o Speedtest CLI para Windows (x64) aqui: https://install.speedtest.net/app/cli/ookla-speedtest-1.2.0-win64.zip

Depois, execute o instalador do arquivo baixado e siga os passos indicados.

![img](https://screensaver01.zap-hosting.com/index.php/s/XXERYCa3eKjYmxS/download)



## Configuração

O speedtest-cli não usa um arquivo de configuração tradicional, mas pode ser personalizado via opções de linha de comando e variáveis de ambiente. Isso permite adaptar o uso para ser consistente e automatizado:

- `--server <ID>`: Escolha um servidor específico pelo ID para resultados de teste mais consistentes e comparáveis.  
- `--bytes`: Mostra velocidades em bytes por segundo ao invés de bits.  
- `--simple`: Exibe só ping, download e upload em um formato compacto.  
- `--json` ou `--csv`: Útil para automação e registro, pois os resultados ficam em formato legível por máquina.  
- Suporte a proxy: Configure variáveis de ambiente como `http_proxy` ou `https_proxy` para rodar o speedtest-cli atrás de um proxy.  

Para usar sempre as mesmas opções, é prático criar um alias no shell ou um script wrapper pequeno. Assim, você roda o speedtest-cli rapidinho e garante saída uniforme.



## Conclusão e mais Recursos

Parabéns! Você instalou e configurou o Speedtest CLI no seu servidor dedicado com sucesso. Também recomendamos dar uma olhada nos recursos abaixo, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [Speedtest.net/apps/cli](https://www.speedtest.net/apps/cli) - Site Oficial

Tem dúvidas específicas que não foram respondidas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível todos os dias para te ajudar! 🙂