---
id: satisfactory-blueprints
title: "Satisfactory: Gerencie Blueprints (Importar/Exportar)"
description: "Descubra como criar, compartilhar e gerenciar blueprints personalizados para construções e layouts eficientes em Satisfactory → Saiba mais agora"
sidebar_label: Gerenciar Blueprints
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Satisfactory conta com um sistema de blueprints personalizado que permite aos usuários criar e compartilhar planos de construção com outros membros da comunidade. Esses blueprints vão desde layouts eficientes de fábricas até lounges elaborados e sistemas ferroviários complexos.

Uma grande variedade de blueprints está disponível no site Satisfactory Calculator. Os blueprints podem ser importados e exportados com facilidade.

<InlineVoucher />

## Gerenciar Blueprints

O gerenciamento dos blueprints em um servidor de jogos Satisfactory é feito totalmente via FTP. Se você ainda não sabe como se conectar ao seu servidor usando FTP, confira nosso [guia de Acesso FTP](gameserver-ftpaccess.md) para começar.

### Importar Blueprints
Para começar, você precisa obter os arquivos de blueprint que deseja enviar. Eles consistem em um arquivo `.sbp` e, opcionalmente, um arquivo de configuração `.sbpcfg` associado. Esses arquivos podem vir de fontes confiáveis da comunidade ou serem criados a partir de outras instâncias do jogo.

Antes de prosseguir com o upload, é recomendado desligar completamente o servidor usando seu painel de controle. Isso garante que não ocorram conflitos de arquivos ou problemas de memória durante o processo de upload.

Em seguida, conecte-se ao servidor usando um cliente FTP. Após o login, navegue até o diretório de blueprints:

```
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
```

Dentro desse diretório, deve haver uma subpasta com o nome exato do mundo (ou sessão) em uso. Esse nome corresponde ao nome do arquivo `.sav` armazenado no servidor. Se a pasta ainda não existir, ela deve ser criada manualmente com o nome exato do arquivo de save.

Com a subpasta correta pronta, faça o upload dos arquivos de blueprint para essa pasta. É essencial incluir tanto o arquivo `.sbp` quanto, se disponível, o arquivo `.sbpcfg`. Após o upload ser concluído, reinicie o servidor. Quando ele estiver rodando novamente, os blueprints enviados estarão disponíveis no jogo via a interface do Blueprint Designer, permitindo que você acesse e use normalmente.

### Exportar Blueprints

Exportar blueprints de um servidor Satisfactory significa baixar os arquivos de blueprint do servidor e armazená-los localmente no seu PC. Comece desligando o servidor, pois isso garante que os arquivos de blueprint estejam em um estado consistente e acessível. Abra seu cliente FTP e conecte-se ao servidor. Navegue até o diretório:

```
/gXXXXXX/.config/Epic/FactoryGame/Saved/SaveGames
```

Localize a subpasta que corresponde ao mundo/sessão do qual você quer exportar os blueprints. Dentro dessa pasta, você encontrará o arquivo `.sbp`, junto com o arquivo opcional `.sbpcfg`, correspondentes a cada blueprint salvo.

Baixe os arquivos de blueprint desejados diretamente para seu computador usando o cliente FTP. Após a transferência ser concluída, você pode arquivar os arquivos, abri-los localmente ou importá-los em outra instalação ou ambiente de servidor. Se planeja reutilizar os blueprints em outro servidor, siga exatamente o mesmo procedimento de importação descrito acima.

## Conclusão

Gerenciar blueprints em um servidor de jogos Satisfactory é um processo simples quando você segue os passos documentados. Para dúvidas ou ajuda, não hesite em contatar nosso time de suporte, disponível diariamente para te ajudar! 🙂


<InlineVoucher />