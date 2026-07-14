---
id: palworld-upload-existing-save
title: "Palworld: Enviar Save Existente"
description: "Aprenda como enviar um save existente do Palworld, migrar um mundo de servidor e atualizar corretamente o arquivo de configuração necessário no seu servidor de jogos ZAP-Hosting. -> Saiba mais agora"
sidebar_label: Palworld: Enviar Save Existente
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução

Palworld armazena os dados do mundo do servidor dedicado em uma pasta de save específica e vincula essa pasta através da configuração do servidor. Neste guia, você vai aprender como enviar um save existente para seu servidor Palworld da ZAP-Hosting e atualizar a configuração necessária para que o servidor carregue o mundo correto.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparação

Antes de começar, certifique-se de que você tem a pasta do save existente do Palworld disponível no seu dispositivo local.

:::danger Fontes de Save Não Suportadas
Saves da console Xbox e saves na nuvem do PS5 não podem ser transferidos diretamente para um servidor dedicado Palworld. Você só pode migrar saves de uma instalação no PC ou de outro servidor dedicado existente.
:::

:::info Acesso Necessário
Você precisa ter acesso à interface web do seu servidor de jogos ZAP-Hosting, incluindo o gerenciador de arquivos e a seção `Configs`.
:::

Se precisar de ajuda para acessar os arquivos do servidor, utilize o guia relevante de gerenciamento de arquivos na documentação da ZAP-Hosting, se disponível para seu produto.

## Entenda a Estrutura Necessária do Save

Antes de enviar qualquer coisa, confirme que seu save tem a estrutura correta.

Em um servidor dedicado Palworld, o save ativo do mundo fica armazenado em:

```text
Pal/Saved/SaveGames/0/[sua_pasta_de_save_id]/
```

O nome da pasta `[sua_pasta_de_save_id]` geralmente é uma longa sequência de letras e números, por exemplo:

```text
84B5E2264EC387DEDB43179D666031A1
```

Uma pasta de save válida normalmente contém arquivos e pastas semelhantes aos seguintes:

| Item | Finalidade |
| --- | --- |
| `Level.sav` | Dados principais do save do mundo |
| `LevelMeta.sav` | Metadados do mundo |
| `Players/` | Dados de save dos jogadores |
| `WorldOption.sav` | Arquivo legado de opções do mundo que pode precisar ser removido |

:::caution Remova o WorldOption.sav Obsoleto
Se a pasta de save enviada contiver `WorldOption.sav`, exclua-o antes de iniciar o servidor. Este arquivo é conhecido por causar problemas nas configurações atuais de servidores dedicados e não deve ser usado para saves migrados, a menos que seja especificamente exigido por uma atualização oficial mais recente do Palworld.
:::

## Encontre o Arquivo de Configuração na Interface ZAP

Após enviar a pasta de save, você deve apontar o servidor para essa pasta editando a configuração do Palworld.

No painel de administração do servidor de jogos ZAP-Hosting, abra a seção `Configs` e localize:

```text
GameUserSettings.ini
```

Dependendo do ambiente atual do servidor, este arquivo normalmente está armazenado em um dos seguintes caminhos:

| Caminho possível | Observações |
| --- | --- |
| `Pal/Saved/Config/LinuxServer/GameUserSettings.ini` | Caminho comum em servidores Palworld baseados em Linux |
| `Pal/Saved/Config/WindowsServer/GameUserSettings.ini` | Caminho mais antigo ou alternativo em configurações baseadas em Windows |

:::note Caminho LinuxServer vs WindowsServer
Servidores dedicados Palworld são comumente implantados com o caminho de configuração `LinuxServer`. Se você não encontrar `WindowsServer`, verifique `LinuxServer`. Na interface ZAP, o método mais fácil é abrir `Configs` e selecionar `GameUserSettings.ini` diretamente.
:::

## Envie o Save Existente

O processo de envio depende da origem atual do seu save, mas o local de destino no servidor ZAP é o mesmo.

### Pare o Servidor Primeiro

Antes de substituir o mundo padrão, pare seu servidor Palworld na interface web da ZAP-Hosting.

:::caution Evite Corrupção do Save
Não envie ou substitua arquivos do mundo enquanto o servidor estiver rodando. Parar o servidor primeiro ajuda a evitar gravações incompletas e dados de save corrompidos.
:::

### Remova a Pasta de Save Padrão

Abra o gerenciador de arquivos e navegue até:

```text
Pal/Saved/SaveGames/0/
```

Dentro deste diretório, você geralmente encontrará uma pasta de save padrão gerada automaticamente. Exclua essa pasta padrão antes de enviar seu próprio save.

### Envie Sua Pasta de Save Existente

Envie sua pasta de save existente para:

```text
Pal/Saved/SaveGames/0/
```

Após o envio, a estrutura deve ficar assim:

```text
Pal/
└── Saved/
    └── SaveGames/
        └── 0/
            └── [sua_pasta_de_save_id]/
                ├── Level.sav
                ├── LevelMeta.sav
                ├── Players/
                └── WorldOption.sav
```

Se `WorldOption.sav` existir, exclua-o após o envio.

:::tip Copie o Nome da Pasta Exatamente
Você vai precisar do nome exato da pasta enviada para o próximo passo. Copie `[sua_pasta_de_save_id]` exatamente como aparece no gerenciador de arquivos, incluindo todas as letras e números.
:::

