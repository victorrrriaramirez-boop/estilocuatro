# Clínica Almagro — narrativa de scroll

Proyecto Next.js multipágina, responsive y preparado para GitHub y Vercel. La portada emplea una narrativa editorial de scroll, composición sticky, indicador de progreso y transiciones respetuosas con `prefers-reduced-motion`.

Las fotografías se sirven desde `public/images` en la máxima resolución disponible en el documento de origen (hasta 1408 × 768 px, y 768 × 1376 px en el retrato vertical). No existe dependencia de Google Stitch.

## Comandos

```bash
npm install
npm run dev
npm run build
```

La exportación estática se genera en `out/`.

## Antes de publicar

- Configurar el dominio con `NEXT_PUBLIC_SITE_URL`.
- Confirmar identidad y colegiación de la doctora, dirección, teléfonos, WhatsApp y horarios.
- Confirmar servicios, beneficios comerciales, testimonios y casos clínicos.
- Verificar las autorizaciones de las imágenes y resultados clínicos.
- Completar los datos jurídicos reales.
- Conectar el formulario a correo, CRM o endpoint propio.
- Instalar un gestor de consentimiento antes de activar analítica no esencial.
