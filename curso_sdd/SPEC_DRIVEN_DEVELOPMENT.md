# Spec-Driven Development (SDD)

## Qué es

Spec-Driven Development (Desarrollo Guiado por Especificaciones) es una técnica para programar con asistentes de IA en la que, antes de escribir o generar código, se redacta una **especificación clara y detallada** de lo que hay que construir. Esa especificación —no el código— se convierte en la fuente de verdad del proyecto: primero se acuerda el "qué" y el "por qué", y solo después se aborda el "cómo" (la implementación).

Surge como respuesta a las limitaciones del llamado *vibe coding*: pedirle a la IA que "vaya generando código" a partir de instrucciones sueltas y conversacionales suele producir resultados inconsistentes, difíciles de mantener y que se desvían del objetivo real a medida que crece el proyecto.

## Principios clave

- **La especificación es el artefacto central.** El código se trata como un producto derivado de la spec, no al revés. Si algo cambia, se actualiza primero la especificación.
- **Separar el "qué" del "cómo".** Se define primero el comportamiento esperado (requisitos, casos de uso, criterios de aceptación) y luego se decide la arquitectura o el plan técnico para lograrlo.
- **Iteración estructurada.** En lugar de iterar sobre el código a base de prueba y error, se itera sobre la especificación hasta que es precisa, y luego se genera o corrige el código en base a ella.
- **Trazabilidad.** Cada pieza de código puede rastrearse hasta el requisito de la especificación que la originó, lo que facilita revisiones, pruebas y detección de desviaciones.

## Flujo de trabajo típico

1. **Especificación (Spec):** se describe el problema, los requisitos funcionales, las restricciones y los criterios de éxito. Suele redactarse en lenguaje natural estructurado (no en código).
2. **Plan técnico:** a partir de la spec, se define la arquitectura, las tecnologías, los módulos y las decisiones de diseño necesarias para implementarla.
3. **Desglose en tareas:** el plan se divide en tareas concretas y verificables, cada una trazable a un punto de la especificación.
4. **Implementación asistida por IA:** el asistente genera el código tarea por tarea, usando la spec y el plan como contexto, en lugar de improvisar sobre la marcha.
5. **Validación contra la spec:** el resultado se contrasta con los criterios de aceptación originales, no solo con "si compila" o "si parece funcionar".

## Ventajas frente al enfoque conversacional libre

- Reduce la ambigüedad: la IA tiene un documento de referencia estable en vez de instrucciones dispersas a lo largo de la conversación.
- Facilita el trabajo en equipo: humanos y otros asistentes pueden leer la misma especificación y entender el objetivo sin reconstruir el contexto desde el historial de chat.
- Mejora la mantenibilidad: cuando hay que modificar el sistema, se actualiza la especificación y se regenera o ajusta el código correspondiente, evitando que el conocimiento del proyecto viva solo en la cabeza de quien conversó con la IA.
- Escala mejor en proyectos grandes, donde el vibe coding tiende a acumular deuda técnica e inconsistencias.

## Herramientas relacionadas

Existen herramientas y flujos que formalizan esta técnica, como **GitHub Spec Kit**, **Kiro** (Amazon) y flujos de trabajo propios de asistentes como Claude Code, que permiten generar y mantener especificaciones, planes y tareas como parte del ciclo de desarrollo asistido por IA.
