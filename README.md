# RAB ELECTRIC — web

Web estática construida a partir del documento *RAB ELECTRIC — Voz de marca y arquitectura web* (1 oct 2026).

**Claim:** «Instalamos como especialistas. Revisamos como peritos.»

## Páginas (mapa del sitio)

| Archivo | Página |
| --- | --- |
| `index.html` | Inicio: hero con el claim, los dos accesos (Instalación / Peritaje), franja de garantías, áreas, pilares, sectores, casos y CTA |
| `quienes-somos.html` | Historia y trayectoria de Roque de Armas en primera persona, asesoría teórico-práctica, acreditaciones y compromisos |
| `como-trabajamos.html` | Las dos ramas y la regla de oro, procesos (instalación, mantenimiento, peritaje) y tabla de entregables |
| `servicios.html` | Una ficha por servicio con la misma estructura: para quién es · qué incluye · qué te entregamos · garantía/normativa · CTA |
| `sectores.html` | Ocho sectores con la necesidad típica y el servicio que encaja |
| `casos-de-exito.html` | Caso real 1 (alquiler vacacional) completo y casos tipo |
| `preguntas-frecuentes.html` | FAQ en la voz de marca (con datos estructurados `FAQPage`) |
| `contacto.html` | Formulario con selector de servicio; al enviar compone el mensaje y abre WhatsApp (+34 680 182 651) |

## Sistema visual

- **Rojo de marca** `#c8102e` (tomado del logotipo) = rama Instalación y acciones principales.
- **Azul acta** `#34557f` = rama Peritaje.
- Tinta `#0e151d` y papel `#f3f0e9`. Lenguaje de documento técnico: retícula, filetes, etiquetas en mono tipo referencia de informe.
- Tipografías (Google Fonts): **Archivo** (titulares y texto) e **IBM Plex Mono** (etiquetas y datos).
- Sin emojis, trato de tú, frases cortas, primero la consecuencia y después el tecnicismo.

## Cómo verla

Abre `index.html` en el navegador o sirve la carpeta:

```bash
python3 -m http.server 8000
```

No requiere build ni dependencias.

## Pendientes a confirmar con el cliente

Los datos sin confirmar aparecen en la web subrayados con línea discontinua (clase `.tbd`).

- [ ] Logotipo y grafía oficial: el documento dice **RAB ELECTRIC** y el logotipo **RAB Electric Group**. Falta también el logo en vector (SVG/AI) y el uso del símbolo ®.
- [ ] Número de registro como empresa instaladora y registro o colegiación como perito judicial.
- [ ] Email de contacto (ahora aparece `info@rabelectric.es` como provisional).
- [ ] Zona de trabajo (ahora aparece «Tenerife · Canarias» como provisional).
- [ ] Si la eólica y las telecomunicaciones son servicios propios o con colaboradores.
- [ ] Casos de éxito reales, con fotos y permiso: los cuatro **casos tipo** son plantilla y hay que sustituirlos.
- [ ] Trato principal: tú o usted (la web usa tú).
- [ ] Claim elegido (la web usa el propuesto).
- [ ] Año de la Cruz al Mérito y si ASPEJURE se presenta como colegio o como asociación.
- [ ] Permiso para citar los aeropuertos de Tenerife y La Gomera.
- [ ] Foto profesional de Roque para Quiénes somos (ahora hay un hueco reservado).
- [ ] Política de privacidad y aviso legal.