## Edite o GameUserSettings.ini

Após o envio do save estar completo, você deve atualizar a configuração do servidor para que o Palworld carregue o mundo correto.

Abra o `GameUserSettings.ini` na seção `Configs` e procure pela entrada `DedicatedServerName`.

Defina-a com o nome exato da pasta de save enviada:

```ini
DedicatedServerName=[sua_pasta_de_save_id]
```

Exemplo:

```ini
DedicatedServerName=84B5E2264EC387DEDB43179D666031A1
```

### Entrada de Configuração Necessária

Use a referência abaixo ao editar o arquivo:

| Arquivo de config | Chave | Valor necessário |
| --- | --- | --- |
| `GameUserSettings.ini` | `DedicatedServerName` | Nome exato da pasta de save enviada |

### O Que Essa Configuração Faz

`DedicatedServerName` informa ao servidor dedicado Palworld qual pasta dentro de `Pal/Saved/SaveGames/0/` deve ser carregada como o mundo ativo.

Se esse valor não corresponder exatamente ao nome da pasta enviada, o servidor pode criar um novo mundo ou carregar incorretamente.

:::danger Correspondência Exata Obrigatória
Se você perceber progresso do mapa faltando, mundo vazio ou um save recém-gerado após o início, a causa mais comum é que `DedicatedServerName` não corresponde exatamente ao nome da pasta enviada.
:::

## Locais de Save Específicos por Fonte

Se você não tem certeza de onde obter seu save original, use o caminho correto abaixo.

### De Outro Provedor de Servidor Dedicado

No seu provedor anterior, faça backup da pasta de save em:

```text
Pal/Saved/SaveGames/0/
```

Copie a pasta inteira do mundo com seu nome original e depois envie essa pasta para seu servidor ZAP-Hosting conforme descrito acima.

### De um Save Co-op do Steam

Para saves locais do Steam no Windows, abra o seguinte caminho:

```text
%LOCALAPPDATA%\Pal\Saved\SaveGames\[seu_steamid64]\[sua_pasta_de_save_id]
```

A pasta `[seu_steamid64]` é seu ID Steam 64-bit, e `[sua_pasta_de_save_id]` é a pasta do mundo que você quer migrar.

:::caution Limitação do Personagem Host
Ao migrar um mundo co-op local do Steam para um servidor dedicado, o personagem host original não é transferido automaticamente da mesma forma que os dados dos jogadores conectados. Pode ser necessário usar ferramentas de conversão de save ou transferência de personagem de terceiros se você precisar preservar o personagem host.
:::

### Do PC Game Pass

Para instalações do PC Game Pass, os dados locais de save normalmente ficam em:

```text
%LOCALAPPDATA%\Packages\PocketpairInc.Palworld_ad4psfrxyesvt\SystemAppData\wgs\
```

Saves do Game Pass não são armazenados no mesmo formato que saves do Steam ou servidores dedicados. Na prática, geralmente é necessário uma ferramenta de conversão de terceiros para converter o save para um formato compatível com Steam ou servidor dedicado antes de enviá-lo.

:::info Requisito de Conversão para Game Pass
Um envio direto dos dados brutos do save do PC Game Pass geralmente não é suficiente. Você precisa converter o save primeiro, depois enviar a pasta do mundo convertida para `Pal/Saved/SaveGames/0/` e configurar `DedicatedServerName` conforme necessário.
:::

## Inicie o Servidor

Depois que a pasta de save for enviada e o `GameUserSettings.ini` atualizado, inicie seu servidor novamente pela interface web da ZAP-Hosting.

Normalmente, não são necessários comandos adicionais no console para esse processo de migração.

Após o início, conecte-se ao servidor e verifique se:

- o mundo correto está carregando
- construções e progresso do mapa estão presentes
- dados dos jogadores estão disponíveis conforme esperado

## Solução de Problemas

Se o save enviado não carregar corretamente, verifique os seguintes pontos.

### O Servidor Criou um Novo Mundo

Confirme que o valor abaixo em `GameUserSettings.ini` corresponde exatamente ao nome da pasta enviada:

```ini
DedicatedServerName=[sua_pasta_de_save_id]
```

Também confirme que o save enviado está localizado diretamente em:

```text
Pal/Saved/SaveGames/0/[sua_pasta_de_save_id]/
```

### O Progresso do Mapa ou Mundo Está Faltando

Isso geralmente significa uma das seguintes situações:

| Possível causa | Solução |
| --- | --- |
| Valor errado em `DedicatedServerName` | Reinsira o nome exato da pasta enviada |
| Pasta de save enviada para o diretório errado | Mova para `Pal/Saved/SaveGames/0/` |
| Upload incompleto | Reenvie a pasta completa e verifique se todos os arquivos estão presentes |

### WorldOption.sav Causa Problemas

Se seu save contém `WorldOption.sav`, exclua-o e reinicie o servidor.

Este arquivo está associado a um comportamento antigo de gerenciamento de saves e pode interferir em mundos migrados de servidores dedicados.

## Conclusão

Parabéns, você enviou com sucesso um save existente do Palworld para seu servidor ZAP-Hosting. Para dúvidas ou assistência, não hesite em contatar nossa equipe de suporte, que está disponível diariamente para ajudar você! 🙂