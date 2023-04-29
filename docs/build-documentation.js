const fs = require('fs-extra')
const asciidoctor = require('@asciidoctor/core')()
const kroki = require('asciidoctor-kroki')


async function execute() {
  await fs.emptyDir('./dist')
  await fs.mkdirs('./dist/assets')


  try {
    fs.copySync('./assets', './dist/assets', { overwrite: true })
  } catch (err) {
    console.error(err)
  }

  kroki.register(asciidoctor.Extensions) // <1>
  asciidoctor.convertFile('./index.adoc', {
    safe: 'unsafe',
    doctype: 'book',
    standalone: true,
    to_file: 'index.html',
    to_dir: 'dist',
    attributes: {
      "toc": 'left',
      "toclevels": 6,
      "source-highlighter": 'highlightjs',
    }
  })
}

execute()
