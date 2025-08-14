import { LitElement, html, css } from 'lit';
import { query } from 'lit/decorators.js';

export class EspeLogin extends LitElement {
  static styles = css`
    :host {
      display: block;
      --bg-left: #d94e42;
      --bg-right: #f5f5f5;
      --text-color: #222;
      --input-border: #008000;
      --button-bg: #fff;
      --button-border: #d94e42;
      --button-text: #d94e42;
    }

    @media (prefers-color-scheme: dark) {
      :host {
        --bg-right: #1e1e1e;
        --text-color: #f5f5f5;
        --button-bg: #333;
        --button-border: #f9be01;
        --button-text: #f9be01;
      }
    }

    .container {
      width: 800px;
      margin: 40px auto;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      display: flex;
      border-radius: 10px;
      overflow: hidden;
      background-color: white;
    }

    .left {
      flex: 1;
      background-color: var(--bg-left);
      color: white;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .left h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    .left p {
      font-size: 0.9rem;
      margin-bottom: 30px;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #5b2d2b;
      margin: 10px 0;
      padding: 10px;
      width: 100%;
      border-radius: 5px;
      color: white;
      font-size: 0.85rem;
      cursor: pointer;
    }

    .right {
      flex: 1;
      background-color: var(--bg-right);
      color: var(--text-color);
      padding: 40px 30px;
    }

    .right h3 {
      margin-bottom: 20px;
      font-size: 1.4rem;
    }

    .form-group {
      margin-bottom: 20px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-size: 0.9rem;
    }

    input[type="text"],
    input[type="password"] {
      width: 100%;
      padding: 8px;
      border: 2px solid var(--input-border);
      border-radius: 5px;
      font-size: 0.95rem;
    }

    button {
      padding: 10px 20px;
      background-color: var(--button-bg);
      border: 2px solid var(--button-border);
      color: var(--button-text);
      font-weight: bold;
      cursor: pointer;
      border-radius: 6px;
      transition: background 0.3s ease;
    }

    .footer {
      margin-top: 20px;
      font-size: 0.85rem;
    }

    .footer a {
      color: #006b53;
      text-decoration: none;
      font-weight: bold;
    }
  `;

@query('input[name="email"]') emailInput!: HTMLInputElement;
@query('input[name="password"]') passwordInput!: HTMLInputElement;

handleSubmit() {
  const email = this.emailInput.value.trim();
  const password = this.passwordInput.value.trim();

  if (!email || !password) {
    alert('Por favor, completa ambos campos.');
    return;
  }

  this.dispatchEvent(new CustomEvent('login-submit', {
    detail: { email, password },
    bubbles: true,
    composed: true
  }));
}

  render() {
    return html`
      <div class="container">
        <div class="left">
          <h1>E-COMMERCE</h1>
          <p>Bienvenido al mejor lugar para comprar por favor registrate o inicia sesion.</p>
          <div class="social-link">📸 http://doi.XXXX.XXX/</div>
          <div class="social-link">🏀 http://doi.XXXX.XXX/</div>
        </div>
        <div class="right">
          <h3>Login</h3>
          <div class="form-group">
            <label>Correo:</label>
            <input name="email" type="text" placeholder="Ingresa tu correo" />
          </div>
          <div class="form-group">
            <label>Contraseña:</label>
            <input name="password" type="password" placeholder="Ingresa tu contraseña" />
          </div>
          <button @click=${this.handleSubmit}>Ingresar</button>
          <div class="footer">¿No tienes cuenta? <a href="#">Regístrate</a></div>
        </div>
      </div>
    `;
  }
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registrado:', registration);
      })
      .catch((error) => {
        console.error('Error al registrar Service Worker:', error);
      });
  });
}

customElements.define('espe-login-card', EspeLogin);
