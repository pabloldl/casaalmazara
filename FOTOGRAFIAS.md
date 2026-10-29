# Sustitución de fotografías

Se sustituyeron las tres imágenes anteriores; no había fotografías reales del alojamiento en `imgs/`.

| Uso | Imagen retirada | Nueva imagen local | Fuente |
| --- | --- | --- | --- |
| Portada | `panorama.jpg` / El Bosque 20210609 18 | `imgs/puerto-palomas.jpg` · 1920 × 1440 | [PuertoPalomasNorte.jpg](https://commons.wikimedia.org/wiki/File:PuertoPalomasNorte.jpg) |
| Vida del pueblo | `plaza.jpg` / P1470071 | `imgs/calles-el-bosque.jpg` · 1024 × 768 | [ElBosque MIN-DSC09511.JPG](https://commons.wikimedia.org/wiki/File:ElBosque_MIN-DSC09511.JPG) |
| Paseo / naturaleza | `pueblo.jpg` / El Bosque 20210609 01 | `imgs/majaceite-sendero.jpg` · 1024 × 768 | [Majaceite MIN-DSC09548.JPG](https://commons.wikimedia.org/wiki/File:Majaceite_MIN-DSC09548.JPG) |

Las tres nuevas fotografías son de **El Pantera**, publicadas en Wikimedia Commons bajo [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Se han redimensionado cuando procede, recomprimido como JPEG y recortado visualmente mediante CSS. Las adaptaciones conservan CC BY-SA 4.0. Metadatos originales de autoría y licencia guardados en `imgs/credits.json`.

La portada muestra el paisaje desde el puerto de las Palomas, en la Sierra de Grazalema. Las otras dos imágenes muestran calles de El Bosque y el entorno del Majaceite. Ninguna representa Casa Almazara, sus instalaciones ni sus vistas.

## Comprobaciones realizadas

- Consulta de fuentes y créditos de los demás proyectos accesibles.
- Inventario de imágenes locales accesibles, con exclusión de dependencias y metadatos Git. Se revisaron visualmente las hojas de contacto y se compararon las nuevas imágenes con las existentes mediante huellas de luminancia de 32 × 32 píxeles. No se encontraron fotografías iguales ni tomas prácticamente iguales a las seleccionadas. La comprobación se limita al espacio de trabajo accesible, no garantiza exclusividad fuera de él.
- Revisión de capturas en móvil y escritorio. Pruebas en Chrome a 375, 768, 1440 y 1920 px: sin imágenes rotas, desbordamiento horizontal, destinos internos inexistentes ni errores JavaScript. No se ha probado en Safari real.
- Se mantiene una única etiqueta `noindex, nofollow` en la web.
- Se conserva la estructura, las proporciones, la tipografía, los colores, los textos de presentación, la navegación, las animaciones y la composición del footer. Solo cambian imágenes, dimensiones intrínsecas, textos alternativos, pies y créditos fotográficos, y cuatro valores de `object-position`.
- Sin commits, pushes ni despliegues. Escrituras limitadas a `casa-almazara-el-bosque/`.
