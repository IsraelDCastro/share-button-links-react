# Tasks - Performance + A11y Roadmap

## Fase 0 - Diagnóstico y línea base

- [x] Medir baseline de build y bundle (`npm run build`).
- [x] Detectar deuda técnica en scripts de lint/build.
- [x] Identificar puntos críticos de a11y (foco, labels, feedback de copiado).
- [x] Agregar benchmark repetible de tamaño por release (script y umbrales).

## Fase 1 - Build pipeline y dependencias

- [x] Corregir scripts de lint para entorno npm + ESLint 9 legacy (`ESLINT_USE_FLAT_CONFIG=false`).
- [x] Simplificar `vite.config.ts` removiendo `rollup-plugin-typescript2` y `rollup-plugin-terser`.
- [x] Mover React a `peerDependencies` y limpiar deps runtime innecesarias para consumidores.
- [x] Agregar `sideEffects` para preservar CSS/SCSS y mejorar tree-shaking.
- [x] Corregir configuración de generación de tipos (`vite-plugin-dts` + `tsconfig`).
- [x] Migrar de `.eslintrc` a `eslint.config.js` (flat config) para eliminar modo legacy.
- [x] Ejecutar `bun install` para regenerar lockfile tras limpieza de dependencias.
  - Nota: confirmado por el usuario que ejecuta `bun i` localmente.

## Fase 2 - Robustez de share links

- [x] Introducir utilitario `encodeShareParam` para codificar parámetros de URL en todos los botones de share.
- [x] Aplicar encoding a `url`, `title`, `message`, `description`, `mediaUrl`, `subject`, `content`, `to`.
- [x] Reemplazar concatenación manual por `URLSearchParams` para mayor mantenibilidad.
- [x] Añadir validación opcional para URLs inválidas y fallback seguro.

## Fase 3 - Accesibilidad de interacción

- [x] Añadir `aria-label` en botones de ícono y enlaces de share.
- [x] Mejorar botón de copiado con `aria-live` + `role="status"`.
- [x] Agregar fallback de clipboard cuando `navigator.clipboard` falla.
- [x] Añadir estilos `:focus-visible` en botones e íconos.
- [x] Añadir soporte `prefers-reduced-motion` para reducir transiciones.
- [x] Estandarizar `aria-hidden` en todos los SVG decorativos con helper único.
- [x] Verificar contraste WCAG AA por variante de color (`is-bordered`/`is-whited`).

## Fase 4 - CSS y rendimiento visual

- [x] Normalizar `list-style`/`padding` del grupo de botones.
- [x] Mejorar estilos base de interacción (`cursor`, `font`, `line-height`).
- [x] Migrar SCSS de `@import` a `@use`/`@forward` (evitar deprecaciones Dart Sass).
- [x] Extraer tokens de foco/espaciado para evitar duplicación entre botones e íconos.

## Fase 5 - Calidad y release

- [x] Agregar tests de comportamiento para generación de URLs por red social.
- [x] Agregar tests de a11y (ej. `@testing-library/react` + `jest-axe`).
- [x] Integrar chequeo de bundle size en CI.
- [x] Documentar en README los nuevos props de copiado (`url`, `copiedLabel`).
