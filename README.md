
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Desafío 0 : Conceptos Básicos

- ¿Qué es HTML5 y cuáles son algunas de sus características principales?

HTML5 es la última versión del lenguaje de marcado HTML (HyperText Markup Language).
-Semántica Mejorada: Nuevas etiquetas, que ayudan a definir la esrtuctura de una página.
-Soporte para Multimedia: Proporciona etiquetas nativas para manejar multimedia.
-API y Funcionalidades Avanzadas:  Introduce API para mejorar la funcionalidad de las aplicaciones web.
-Formularios Mejorados: Nuevos tipos de entrada para mejorar la validación y experiencia del usuario en formularios.
-Compatibilidad con Dispositivos Móviles: Mejora diseño adaptable y rendimiento en dispositivos móviles.

- Explica la diferencia entre CSS Grid y Flexbox y cuándo usarías uno sobre el otro.

CSS Grid:

Propósito: Ideal para crear diseños bidimensionales, es decir, diseños que requieren filas y columnas. Funciona como una rejilla.

Lo usaria para diseñar una cuadricula de productos o servicios de una tienda en línea.

Flexbox:

Propósito: Ideal para diseños unidimensionales, es decir, diseños en una sola dirección (fila o columna).

Lo usaría para distribuir botones en una barra de navegación.


- ¿Qué es el responsive design y por qué es importante?

Responsive Design (diseño web adaptable) es una metodología de diseño web que busca crear sitios web que se adapten a diferentes tamaños de pantalla y dispositivos.

Importancia:

- Experiencia del Usuario.
- Accesibilidad.
- SEO.
- Reducción de Mantenimiento.


- ¿Cuál es la diferencia entre JavaScript y TypeScript?

Diferencias Clave:

- Tipado: TypeScript ofrece tipado estático, mientras que JavaScript es dinámico.
- Errores: TypeScript ayuda a identificar errores durante la compilación, mientras que JavaScript solo los muestra en tiempo de ejecución.
- Compatibilidad: TypeScript necesita ser transpilado a JavaScript para ejecutarse en el navegador, mientras que JavaScript se ejecuta directamente.


Desafío 5: Bonus:

 Identifica al menos dos técnicas de optimización de rendimiento en una aplicación web y explica cómo implementarlas.


Técnicas:

1. División de Código (Code Splitting):

La división de código permite cargar solo las partes del código que son necesarias para la página actual, en lugar de cargar toda la aplicación de una vez. Esto puede reducir el tiempo de carga inicial y mejorar la experiencia del usuario.


2. Optimización de Imágenes:

Las imágenes pueden ser grandes en tamaño de archivo, lo que ralentiza tu aplicación. Optimizar imágenes redimensionándolas, comprimiéndolas y sirviéndolas en formatos, puede mejorar significativamente el rendimiento.