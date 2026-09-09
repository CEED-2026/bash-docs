import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "BASH Fundamentos",
  description: "Manual y guía de Bash Scripting",
  base: '/bash-docs/',
  themeConfig: {
    logo: '/icon_dark.svg',
    nav: [
      {
        text: 'Contenidos',
        items: [
          { text: 'Introducción a los scripts', link: '/content/000-intro' },
          { text: 'Ejecución de operaciones', link: '/content/020-operations' },
          { text: 'Operadores', link: '/content/021-operators' },
          { text: 'Evaluación de condiciones', link: '/content/100-conditions-evaluation' },
          { text: 'Interacción con usuarios', link: '/content/200-read-command' },
          { text: 'Decisión', link: '/content/300-conditional-constructs' },
          { text: 'Bucles', link: '/content/400-looping-constructs' },
          { text: 'Parámetros', link: '/content/500-parameters' },
          { text: 'Funciones', link: '/content/600-functions' }
        ]
      },
      { text: 'Ejercicios resueltos', link: '/solved-exercises/' },
      {
        text: 'Recursos adicionales',
        items: [
          { text: 'GNU Bash Reference Manual', link: 'https://www.gnu.org/software/bash/manual/bash.html' }
        ]
      },
      { text: 'Volver a BASH Home', link: 'https://bash-scripting-main-151a06.gitlab.io/' }
    ],
    sidebar: {
      '/': [
        {
          text: 'Contenidos',
          items: [
            { text: 'Introducción a los scripts', link: '/content/000-intro' },
            { text: 'Ejecución de operaciones', link: '/content/020-operations' },
            { text: 'Operadores', link: '/content/021-operators' },
            { text: 'Evaluación de condiciones', link: '/content/100-conditions-evaluation' },
            { text: 'Interacción con usuarios', link: '/content/200-read-command' },
            { text: 'Decisión', link: '/content/300-conditional-constructs' },
            { text: 'Bucles', link: '/content/400-looping-constructs' },
            { text: 'Parámetros', link: '/content/500-parameters' },
            { text: 'Funciones', link: '/content/600-functions' }
          ]
        },
        { text: 'Ejercicios resueltos', link: '/solved-exercises/' },
        {
          text: 'Recursos adicionales',
          items: [
            { text: 'GNU Bash Reference Manual', link: 'https://www.gnu.org/software/bash/manual/bash.html' }
          ]
        },
        {
          text: 'Volver a BASH Home',
          items: [
            { text: 'bash-scripting-main', link: 'https://bash-scripting-main-151a06.gitlab.io/' }
          ]
        }
      ]
    }
  }
})
