# Comparación Práctica de REST y GraphQL

En el contexto de la banca digital, el sistema necesita implementar una API que permita a los clientes consultar su saldo y realizar transferencias. La API debe demostrar las diferencias prácticas entre los enfoques REST y GraphQL. Es crucial entender cómo cada uno maneja la consulta de datos y las transacciones, y cómo afectan al rendimiento y a la experiencia del usuario.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | APIs y comunicación entre servicios |
| **Nivel** | advanced-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 3-4 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Implementación de la API REST

**Objetivo:** Crear una API REST que permita consultar el saldo y realizar transferencias.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Define los endpoints necesarios para consultar el saldo y realizar transferencias.
- Implementa la lógica de negocio para cada endpoint.
- Asegúrate de manejar los errores y validaciones apropiadas.

**Entregable:** API REST funcional con endpoints para consultar saldo y realizar transferencias.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo estructurar los endpoints para que sean intuitivos y eficientes.
- Piensa en cómo manejarías las validaciones de datos y los errores en la API.

</details>

### Fase 2: Implementación de la API GraphQL

**Objetivo:** Crear una API GraphQL que permita consultar el saldo y realizar transferencias.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Define las consultas y mutaciones necesarias para consultar el saldo y realizar transferencias.
- Implementa la lógica de negocio para cada consulta y mutación.
- Asegúrate de manejar los errores y validaciones apropiadas.

**Entregable:** API GraphQL funcional con consultas y mutaciones para consultar saldo y realizar transferencias.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo estructurar las consultas y mutaciones para que sean eficientes y escalables.
- Piensa en cómo manejarías las validaciones de datos y los errores en la API.

</details>

### Fase 3: Comparación y Análisis

**Objetivo:** Comparar y analizar las diferencias entre las implementaciones REST y GraphQL.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Identifica las diferencias en la estructura, eficiencia y escalabilidad entre las APIs REST y GraphQL.
- Analiza cómo cada enfoque maneja las consultas de datos y las transacciones.
- Documenta tus hallazgos y conclusiones.

**Entregable:** Documento que compara y analiza las diferencias entre las implementaciones REST y GraphQL.

<details>
<summary>Pistas de conocimiento</summary>

- Considera aspectos como la cantidad de solicitudes necesarias, la cantidad de datos transferidos y la facilidad de uso para el cliente.
- Piensa en cómo cada enfoque afecta al rendimiento y a la experiencia del usuario.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es una API REST y cómo se diferencia de una API GraphQL?
- **paraQueSirve**: ¿Para qué sirve cada tipo de API en el contexto de la banca digital?
- **comoSeUsa**: ¿Cómo se usa una API REST y una API GraphQL para consultar el saldo y realizar transferencias?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar APIs REST y GraphQL?
- **queDecisionesImplica**: ¿Qué decisiones implica la elección entre una API REST y una API GraphQL en términos de rendimiento y experiencia del usuario?

## Criterios de Evaluacion

- Implementación funcional de la API REST.
- Implementación funcional de la API GraphQL.
- Comparación y análisis detallado de las diferencias entre las APIs REST y GraphQL.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
