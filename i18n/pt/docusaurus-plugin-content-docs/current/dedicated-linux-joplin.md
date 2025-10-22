---
id: dedicated-linux-joplin
title: "Servidor Dedicado: Configure o Joplin no Linux"
description: "Descubra como organizar e sincronizar notas Markdown criptografadas entre dispositivos com o Joplin para uma tomada de notas segura e flexível → Saiba mais agora"
sidebar_label: Instalar Joplin
services:
- dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Joplin é um aplicativo open-source para anotações e tarefas que permite organizar notas baseadas em Markdown em cadernos pesquisáveis e sincronizá-las entre dispositivos. Ele oferece criptografia de ponta a ponta, um web clipper e sincronização multiplataforma. Perfeito para quem valoriza privacidade, flexibilidade e controle total sobre seus dados!

![img](https://screensaver01.zap-hosting.com/index.php/s/qfo8k2RXWPFqi3g/preview)

Pensando em hospedar esse serviço por conta própria? Vamos te guiar em cada passo para configurar e ajustar tudo, além de te mostrar o que é importante ficar de olho.

:::danger Linux com Variante Desktop necessária
Esse aplicativo só pode ser instalado e usado em um sistema Linux com interface gráfica; neste exemplo, usamos o Ubuntu Desktop 25.04 como referência.

:::

<InlineVoucher />



## Pré-requisitos

Antes de instalar o **Joplin**, certifique-se de que seu ambiente de hospedagem atende aos seguintes requisitos para garantir uma instalação tranquila e desempenho ideal.

| Hardware | Mínimo | Recomendação ZAP-Hosting |
| ---------- | ------------ | -------------------------- |
| CPU | 1 núcleo vCPU | 4 núcleos vCPU |
| RAM | 2 GB | 4 GB |
| Espaço em disco | 250 MB | 250 MB |

O software exige que todas as dependências necessárias estejam instaladas e que esteja rodando em um sistema operacional suportado. Verifique se seu servidor atende aos seguintes requisitos antes de prosseguir com a instalação:

**Dependências:** `Libfuse2`

**Sistema Operacional:** Linux com Suporte Desktop

Garanta que todas as dependências estejam instaladas e que a versão correta do sistema operacional esteja em uso para evitar problemas de compatibilidade durante a instalação do Joplin.



## Preparação

Antes de configurar o **Joplin**, você precisa preparar seu sistema. Isso inclui atualizar seu sistema operacional para a versão mais recente e instalar todas as dependências necessárias. Essas preparações garantem um ambiente estável e ajudam a evitar problemas durante ou após a instalação.


### Atualizar Sistema
Para garantir que seu sistema esteja rodando com as melhorias mais recentes de software e segurança, você deve sempre começar atualizando o sistema. Para isso, execute o seguinte comando:

```
sudo apt update && sudo apt upgrade -y
```
Isso garante que seu sistema tenha os patches de segurança e versões de software mais recentes antes de continuar.

### Instalar dependências
Após o processo de atualização, você pode prosseguir com a instalação das dependências.

#### Libfuse2
O Joplin requer que o Libfuse2 esteja instalado primeiro. Para isso, execute o comando: 
```
sudo apt install -y libfuse2
```




## Instalação
Agora que todos os requisitos foram cumpridos e as preparações feitas, você pode seguir com a instalação do aplicativo Joplin. Para isso, execute o comando:

```
wget -O - https://raw.githubusercontent.com/laurent22/joplin/dev/Joplin_install_and_update.sh | bash
```

O Joplin será baixado e instalado usando o script oficial de instalação. Apenas deixe o processo rodar até o fim, depois disso você pode abrir o aplicativo na hora.



![img](https://screensaver01.zap-hosting.com/index.php/s/Af9xjkqz7TSr4sZ/preview)



## Configuração

Depois de instalar o Joplin, você deve configurar as definições básicas para adaptar o aplicativo ao seu fluxo de trabalho. A configuração fica acessível pelo menu *Configurações*.

**Sincronização**  
O Joplin suporta múltiplos alvos de sincronização como Nextcloud, Dropbox, OneDrive ou WebDAV. Escolha seu provedor preferido em “Sincronização” e insira suas credenciais. Isso permite manter suas notas atualizadas entre dispositivos.

**Criptografia**  
Para proteger suas notas sincronizadas, ative a criptografia de ponta a ponta nas configurações de “Criptografia”. Uma chave será gerada e deve ser configurada em todos os dispositivos que acessam suas notas.

**Editor & Aparência**  
O Joplin usa Markdown para as notas. Nas configurações do “Editor” você pode definir se a prévia aparece automaticamente e ajustar o tipo e tamanho da fonte.

**Plugins & Extensões**  
O gerenciador de plugins integrado permite instalar recursos extras, como suporte a diagramas, integração com calendário ou gerenciamento avançado de tags.

**Web Clipper**  
Opcionalmente, ative a extensão de navegador “Joplin Web Clipper” para salvar páginas inteiras ou seleções diretamente como notas.

Com essas configurações básicas, o Joplin está pronto para uso em vários cenários, como gerenciamento de tarefas, documentação de projetos ou bases pessoais de conhecimento.



![img](https://screensaver01.zap-hosting.com/index.php/s/FyjyeF3EcRFe2qf/preview)




## Conclusão e mais Recursos

Parabéns! Você instalou e configurou com sucesso o Joplin no seu Servidor Dedicado. Também recomendamos dar uma olhada nos seguintes recursos, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [Joplinapp.org](https://joplin.org/) - Site Oficial  
- [Joplinapp.org/help/](https://joplinapp.org/help/) - Central de Ajuda do Joplin

Tem dúvidas específicas que não foram respondidas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂



<InlineVoucher />