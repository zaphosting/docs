---
id: vserver-linux-sshkey
title: "VPS: Gerando e usando chaves SSH para servidores Linux"
description: "Descubra como gerar e gerenciar chaves SSH de forma segura para seu servidor Linux e aumente a segurança e controle da conexão → Saiba mais agora"
sidebar_label: Chave SSH
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Gerar Chave SSH

Para uma conexão muito mais segura do que a convencional com senha SSH, recomendamos o uso de chaves SSH. Para isso, abra a aba "**Acesso & Segurança**" no dashboard do seu servidor Linux.

![](https://screensaver01.zap-hosting.com/index.php/s/wJCtHY44dYiYoqX/preview)

Em "**Acesso & Segurança**" você pode gerar uma chave clicando no botão "**Gerar Chave SSH**".  
Assim que clicar, um popup abrirá e uma chave gerada aleatoriamente será baixada diretamente para o seu PC.  
Para que a chave seja adicionada ao servidor, é necessário clicar no botão "**Adicionar Chave**".

:::info
No caso de VPS Linux, a chave é adicionada diretamente. Para servidores dedicados Linux, é necessário reiniciar o servidor para que as alterações tenham efeito.
:::

<InlineVoucher />

![](https://screensaver01.zap-hosting.com/index.php/s/GsER3sNYWYj8t7y/preview)

Se precisar de mais chaves, basta clicar no botão "**Gerar Chave**" na mesma janela.  
Com "**Nome da chave**" você pode definir um nome para a chave, que será exibido no painel da ZAP-Hosting. Isso ajuda muito na organização.

Quando todas as chaves desejadas forem geradas e adicionadas, elas aparecerão listadas em "**Acesso & Segurança**".

![](https://screensaver01.zap-hosting.com/index.php/s/5yjACdnpyiw6E97/preview)

Se você já tem uma chave pública própria, gerada externamente e não pelo nosso painel, pode integrá-la clicando no ícone "**+**".

![](https://screensaver01.zap-hosting.com/index.php/s/H75CCTe5tTonn8y/preview)

Abrirá um painel vazio onde você pode colar sua chave pública. Depois, clique em "**Adicionar Chave**" para adicioná-la ao servidor e ela será exibida no nosso painel.

## OpenSSH para Chave Privada PuTTY com PuTTYGen

As chaves SSH criadas pelo nosso painel estão no formato OpenSSH. Para usar com PuTTY, é preciso converter para o formato de chave privada do PuTTY. Para isso, use o software "**PuTTYGen**", que é instalado automaticamente junto com o PuTTY.

O aplicativo PuTTYGen fica na pasta raiz do PuTTY. Por padrão, a pasta PuTTY fica no caminho mostrado na imagem: "**C:>Program Files>PuTTY**".

Abra o PuTTYGen e clique em "**Arquivo**" -> "**Carregar chave privada**".

![](https://screensaver01.zap-hosting.com/index.php/s/KNeiG7eWpWateDz/preview)

Agora abra o arquivo gerado pela ZAP-Hosting. Para isso, vá até a pasta padrão onde seus downloads são salvos.

:::info
**Importante:** Certifique-se de que o filtro esteja definido para "**Todos os arquivos**", como na imagem, pois o arquivo .pri criado pelo sistema não aparece se o filtro estiver diferente.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/WQfWN264pJPKWYX/preview)

Depois de carregar, você pode usar os campos para adicionar comentários e uma senha para a chave. Para definir a senha, digite a mesma em "**Frase secreta da chave**" e em "**Confirmar frase secreta**".  
*Obs:* Você pode deixar esses campos em branco para criar a chave sem senha, mas isso é menos seguro e não recomendado. Quando tudo estiver configurado, salve a chave compatível com PuTTY clicando em "**Salvar chave privada**".

![](https://screensaver01.zap-hosting.com/index.php/s/N4dKc86M95yYbtK/preview)

Dê um nome para o arquivo .ppk e salve para encontrá-lo facilmente depois.

## Conexão com Chave SSH

Para usar a chave na conexão, primeiro é preciso vinculá-la no PuTTY. Vá em "**SSH**" - "**Auth**" - "**Procurar...**".

![](https://screensaver01.zap-hosting.com/index.php/s/3BJ7NaG2AemGSZt/preview)

Encontre a chave que você criou com o PuTTYGen e clique em "**Abrir**".

Para não precisar repetir isso toda vez, é recomendado salvar essa configuração na sessão. Vá em "**Sessão**" - "**Configurações Padrão**" - "**Salvar**", como mostra a imagem.

![](https://screensaver01.zap-hosting.com/index.php/s/zENfY7DBZk85mMa/preview)

Agora você pode fazer login no servidor com PuTTY. O "**Comentário da chave**" que você colocou no PuTTYGen aparecerá lá.

## Desativar Login com Senha

As chaves SSH foram criadas para aumentar a segurança. Se o login com senha SSH ainda estiver ativo, a segurança do servidor não mudou. Por isso, o login por senha deve ser desativado. O processo é diferente para VPS Linux e servidores dedicados Linux. Quando o login por senha estiver desativado corretamente, só será possível conectar com a chave SSH que você criou.

### VPS Linux

Você pode desativar o login por senha facilmente na aba Acesso & Segurança.  
Basta clicar no botão **Desativar Login por Senha** ao lado do botão Gerar Chave SSH.  
Depois de desativado, não será mais possível acessar o servidor via login por senha.

![](https://screensaver01.zap-hosting.com/index.php/s/jd9NiypwxgpeMGe/preview)

O status de "**Login SSH via senha**" ficará como "**Inativo**".

## Conclusão

Parabéns, você instalou e configurou sua chave SSH com sucesso! Se tiver dúvidas ou problemas, nosso time de suporte está disponível todos os dias para te ajudar!

<InlineVoucher />