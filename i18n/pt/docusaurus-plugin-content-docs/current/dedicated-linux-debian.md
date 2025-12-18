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

A seguir, vamos te mostrar passo a passo como instalar e configurar o sistema operacional Debian no seu servidor dedicado. Siga essas instruções com atenção para garantir que você configure o sistema corretamente e aproveite ao máximo.

:::info

A estrutura deste guia é baseada no uso do Debian 10. Instalações em versões anteriores ou mais recentes podem ter pequenas diferenças no processo.

:::



## Preparação

Para a instalação e configuração do sistema operacional, é importante inicialmente montar o ISO correspondente. Existem várias formas de fazer isso:

1. Montagem via configuração inicial
2. Montagem via iLO (Mídia Virtual)
3. Montagem via iLO (Console Remoto)

Se você ainda não está familiarizado com a montagem de um arquivo ISO, o melhor é consultar nosso [Guia de Configuração Inicial](dedicated-setup.md) ou [Guia de ISO Próprio](dedicated-iso.md).



## Instalação

Quando o ISO estiver carregado com sucesso, o servidor entrará no processo de instalação.

![](https://screensaver01.zap-hosting.com/index.php/s/QdRyxyaSLWPGHwN/preview)

Neste exemplo, vamos passar pelo processo usando a instalação "clássica".

![](https://screensaver01.zap-hosting.com/index.php/s/YEy9jKbPcmCwD22/preview)

Selecione o idioma desejado para o assistente de instalação. Lembre-se que esse idioma afetará o sistema instalado no final.

![](https://screensaver01.zap-hosting.com/index.php/s/qprfbz2SPf5MZ4j/preview)

Nosso local desejado não está na primeira página, então vamos para a próxima com "Outro".

![](https://screensaver01.zap-hosting.com/index.php/s/frH9t9arerKxecZ/preview)

No exemplo, escolhemos a opção "Europa".

![](https://screensaver01.zap-hosting.com/index.php/s/5DyPjbG3S2Mr3zC/preview)

Dependendo do fuso horário desejado, escolhemos o fuso horário da Alemanha neste exemplo.

![](https://screensaver01.zap-hosting.com/index.php/s/F3SCKdb2dCrqndM/preview)

Escolhemos Estados Unidos como localidade.

![](https://screensaver01.zap-hosting.com/index.php/s/zYP8rRJN9G4ftPx/preview)

No nosso caso, escolhemos o layout de teclado alemão, que é o QWERTZ. Se você for dos EUA, o padrão seria QWERTY.

:::info
Seu servidor agora está preparando alguns componentes necessários para a instalação, isso pode levar alguns minutos.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/XmLgEHDszmHG23r/preview)

Seu servidor configura automaticamente a interface de rede usando DHCP. Selecione `eno1`, que é o adaptador de rede padrão do seu Servidor Dedicado ZAP. ![](https://screensaver01.zap-hosting.com/index.php/s/Q8RRoMwfeTMPpxE/preview)

O nome do host pode ser modificado se quiser, mas não é obrigatório.

![](https://screensaver01.zap-hosting.com/index.php/s/onWnt4GArJZcJgX/preview)

O nome do domínio também não precisa ser alterado.

![](https://screensaver01.zap-hosting.com/index.php/s/wRLRrxrDKLf5d4q/preview)

Aqui você deve definir a senha para a conta "root". Anote a senha escolhida.

![](https://screensaver01.zap-hosting.com/index.php/s/SQeqqKDZx3PjWTs/preview)

Para confirmar, digite a senha novamente.

:::info
O assistente de instalação vai pedir para criar uma segunda conta de usuário.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/CLxectPXbqzteqf/preview)

Agora digite o nome do proprietário para uma conta de usuário normal. Você pode escolher o que quiser aqui.

:::info
Claro que você pode usar a conta "root" no final, se preferir.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/GixGJyTfAzENSmc/preview)

Agora digite o nome de usuário da conta. Escolha uma senha e confirme novamente. Seu servidor vai preparar os próximos passos da instalação.

![](https://screensaver01.zap-hosting.com/index.php/s/NM8fdY9J8qwiNGJ/preview)

Agora você pode criar partições ou usar o SSD inteiro como uma única partição. Se não quiser mexer nas partições, escolha "Guiado - Usar disco inteiro".

***

![](https://screensaver01.zap-hosting.com/index.php/s/J37QtNNMXA8m49Z/preview)

Selecione o SSD instalado no seu servidor. ![](https://screensaver01.zap-hosting.com/index.php/s/foqPgy3oPbzDAZf/preview)

Basicamente, é tranquilo deixar toda a estrutura em uma única partição. ![](https://screensaver01.zap-hosting.com/index.php/s/ApME7eaxLkWmNew/preview)

Confirmamos a configuração com "Finalizar particionamento e gravar alterações no disco".

:::info
Se houver partições antigas no seu SSD, confirme a sobrescrição com "Sim".
:::

Seu servidor agora faz o particionamento e prepara a instalação do sistema.

![](https://screensaver01.zap-hosting.com/index.php/s/JoJ6MppTzm79R3R/preview)

Se quiser incluir outras mídias de instalação, por exemplo para pacotes específicos, pode fazer agora. Normalmente, você pode baixar todos os pacotes depois via gerenciador de pacotes (apt).

![](https://screensaver01.zap-hosting.com/index.php/s/c6Mq4kP7mYYWyLL/preview)

Nossos servidores dedicados ficam na Alemanha, então é recomendado escolher o mirror alemão para a melhor velocidade de download.

![](https://screensaver01.zap-hosting.com/index.php/s/8nReYnYopxJNBmg/preview)

Recomendamos usar o repositório padrão do Debian.

![](https://screensaver01.zap-hosting.com/index.php/s/iqZSLMBqbx8ZDdZ/preview)

Se quiser usar um proxy HTTP, pode inserir os dados aqui (não é obrigatório).

![](https://screensaver01.zap-hosting.com/index.php/s/Ty7BzmzXY78x38q/preview)

O sistema quer coletar estatísticas anônimas, você pode recusar ou aceitar.

![](https://screensaver01.zap-hosting.com/index.php/s/gwxF4k5jf3o3xM4/preview)

Agora selecione os pacotes que quer instalar:

* Ambiente desktop Debian  
Criaria uma interface gráfica no seu servidor, mas neste exemplo vamos usar só o shell.

* Servidor SSH  
Necessário para conectar via PuTTY, por exemplo.

* Utilitários padrão do sistema  
Fornece vários pacotes básicos.

A seleção dos pacotes é feita com `TAB` e as setas. Selecione ou desmarque com a barra de espaço.  
Quando estiver satisfeito, pressione `TAB` até chegar em Continuar e confirme com Enter.

![](https://screensaver01.zap-hosting.com/index.php/s/mwbNHxBCHxXPQiw/preview)

Confirme que este sistema operacional será o único no servidor atual com `Sim`.

![](https://screensaver01.zap-hosting.com/index.php/s/YWiBDBMNsczMHcm/preview)

Como local de armazenamento, escolha o padrão no SSD.

:::info
🎉 A instalação do seu sistema Debian está concluída.
:::

Abra "Mídia Virtual" no seu iLO e clique em "Ejetar Mídia" para remover o arquivo ISO do sistema.

![](https://screensaver01.zap-hosting.com/index.php/s/WMTJ88CFBsQ2miz/preview)

Quando feito com sucesso, selecione Continuar, o servidor vai reiniciar.

![](https://screensaver01.zap-hosting.com/index.php/s/pYysYayb6d2rQtb/preview)



## Configuração

### Login SSH

Após o reboot e a instalação bem-sucedida, você verá a tela de login.

![](https://screensaver01.zap-hosting.com/index.php/s/7PxyTxE56GgcAbE/preview)

Claro que você vai querer gerenciar seu servidor via SSH, tipo PuTTY, então precisamos ativar o login para isso:

![](https://screensaver01.zap-hosting.com/index.php/s/Y2YiFyX9HkjoSco/preview)

Abra com nano o arquivo de configuração do serviço SSH: `nano /etc/ssh/sshd_config`.

![](https://screensaver01.zap-hosting.com/index.php/s/HyJaCWFzZ7R3kjR/preview)

Procure por `#PermitRootLogin no` e mude para `PermitRootLogin yes`.

Agora pressione `CTRL + X` e confirme as mudanças com `Y`.

Depois, reinicie o serviço SSH com `service ssh restart`.

Seu login SSH está ativo e você pode conectar via PuTTY, por exemplo.  
Digite o endereço IP do seu servidor, que você vê no seu dashboard ZAP, e use as credenciais definidas.

![](https://screensaver01.zap-hosting.com/index.php/s/qBqF2fPmyWrtH6Q/preview)

:::tip
Se tiver dúvidas ou problemas, nosso suporte está aqui pra te ajudar!
:::





## Conclusão

Parabéns, você instalou com sucesso o sistema Debian no seu servidor dedicado. Para mais dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível todos os dias para te dar aquela força! 🙂