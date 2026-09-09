import { defineConfig } from 'vitepress'

export default defineConfig({
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      title: 'BASH Fundamentals',
      description: 'Bash Scripting manual and guide',
      themeConfig: {
        logo: '/icon_dark.svg',
        nav: [
          {
            text: 'Contents',
            items: [
              { text: 'Introduction to scripts', link: '/en/content/000-intro' },
              { text: 'Executing operations', link: '/en/content/020-operations' },
              { text: 'Operators', link: '/en/content/021-operators' },
              { text: 'Conditions evaluation', link: '/en/content/100-conditions-evaluation' },
              { text: 'User interaction', link: '/en/content/200-read-command' },
              { text: 'Decision', link: '/en/content/300-conditional-constructs' },
              { text: 'Loops', link: '/en/content/400-looping-constructs' },
              { text: 'Parameters', link: '/en/content/500-parameters' },
              { text: 'Functions', link: '/en/content/600-functions' }
            ]
          },
          { text: 'Solved exercises', link: '/en/solved-exercises/' },
          {
            text: 'Additional resources',
            items: [
              { text: 'GNU Bash Reference Manual', link: 'https://www.gnu.org/software/bash/manual/bash.html' }
            ]
          },
          { text: 'Back to BASH Home', link: 'https://bash-scripting-main-151a06.gitlab.io/' }
        ],
        sidebar: {
          '/': [
            {
              text: 'Contents',
              items: [
                { text: 'Introduction to scripts', link: '/en/content/000-intro' },
                { text: 'Executing operations', link: '/en/content/020-operations' },
                { text: 'Operators', link: '/en/content/021-operators' },
                { text: 'Conditions evaluation', link: '/en/content/100-conditions-evaluation' },
                { text: 'User interaction', link: '/en/content/200-read-command' },
                { text: 'Decision', link: '/en/content/300-conditional-constructs' },
                { text: 'Loops', link: '/en/content/400-looping-constructs' },
                { text: 'Parameters', link: '/en/content/500-parameters' },
                { text: 'Functions', link: '/en/content/600-functions' }
              ]
            },
            { text: 'Solved exercises', link: '/en/solved-exercises/' },
            {
              text: 'Additional resources',
              items: [
                { text: 'GNU Bash Reference Manual', link: 'https://www.gnu.org/software/bash/manual/bash.html' }
              ]
            },
            {
              text: 'Back to BASH Home',
              items: [
                { text: 'bash-scripting-main', link: 'https://bash-scripting-main-151a06.gitlab.io/' }
              ]
            }
          ]
        }
      }
    },
    es: {
      label: 'Español',
      lang: 'es',
      title: 'BASH Fundamentos',
      description: 'Manual y guía de Bash Scripting',
      themeConfig: {
        logo: '/icon_dark.svg',
        nav: [
          {
            text: 'Contenidos',
            items: [
              { text: 'Introducción a los scripts', link: '/es/content/000-intro' },
              { text: 'Ejecución de operaciones', link: '/es/content/020-operations' },
              { text: 'Operadores', link: '/es/content/021-operators' },
              { text: 'Evaluación de condiciones', link: '/es/content/100-conditions-evaluation' },
              { text: 'Interacción con usuarios', link: '/es/content/200-read-command' },
              { text: 'Decisión', link: '/es/content/300-conditional-constructs' },
              { text: 'Bucles', link: '/es/content/400-looping-constructs' },
              { text: 'Parámetros', link: '/es/content/500-parameters' },
              { text: 'Funciones', link: '/es/content/600-functions' }
            ]
          },
          { text: 'Ejercicios resueltos', link: '/es/solved-exercises/' },
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
                { text: 'Introducción a los scripts', link: '/es/content/000-intro' },
                { text: 'Ejecución de operaciones', link: '/es/content/020-operations' },
                { text: 'Operadores', link: '/es/content/021-operators' },
                { text: 'Evaluación de condiciones', link: '/es/content/100-conditions-evaluation' },
                { text: 'Interacción con usuarios', link: '/es/content/200-read-command' },
                { text: 'Decisión', link: '/es/content/300-conditional-constructs' },
                { text: 'Bucles', link: '/es/content/400-looping-constructs' },
                { text: 'Parámetros', link: '/es/content/500-parameters' },
                { text: 'Funciones', link: '/es/content/600-functions' }
              ]
            },
            { text: 'Ejercicios resueltos', link: '/es/solved-exercises/' },
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
    }
  },
  base: '/bash-docs/',
  themeConfig: {
    logo: '/icon_dark.svg'
  }
})
