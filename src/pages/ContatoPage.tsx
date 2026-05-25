import { type FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import "./contato.css";

export function ContatoPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="page contato">
      <div className="page__inner contato__grid">
        <div>
          <p className="tag">Contato</p>
          <h1 className="page__title">Vamos conversar com calma e objetivo</h1>
          <p className="page__lead">
            Conte em poucas linhas o contexto, o prazo e o que você espera como resultado. Retornamos
            com próximos passos e, quando fizer sentido, agendamos uma reunião presencial na nossa
            sala na Rua Buenos Aires ou por videoconferência.
          </p>

          <ul className="contato__direct">
            <li>
              <span className="contato__icon" aria-hidden>
                <MapPin size={18} strokeWidth={1.75} />
              </span>
              <span>
                <strong>Endereço</strong>
                <br />
                Rua Buenos Aires, 10 - 4º andar, São Pedro, Belo Horizonte - MG
              </span>
            </li>
            <li>
              <span className="contato__icon" aria-hidden>
                <Phone size={18} strokeWidth={1.75} />
              </span>
              <span>
                <strong>Telefone</strong>
                <br />
                <a href="tel:+5531998400460">(31) 99840-0460</a>
              </span>
            </li>
            <li>
              <span className="contato__icon" aria-hidden>
                <Mail size={18} strokeWidth={1.75} />
              </span>
              <span>
                <strong>E-mail</strong>
                <br />
                <a className="contato__mail" href="mailto:recepcao@linkcomunicacao.com.br">
                  recepcao@linkcomunicacao.com.br
                </a>
              </span>
            </li>
          </ul>
        </div>

        <div className="contato__panel">
          {sent ? (
            <div className="contato__thanks" role="status">
              <h2>Mensagem recebida</h2>
              <p>
                Obrigada pelo contato. Em horário comercial, respondemos rapidamente — se for urgente,
                prefira o telefone ou o e-mail acima.
              </p>
            </div>
          ) : (
            <form className="contato__form" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="nome">Nome completo</label>
                <input id="nome" name="nome" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail profissional</label>
                <input id="email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="telefone">Telefone / WhatsApp</label>
                  <input id="telefone" name="telefone" autoComplete="tel" />
                </div>
                <div className="field">
                  <label htmlFor="empresa">Empresa / organização</label>
                  <input id="empresa" name="empresa" autoComplete="organization" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="mensagem">Em que podemos ajudar?</label>
                <textarea id="mensagem" name="mensagem" rows={5} required />
              </div>
              <button type="submit" className="button button--primary contato__submit">
                Enviar mensagem
              </button>
              <p className="contato__fineprint">
                Ao enviar, você concorda em ser respondido pelos canais informados. Este formulário é
                uma demonstração front-end — para produção, conecte a um endpoint ou serviço de e-mail
                transacional.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
