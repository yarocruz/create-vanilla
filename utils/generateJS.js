function generateJS() {
    return `
const app = document.getElementById("app")
const message = document.createElement('h1')
message.textContent = 'Vanilla Basic!'
app.appendChild(message)
    `
}

module.exports = generateJS;