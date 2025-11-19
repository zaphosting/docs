---
id: dedicated-windows-2022
title: "Servidor Dedicado: Instalação do Windows Server 2022"
description: "Descubra como instalar e configurar o Windows Server no seu servidor dedicado para desempenho e segurança máximos → Saiba mais agora"
sidebar_label: Windows Server 2022
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
A seguir, vamos te mostrar passo a passo como instalar e configurar o sistema operacional Windows Server no seu servidor dedicado. Siga essas instruções com atenção para garantir que você configure o sistema operacional com sucesso e aproveite ele ao máximo.

:::info Windows Server 2022
Os passos de instalação e a demonstração neste guia são baseados no sistema operacional Windows Server 2022 (visual parecido com o 2019 - mesmo design). Versões mais antigas do SO podem ter diferenças na estrutura e aparência. Mas o procedimento é parecido.
:::

:::warning Versão mais nova disponível / detalhes do EOL

A versão mais recente do Windows Server da Microsoft é a [2025](dedicated-windows.md). Recomendamos usar a versão mais atual para projetos de longo prazo.

O suporte para versões antigas do Windows Server será descontinuado mais cedo ou mais tarde. Os prazos para a versão 2022 são:

- Suporte ativo: 13.06.2026
- Suporte de segurança: 14.10.2031

:::



## Preparação
Para instalar e configurar um sistema operacional, o primeiro passo é montar o ISO correspondente do sistema. Existem várias formas de fazer isso:

1. Montagem via configuração inicial
2. Montagem via iLO (Mídia Virtual)
3. Montagem via iLO (Console Remoto)

Se você ainda não está familiarizado com a montagem de um arquivo ISO, o melhor é consultar nosso [Guia de Configuração Inicial](dedicated-setup.md) ou o [Guia de ISO Próprio](dedicated-iso.md).



## Instalação
Para instalar um Windows Server, você vai precisar de um arquivo ISO da versão que escolher. No nosso webinterface, você pode selecionar a versão desejada do Windows. Alternativamente, pode usar um ISO próprio, para isso temos o [Guia de ISO Próprio](dedicated-iso.md).

