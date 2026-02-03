---
id: vserver-linux-openclaw
title: "VPS: Configure o OpenClaw no Linux - Crie Seu Assistente de IA Pessoal!"
description: "Descubra como configurar e instalar o OpenClaw para auto-hospedagem e crie um assistente de IA pessoal e poderoso de código aberto → Saiba mais agora"
sidebar_label: Instalar OpenClaw
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

[OpenClaw](https://openclaw.ai/) é uma plataforma de automação e controle movida a IA que permite interagir com softwares através de uma interface baseada em navegador. Em vez de clicar manualmente em menus, navegar por interfaces ou repetir os mesmos fluxos de trabalho várias vezes, o OpenClaw pode executar tarefas programaticamente e oferecer controle remoto via seu dashboard web.

![img](https://screensaver01.zap-hosting.com/index.php/s/XQkk46EnKzxxWrK/preview)

O que torna o OpenClaw especialmente revolucionário é que ele cria uma “camada de controle” moderna para aplicações e sistemas. Em vez de estar preso a uma sessão local no desktop, o OpenClaw pode rodar numa máquina remota, como um VPS, e ainda ser totalmente gerenciável de qualquer lugar. Isso o torna uma ferramenta poderosa para quem quer automação confiável, controle remoto e gestão centralizada sem precisar manter um computador ligado localmente.

Pensando em hospedar esse serviço você mesmo? Vamos te guiar passo a passo em como configurar e ajustar tudo, além de tudo que você precisa saber.

<InlineVoucher />


## Casos de uso do OpenClaw

O OpenClaw pode ser usado em vários cenários do dia a dia e é ideal para quem quer automatizar tarefas, centralizar o uso de IA ou rodar um assistente persistente sempre disponível.

Um uso comum é consolidar interações de IA em múltiplas plataformas. Em vez de usar ferramentas separadas para diferentes apps de mensagens, o OpenClaw atua como um assistente único com contexto e configuração consistentes, independente de onde for acessado.

O OpenClaw também é ótimo para automação. Ele ajuda a reduzir trabalhos manuais repetitivos, cuidando de tarefas recorrentes, organizando informações, resumindo conteúdos e fornecendo respostas estruturadas.

Outro uso importante é automação web. Controlando sessões de navegador via instâncias dedicadas do Chrome ou Chromium, o OpenClaw pode interagir com interfaces web mesmo quando não há integração direta via API.

Para suportar esses cenários, o OpenClaw oferece uma gama enorme de recursos, incluindo suporte multi-canal (WhatsApp, Telegram, Slack, Discord), arquitetura baseada em gateway para gerenciar sessões e canais, recursos opcionais de voz, interface interativa em canvas, plataforma extensível de skills, suporte a múltiplos provedores de IA (como OpenAI e Anthropic), nós de dispositivos para ações móveis, autenticação por chave API e gerenciamento persistente de workspace e configuração.

![img](https://screensaver01.zap-hosting.com/index.php/s/7A5eiaMSE8FFQRs/download)


## Pré-requisitos

Dependendo de como você planeja usar o **OpenClaw**, o consumo de recursos pode aumentar rápido. Configurações básicas (por exemplo, só usar a interface web com automação mínima) rodam bem em VPS menores, mas casos mais avançados, como múltiplos canais, muitas skills ativadas ou automação via navegador, podem exigir muito mais recursos.

Para garantir performance estável, recomendamos escolher um plano de VPS com CPU e RAM suficientes, especialmente se o OpenClaw rodar continuamente em background.

| Hardware   | Mínimo      | Recomendação ZAP-Hosting |
| ---------- | ------------ | ------------------------ |
| CPU        | 1 núcleo vCPU | 8 núcleos vCPU           |
| RAM        | 4 GB         | 16 GB                    |
| Espaço em disco | 25 GB    | 50 GB                    |




## Instalação
A instalação começa rodando o script oficial do instalador OpenClaw no seu VPS Linux. Conecte-se via SSH e execute o comando:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

Após rodar o comando, um script interativo de instalação será iniciado automaticamente e vai te guiar pelo setup. O instalador verifica seu ambiente, instala dependências faltantes e inicia o processo de onboarding do OpenClaw.

![img](https://screensaver01.zap-hosting.com/index.php/s/DJcT4NrJ7ts8Gqn/download)



### Detecção da plataforma e verificação de dependências

O instalador detecta automaticamente seu sistema operacional e instala as dependências necessárias, se faltar alguma. Por exemplo, se o Node.js não estiver instalado, ele será instalado automaticamente. Nenhuma ação manual é necessária.



### Instalando pacotes necessários

O OpenClaw instala os pacotes necessários usando o gerenciador de pacotes do sistema. Nenhuma ação manual é necessária. Quando todos os pacotes estiverem instalados, o instalador continua automaticamente.

### Instalando o OpenClaw

Depois que as dependências estiverem preparadas, o instalador baixa e instala a versão do OpenClaw. Assim que o processo terminar, você verá uma confirmação como esta:

![img](https://screensaver01.zap-hosting.com/index.php/s/NwTqC997KQ23Htr/preview)



### Onboarding do OpenClaw

Após a instalação, o assistente de onboarding inicia automaticamente. Esse onboarding é necessário para completar a configuração inicial e deixar o OpenClaw pronto para uso.



Primeiro, leia o aviso de segurança exibido e confirme para continuar. Depois, escolha o modo de onboarding. Para a maioria dos usuários, **QuickStart** é a opção recomendada.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZQXSmmwQ29yk374/preview)

Em seguida, escolha seu modelo/provedor de autenticação. Neste exemplo, **OpenAI** foi selecionado. Agora insira sua chave API do OpenAI. O OpenClaw vai armazenar essa chave localmente na configuração para usar nas próximas sessões. Depois de salvar a chave, selecione o modelo padrão que o OpenClaw deve usar.

![img](https://screensaver01.zap-hosting.com/index.php/s/HQ5MNqCxdd5EY8Q/preview)

Nas etapas finais, você pode configurar opcionalmente canais (como Telegram, Discord ou Slack), skills e hooks. Se não quiser configurar agora, pode pular e continuar.

![img](https://screensaver01.zap-hosting.com/index.php/s/xFnb3GNSiSZBPnD/preview)

Se quiser usar o OpenClaw via Telegram, primeiro crie um bot no Telegram e obtenha seu token API. Isso é feito diretamente no Telegram usando a conta oficial **BotFather**.

Abra o chat com o **BotFather**, inicie a criação enviando `/newbot` e siga as instruções.  
O BotFather vai pedir um nome para exibição e depois um nome de usuário. O nome de usuário deve terminar com `bot`.

A conversa normalmente é assim:

```
Usuário: /newbot 

BotFather: Beleza, um novo bot. Como vamos chamá-lo? Escolha um nome para seu bot.  

Usuário: ZAP DOCS EXAMPLE

BotFather: Legal. Agora escolha um nome de usuário para seu bot. Deve terminar em `bot`. Por exemplo: TetrisBot ou tetris_bot. 

Usuário: ZAP_DOCS_EXAMPLE_BOT 

BotFather: Pronto! Parabéns pelo seu novo bot. Você o encontrará em t.me/ZAP_DOCS_EXAMPLE_BOT. Agora pode adicionar descrição, seção sobre e foto de perfil para seu bot, veja /help para lista de comandos. Ah, quando terminar de criar seu bot, chame nosso Suporte de Bots se quiser um nome de usuário melhor. Só garanta que o bot esteja funcionando antes.

Use este token para acessar a API HTTP:
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
Mantenha seu token seguro, ele pode ser usado por qualquer um para controlar seu bot.

Para descrição da API do Bot, veja: https://core.telegram.org/bots/api
```

Depois que o BotFather confirmar a criação, copie o **token** exibido e guarde com segurança. Você vai precisar dele depois para conectar o Telegram como canal no onboarding ou configuração do OpenClaw. Qualquer um com esse token pode controlar seu bot, então nunca compartilhe publicamente.

![img](https://screensaver01.zap-hosting.com/index.php/s/JHTxW7Pi4SRsoe7/preview)

Após criar o bot no Telegram e salvar o token, continue o onboarding do OpenClaw. Nas próximas etapas, você pode instalar **skills** e ativar **hooks**. Essas opções são recomendadas, mas podem ser puladas e configuradas depois na seção de configuração, se preferir terminar o setup primeiro.

Quando o onboarding terminar, o OpenClaw instala automaticamente o **serviço Gateway**. Por fim, selecione a opção **Web UI** para que o OpenClaw mostre o link do dashboard. Assim você pode acessar a interface de controle do OpenClaw e continuar gerenciando pelo navegador.

Depois disso, o onboarding será marcado como concluído. No final do setup, o OpenClaw também oferece instalar o **script de auto-completar para shell**. É opcional, mas recomendado, pois melhora a usabilidade no terminal com auto-completar para comandos OpenClaw. Siga os passos indicados.

![img](https://screensaver01.zap-hosting.com/index.php/s/xWNpjYj2XeKgK4J/preview)





## Configuração

Nossos servidores VPS são entregues sem interface gráfica por padrão. Por isso, o OpenClaw roda em modo headless e expõe sua interface de controle apenas localmente no servidor, na porta `18789`.

Quando a instalação e onboarding terminarem, o OpenClaw mostrará as informações do dashboard no console:

```
Link do dashboard (com token):
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Copie/cole essa URL num navegador nesta máquina para controlar o OpenClaw.
Nenhuma GUI detectada. Abra do seu computador:
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111

Depois abra:
http://localhost:18789/
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Como a interface web está vinculada a `127.0.0.1`, não pode ser acessada diretamente pela internet. Para acessar com segurança do seu PC, crie um túnel SSH que encaminhe a porta do OpenClaw do VPS para sua máquina local.

No seu PC, abra um terminal e rode:

```bash
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111
```

Enquanto essa sessão SSH estiver aberta, você pode acessar a interface de controle do OpenClaw no navegador pelo endereço:

```
http://localhost:18789/
```

Se o OpenClaw exigir autenticação, abra o link com token mostrado na saída do OpenClaw:

```
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```



:::tip Use uma GUI (Ambiente Desktop)

Se preferir usar o OpenClaw com interface gráfica, pode instalar um ambiente desktop no seu VPS, por exemplo **XFCE**. Depois de instalar a GUI (e uma solução de desktop remoto como RDP ou VNC), você pode acessar e controlar o OpenClaw direto pelo desktop do VPS, sem precisar usar o redirecionamento de porta SSH.

:::



![img](https://screensaver01.zap-hosting.com/index.php/s/FscTYx36eWeHHca/download)



### Instalando skills

Skills ampliam o OpenClaw com funcionalidades e integrações extras.
O OpenClaw já vem com mais de 50 skills. Você pode instalar skills direto no dashboard, abrindo a seção **Skills** e selecionando as que quer ativar.

![img](https://screensaver01.zap-hosting.com/index.php/s/gXxs6j9WHtxPYAQ/preview)



### Ativando hooks

Hooks permitem que o OpenClaw execute ações automaticamente quando certos eventos ocorrem ou comandos específicos são usados.
Isso é útil para automatizar tarefas recorrentes, salvar contexto ou disparar fluxos de trabalho sem interação manual.

![img](https://screensaver01.zap-hosting.com/index.php/s/KYSWM4cFcDp45F6/preview)



### Configurando canais

Canais permitem usar o OpenClaw via plataformas de mensagens.
No dashboard você pode configurar e conectar canais suportados como Telegram, Discord, Slack e outros.

![img](https://screensaver01.zap-hosting.com/index.php/s/Le38gZXf2BDintr/preview)

Dependendo da plataforma escolhida, será necessário fornecer tokens ou credenciais adicionais (como explicado no processo de instalação para o token do bot Telegram criado via BotFather).



Depois que um canal estiver conectado com sucesso, o OpenClaw pode receber e responder mensagens por essa plataforma. Uma conversa com o assistente de IA via Telegram pode ser assim:

![img](https://screensaver01.zap-hosting.com/index.php/s/oFRZCEPFyyMmsG4/preview)



## Questões de segurança

O OpenClaw é uma ferramenta poderosa e deve sempre ser usada com as devidas precauções de segurança. O dashboard do Gateway é protegido por um token, que funciona como uma senha e dá acesso à sua instância OpenClaw. Nunca compartilhe esse token publicamente (em screenshots, tickets ou chats), pois quem tiver o token pode acessar e controlar o dashboard.

Recomendamos manter o OpenClaw protegido atrás de um firewall e evitar expor a interface do gateway diretamente na internet pública. Por padrão, o OpenClaw vincula o serviço gateway a `127.0.0.1`, o que impede acesso externo e é a opção mais segura para a maioria dos casos. Para acessar o dashboard remotamente, use redirecionamento de porta SSH e restrinja o acesso apenas a usuários confiáveis.



## Conclusão e mais Recursos

Parabéns! Você instalou e configurou o OpenClaw no seu VPS com sucesso. Também recomendamos dar uma olhada nos recursos abaixo, que podem te ajudar ainda mais durante a configuração do seu servidor:

- [openclaw.ai](https://https://openclaw.ai/) - Site Oficial
- [docs.openclaw.ai](https://docs.openclaw.ai/start/getting-started) - Documentação OpenClaw
- [clawhub.com](https://clawhub.com/) - ClawHub - Skills criadas pela comunidade

Tem dúvidas específicas que não foram respondidas aqui? Para mais perguntas ou suporte, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂

<InlineVoucher />