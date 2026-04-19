---
id: verver-one-click-apps-installer
title: "VPS: Instalador de Apps One Click"
description: "Implemente apps com o Instalador de Apps One Click para VPS, gerencie projetos pela interface web e use o Coolify para gerenciamento avançado -> Saiba mais agora"
sidebar_label: Instalador One Click de Apps
services:
 - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

O Instalador de Apps One Click permite que você navegue por um catálogo extenso de apps e implemente-os diretamente pela interface web do seu VPS. Neste guia, você vai aprender a preparar seu servidor, escolher o tipo correto de instalação, instalar e gerenciar apps, além de usar as configurações avançadas e ferramentas de solução de problemas quando necessário.

<InlineVoucher />

## Preparação

Antes de usar o Instalador de Apps One Click, seu VPS deve atender aos requisitos mínimos e usar um sistema operacional suportado.

:::info Requisitos Mínimos
O recurso de apps exige que seu VPS esteja online e configurado com recursos suficientes para rodar tanto os serviços da plataforma quanto os apps instalados de forma confiável.
:::

| Requisito | Mínimo | Recomendado |
| --- | --- | --- |
| Status do servidor | Online | Online |
| Armazenamento | 30 GB | 50 GB |
| RAM | 2 GB | 4 GB |
| CPU | 2 núcleos | 4 núcleos |
| Sistema operacional | Debian ou Ubuntu LTS | Debian 13 - EN - 64bit |

:::caution Recomendação de Sistema Operacional Limpo
É altamente recomendado configurar o recurso de apps em uma instalação limpa do sistema operacional. Isso ajuda a evitar conflitos com serviços existentes, portas ocupadas, configurações Docker ou personalizações já presentes no servidor.
:::

Se precisar reinstalar seu VPS antes de continuar, use uma imagem limpa suportada do Debian ou Ubuntu LTS pelo painel de controle do seu VPS.

## Acessando o Instalador de Apps One Click

Abra seu VPS na interface web da ZAP-Hosting e localize a seção One Click Apps. A partir daí, você pode iniciar a configuração inicial e depois retornar para gerenciar todos os apps instalados no servidor.

Na primeira vez que abrir esse recurso, será necessário escolher como a plataforma deve ser instalada no seu VPS.

## Escolhendo o Tipo de Instalação

Você pode escolher entre uma instalação completa ou uma instalação apenas como nó. A opção correta depende se este VPS deve hospedar tanto o painel de controle quanto os apps, ou apenas atuar como um nó vinculado a outro painel.

### Instalação Completa

Escolha **Instalação Completa** se quiser configurar o servidor com o painel e o próprio servidor como nó. Esta é a opção recomendada para usuários iniciantes e para a maioria das implantações padrão.

Com este método, você pode:

- implementar apps do catálogo de apps
- gerenciar projetos e ambientes
- organizar todos os apps em um só lugar
- usar as ferramentas integradas de gerenciamento pela interface web
- acessar o painel avançado posteriormente, se necessário