![](https://screensaver01.zap-hosting.com/index.php/s/DDNsa9zjbXng9Z6/preview)

Se essa tela aparecer no console remoto que você está usando, significa que o ISO carregou com sucesso, agora podemos começar a instalação.
Escolha o idioma desejado e clique em "next" para continuar.

![](https://screensaver01.zap-hosting.com/index.php/s/iyjwCCSmjPqiDMt/preview)

Clique em "Install now" para iniciar o processo de instalação.

![](https://screensaver01.zap-hosting.com/index.php/s/y8rXwXfrnRRD9fZ/preview)

O Windows agora pede uma chave de produto. Digite se você tiver uma.

:::note
Nós não vendemos licenças Windows, é necessário comprar a chave por conta própria.
:::

Você pode comprar chaves de produto Windows em várias lojas online, só verifique se está adquirindo uma chave válida para a sua versão do Windows, pois existem várias versões diferentes.
No Windows Server 2022, por exemplo, existem duas edições: a normal e a edição datacenter.
Se não tiver certeza do que precisa, basta clicar em "I don't have a product key" (Não tenho uma chave de produto), você pode adicionar a chave depois.

![](https://screensaver01.zap-hosting.com/index.php/s/jH5dYQBq7FtT2SL/preview)

Agora selecione a versão que deseja instalar.
Tenha certeza de escolher a versão correta, pois não é possível mudar depois.
Também lembre de escolher uma versão com "(Desktop Experience)", caso contrário seu Windows será baseado em shell.
Depois de decidir, marque a versão e continue com "next".

![](https://screensaver01.zap-hosting.com/index.php/s/9GRPiS3JpFPyJYk/preview)

Aceite os termos e prossiga clicando em "next".

![](https://screensaver01.zap-hosting.com/index.php/s/Bbfj7R2RdkNkMzq/preview)

Selecione 'Custom' se quiser fazer uma instalação limpa do Windows. Você pode escolher "Upgrade" se quiser atualizar, por exemplo, do 2016 para o 2022.

![](https://screensaver01.zap-hosting.com/index.php/s/8zkx8grPTCSgprQ/preview)

No próximo passo, você precisa criar partições no seu servidor dedicado, geralmente não deve haver partições criadas ainda. Se houver, selecione e exclua.

Você pode criar várias partições menores ou uma grande. Se criar partições menores, recomendamos pelo menos 50GB para a partição principal do Windows.
Clique em "New" para criar uma partição.

![](https://screensaver01.zap-hosting.com/index.php/s/GtBxwdETkNeSGcT/preview)

Se quiser uma partição grande só, pode clicar em Aplicar. A instalação vai usar automaticamente o maior tamanho possível.

![](https://screensaver01.zap-hosting.com/index.php/s/xWr3ySfyGdYbxKt/preview)

O Windows precisa de uma pequena partição de sistema, aceite clicando em "OK".

![](https://screensaver01.zap-hosting.com/index.php/s/B2JPRH3pYRt323x/preview)

Se estiver satisfeito com as partições, escolha a partição onde o Windows será instalado e clique em "Next".
A instalação do Windows agora vai fazer tudo sozinha, isso pode levar alguns minutos.
Não precisa fazer mais nada até a instalação terminar.

## Configuração

Quando a instalação terminar, o Windows vai pedir para você definir uma senha.

![](https://screensaver01.zap-hosting.com/index.php/s/Zmn6zJyPWAM5MHG/preview)

Coloque a senha que quiser.

:::info
Recomendamos escolher uma senha forte com caracteres especiais.

Se esquecer a senha, não tem como recuperar, então anote ela.
:::

Depois de definir a senha, você estará na tela de bloqueio do Windows.

![](https://screensaver01.zap-hosting.com/index.php/s/ddxASYsjNgwHX5i/preview)

Para fazer login no Windows, pressione a combinação de teclas `CTRL + ALT + DELETE`. Você pode fazer isso facilmente pelo console remoto.
(Você encontra essa opção no console Java em "Keyboard")
Faça login com sua senha.

No próximo passo, é necessário ativar o Remote Desktop, assim você pode se conectar facilmente ao seu servidor.
Abra o Windows Explorer e clique com o botão direito em "Este Computador"

![](https://screensaver01.zap-hosting.com/index.php/s/HSnnXftNbXNYjq6/preview)

Escolha Propriedades.

![](https://screensaver01.zap-hosting.com/index.php/s/g2CFHpdrZ3E8g29/preview)

Abra "Configurações Remotas"

![](https://screensaver01.zap-hosting.com/index.php/s/e8Q4rixGtBZZH35/preview)

Aceite a informação do firewall que aparecer com "OK" e clique em "Aplicar"

Agora abra o Remote Desktop no seu computador e preencha o endereço IP do seu painel ZAP.
O usuário é sempre Administrator e a senha é a que você definiu antes.

![](https://screensaver01.zap-hosting.com/index.php/s/w97g9aDrpM8EjpA/preview)

Você pode ignorar o aviso de certificado, marque a opção "Não me perguntar novamente para conexões com este computador".
Finalize clicando em "Sim".

![](https://screensaver01.zap-hosting.com/index.php/s/SqqCdBZRYysz8yj/preview)

O Remote Desktop agora vai estabelecer a conexão com seu servidor dedicado e você poderá usar ele.
A configuração de rede é aplicada automaticamente via DHCP, então não precisa fazer mais nada.

![](https://screensaver01.zap-hosting.com/index.php/s/9BEEiFAtJ2jCoCk/preview)

:::tip
Se tiver mais dúvidas ou problemas, nosso suporte está aqui para te ajudar!
:::


## Conclusão
Parabéns, você instalou com sucesso o sistema operacional Windows Server 2022 no seu servidor dedicado. Para mais dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te dar aquela força! 🙂