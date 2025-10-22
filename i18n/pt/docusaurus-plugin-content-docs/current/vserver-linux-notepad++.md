---
id: vserver-linux-notepad++
title: "VPS: Configurar Notepad++ no Linux"
description: "Descubra como configurar e otimizar o Notepad++ no Linux para uma edição e desenvolvimento de código eficiente e leve → Saiba mais agora"
sidebar_label: Instalar Notepad++
services:
- vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Notepad++ é um editor de texto e código-fonte gratuito e open-source para Windows. Ele suporta realce de sintaxe, dobramento de código e edição em abas para várias linguagens de programação e script, além de ser altamente personalizável via plugins. Conhecido por sua performance rápida e baixo uso de recursos, o Notepad++ continua sendo uma escolha popular para desenvolvedores e usuários que buscam uma ferramenta poderosa e leve para edição.

![img](https://screensaver01.zap-hosting.com/index.php/s/jMMDejqDfWDCfrr/preview)

Pensando em hospedar esse serviço você mesmo? Vamos te guiar em cada passo para configurar e ajustar tudo, além de tudo que você precisa saber.

:::danger Linux com Variante Desktop necessária
Este aplicativo só pode ser instalado e usado em um sistema Linux com interface gráfica; neste exemplo, usamos o Ubuntu Desktop 25.04 como referência.

:::

<InlineVoucher />

## Pré-requisitos

Antes de instalar o **Notepad++**, certifique-se de que seu ambiente de hospedagem atende aos seguintes requisitos para garantir uma instalação tranquila e desempenho ideal.

| Hardware | Mínimo | Recomendação ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU | 1 núcleo vCPU | 4 núcleos vCPU |
| RAM | 2 GB | 4 GB |
| Espaço em disco | 25 MB | 25 GB |

O software exige que todas as dependências necessárias estejam instaladas e que esteja rodando em um sistema operacional suportado. Garanta que seu servidor atenda aos seguintes requisitos antes de prosseguir com a instalação:

**Dependências:** `Snap`

**Sistema Operacional:** Linux com suporte Desktop

Verifique se todas as dependências estão instaladas e se a versão correta do sistema operacional está em uso para evitar problemas de compatibilidade durante a instalação do Notepad++.

## Preparação

Antes de configurar o **Notepad++**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente e instalar todas as dependências necessárias. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.

### Atualizar Sistema
Para garantir que seu sistema esteja rodando com as versões mais recentes de software e melhorias de segurança, sempre faça a atualização do sistema primeiro. Para isso, execute o comando:

```
sudo apt update && sudo apt upgrade -y
```
Isso garante que seu sistema tenha os patches de segurança e versões de software mais recentes antes de continuar.

### Instalar dependências
Após o processo de atualização, você pode prosseguir com a instalação das dependências.

#### Snap
O Notepad++ requer que o Snap esteja instalado primeiro. Para isso, execute o comando:
```
sudo apt install snapd
```

## Instalação
Agora que todos os requisitos foram atendidos e as preparações concluídas, você pode prosseguir com a instalação do Notepad++. Para isso, execute o comando:

```
sudo snap install notepad-plus-plus
```

O Notepad++ será baixado e instalado usando o script oficial. Apenas deixe o processo rodar até o fim, depois você pode abrir o aplicativo na hora.

![img](https://screensaver01.zap-hosting.com/index.php/s/ca9Z8D37wCSrDbf/preview)

## Configuração

O Notepad++ oferece uma ampla gama de opções de personalização acessíveis em *Configurações > Preferências*. Elas permitem que você adapte o editor ao seu fluxo de trabalho específico:

- **Geral**: Controle o comportamento na inicialização, como recarregar arquivos abertos anteriormente, definir uma linguagem padrão ou definir como as abas se comportam.  
- **Configurações do Editor**: Ajuste o tipo e tamanho da fonte, largura da tabulação, numeração de linhas, auto-indentação ou se espaços e marcas de tabulação são exibidos.  
- **Esquemas de Cores & Sintaxe**: Use o “Configurador de Estilo” para alternar entre temas e personalizar o realce de sintaxe para cada linguagem suportada.  
- **Manipulação de Arquivos**: Configure opções como recarregamento automático de arquivos ao serem alterados, comportamento com arquivos grandes ou preferências de codificação como UTF-8.  
- **Segurança & Backup**: Ative backups automáticos ou restauração de sessão para evitar perda de dados.  
- **Plugins**: Instale e gerencie extensões via o Gerenciador de Plugins para adicionar funcionalidades como suporte FTP ou formatação avançada.  

Essas preferências tornam o Notepad++ altamente adaptável, seja para edição simples de texto ou desenvolvimento completo de software.

![img](https://screensaver01.zap-hosting.com/index.php/s/X8og5qnFkBTRcmA/preview)

## Conclusão e mais Recursos

Parabéns! Você instalou e configurou o Notepad++ com sucesso no seu VPS. Também recomendamos dar uma olhada nos seguintes recursos, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [notepad-plus-plus.org/](https://notepad-plus-plus.org/) - Site Oficial

Tem dúvidas específicas que não foram abordadas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂


<InlineVoucher />