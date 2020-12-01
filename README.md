# Dummy server
テストなどに使えるカスタマイズ可能な簡易サーバー

## Install
1. Install Node.js to your machine
1. Clone this repo
1. In your shell, `cd <repo path>`
1. In your shell, `cp config-example config -r`
1. In your shell, `npm i`
1. In your shell, `npm run build`
1. Enjoy

## Usage
configディレクトリ内のディレクトリは`env`と呼ばれ、その中にサーバーが返すHTMLやヘッダー定義などが含まれています。

サーバーを起動するときは、読み込むenv名とポートを指定します。例:
`node . default 5000`