![img](https://screensaver01.zap-hosting.com/index.php/s/nqGL3PFPicTArY9/preview)

:::tip Recomendado para a Maioria dos Usuários
Se esta é sua primeira vez usando o recurso de apps, selecione a opção de instalação completa. Ela oferece a configuração mais simples e permite gerenciamento completo diretamente pela interface web da ZAP-Hosting.
:::

### Instalação Apenas como Nó

Escolha **Instalação Apenas como Nó** se quiser que este VPS atue somente como um nó. Você poderá vinculá-lo a outro servidor VPS ou a uma instância de painel externa.

Esta opção é útil se você deseja:

- escalar entre vários sistemas VPS
- centralizar o gerenciamento em um único painel
- vincular este servidor a uma implantação existente
- expandir uma configuração multi-nó já existente

:::note Opção Avançada de Implantação
A instalação apenas como nó é destinada a usuários que já possuem outra instância de painel disponível ou que querem conectar este servidor a um ambiente externo.
:::

## Instalando o Recurso de Apps

Após selecionar o tipo de instalação, inicie a configuração pela interface web. A instalação inicial geralmente leva apenas alguns minutos.

Durante esse processo, os serviços da plataforma necessários para o recurso One Click Apps são implantados no seu VPS. Quando concluído, o catálogo de apps e as seções de gerenciamento ficam disponíveis na interface web.

:::info Comportamento da Instalação
Os detalhes exatos do progresso da instalação podem variar dependendo do desempenho do seu VPS, estado do sistema operacional e condições da rede. Se a configuração não for concluída com sucesso, consulte a seção de solução de problemas mais adiante neste guia.
:::

## Navegando pelo Catálogo de Apps

Quando a instalação estiver completa, você pode abrir o catálogo de apps e navegar pelas opções disponíveis. O catálogo contém mais de 300 apps prontos para implantação e suporta filtros para ajudar a encontrar o app correto rapidamente.

![](https://screensaver01.zap-hosting.com/index.php/s/fBwcCiNJTZooqnB/preview)

### Pesquisando e Filtrando Apps

No catálogo, você pode buscar apps pelo nome e filtrar por categoria. Isso ajuda a restringir as opções disponíveis na interface estilo loja de apps e encontrar o alvo certo para seu projeto.

Ações típicas incluem:

- buscar pelo nome do app
- filtrar por categoria
- revisar as entradas disponíveis de apps
- selecionar um app para implantação

Esse fluxo é especialmente útil se você gerencia muitos apps ou compara vários serviços antes da instalação.

### Iniciando a Instalação de um App

Após selecionar um app no catálogo, inicie a instalação pela interface web. Dependendo do app, pode ser necessário definir valores como:

- `[your_project_name]`
- `[your_environment_name]`
- `[your_domain]`
- `[your_app_name]`

Esses espaços reservados representam valores específicos da sua implantação. Por exemplo, `[your_domain]` deve ser substituído pelo domínio que você quer usar para o app.

:::tip Projetos e Ambientes
Use projetos e ambientes para manter sua implantação organizada. Isso é especialmente útil quando você hospeda múltiplos apps, versões de teste ou separa serviços de produção e staging.
:::

## Gerenciando Apps Instalados

Após a implantação, seus apps instalados aparecem na seção de gerenciamento da interface web. A partir daí, você pode monitorar e controlar seus serviços sem precisar trabalhar manualmente com os containers subjacentes.

![](https://screensaver01.zap-hosting.com/index.php/s/WTMSqkJ5zPKWjmn/preview)

### Ações de Gerenciamento Disponíveis

A seção de apps instalados permite executar ações comuns do ciclo de vida diretamente pela interface web.

| Ação | Propósito |
| --- | --- |
| Iniciar | Inicia um app parado |
| Parar | Para um app em execução |
| Ver logs | Abre os logs do app para solução de problemas |
| Reinstalar | Reimplanta o app |

Essas ferramentas facilitam o gerenciamento de todos os apps em um só lugar, especialmente se você quer controle simples via web em vez de administração manual por linha de comando.

### Organizando Projetos e Ambientes

Projetos e ambientes ajudam a estruturar suas implantações de forma clara. Você pode usá-los para separar:

- apps pessoais e de produção
- ambientes de teste e produção
- implantações para múltiplos clientes ou equipes
- diferentes stacks no mesmo VPS

Essa organização se torna cada vez mais importante conforme sua coleção de apps cresce e você gerencia mais serviços em um ou mais nós.

## Domínios, Acesso Cloud e SSL

O recurso One Click Apps suporta domínios personalizados e integração com a ZAP Cloud. Isso permite expor apps de forma segura e provisionar certificados SSL para suas implantações.

:::info Suporte a Domínio e SSL
Você pode usar domínios personalizados para seus apps e aproveitar o provisionamento de certificados SSL onde suportado pela configuração da plataforma.
:::

Ao atribuir um domínio, certifique-se de que seus registros DNS apontem para `[your_server_ip]`. Se seu domínio não estiver configurado corretamente, o app pode não ficar acessível pela internet.

| Valor | Descrição |
| --- | --- |
| `[your_domain]` | O domínio ou subdomínio atribuído ao seu app |
| `[your_server_ip]` | O endereço IP público do seu VPS |

:::caution DNS Deve Apontar para Seu VPS
Se o DNS de `[your_domain]` não apontar para `[your_server_ip]`, a validação do domínio e o acesso ao app podem falhar.
:::

## Usando Configurações Avançadas

Usuários avançados podem acessar funcionalidades adicionais pelo painel externo disponível na seção de configurações avançadas.

![](https://screensaver01.zap-hosting.com/index.php/s/BHnZWBGAzgo5myp/preview)

Isso pode ser útil se você precisar de personalização mais profunda, controle expandido de implantação ou acesso direto a recursos além da interface web padrão.

### Limitação Importante de Suporte

:::caution Escopo de Suporte para Uso do Painel Avançado
Usuários avançados são bem-vindos para usar o painel externo Coolify para personalizações e funcionalidades adicionais. Porém, o suporte é limitado à interface web da ZAP-Hosting. Se você fizer alterações fora da interface web, a assistência pode não estar disponível para essas modificações personalizadas.
:::

### Quando Usar o Painel Avançado

Você pode querer usar o painel avançado se precisar de:

- personalização detalhada da implantação
- fluxos de trabalho diretos de vinculação de nós
- configuração avançada de apps
- gerenciamento em nível de painel além da interface simplificada

Se perder acesso ou a integração parar de responder, use as ferramentas de solução de problemas descritas abaixo antes de fazer alterações manuais.

## Vinculando Nós

Se você escolheu o tipo de instalação apenas como nó, pode vincular este VPS a outro servidor VPS ou a uma instância de painel externa. Isso permite escalar sua infraestrutura e gerenciar múltiplos nós a partir de um único local.

A vinculação de nós é útil quando você quer:

- distribuir apps entre vários sistemas VPS
- centralizar o gerenciamento
- expandir capacidade sem criar implantações isoladas
- conectar a um ambiente de painel externo

:::note Vinculação a Painel Externo
Você pode vincular seu nó a outro VPS ou a uma instância de painel externa. Os detalhes exatos da vinculação dependem do ambiente alvo já em uso.
:::

## Solução de Problemas de Status Degradado

Se a interface web mostrar um status degradado, significa que a plataforma não consegue contatar ou obter dados da instância que alimenta o recurso One Click Apps. Siga os passos de solução de problemas na ordem cronológica.

### Indicadores de Status

O popup de solução de problemas pode mostrar indicadores como os seguintes:

| Status | Significado |
| --- | --- |
| Status Coolify: Ativo | O serviço do painel parece estar rodando |
| Status API: Acessível | A API pode ser alcançada atualmente |
| Status Serviço: Online | Seu VPS está online |

Se uma ou mais partes não estiverem funcionando corretamente, continue com os passos abaixo.

### Passo 1: Confirme que o VPS Está Online

Primeiro, certifique-se de que seu serviço VPS está online na interface web da ZAP-Hosting. Se o servidor estiver offline, a plataforma de apps não pode funcionar.

### Passo 2: Atualize o Status

Use a ação **Atualizar Status** para rodar a verificação de saúde novamente com os dados mais recentes. Isso pode resolver problemas temporários e intermitentes.

:::tip Problemas Temporários de Conectividade
Um estado degradado pode ser causado por uma falha de comunicação de curta duração. Atualizar o status é a verificação inicial mais rápida.
:::

### Passo 3: Reinicie o Docker

Se o status continuar degradado, use a ação **Reiniciar Docker**. Isso força a reinicialização da instância da plataforma. Após uma resposta bem-sucedida, aguarde `1-2 minutos` e atualize o status novamente.

:::caution Reinício do Serviço
Reiniciar o Docker pode interromper temporariamente os apps em execução enquanto os serviços reiniciam.
:::

### Passo 4: Atualize as Credenciais

Como último passo, use **Atualizar Credenciais**. Isso é especialmente importante se o status parecer online, mas funções da interface web como instalação de apps não estiverem funcionando.

Esta ação:

- **não** apaga seus dados
- atualiza as credenciais do usuário root
- atualiza o token da API usado pela interface web
- atualiza automaticamente as credenciais do painel em caso de sucesso

:::info Atualização Segura de Credenciais
Atualizar credenciais não remove seus apps instalados ou dados de implantação. Apenas renova as credenciais necessárias para acesso e comunicação.
:::

### Quando Contatar o Suporte

Se o problema persistir após todos os passos de solução de problemas, abra um ticket de suporte pelo site da ZAP-Hosting.

## Melhores Práticas

Para manter o Instalador de Apps One Click estável e fácil de gerenciar, siga estas recomendações:

| Melhor prática | Motivo |
| --- | --- |
| Use uma instalação limpa do SO | Reduz conflitos com serviços e portas existentes |
| Atenda aos recursos recomendados | Melhora desempenho e confiabilidade |
| Organize apps em projetos e ambientes | Mantém implantações gerenciáveis |
| Configure DNS antes de atribuir domínios | Evita problemas de acesso e SSL |
| Use configurações avançadas com cuidado | Evita alterações personalizadas não suportadas |

:::tip Mantenha as Implantações Organizadas
Se planeja hospedar muitos apps, crie um esquema claro de nomes para `[your_project_name]`, `[your_environment_name]` e `[your_app_name]` antes de implantar seus primeiros serviços.
:::

## Conclusão

Parabéns, você configurou e usou com sucesso o Instalador de Apps One Click para VPS para implantar e gerenciar apps no seu servidor. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂

<InlineVoucher />