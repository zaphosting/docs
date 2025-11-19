---
id: dedicated-raid
title: "Servidor Dedicado: Configuração RAID"
description: "Descubra como as configurações RAID melhoram o desempenho e a redundância de dados em servidores dedicados com SSDs → Saiba mais agora"
sidebar_label: Configurar RAID
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

RAID (Redundant Array of Independent Disks) é uma tecnologia que combina vários discos rígidos em uma única unidade lógica para alcançar redundância de dados e/ou aumento de desempenho. Existem diferentes níveis de RAID que oferecem combinações variadas de distribuição de dados e tolerância a falhas.

## Tipos de RAID disponíveis
Nossos servidores dedicados atualmente oferecem 2 baias para SSD, o que significa que existem duas configurações possíveis para RAID. A primeira é o RAID0, usado para combinar volumes em um volume maior, e o RAID1, usado para espelhar volumes e manter os dados redundantes. Vamos detalhar ambos nas próximas seções.

:::info
RAID0 oferece velocidades de leitura e escrita um pouco mais rápidas, devido à presença de dois drives.
:::

### RAID0
Nesta configuração RAID, todos os volumes existentes são combinados em um único volume grande, por exemplo, de 2 SSDs, cada um com 1 TB. Uma partição de 2TB seria criada e poderia ser usada completamente.

Não há redundância de dados, então em caso de falha técnica, a perda de dados é frequentemente inevitável porque os dados são escritos em setores diferentes.

Se você armazena dados sensíveis no seu sistema, o RAID0 não deve ser usado ou pelo menos backups regulares do sistema devem ser realizados.

:::info
Se seu servidor dedicado tem apenas 1 SSD, ele é automaticamente configurado como RAID0.
:::

### RAID1
Essa configuração é bem diferente do RAID0, aqui há redundância dos seus dados, o que significa que tudo que você armazena no seu servidor é duplicado.  
Ou seja, é espelhado em ambos os SSDs e estaria disponível mesmo com uma taxa de falha de 50%, então seus dados ficam seguros com 1 SSD.

Em caso de falha técnica, apenas o SSD afetado precisaria ser substituído e seu servidor reconstruiria o RAID, ou seja, espelharia os dados novamente.  
Especialmente para dados mais sensíveis, essa configuração é altamente recomendada, mas não substitui a necessidade de backups.

:::info
Backups regulares de todos os dados importantes são essenciais!
:::

## O Assistente de Configuração

Quando seu servidor está iniciando, a ferramenta de configuração RAID precisa ser iniciada. Isso pode ser feito pressionando `F8` na etapa de boot necessária.

![](https://screensaver01.zap-hosting.com/index.php/s/cYzj7L6dL5g7255/preview)

Pressione F8 neste ponto para abrir a ferramenta de configuração RAID

***

![](https://screensaver01.zap-hosting.com/index.php/s/L4Lw8oGjxbDR96N/preview)

Após alguns segundos, essa visão geral da configuração aparecerá.

***

Agora existem várias opções de menu:

* Criar Unidade Lógica  
Cria um novo volume.

* Visualizar Unidade Lógica  
Mostra a configuração RAID atual.

***
RAID0

![](https://screensaver01.zap-hosting.com/index.php/s/6mtbrFXNPeqHnYi/preview)

RAID1

![](https://screensaver01.zap-hosting.com/index.php/s/749Kxjq6Mkzdc69/preview)
***

* Excluir Unidade Lógica  
Você pode excluir a configuração RAID atual para criar uma nova, por exemplo.

* Selecionar Volume de Boot  
Você pode inicializar a partir de outro meio de armazenamento, o que não é necessário no nosso caso aqui.

* Gerenciar Chaves de Licença  
Nada precisa ser ajustado ou alterado aqui, a licença já está pré-configurada.

* Configurações de Cache  
A opção de cache pode ser ajustada para aumentar um pouco as taxas de leitura/escrita do SSD.  
Basicamente, os últimos blocos de dados são armazenados em cache durante cada processo de gravação por motivos de segurança, por exemplo, em caso de queda de energia.  
Isso causa uma desvantagem mínima no desempenho.

### Criando um novo RAID

Primeiro, verificamos se não há mais volumes, abra `Excluir Unidade Lógica`

![](https://screensaver01.zap-hosting.com/index.php/s/EbPtmgFyZ3oN6jb/preview)

Pressionamos `F8` para excluir o RAID existente.

***

![](https://screensaver01.zap-hosting.com/index.php/s/qmtAciacCLKJ9QG/preview)

Pressionando `F3` confirmamos a exclusão.

***

Após o RAID ser excluído com sucesso, precisamos abrir `Criar Unidade Lógica`

![](https://screensaver01.zap-hosting.com/index.php/s/SjP6ZkcWXCKc4kT/preview)

Aqui você pode ver todos os seus SSDs e escolher a configuração RAID.  
Claro que nem todos esses RAIDs podem ser implementados na configuração atual.

No nosso exemplo, escolhemos RAID0 ou RAID1.

:::info
Você pode alternar entre os menus pressionando `TAB`
:::

Quando terminar de escolher sua configuração RAID, confirme pressionando `Enter`.

:::info
Você pode fechar o assistente de configuração pressionando `ESC`
:::

### Selecionar Volume de Boot

Se você mexeu no seu RAID, é necessário selecionar o volume de boot.  
Isso pode ser feito facilmente em **Selecionar Volume de Boot**, escolha lá a unidade lógica que você criou, caso contrário seu servidor ficará preso em um bootloop.

**Selecionar Volume de Boot**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2GDEYfjnkmaKF9F/preview)
***
**Armazenamento Direto Conectado**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2468ZCGkr2ninxM/preview)
***
**Unidade Lógica 01**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tN6pRiJbZexbzmg/preview)
***
**Pressione `F8` para salvar como volume de boot**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tqGFzGZGgeo4JjZ/preview)

No final, você pode pressionar `F8` para reiniciar seu sistema diretamente ou voltar ao menu principal pressionando `Enter`.  
Lembre-se que o volume de boot deve ser configurado **sempre** que você alterar sua configuração RAID.

## Conclusão

Parabéns, você configurou com sucesso o RAID no seu servidor dedicado. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, que está disponível diariamente para te ajudar! 🙂