---
id: fivem-optimize-textures
title: "FiveM: Otimize texturas"
description: "Descubra como otimizar as texturas dos mods do GTA5 para reduzir o tamanho e melhorar o desempenho do jogo → Saiba mais agora"
sidebar_label: Otimizar texturas
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introdução
Quer otimizar as texturas dos seus mods do GTA5 e reduzir o tamanho delas sem perder qualidade? Neste guia, vamos te mostrar como comprimir texturas para menos de 16MB de forma eficaz. Com alguns passos simples e as ferramentas certas, você pode melhorar o desempenho do seu jogo e economizar espaço de armazenamento. Isso também ajuda a evitar problemas como:

```
Asset hevo/hevo.ytd usa 166.0 MiB de memória física. Assets muito grandes podem causar problemas de streaming (modelos não carregando/renderizando, conhecido como 'perda de textura', 'bug da cidade' ou 'streaming ruim').
```

<InlineVoucher />


## Preparação

Antes de começar, certifique-se de ter baixado e instalado as ferramentas necessárias. Baixe o **OpenIV** e o **XnResize** nos sites oficiais e siga as instruções de instalação. Essas ferramentas serão usadas para editar as texturas:

- **OpenIV**  [(Download)](https://openiv.com/)
- **XnResize** [(Download)](https://www.xnview.com/en/xnresize/#downloads)



## Configuração
Depois de baixar e instalar as ferramentas, você pode começar a editar as texturas. Localize o arquivo .ytd do seu mod no OpenIV e abra para acessar as texturas.

![Dicionário de Texturas OpenIV](https://screensaver01.zap-hosting.com/index.php/s/K879XfYoR4sqN6d/preview) 

No OpenIV, você vai encontrar a opção "Export all textures" no canto inferior esquerdo. Clique nela para exportar todas as texturas do seu mod. Salve-as em uma pasta dentro do diretório do seu mod de veículo, por exemplo, na pasta "textures". 



## Otimização

Agora que você exportou todas as texturas, é hora de editar e redimensioná-las. Abra o XnResize no seu computador. Arraste todos os arquivos .dds exportados para a janela do XnResize. Você verá todas as suas texturas dentro do programa. Na aba "Action" do XnResize, defina a largura e altura em porcentagem e reduza o tamanho das texturas para 50% do tamanho original. Lembre-se de manter a proporção.

![Aba Action do XnResize](https://screensaver01.zap-hosting.com/index.php/s/sQMq7goPYDb89cM/preview)



Na aba "Output", selecione uma pasta de destino para as texturas editadas, por exemplo, "textures_resized", e defina o formato para DDS - Direct Draw Surface.

![Aba Output do XnResize](https://screensaver01.zap-hosting.com/index.php/s/Do927b2WQsYTszN/preview)



## Conclusão
Depois de editar todas as texturas e ajustar o tamanho, substitua as texturas antigas do seu mod pelas versões novas e comprimidas. Você vai perceber que o tamanho das texturas comprimidas é muito menor, o que não só economiza espaço de armazenamento, mas também melhora o desempenho do seu jogo.

| **Descrição**            | **Dicionário de Texturas Original** | Dicionário de Texturas Comprimido | X Vezes Melhor     |
| :-------------------------- | :------------------------------ | :---------------------------- | :----------------- |
| **Tamanho Comprimido**         | 11.8 MB                         | 1.23 MB                        | 9.6x               |
| **Tamanho Descomprimido**       | 164 MB                          | 11 MB                          | 14.9x              |
| **Memória Virtual**          | 0.05 MiB                        | 0.05 MiB                       | -                  |
| **Memória Física**         | 166.00 MiB                      | 10.69 MiB                      | 15.5x              |

Não esqueça de testar as texturas no jogo. Se rolar algum problema, você sempre pode resetar texturas individuais para o tamanho original ou usar os arquivos .dds originais.

<InlineVoucher />