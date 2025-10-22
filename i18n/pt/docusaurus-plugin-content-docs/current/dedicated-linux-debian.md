---
id: dedicated-linux-debian
title: "Servidor Dedicado: Instalação do Debian"
description: "Aprenda como instalar e configurar o sistema operacional Debian no seu servidor dedicado para desempenho e confiabilidade máximos → Saiba mais agora"
sidebar_label: Instalar Debian
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

A seguir, vamos te mostrar passo a passo como instalar e configurar o sistema operacional Debian no seu servidor dedicado. Siga essas instruções com atenção para garantir que você configure o sistema operacional com sucesso e o utilize da melhor forma.

:::info

A estrutura deste guia é baseada no uso do sistema operacional Debian 10. Instalações de versões anteriores ou mais recentes podem apresentar pequenas diferenças no processo.

:::

<InlineVoucher />

## Preparação

Para a instalação e configuração de um sistema operacional, é importante inicialmente montar a ISO correspondente do sistema. Existem várias formas possíveis de fazer isso:

1. Montagem via configuração inicial
2. Montagem via iLO (Mídia Virtual)
3. Montagem via iLO (Console Remoto)

Se você ainda não está familiarizado com a montagem de um arquivo ISO, o melhor é consultar nosso [Guia de Configuração Inicial](dedicated-setup.md) ou [Guia de ISO Própria](dedicated-iso.md).



## Instalação

Quando a ISO estiver carregada com sucesso, o servidor entrará no processo de configuração.

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

Neste exemplo, vamos passar pelo processo de instalação usando a opção "classic".

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

Selecione o idioma desejado para o assistente de instalação. Lembre-se que esse idioma afetará o sistema instalado no final.

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

Nosso local desejado não está na primeira página de seleção, então vamos para a próxima página clicando em "Outro".

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

No nosso exemplo, selecionamos a opção "Europa".

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

Dependendo do fuso horário desejado, escolhemos o fuso horário da Alemanha neste exemplo.

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

Escolhemos Estados Unidos como localidade.

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

No nosso caso, escolhemos o layout de teclado alemão, que é o layout QWERTZ. Se você for dos EUA, o layout padrão seria QWERTY.

:::info
Seu servidor agora está preparando alguns componentes necessários para a instalação, isso pode levar alguns minutos.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

Seu servidor configura automaticamente sua interface de rede usando DHCP. Selecione `eno1`, que é o adaptador de rede padrão do seu Servidor Dedicado ZAP. ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

O nome do host pode ser modificado se você quiser, mas não é obrigatório.

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

O nome do domínio também não precisa ser alterado.

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

Aqui você deve definir a senha para a conta "root". Anote a senha escolhida.

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

Para confirmar a senha, digite-a novamente.

:::info
O assistente de instalação vai pedir para criar uma segunda conta de usuário.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

Agora digite o nome do proprietário para uma conta de usuário normal. Você pode escolher livremente o que quiser aqui.

:::info
Você pode, claro, usar a conta "root" no final.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

Agora digite o nome de usuário da conta. Também escolha uma senha de sua preferência e confirme-a novamente. Seu servidor agora vai preparar os próximos passos da instalação.

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

Agora você pode criar partições ou usar o SSD inteiro como uma única partição. Se não quiser alterar nada nas partições, escolha "Guiado - Usar disco inteiro".

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

Selecione o SSD instalado no seu servidor. ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

Basicamente, está tudo certo se toda a estrutura ficar em uma única partição. ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

Confirmamos a configuração com "Finalizar particionamento e gravar alterações no disco".

:::info
Se houver partições antigas no seu SSD, confirme a sobrescrição com "Sim".
:::

Seu servidor agora realiza o particionamento e prepara a instalação do sistema.

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

Se quiser incluir outras mídias de instalação, por exemplo para certos pacotes, isso pode ser feito agora. Normalmente, porém, você pode baixar todos os pacotes facilmente depois via gerenciador de pacotes (apt).

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

Nossos servidores dedicados estão localizados na Alemanha, então é recomendado escolher o espelho alemão para obter a melhor velocidade de download possível.

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

Basicamente, recomendamos usar o repositório padrão do Debian.

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

Se quiser usar um proxy HTTP, pode inserir os dados aqui. (não é obrigatório)

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

O sistema quer coletar estatísticas anônimas, você pode recusar ou confirmar.

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

Agora selecione os pacotes que deseja instalar:

* Ambiente desktop Debian  
Criaria uma interface gráfica no seu servidor, mas neste exemplo usaremos apenas o shell do servidor.

* Servidor SSH  
Necessário, por exemplo, para conectar via PuTTY.

* Utilitários padrão do sistema  
Fornece vários pacotes básicos.

A seleção dos pacotes é feita com `TAB` e as setas. Os pacotes são selecionados ou desmarcados com a barra de espaço.  
Quando estiver satisfeito com a seleção, pressione `TAB` até chegar em Continuar e confirme com Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

Confirme que este sistema operacional é o único no servidor atual com `Sim`.

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

Como local de armazenamento, escolhemos o padrão no nosso SSD.

:::info
🎉 A instalação do seu sistema Debian está concluída.
:::

Abra "Mídia Virtual" no seu iLO e clique em "Ejetar Mídia" para remover o arquivo ISO do sistema.

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

Quando isso for feito com sucesso, selecione Continuar, o servidor fará um reboot.

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## Configuração

### Login SSH

Após o reboot do seu servidor e a instalação bem-sucedida, você será solicitado a fazer login.

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

Claro que você também vai querer gerenciar seu servidor via SSH, por exemplo com PuTTY, então precisamos ativar o login para isso:

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

Abra com nano o arquivo de configuração do serviço SSH `nano /etc/ssh/sshd_config`.

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

Procure por `#PermitRootLogin no` e altere para `PermitRootLogin yes`.

Agora pressione `CTRL + X` e confirme as alterações com `Y`.

Depois disso, reinicie o serviço SSH digitando `service ssh restart`.

Seu login SSH está ativo e você pode conectar via PuTTY, por exemplo.  
Digite o endereço IP do seu servidor, que você vê no seu dashboard ZAP, e use as credenciais definidas anteriormente.

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
Se tiver mais dúvidas ou problemas, nosso suporte está pronto para te ajudar!
:::





## Conclusão

Parabéns, você instalou com sucesso o sistema operacional Debian no seu servidor dedicado. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te dar aquela força! 🙂

<InlineVoucher />