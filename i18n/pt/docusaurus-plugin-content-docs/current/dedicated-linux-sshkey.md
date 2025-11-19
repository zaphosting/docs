---
id: dedicated-linux-sshkey
title: "Servidor Dedicado: Gerando e usando chaves SSH para servidores Linux"
description: "Descubra como gerar e gerenciar chaves SSH de forma segura para seu servidor Linux e aumentar a segurança da conexão → Saiba mais agora"
sidebar_label: Chave SSH
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Gerar Chave SSH

Para uma conexão muito mais segura, em comparação com a conexão convencional via senha SSH, recomendamos o uso de chaves SSH. Para isso, abra a aba "**Acesso & Segurança**" no dashboard do seu servidor Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/34o6qRBQdcDbtSt/preview)

Em "**Acesso & Segurança**" você pode gerar uma chave clicando no botão "**Gerar Chave SSH**".  
Assim que clicar, um popup abrirá e uma chave gerada aleatoriamente será baixada diretamente para o seu PC.  
Para que a chave seja adicionada ao servidor, é necessário clicar no botão "**Adicionar Chave**".

:::info
No caso de VPS Linux, a chave é adicionada diretamente. Já em servidores dedicados Linux, é preciso reiniciar o servidor para que as alterações tenham efeito.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/97qtHoLXoTNJeBw/preview)

Se precisar de mais chaves, basta clicar no botão "**Gerar Chave**" na mesma janela.  
Com "**Nome da chave**" você pode definir um nome para a chave, que será exibido no painel da ZAP-Hosting. Isso ajuda muito na organização.

Quando todas as chaves desejadas forem geradas e adicionadas, elas aparecerão listadas em "**Acesso & Segurança**".

![](https://screensaver01.zap-hosting.com/index.php/s/c7NzacjDy9Npwrm/preview)

Se você já tem uma chave pública própria, gerada externamente e não pelo nosso painel, pode integrá-la clicando no ícone "**+**".

![](https://screensaver01.zap-hosting.com/index.php/s/MFMn7o2yf8TKfRK/preview)

Abrirá um painel vazio onde você pode colar sua chave pública. Depois, é só clicar em "**Adicionar Chave**" para adicioná-la ao servidor e ela aparecerá no nosso painel.

## OpenSSH para Chave Privada PuTTY com PuTTYGen

As chaves SSH criadas pelo nosso painel estão no formato OpenSSH. Para usá-las no PuTTY, é preciso convertê-las para o formato de chave privada do PuTTY. Para isso, use o software "**PuTTYGen**", que já vem instalado junto com o PuTTY.

O aplicativo PuTTYGen fica na pasta raiz do PuTTY. Por padrão, a pasta PuTTY aparece no exemplo da imagem em "**C:>Program Files>PuTTY**".

Abra o PuTTYGen e clique em "**Arquivo**" -> "**Carregar chave privada**".

![](https://screensaver01.zap-hosting.com/index.php/s/q4jAx8dikeSfisE/preview)

Agora, abra o arquivo gerado pela ZAP-Hosting. Para isso, navegue até a pasta padrão onde seus downloads são salvos.

:::info
**Importante:** Certifique-se de que o filtro esteja definido como "**Todos os arquivos**", como na imagem, pois o arquivo .pri criado pelo sistema não aparece se o filtro estiver diferente.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/5eRjG5HNMrxW38D/preview)

Depois de carregar, você pode usar os campos para adicionar comentários e uma senha para a chave. Para definir a senha, digite a mesma em "**Frase secreta da chave**" e em "**Confirmar frase secreta**".  
*Obs:* Você também pode deixar esses campos em branco e criar a chave sem senha, mas isso é menos seguro e não recomendado. Quando tudo estiver configurado, salve a chave compatível com PuTTY clicando em "**Salvar chave privada**".

![](https://screensaver01.zap-hosting.com/index.php/s/S2XNpejKYds6C6K/preview)

Dê um nome para o arquivo .ppk e salve para encontrá-lo facilmente depois.

## Conexão com Chave SSH

Para usar a chave na conexão, primeiro é preciso vinculá-la no PuTTY. Vá em "**SSH**" - "**Auth**" - "**Procurar...**".

![](https://screensaver01.zap-hosting.com/index.php/s/cxLBRMPiqEXBG55/preview)

Encontre a chave que você criou com o PuTTYGen e clique em "**Abrir**".

Para não precisar repetir isso toda vez que conectar, é recomendado salvar essa configuração na sessão. Para isso, clique em "**Sessão**" - "**Configurações Padrão**" - "**Salvar**", como mostra a imagem.

![](https://screensaver01.zap-hosting.com/index.php/s/eqriRDGeJAL9sKH/preview)

Agora você pode fazer login no servidor com o PuTTY. O "**Comentário da chave**" que você colocou no PuTTYGen aparecerá lá.

## Desativar Login com Senha

As chaves SSH foram criadas para aumentar a segurança. Se o login via senha SSH ainda estiver ativo, a segurança do servidor não mudou. Por isso, é importante desativar o login por senha. O processo é diferente para VPS Linux e servidores dedicados Linux. Quando o login por senha estiver desativado corretamente, só será possível conectar com a chave SSH que você criou.

### Linux VPS

Você pode desativar o login por senha facilmente na aba Acesso & Segurança.  
Basta clicar no botão **Desativar Login por Senha** ao lado do botão Gerar Chave SSH.  
Depois de desativado, não será mais possível acessar o servidor via login por senha.

![](https://screensaver01.zap-hosting.com/index.php/s/77gNyyEx66GoWsg/preview)

O status de "**Login SSH via senha**" também ficará como "**Inativo**".